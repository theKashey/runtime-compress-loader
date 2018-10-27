'use strict';
const signatures = require('./signatures');
const {SourceNode, SourceMapConsumer} = require('source-map');

function transform(source, map) {
  if (this.cacheable) {
    this.cacheable();
  }

  const hasExports = source.indexOf('exports ');

  const newSource = signatures.reduce(
    (result, pair) => result.replace(pair[0], pair[hasExports ? 2 : 1] || 'ERROR_NO_REPLACE'),
    source
  );

  if (!this.sourceMap || !map) {
    return this.callback(null, newSource);
  }

  const node = new SourceNode(null, null, null, [
    SourceNode.fromStringWithSourceMap(newSource, new SourceMapConsumer(map)),
  ]).join('');

  const result = node.toStringWithSourceMap();
  return this.callback(null, result.code, result.map.toString());
}

module.exports = transform;
