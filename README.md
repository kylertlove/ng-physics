# Angular Statistics exportable lib

# Building Angular 4 service library
This project is an initial attempt at creating deployable libraries with using the angular CLI build process


### To create a library with CLI:
These are the steps to make a de

* build cli module as normal with all features added
* npm install ng-packagr --save
* create <strong>public_api.ts</strong> file in root(same dir as package.json). with `export * from './src/app/ng-physics/ng-physics.module';` added (or whatever module you are creating as a lib)
* create <strong>ng-package.json</strong>, also in root, with
```JSON
{
  "$schema": "./node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "public_api.ts"
  }
}
```
### To Package as lib:
add `"packagr": "ng-packagr -p ng-package.json"` to build scripts in package.json. <br>
 this creates a packed lib in /dist <br>
`cd dist` and run `npm pack` which creates a tarball in dist.
 <br>  That file is the npm install in any app.  
 `npm install --save /~location of .tgz file~/libName-0.0.0.tgz`
