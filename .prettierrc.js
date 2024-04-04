module.exports = {
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
  "printWidth": 80,
  "tabWidth": 4,
  "trailingComma": "all",
  "singleQuote": true,
  "bracketSpacing": true,
  "semi": true,
  "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
}