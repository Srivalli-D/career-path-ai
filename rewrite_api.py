import os

file_path = r'c:\Users\sriva\Desktop\Career Path AI\src\main.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

url = "https://nffegqfiliwfqxpbruop.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZmVncWZpbGl3ZnF4cGJydW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NzU2MDgsImV4cCI6MjA3NzU1MTYwOH0.syzRgQAB9YH6kvldAlfye1K-0fDjeCmrl-LgTPJ72l4"

content = content.replace('"' + url + '"', 'import.meta.env.VITE_SUPABASE_URL')
content = content.replace('"' + key + '"', 'import.meta.env.VITE_SUPABASE_ANON_KEY')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

env_path = r'c:\Users\sriva\Desktop\Career Path AI\.env'
with open(env_path, 'w', encoding='utf-8') as f:
    f.write(f'VITE_SUPABASE_URL="{url}"\n')
    f.write(f'VITE_SUPABASE_ANON_KEY="{key}"\n')

print("Replaced Supabase credentials and created .env")
