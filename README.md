# Gulp

I included Gulp script in this repo for ease of use. If you're not familiar with Gulp and don't know how to run it, please refer to [my guide](https://github.com/dmxt/bootstrap-scss-gulp-starter-kit/), chapter "For gulp beginners".

Gulp has the following tasks:
* BrowserSync (automatically refresh working files in browser on save)
* SASS/SCSS compiler (automatically compiles SCSS to CSS on save)
* Plumber (prevents gulp crash on SASS/SCSS error)
* Notify (SASS/SCSS compile error tray notification)
* CSS minifier (minifies main.min.css)

### How to run gulp

##### 1. CD to a directory 'gulp' containing `gulpfile.js`
##### 2. Install dependencies
```
npm install --save-dev
```

##### 3. Start compiling, serving, and watching files
```
gulp
or if you dont have gulp installed globally
node_modules/gulp/bin/gulp.js
```

# Docs

* `bootstrap-slider.js` need to be included in every html with player, for play progress module in a player.