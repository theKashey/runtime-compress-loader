# runtime-compress-loader
----
Removes the helpers, babel and typescript inlined to the every file

## What it does

Finds babel and typescript helpers and replaces them by code from `@babel/runtime` and `tslib` 

It's usually a __kilobyte__ in every file you have a class inside.

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

# Licence
MIT
