import os
import urllib.request

dist_dir = r"c:\Users\sriva\Desktop\Career Path AI\dist"
assets_dir = os.path.join(dist_dir, "assets")
os.makedirs(assets_dir, exist_ok=True)

def download(url, path):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(path, "wb") as f:
                f.write(response.read())
        print(f"Downloaded {url}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

download("https://preview--smart-spend-buddy-93748.lovable.app/assets/index-DjRqq4w6.css", os.path.join(assets_dir, "index-DjRqq4w6.css"))
download("https://preview--smart-spend-buddy-93748.lovable.app/assets/index-CleIW_kh.js", os.path.join(assets_dir, "index-CleIW_kh.js"))
download("https://preview--smart-spend-buddy-93748.lovable.app/CameraPlainVariable.woff2", os.path.join(dist_dir, "CameraPlainVariable.woff2"))

html = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Career Compass - AI-Powered Career Path Recommender</title>
    <script type="module" crossorigin src="/assets/index-CleIW_kh.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-DjRqq4w6.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>"""

with open(os.path.join(dist_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html)

print("Setup complete in dist folder.")
