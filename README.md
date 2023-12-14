# angular-17-app-template

### About
a basic Angular 17 starter template that includes TailwindCSS, Angular Material, ESLint, Prettier and Husky.

### Dependencies
- angular
- angular material

### Dev Dependencies
- typescript
- eslint
- tailwindcss
- postcss
- autoprefixer
- lint-staged
- husky

### Installation
1. Clone this repository
```bash
git clone 
```
2. Update remote to point to your own repository
```bash
git remote remove origin
git remote add origin <your github repo link>.git
git push
```
3. Udpate `package.json` to change the `name`, `description`, `version`, `keywords` etc. to whatever you want
4. Install project dependencies
```bash
npm install
```
5. Install recommended vscode extensions
    1. Angular Language Service
    2. ESLint
    3. PostCSS Language Support
    4. Prettier - Code Formatter
    5. Tailwind CSS IntelliSense
6. Consider configuring vscode to run prettier on file saved
    1. Open `settings.json`
    1. Add the following rules
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```
1. Start the development server
```bash
npm run start
```

### Lint
Lint and don't apply fixes
```bash
npm run lint
```

Lint and apply fixes where possible
```bash
npm lint:fix
```

### Format
Check for format errors:
```bash
npm run prettier:check
```

Format files:
```bash
npm run prettier:write
```

### Test
```bash
npm run test
```

### License
[MIT](https://github.com/JakeBisson8/angular-17-app-template/blob/main/LICENSE)  
[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)

