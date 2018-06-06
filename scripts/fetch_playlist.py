from urllib import request
from xml import sax
import sys
import logging
import re
import json
from os import path
from concurrent.futures import ThreadPoolExecutor, as_completed
import unittest

FAIRY_TAILS_LIST_URL = "https://deti-online.com/noindex/?l=audioskazki"
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("fetch_playlist")
logger.setLevel(logging.INFO)

class UrlExtractor(sax.ContentHandler):
    def __init__(self):
        self.links = []
    
    def startElement(self, name, attrs):
        if name == "a":
            self.links.append(attrs["href"])

def get_story_urls(list_url):
    """
    gets link to the page with table with story urls and
    extracts urls from that page
    returns: list of string urls
    """
    with request.urlopen(FAIRY_TAILS_LIST_URL, timeout=10) as list_response:
        url_extractor = UrlExtractor()
        html_content = list_response.read().decode("UTF-8")
        try:
            sax.parseString(html_content, url_extractor)
        except sax._exceptions.SAXParseException:
            pass
        return url_extractor.links

def _extract_mp3_meta(parsed_data):
    """
    Parsed data (string) example:
    duration:'19:07',file:'https://stat2.deti-online.com/a/ni7MU1HCGtsxB3PQlKmZqQ/1528559076/files/skazki/skazki-garshina/attalea-princeps.mp3',title:'Attalea princeps', free: true

    Should return a dictionary:
    {'duration': '19:07', 'latin_title': 'Attalea Princeps', 'orig_title': 'Attalea princeps', 'file': 'https://stat2.deti-online.com/a/ni7MU1HCGtsxB3PQlKmZqQ/1528559076/files/skazki/skazki-garshina/attalea-princeps.mp3', 'free': True}
    """
    tokens = parsed_data.split(',')
    extracted_data = {"duration": None, "title": None, "orig_title": None, "url": None, "free": False}
    for t in tokens:
        kv = [e.strip() for e in t.split(':')]
        k = kv[0]
        if k.startswith("duration"):
            extracted_data["duration"] = kv[1].strip("'") + ":" + kv[2].strip("'")
        elif k.startswith("file"):
            extracted_data["url"] = kv[1].strip("'") + ":" + kv[2].strip("'")
        elif k.startswith("title"):
            # durty hack, fix later, caused by "," char inside title
            start_pos = parsed_data.find("title:") + 6
            end_pos = parsed_data.find("'", start_pos + 1)
            extracted_data["orig_title"] = parsed_data[start_pos:end_pos].strip("'")
            # extracted_data["orig_title"] = kv[1].strip("'")  # commented out because of durty hack
        elif k.startswith("free"):
            if "true" in kv[1].lower():
                extracted_data["free"] = True
            else:
                extracted_data["free"] = False
        else:
            logger.debug("Some strange key found: %s on page: %s", k, parsed_data)
    mp3_filename = path.basename(extracted_data["url"]).strip(".mp3")
    latin_title = re.sub(r"[^\w]", ' ', mp3_filename)
    extracted_data["title"] = latin_title.title()
    return extracted_data

def get_mp3_link(story_url, re_mp3):
    with request.urlopen(story_url, timeout=5) as story_page:
        html_content = story_page.read().decode("UTF-8")
        search = re_mp3.search(html_content, re.MULTILINE)
        if search:
            parsed_data = search.group(1)
            return _extract_mp3_meta(parsed_data)
        else:
            return None

def main(argv):
    """
    Saves extracted data to json file provided as an argument:
    python3 fetch_playlist.py mp3.json

    Test running:
    python3 fetch_playlist.py TestDataExtraction
    """
    re_pattern = re.compile(r"playlist.push\({(.*)}\);")
    urls = get_story_urls(FAIRY_TAILS_LIST_URL)
    logger.info("Got %d urls...", len(urls))
    parsed_mp3_results = None
    with ThreadPoolExecutor() as pool:
        parsed_mp3_futures = [pool.submit(get_mp3_link, u, re_pattern) for u in urls]
        parsed_mp3_results = as_completed(parsed_mp3_futures, timeout=120)
    parsed_mp3_results = (r.result() for r in parsed_mp3_results)
    free_mp3s = [mp3 for mp3 in filter(lambda r: r and r["free"] == True, parsed_mp3_results)]
    for mp3 in free_mp3s:
        del mp3["free"]
    logger.info("Parsed %d free mp3 links", len(free_mp3s))
    if len(argv) > 1:
        with open(argv[1], 'w') as f:
            json.dump(free_mp3s, f, indent=2)
    else:
        print(free_mp3s)


class TestDataExtraction(unittest.TestCase):

    parsed_line = "duration:'1:40:20',file:'https://stat2.deti-online.com/a/wnJzLvo0LIjWf1PTbSo0YQ/1528541932/files/skazki/sbornik-skazok/chernaya-kurica.mp3',title:'Черная курица, или Подземные жители', free: true"

    def test_comma_in_title_and_duration_with_seconds(self):
        meta_data = _extract_mp3_meta(self.parsed_line)
        self.assertEqual(dict, type(meta_data))
        self.assertEqual(meta_data["duration"], "1:40")
        self.assertEqual(meta_data["orig_title"], "Черная курица, или Подземные жители")
    
    def test_url_extraction(self):
        meta_data = _extract_mp3_meta(self.parsed_line)
        self.assertEqual(dict, type(meta_data))
        self.assertEqual(meta_data["url"], "https://stat2.deti-online.com/a/wnJzLvo0LIjWf1PTbSo0YQ/1528541932/files/skazki/sbornik-skazok/chernaya-kurica.mp3")
    
    def test_title_extraction(self):
        meta_data = _extract_mp3_meta(self.parsed_line)
        self.assertEqual(dict, type(meta_data))
        self.assertEqual(meta_data["title"], "Chernaya Kurica")


if __name__ == "__main__":
    if "TestDataExtraction" not in sys.argv:
        main(sys.argv)
    else:
        unittest.main()

