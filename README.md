# zachkohldotcom
This is my personal, public facing website. 


Structure

--node_modules
|
|--dev
    |--sass
        |--style.scss
    |--javascript
        |--app.js
|
|--static
    |--style.css (compiled from dev/sass/style.scss)
    |--app.js (compiled from dev/javascript/app.js)
|
|--views
    |--layouts
        |--default.handlebars
    |
    |--home.handlebars
|
|--routes
    |--routes.js (all express routes go here, then reference controllers)
|
|--controllers (One controller file per feature/page)
    |--home.js 
|
|--models
    --working.sql
|
|--loaders
    --index.js (This is necessary for connecting all the little loaders. Loaders are little configuration files for setting up APIs, etc.)
    --expressSetup.js
    --postgreSetup.js
    --etc.
|
|--test (all testing framework stuff will go here)
|
|--index.js (app entry point)
|--gulpfile.js 
|--Procfile
|--package.json
|--package-lock.json
|--README.md;
|--.gitingore
|--lessonslearned.txt (notes not pushed to github)