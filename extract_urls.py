import re

with open(r'c:\Users\sriva\Desktop\Career Path AI\src\main.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

http_urls = re.findall(r'https?://[^\s"\'\`)]+', content)
print('HTTP URLs:')
for url in set(http_urls):
    if len(url) < 100:
        print(url)
