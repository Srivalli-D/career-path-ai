import re

with open(r'C:\Users\sriva\.gemini\antigravity\brain\caa18e64-ca5b-4da8-8cee-d62fb28a2a7c\.system_generated\steps\26\content.md', 'r', encoding='utf-8') as f:
    content = f.read()

root_match = re.search(r':root\{([^}]*)\}', content)
dark_match = re.search(r'\.dark\{([^}]*)\}', content)

out = '@import "tailwindcss";\n\n'
if root_match:
    out += ':root {\n  ' + root_match.group(1).replace(';', ';\n  ') + '\n}\n\n'
if dark_match:
    out += '.dark {\n  ' + dark_match.group(1).replace(';', ';\n  ') + '\n}\n'

out += '''
@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}
'''

with open(r'c:\Users\sriva\Desktop\Career Path AI\src\index.css', 'w', encoding='utf-8') as f:
    f.write(out)
print('Done!')
