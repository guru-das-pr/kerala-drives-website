/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json2mq";
exports.ids = ["vendor-chunks/json2mq"];
exports.modules = {

/***/ "(ssr)/./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ \"(ssr)/./node_modules/string-convert/camel2hyphen.js\");\n\nvar isDimension = function (feature) {\n  var re = /[height|width]$/;\n  return re.test(feature);\n};\n\nvar obj2mq = function (obj) {\n  var mq = '';\n  var features = Object.keys(obj);\n  features.forEach(function (feature, index) {\n    var value = obj[feature];\n    feature = camel2hyphen(feature);\n    // Add px to dimension features\n    if (isDimension(feature) && typeof value === 'number') {\n      value = value + 'px';\n    }\n    if (value === true) {\n      mq += feature;\n    } else if (value === false) {\n      mq += 'not ' + feature;\n    } else {\n      mq += '(' + feature + ': ' + value + ')';\n    }\n    if (index < features.length-1) {\n      mq += ' and '\n    }\n  });\n  return mq;\n};\n\nvar json2mq = function (query) {\n  var mq = '';\n  if (typeof query === 'string') {\n    return query;\n  }\n  // Handling array of media queries\n  if (query instanceof Array) {\n    query.forEach(function (q, index) {\n      mq += obj2mq(q);\n      if (index < query.length-1) {\n        mq += ', '\n      }\n    });\n    return mq;\n  }\n  // Handling single media query\n  return obj2mq(query);\n};\n\nmodule.exports = json2mq;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNvbjJtcS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsbUJBQU8sQ0FBQyx3RkFBNkI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXZlbG8vLi9ub2RlX21vZHVsZXMvanNvbjJtcS9pbmRleC5qcz9iNzRlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYW1lbDJoeXBoZW4gPSByZXF1aXJlKCdzdHJpbmctY29udmVydC9jYW1lbDJoeXBoZW4nKTtcblxudmFyIGlzRGltZW5zaW9uID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgdmFyIHJlID0gL1toZWlnaHR8d2lkdGhdJC87XG4gIHJldHVybiByZS50ZXN0KGZlYXR1cmUpO1xufTtcblxudmFyIG9iajJtcSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIG1xID0gJyc7XG4gIHZhciBmZWF0dXJlcyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlID0gb2JqW2ZlYXR1cmVdO1xuICAgIGZlYXR1cmUgPSBjYW1lbDJoeXBoZW4oZmVhdHVyZSk7XG4gICAgLy8gQWRkIHB4IHRvIGRpbWVuc2lvbiBmZWF0dXJlc1xuICAgIGlmIChpc0RpbWVuc2lvbihmZWF0dXJlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlICsgJ3B4JztcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICBtcSArPSBmZWF0dXJlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICBtcSArPSAnbm90ICcgKyBmZWF0dXJlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtcSArPSAnKCcgKyBmZWF0dXJlICsgJzogJyArIHZhbHVlICsgJyknO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCBmZWF0dXJlcy5sZW5ndGgtMSkge1xuICAgICAgbXEgKz0gJyBhbmQgJ1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtcTtcbn07XG5cbnZhciBqc29uMm1xID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gIHZhciBtcSA9ICcnO1xuICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuICAvLyBIYW5kbGluZyBhcnJheSBvZiBtZWRpYSBxdWVyaWVzXG4gIGlmIChxdWVyeSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiAocSwgaW5kZXgpIHtcbiAgICAgIG1xICs9IG9iajJtcShxKTtcbiAgICAgIGlmIChpbmRleCA8IHF1ZXJ5Lmxlbmd0aC0xKSB7XG4gICAgICAgIG1xICs9ICcsICdcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbXE7XG4gIH1cbiAgLy8gSGFuZGxpbmcgc2luZ2xlIG1lZGlhIHF1ZXJ5XG4gIHJldHVybiBvYmoybXEocXVlcnkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBqc29uMm1xOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/json2mq/index.js\n");

/***/ })

};
;