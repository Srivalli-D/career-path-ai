import urllib.request

url = "https://preview--smart-spend-buddy-93748.lovable.app/assets/index-CleIW_kh.js"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        js_content = response.read().decode('utf-8')
    with open(r"c:\Users\sriva\Desktop\Career Path AI\src\main.jsx", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Successfully downloaded to main.jsx")
except Exception as e:
    print("Error:", e)
