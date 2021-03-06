To add an implementation to a demo, here's what you need to know!

* The repo for this site is [here](https://github.com/krawaller/jscomp)
* The implementations for a demo are located in the `implementations` folder inside the `demo` folder
* In that, the demos are sorted in framework-specific folders
* Give your implementation folder a very short, descriptive name
* In the implementation folder, you need...
  * A `README.md` markdown file with...
    * YAML frontmatter defining
      * author: your github username
      * title: a very short list of techniques you've used. If there really is nothing to say, just say `"vanilla"`.
      * language: optional, defaults to `javascript`.
    * a descriptive text of what's going on in your solution
  * a `package.json` file containing your dependencies. Be sure to split build-step stuff into `devDependencies`. You must also define an `npm run build` script
  * a `bundle.js` generated by the build script
  * a `src` folder containing...
    * an optional `index.html` containing just the app template you need (*not* a full document). If not supplied, the app template will be a div with the id `app`.
    * a `bootstrap` file that is the entrypoint for the `bundle.js`, which initialises your app in the app template.
    * any other file specified by the demo in question.
    * an optional `extras` file for eventual helpers. This is the only non-specified file you may create!
* To regenerate the site after adding an implementation, navigate to the project root folder and run `npm run build`.
* All code should follow the [Javascript Standard Style](http://standardjs.com/).