# runtime-compress-loader
----
Removes the "inline" helpers, babel and typescript inlines to the every file, greatly reducing size of your application __before the gzip__, making it loads and runs faster.

## What it does

Finds babel and typescript helpers and replaces them by code from `@babel/runtime` and `tslib` 

It's usually a __kilobyte in every file__ you have a class inside. How many files you have? Well, you got the point.

So what it does? It replaces inlined `babel-helpers` by `imported` ones, keeping only one version of them.
Works as well for `rslib` helpers.
```diff
-var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
-function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
+import _extends from '@babel/runtime/helpers/esm/extends';
+import _createClass from '@babel/runtime/helpers/esm/createClass';
```

## Usage
Just add this webpack loader before any other for node_modules, and after any other for other locations. 

### For project files
```js
{
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['runtime-compress-loader', 'babel-loader'],  
}
```

### For node modules
```js
{
    test: /\.js$/,
    include: /node_modules/,
    loaders: ['runtime-compress-loader'],  
}
```

### For any location
```js
{
    test: /\.js$/,
    loaders: ['runtime-compress-loader', 'babel-loader', 'runtime-compress-loader'],  
}
``` 

## Other ways

- [babel-plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - and __the why__. User babel to do the job.
For project, not yet transpiled files only.

- [tslib](https://github.com/Microsoft/tslib) - `importHelpers` for typescript

- [jsx-compress-loader](https://github.com/theKashey/jsx-compress-loader) - almost the same "compressing" operation, but for React.createElement only.

# Licence
MIT
