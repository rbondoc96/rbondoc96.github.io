<h1 style="text-align: center">My Personal Website</h1>

A repository for my personal website, built with React.

<h2>Project Dependencies</h2>

This section lists all the dependencies that are used for this project and what they are used for, in case I ever forget 🙇🏽‍♂️

## npm Notes
Some notes on specifics regarding npm and its packages

### The `@` prefix
See 

The `@` prefix denotes a package as a "scoped package". This allows NPM packages to be namespaced. Every user and organization on npm has its own scope and they are the only people who can add packages to it.

This is useful for several reasons:
- Allows organizations to make it clear which packages are official and which ones are not.
    - For example, if a package has the scope `@angular`, you know it was published by the Angular team.
- The package name only has to be unique to the scope it is published in, not the entire registry.
    - For example, the package name `http` is already taken in the main registry, but Angular is able to have `@angular/http` as well.


## Enums in d.ts Files
See [Enums in Typescript](https://stackoverflow.com/questions/62109542/enums-in-typescript-d-ts-file)

Enums can't go into a `d.ts` file.

Enums have a compiled output, where as `.d.ts` such as interfaces do not!
* After transpilation, a `.d.ts` with only interfaces is compiled down to nothing/empty file


## Dev Dependencies
These are dependencies that aid in development and bundling the website for release.

<ol>
<li>
    <p>@babel/core</p>
    <ul>
        <li>Babel is a transcompiler. It's mainly used to convert ES6+ code into backwards compatible JavaScript that can be run by older JavaScript engines.</li>
        <li>This is the Babel core compiler.</li>
        <li>Babel doesn't do anything out of the box. Plugins actually do the work/heavy-lifting.</li>
        <li>Each plugin has its own NPM library, so for every plugin you want to install, a new NPM library must be installed.</li>
        <li>For example, @babel/plugin-transform-arrow-functions would be used to convert arrow functions to ES5.</li>
    </ul>        
</li>

```javascript
const hello = () => console.log("Hello world!")

// This gets transpiled to:
const hello = function() {
    return console.log("Hello world!");
}
```

<li>
        <p>@babel/preset-env</p>
        <ul>
            <li>Babel has created presets that contain common bundles of plugins</li>
            <li>`@babel/preset-env` is one of the official Babel presets.</li>
            <li>Out of the box, this allows transcompliation of ES6 features.</li>
            <li>By default, this installs *all* ES6 plugins you'll need.</li>
        </ul>        
</li>

<li>
        <p>@babel/preset-react</p>
        <ul>
            <li>Used to compile JSX components into ES5 compatible code.</li>
        </ul>        
</li>

<li>
        <p>@babel/plugin-transform-runtime</p>
        <ul>
            <li>Replaces the need to include `regenerator-runtime`</li>
        </ul>        
</li>
</ol>


* babel-plugin-module-resolver
    - Used to make imports easier through use of aliases
    - Make sure to do these things when configuring aliases:
        - (Webpack) Add alias to "resolve" property
        - (Babel) Add alias
        - (TypeScript) Add to paths in tsconfig.json
* babel-loader
    - Allows Webpack to facilitate the transpilation of JavaScript by using Babel
* clean-webpack-plugin
    - Removes/cleans Webpack build folders
    - Removes all files inside Webpack's `output.path` directory, as well as all unused Webpack assets after every successful rebuild.
* css-loader
    - Helps Webpack to collect CSS from all CSS files referenced in the application and put it into a `string`
* file-loader
    - Allows Webpack to bundle other file types (such as images, fonts, pdfs)
    - Adds support for these files 
* html-loader
* html-webpack-plugin
    - Genereates an HTML5 file that includes all Webpack bundles in the body using `<script>` tags
* mini-css-extract-plugin
* nodemon
* style-loader
    - Takes the output string from `css-loader` and puts it inside the `<style>` tags in the `index.html` file.
* url-loader
* webpack
* webpack-cli
* webpack-dev-server
* webpack-merge


## Project Dependencies
These are dependencies that are critical to making the website work as intended.

* autoprefixer
* gsap
    - Animation library
* history
* lodash
    - A library that contains various utility functions that I would otherwise have to implement myself 🤪
* postcss-loader
* precss
* react
* react-cookies
* react-dom
* react-router-dom
    - Adds support for multi-page web apps


## Webpack Loaders
Webpack by itself only knows JavaScript, so if we want Webpack to pack any other type of resource (i.e. .css, .scss, .ts), webpack needs help in order to compile and bundle those non-JavaScript types of resources

Loaders are node-based utilities built for Webpack to help Webpack to compile and/or transform a given type of resource that can be bundled as a JavaScript module.