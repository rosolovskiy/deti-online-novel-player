from urllib import request
from concurrent.futures import ThreadPoolExecutor, as_completed
import logging
import json
import sys
import os

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("download_mp3")
logger.setLevel(logging.INFO)
GLOBAL_TIMEOUT = 1200  # seconds


def extract_category_dir(file_url):
    """
      Gets: "https://stat1.deti-online.com/a/5HgJqh0R_x27KEmina_N-A/1535116616/files/skazki/skazki-lindgren/karlson-3-25.mp3"
      Must return: "skazki-lindgren"
    """
    return os.path.split(os.path.dirname(file_url))[1] 

def download_mp3_link(mp3_meta, save_path):
    file_url = mp3_meta["url"]
    file_referer = mp3_meta["referer"]

    headers = {
        "DNT": 1,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
        "Referer": file_referer
    }

    req =  request.Request(file_url, headers=headers)
    file_path = None
    with request.urlopen(req, timeout=60) as resp:
        category_dir = extract_category_dir(file_url) 
        os.makedirs(os.path.join(save_path, category_dir), mode=0o777, exist_ok=True)
        filename = os.path.basename(file_url)
        file_path = os.path.join(save_path, category_dir, filename)
        logging.debug("Fetching... %s", file_url)
        with open(file_path, "w+b") as f:
            f.write(resp.read())
            logging.info("Downloaded: %s", file_path)
    
    return {"location": file_path, "url": file_url}


def main(argv):
    """
    Reads provided playlist in json format and downloads
    all mp3 files to local path
    python3 download_mp3 mp3/
    """
    
    if len(argv) <= 1:
        logger.error("path to mpt3 playlist is missing")
        return 1

    save_path = None
    if len(argv) <= 2:
        logger.error("save path is missing")
        return 2
    else:
        save_path = argv[2]

    playlist = []
    with open(argv[1]) as f:
        playlist = json.load(f)
    logger.info("Got %d urls to download...", len(playlist))
    #playlist = playlist[0:2]  # for debug
    
    download_results = None
    with ThreadPoolExecutor() as pool:
        mp3_futures = [pool.submit(download_mp3_link, u, save_path) for u in playlist]
        download_results = as_completed(mp3_futures, timeout=GLOBAL_TIMEOUT)
    download_results = (r.result() for r in download_results)


if __name__ == "__main__":
    exit(main(sys.argv))
