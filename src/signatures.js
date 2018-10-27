module.exports = [
  [
    `var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };`,
    `import _extends from '@babel/runtime/helpers/esm/extends';`,
    `var _extends = require('@babel/runtime/helpers/esm/extends').default;`,
  ],
  [
    `function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }`,
    `import _extends from '@babel/runtime/helpers/esm/extends';`,
    `var _extends = require('@babel/runtime/helpers/esm/extends').default;`,
  ],
  [
    `var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};`,
    `import _extends from '@babel/runtime/helpers/esm/extends';`,
    `var _extends = require('@babel/runtime/helpers/esm/extends').default;`,
  ],
  [
    `function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }`,
    `import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';`,
    `var _objectSpread = require ('@babel/runtime/helpers/esm/objectSpread').default;`
  ],
  [
    `function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }`,
    `import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';`,
    `var _defineProperty = require('@babel/runtime/helpers/esm/defineProperty').default;`,
  ],
  [
    `var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();`,
    `import _createClass from '@babel/runtime/helpers/esm/createClass';`,
    `var _createClass = require ('@babel/runtime/helpers/esm/createClass').default;`,
  ],
  [
    `function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }`,
    `import _createClass from '@babel/runtime/helpers/esm/createClass';`,
    `var _createClass = require ('@babel/runtime/helpers/esm/createClass').default;`,
  ],
  [
    `/* skip */function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }`,
    `import _interopRequireDefault from '@babel/runtime/helpers/esm/interopRequireDefault';`,
    `var _interopRequireDefault = require('@babel/runtime/helpers/esm/interopRequireDefault').default;`,
  ],
  [
    `function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }`,
    `import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';`,
    `var _classCallCheck = require('@babel/runtime/helpers/esm/classCallCheck').default;`,
  ],
  [
    `function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }`,
    `import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';`,
    `var _possibleConstructorReturn = require('@babel/runtime/helpers/esm/possibleConstructorReturn').default;`,
  ],
  [
    `function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }`,
    `import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';`,
    `var _possibleConstructorReturn = require('@babel/runtime/helpers/esm/possibleConstructorReturn').default;`,
  ],
  [
    `function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }`,
    `import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';`,
    `var _getPrototypeOf = require('@babel/runtime/helpers/esm/getPrototypeOf').default;`,
  ],
  [
    `function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }`,
    `import _setPrototypeOf from '@babel/runtime/helpers/esm/setPrototypeOf';`,
    `var _setPrototypeOf = require('@babel/runtime/helpers/esm/setPrototypeOf').default;`,
  ],
  [
    `function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }`,
    `import _inherits from '@babel/runtime/helpers/esm/inherits';`,
    `var _inherits = require('@babel/runtime/helpers/esm/inherits').default;`,
  ],
  [
    `function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }`,
    `import _inherits from '@babel/runtime/helpers/esm/inherits';`,
    `var _inherits = require('@babel/runtime/helpers/esm/inherits').default;`,
  ],
  [
    `function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }`,
    `import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';`,
    `var _assertThisInitialized = require('@babel/runtime/helpers/esm/assertThisInitialized').default;`,
  ],
  [
    `function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }`,
    `import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';`,
    `var _objectWithoutProperties = require('@babel/runtime/helpers/esm/objectWithoutProperties').default;`,
  ],
  [
    `var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };`,
    `import _typeof from '@babel/runtime/helpers/esm/typeof';`,
    `var _typeof = require('@babel/runtime/helpers/esm/typeof').default;`,
  ],
  [
    `function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }`,
    `import _typeof from '@babel/runtime/helpers/esm/typeof';`,
    `var _typeof = require('@babel/runtime/helpers/esm/typeof').default;`,
  ],
  [
    `var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};`,
    `import _typeof from '@babel/runtime/helpers/esm/typeof';`,
    `var _typeof = require('@babel/runtime/helpers/esm/typeof').default;`,
  ],
  [
    `function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }`,
    `import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';`,
    `var _toConsumableArray = require('@babel/runtime/helpers/esm/toConsumableArray').default;`,
  ],
  [
    `var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};`,
    `import inherits from '@babel/runtime/helpers/esm/inherits';`,
    `var inherits = require('@babel/runtime/helpers/esm/inherits').default;`,
  ],
  [
    `var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};`,
    `import possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';`,
    `var possibleConstructorReturn = require('@babel/runtime/helpers/esm/possibleConstructorReturn').default;`,
  ],
  [
    `function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }`,
    `import _asyncToGenerator '@babel/runtime/helpers/esm/asyncToGenerator';`,
    `var _asyncToGenerator = require('@babel/runtime/helpers/esm/asyncToGenerator').default;`,
  ],


  /* TYPE SCRIPT */


  [
    `var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();`,
    `import {__extends} from 'tslib';`,
    `var __extends = require('tslib').__extends;`,
  ],
  [
    `var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();`,
    `import {__extends} from 'tslib';`,
    `var __extends = require('tslib').__extends;`,
  ],
  [
    `var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};`,
    `import {__assign} from 'tslib';`,
    `var __assign = require('tslib').__assign;`,
  ],
  [
    `var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};`,
    `import {__assign} from 'tslib';`,
    `var __assign = require('tslib').__assign;`,
  ],
  [
    `var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
`,
    `import {__rest} from 'tslib';`,
    `var __rest = require('tslib').__rest;`,
  ],
  [
    `var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};`,
    `import {__awaiter} from 'tslib`,
    `var __awaiter = require('tslib').__awaiter;`,
  ],
  [
    `var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};`,
    `import {__generator} from 'tslib';`,
    `var __generator = require('tslib').__generator;`,
  ],
];
