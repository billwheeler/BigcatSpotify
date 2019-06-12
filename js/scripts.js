(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.App = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

global.Debug = require("./utils/debug.js");
module.exports = {
  run: function run() {
    Debug.log("am big cat.");
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./utils/debug.js":2}],2:[function(require,module,exports){
"use strict";

module.exports = {
  assert: console ? console.assert.bind(console) : function () {},
  clear: console ? console.clear.bind(console) : function () {},
  error: console ? console.error.bind(console) : function () {},
  group: console ? console.group.bind(console) : function () {},
  groupCollapsed: console ? console.groupCollapsed.bind(console) : function () {},
  groupEnd: console ? console.groupEnd.bind(console) : function () {},
  info: console ? console.info.bind(console) : function () {},
  log: console ? console.log.bind(console) : function () {},
  trace: console ? console.trace.bind(console) : function () {},
  warn: console ? console.warn.bind(console) : function () {}
};

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9zcmMvbWFpbi5qcyIsImpzL3NyYy91dGlscy9kZWJ1Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQzs7QUFFRCxNQUFNLENBQUMsS0FBUCxHQUFlLE9BQU8sQ0FBQyxrQkFBRCxDQUF0QjtBQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0FBQ2IsRUFBQSxHQUFHLEVBQUUsZUFBTTtBQUNQLElBQUEsS0FBSyxDQUFDLEdBQU4sQ0FBVSxhQUFWO0FBQ0g7QUFIWSxDQUFqQjs7Ozs7QUNKQzs7QUFFRCxNQUFNLENBQUMsT0FBUCxHQUFpQjtBQUNiLEVBQUEsTUFBTSxFQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBUixDQUFlLElBQWYsQ0FBb0IsT0FBcEIsQ0FBSCxHQUFrQyxZQUFZLENBQUcsQ0FEbkQ7QUFFYixFQUFBLEtBQUssRUFBRSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQVIsQ0FBYyxJQUFkLENBQW1CLE9BQW5CLENBQUgsR0FBaUMsWUFBWSxDQUFHLENBRmpEO0FBR2IsRUFBQSxLQUFLLEVBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFSLENBQWMsSUFBZCxDQUFtQixPQUFuQixDQUFILEdBQWlDLFlBQVksQ0FBRyxDQUhqRDtBQUliLEVBQUEsS0FBSyxFQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBUixDQUFjLElBQWQsQ0FBbUIsT0FBbkIsQ0FBSCxHQUFpQyxZQUFZLENBQUcsQ0FKakQ7QUFLYixFQUFBLGNBQWMsRUFBRSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQVIsQ0FBdUIsSUFBdkIsQ0FBNEIsT0FBNUIsQ0FBSCxHQUEwQyxZQUFZLENBQUcsQ0FMbkU7QUFNYixFQUFBLFFBQVEsRUFBRSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsSUFBakIsQ0FBc0IsT0FBdEIsQ0FBSCxHQUFvQyxZQUFZLENBQUcsQ0FOdkQ7QUFPYixFQUFBLElBQUksRUFBRSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQWtCLE9BQWxCLENBQUgsR0FBZ0MsWUFBWSxDQUFHLENBUC9DO0FBUWIsRUFBQSxHQUFHLEVBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWixDQUFpQixPQUFqQixDQUFILEdBQStCLFlBQVksQ0FBRyxDQVI3QztBQVNiLEVBQUEsS0FBSyxFQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBUixDQUFjLElBQWQsQ0FBbUIsT0FBbkIsQ0FBSCxHQUFpQyxZQUFZLENBQUcsQ0FUakQ7QUFVYixFQUFBLElBQUksRUFBRSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQWtCLE9BQWxCLENBQUgsR0FBZ0MsWUFBWSxDQUFHO0FBVi9DLENBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwi77u/XCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmdsb2JhbC5EZWJ1ZyA9IHJlcXVpcmUoXCIuL3V0aWxzL2RlYnVnLmpzXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBydW46ICgpID0+IHtcclxuICAgICAgICBEZWJ1Zy5sb2coXCJhbSBiaWcgY2F0LlwiKVxyXG4gICAgfVxyXG59Iiwi77u/XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGFzc2VydDogY29uc29sZSA/IGNvbnNvbGUuYXNzZXJ0LmJpbmQoY29uc29sZSkgOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICBjbGVhcjogY29uc29sZSA/IGNvbnNvbGUuY2xlYXIuYmluZChjb25zb2xlKSA6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgIGVycm9yOiBjb25zb2xlID8gY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpIDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgZ3JvdXA6IGNvbnNvbGUgPyBjb25zb2xlLmdyb3VwLmJpbmQoY29uc29sZSkgOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICBncm91cENvbGxhcHNlZDogY29uc29sZSA/IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQuYmluZChjb25zb2xlKSA6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgIGdyb3VwRW5kOiBjb25zb2xlID8gY29uc29sZS5ncm91cEVuZC5iaW5kKGNvbnNvbGUpIDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgaW5mbzogY29uc29sZSA/IGNvbnNvbGUuaW5mby5iaW5kKGNvbnNvbGUpIDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgbG9nOiBjb25zb2xlID8gY29uc29sZS5sb2cuYmluZChjb25zb2xlKSA6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgIHRyYWNlOiBjb25zb2xlID8gY29uc29sZS50cmFjZS5iaW5kKGNvbnNvbGUpIDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgd2FybjogY29uc29sZSA/IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpIDogZnVuY3Rpb24gKCkgeyB9LFxyXG59OyJdfQ==
