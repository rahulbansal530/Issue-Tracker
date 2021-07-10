// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../mock.json":[function(require,module,exports) {
module.exports = {
  "todo": [{
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "High Priority"
  }, {
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "High Priority"
  }, {
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "Low Priority"
  }, {
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "High Priority"
  }, {
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "Low Priority"
  }],
  "in_progress": [{
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "In Progress"
  }, {
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "In Progress"
  }],
  "done": [{
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "Done"
  }, {
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "Done"
  }, {
    "id": "PCG83642",
    "date": "January 02, 2019",
    "heading": "Lorem ipsum dolor sit",
    "description": "Lorem ipsum dolor slit amet, conctetur adipiscing elit. Ut ut gravida dolor. Phasellus vitae sem.",
    "designation": "Assignee",
    "name": "Sijo M Peter",
    "profile": "UI/UX Designer",
    "status": "Done"
  }]
};
},{}],"../src/app.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true; // For fetching json file and storing it in mock 
// import mock from "/New folder/Ps/huv19.0-html-css-final-assignment-master/mock.json";

var mock_json_1 = require("../mock.json"); // fetch value from HTML's id and store in container
//here they will fetch null value


var todoCont = document.getElementById("app1");
var inProgressCont = document.getElementById("app2");
var doneCont = document.getElementById("app3"); // number is datatype

var fetchData = function fetchData(todo, inprogress, done, con1, con2, con3) {
  for (var i = 0; i < todo; i++) {
    var user = {
      id: mock_json_1.todo[i].id,
      date: mock_json_1.todo[i].date,
      heading: mock_json_1.todo[i].heading,
      description: mock_json_1.todo[i].description,
      designation: mock_json_1.todo[i].designation,
      name: mock_json_1.todo[i].name,
      profile: mock_json_1.todo[i].profile,
      status: mock_json_1.todo[i].status
    };
    showUser(user, con1);
  }

  for (var i = 0; i < inprogress; i++) {
    var user = {
      id: mock_json_1.in_progress[i].id,
      date: mock_json_1.in_progress[i].date,
      heading: mock_json_1.in_progress[i].heading,
      description: mock_json_1.in_progress[i].description,
      designation: mock_json_1.in_progress[i].designation,
      name: mock_json_1.in_progress[i].name,
      profile: mock_json_1.in_progress[i].profile,
      status: mock_json_1.in_progress[i].status
    };
    showUser(user, con2);
  }

  for (var i = 0; i < done; i++) {
    var user = {
      id: mock_json_1.done[i].id,
      date: mock_json_1.done[i].date,
      heading: mock_json_1.done[i].heading,
      description: mock_json_1.done[i].description,
      designation: mock_json_1.done[i].designation,
      name: mock_json_1.done[i].name,
      profile: mock_json_1.done[i].profile,
      status: mock_json_1.done[i].status
    };
    showUser(user, con3);
  }
}; // Calling show user function


var showUser = function showUser(user, con) {
  //According to priority colour changer
  var color = "color-red";
  if (user.status == "In Progress") color = "color-yellow";else if (user.status == "Done") color = "color-green";else if (user.status == "Low Priority") color = "color-orange"; // Card Layout

  var output = "\n        <div class=\"card\" >\n            <div class=id-date>\n            <p class=\"card-id\">ID: " + user.id + "</p> \n            <p class=\"card-date\"> " + user.date + "</p> \n            </div>\n            <p class=\"card-heading\">" + user.heading + "</p>\n            <p class=\"card-detail\">" + user.description + "</p>\n            <div class=\"assign-status\">\n              <div class=\"assign\">" + user.designation + "</div>\n              <div class=\"status\">Status</div>\n            </div>\n            <div class=\"query-type\">\n              <div class=\"card-image\">\n              &nbsp; " + user.name + "\n              <div class=\"card-profile\">" + user.profile + "</div>\n              </div>\n            <div class=" + color + ">" + user.status + "</div>\n\n            </div>\n        </div>\n        <div id=\"card\">\n                            <div id=card-id-and-date>\n                                <a id=\"id\">" + user.id + "</a>\n                                <a id=\"date\">" + user.date + "</a>\n                            </div>\n                            <div id=\"issue-name\">\n                                <a>" + user.heading + "</a>\n                            </div>\n                            <div id=\"card-content\">\n                                <a>" + user.description + "</a>\n                            </div>\n                            <div id=card-assignee-and-status>\n                                <a id=\"asignee\">Assignee</a>\n                                <a id=\"status\">Status</a>\n                            </div>\n                            <div id=\"card-profile-and-status\">\n                                <div id=\"profile\">\n                                    <a><img src=\"../images/user_1.svg\"></a>\n                                    <div id=\"card-name-and-designation\">\n                                        <a>" + user.name + "r</a>\n                                        <a>" + user.profile + "</a>\n                                    </div>\n                                </div>\n                                <a id=\"priority\">\n                                " + user.status + "\n                                </a>\n                            </div>\n                        </div>\n    ";
  con.innerHTML += output;
}; // First call here 


fetchData(mock_json_1.todo.length, mock_json_1.in_progress.length, mock_json_1.done.length, todoCont, inProgressCont, doneCont);
},{"../mock.json":"../mock.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60351" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/app.js"], null)
//# sourceMappingURL=/app.581aa3f0.js.map