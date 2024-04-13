# development mode
npx browser-sync start --server --files "./*.html" "./*.css" --no-open --no-notify --directory

# Tailwind CSS
npx tailwindcss -i ./src/jonnycarroll.css -o ./jonnycarroll.css --watch