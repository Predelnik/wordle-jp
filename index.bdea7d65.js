// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ctVSn":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _wanakana = require("wanakana");
const codeStart = 12353;
const codeEnd = 12439;
const letterTableElement = getElem('letter-table');
const guessesTableElement = getElem('guesses-table');
const textInputElement = getElem('text-input');
const checkButtonElement = getElem('check-button');
const giveUpButtonElement = getElem('give-up-button');
const restartButtonElement = getElem('restart-button');
const statusDivElement = getElem('status-div');
const guessDivElement = getElem('guess-span');
const wordsSet = new Set(require('../resources/dict.json'));
let guesses = [];
let SymbolStatus;
(function(SymbolStatus1) {
    SymbolStatus1[SymbolStatus1["Unknown"] = 0] = "Unknown";
    SymbolStatus1[SymbolStatus1["Missing"] = 1] = "Missing";
    SymbolStatus1[SymbolStatus1["Present"] = 2] = "Present";
    SymbolStatus1[SymbolStatus1["Placed"] = 3] = "Placed";
})(SymbolStatus || (SymbolStatus = {
}));
let symbolStatus = {
};
function generateRandomWord() {
    const words = Array.from(wordsSet);
    return words[Math.floor(Math.random() * words.length)];
}
let secretWord = '';
function throwExpression(errorMessage) {
    throw new Error(errorMessage);
}
function getElem(name) {
    return document.querySelector(`#${name}`) || throwExpression(`#${name} not found`);
}
function isSmall(c) {
    return c == 'っ' || c == 'ゃ' || c == 'ゅ' || c == 'ょ';
}
const conv = [
    [
        'っ',
        'つ'
    ],
    [
        'ゃ',
        'や'
    ],
    [
        'ゅ',
        'ゆ'
    ],
    [
        'ょ',
        'よ'
    ]
];
function toLarge(c) {
    for (const p of conv){
        if (c == p[1]) return p[0];
    }
    return c;
}
function toSmall(c) {
    for (const p of conv){
        if (c == p[0]) return p[1];
    }
    return c;
}
function isExcluded(c) {
    return c == 'ゐ' || c == 'ゑ' || c == 'ゔ' || c == 'ぁ' || c == 'ぃ' || c == 'ぅ' || c == 'ぇ' || c == 'ぉ' || c == 'ゎ';
}
const letterCount = 4;
const rowCount = 6;
guessDivElement.innerText = 'Guess ' + letterCount + '-character word:';
function statusToClassName(status) {
    switch(status){
        case SymbolStatus.Missing:
            return 'cell-missing';
        case SymbolStatus.Placed:
            return 'cell-placed';
        case SymbolStatus.Present:
            return 'cell-present';
        case SymbolStatus.Unknown:
        default:
            return 'cell-unknown';
    }
}
function addSymbolElement(rowElement, symbol) {
    const cellElement = rowElement.insertCell();
    cellElement.classList.add('kana-cell');
    cellElement.classList.add(statusToClassName(symbolStatus[toLarge(symbol)]));
    if (textInputElement.value.search(symbol) != -1) cellElement.classList.add('cell-highlight');
    cellElement.innerText = symbol;
    cellElement.addEventListener('click', function() {
        if (textInputElement.disabled) return;
        textInputElement.value += symbol;
        onInputChange();
        textInputElement.focus();
    });
}
function fillTableRow(rowElement, rowNum) {
    if (rowNum == rowCount - 1) return fillLastRow(rowElement);
    let num = 0;
    let arr = [
        'a',
        'i',
        'u',
        'e',
        'o'
    ];
    for(let code = codeStart; code < codeEnd; ++code){
        const symbol = String.fromCharCode(code);
        if (isExcluded(symbol)) continue;
        const romaji = _wanakana.toRomaji(symbol);
        let lastRomaji = romaji[romaji.length - 1];
        if (lastRomaji == arr[rowNum] && romaji[0] != 'w' && romaji[0] != 'y') addSymbolElement(rowElement, symbol);
        ++num;
    }
}
function fillLastRow(rowElement) {
    for (const symbol of [
        'や',
        'ゆ',
        'よ',
        'わ',
        'ん',
        'を',
        'っ',
        'ゃ',
        'ゅ',
        'ょ',
        'ー'
    ])addSymbolElement(rowElement, symbol);
    addBackSpace(rowElement);
    addEnter(rowElement);
    return;
}
function addBackSpace(rowElement) {
    const cellElement = rowElement.insertCell();
    cellElement.innerText = '⌫';
    cellElement.addEventListener('click', function() {
        if (textInputElement.disabled) return;
        textInputElement.value = textInputElement.value.slice(0, -1);
        onInputChange();
    });
}
function addEnter(rowElement) {
    const cellElement = rowElement.insertCell();
    cellElement.innerText = '⏎';
    cellElement.addEventListener('click', function() {
        if (checkButtonElement.disabled) return;
        doCheck();
    });
}
function refillLetterTable() {
    letterTableElement.innerHTML = '';
    for(let rowNum = 0; rowNum < rowCount; ++rowNum){
        const rowElement = letterTableElement.insertRow();
        fillTableRow(rowElement, rowNum);
    }
}
function raiseStatus(symbol, newStatus) {
    const curStatus = symbolStatus[toLarge(symbol)];
    if (curStatus == undefined || curStatus < newStatus) symbolStatus[toLarge(symbol)] = newStatus;
}
function getStatus(pos, symbol) {
    if (toLarge(secretWord[pos]) == toLarge(symbol)) return SymbolStatus.Placed;
    if (secretWord.search(toSmall(symbol)) != -1 || secretWord.search(toLarge(symbol)) != -1) return SymbolStatus.Present;
    return SymbolStatus.Missing;
}
function parseLastGuess() {
    const lastGuess = guesses[guesses.length - 1];
    for(let i = 0; i < lastGuess.length; ++i){
        const symbol = lastGuess[i];
        raiseStatus(symbol, getStatus(i, symbol));
    }
}
function refillGuessesTable() {
    guessesTableElement.innerHTML = '';
    for(let i = 0; i < guesses.length; ++i){
        const rowElement = guessesTableElement.insertRow();
        for(let j = 0; j < guesses[i].length; ++j){
            const symbol = guesses[i][j];
            const status = getStatus(j, symbol);
            const cellElement = rowElement.insertCell();
            cellElement.classList.add(statusToClassName(status));
            cellElement.innerText = symbol;
        }
    }
}
function setGameEnabled(enabled) {
    textInputElement.disabled = !enabled;
    checkButtonElement.disabled = !enabled;
    giveUpButtonElement.disabled = !enabled;
}
function doCheck() {
    statusDivElement.textContent = '';
    const value = textInputElement.value;
    if (value.length != letterCount) {
        statusDivElement.textContent = 'Expected number of characters is ' + letterCount.toString();
        return;
    }
    if (!wordsSet.has(value)) {
        textInputElement.value = '';
        refillLetterTable();
        statusDivElement.textContent = 'Word not found in dictionary';
        return;
    }
    guesses.push(value);
    parseLastGuess();
    if (value == secretWord) {
        statusDivElement.textContent = 'Victory (in ' + guesses.length.toString() + ' guesses)!';
        setGameEnabled(false);
    } else textInputElement.value = '';
    refillGuessesTable();
    refillLetterTable();
    textInputElement.focus();
}
function doGiveUp() {
    setGameEnabled(false);
    statusDivElement.innerHTML = 'Loss... Correct word was <a target="_blank" href=https://jisho.org/search/"' + secretWord + '">' + secretWord + '</a>';
}
function doRestart() {
    setGameEnabled(true);
    textInputElement.value = '';
    statusDivElement.innerHTML = '';
    secretWord = generateRandomWord();
    guesses = [];
    symbolStatus = {
    };
    refillGuessesTable();
    refillLetterTable();
    textInputElement.focus();
}
function onInputChange() {
    statusDivElement.innerText = '';
    refillLetterTable();
}
checkButtonElement.addEventListener('click', doCheck);
giveUpButtonElement.addEventListener('click', doGiveUp);
restartButtonElement.addEventListener('click', doRestart);
textInputElement.addEventListener("keyup", ({ key  })=>{
    if (key === "Enter") doCheck();
    else onInputChange();
});
refillLetterTable();
_wanakana.bind(textInputElement);
doRestart();

},{"wanakana":"flBsk","../resources/dict.json":"ltht9"}],"flBsk":[function(require,module,exports) {
var global = arguments[3];
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e(t.wanakana = {
    });
}(this, function(t1) {
    "use strict";
    var e1 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
    };
    function n1(t, e) {
        return t(e = {
            exports: {
            }
        }, e.exports), e.exports;
    }
    var r1 = n1(function(t) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e);
    }), o1 = Object.freeze({
        default: r1,
        __moduleExports: r1
    }), i1 = n1(function(t) {
        var e = t.exports = {
            version: "2.5.5"
        };
        "number" == typeof __e && (__e = e);
    }), u1 = Object.freeze({
        default: i1,
        __moduleExports: i1,
        version: i1.version
    }), a1 = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
    }, c1 = Object.freeze({
        default: a1,
        __moduleExports: a1
    }), f1 = c1 && a1 || c1, s1 = function(t) {
        if (!f1(t)) throw TypeError(t + " is not an object!");
        return t;
    }, l1 = Object.freeze({
        default: s1,
        __moduleExports: s1
    }), h1 = function(t) {
        try {
            return !!t();
        } catch (t2) {
            return !0;
        }
    }, d1 = Object.freeze({
        default: h1,
        __moduleExports: h1
    }), v1 = d1 && h1 || d1, p1 = !v1(function() {
        return 7 != Object.defineProperty({
        }, "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), y1 = Object.freeze({
        default: p1,
        __moduleExports: p1
    }), g1 = o1 && r1 || o1, _1 = g1.document, m1 = f1(_1) && f1(_1.createElement), b1 = function(t) {
        return m1 ? _1.createElement(t) : {
        };
    }, E1 = Object.freeze({
        default: b1,
        __moduleExports: b1
    }), O1 = y1 && p1 || y1, j1 = E1 && b1 || E1, w1 = !O1 && !v1(function() {
        return 7 != Object.defineProperty(j1("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), x1 = Object.freeze({
        default: w1,
        __moduleExports: w1
    }), S1 = function(t, e) {
        if (!f1(t)) return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !f1(r = n.call(t))) return r;
        if ("function" == typeof (n = t.valueOf) && !f1(r = n.call(t))) return r;
        if (!e && "function" == typeof (n = t.toString) && !f1(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value");
    }, A1 = Object.freeze({
        default: S1,
        __moduleExports: S1
    }), M1 = l1 && s1 || l1, z1 = x1 && w1 || x1, N1 = A1 && S1 || A1, P1 = Object.defineProperty, k1 = O1 ? Object.defineProperty : function(t, e, n) {
        if (M1(t), e = N1(e, !0), M1(n), z1) try {
            return P1(t, e, n);
        } catch (t3) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t;
    }, L1 = {
        f: k1
    }, F1 = Object.freeze({
        default: L1,
        __moduleExports: L1,
        f: k1
    }), I1 = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        };
    }, R1 = Object.freeze({
        default: I1,
        __moduleExports: I1
    }), T = F1 && L1 || F1, C1 = R1 && I1 || R1, W1 = O1 ? function(t, e, n) {
        return T.f(t, e, C1(1, n));
    } : function(t, e, n) {
        return t[e] = n, t;
    }, U1 = Object.freeze({
        default: W1,
        __moduleExports: W1
    }), K1 = {
    }.hasOwnProperty, B1 = function(t, e) {
        return K1.call(t, e);
    }, D1 = Object.freeze({
        default: B1,
        __moduleExports: B1
    }), V1 = 0, G1 = Math.random(), J1 = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++V1 + G1).toString(36));
    }, H1 = Object.freeze({
        default: J1,
        __moduleExports: J1
    }), Y = U1 && W1 || U1, q = D1 && B1 || D1, X = H1 && J1 || H1, $1 = u1 && i1 || u1, Q1 = n1(function(t4) {
        var e = X("src"), n2 = Function.toString, r = ("" + n2).split("toString");
        $1.inspectSource = function(t) {
            return n2.call(t);
        }, (t4.exports = function(t, n, o, i) {
            var u = "function" == typeof o;
            u && (q(o, "name") || Y(o, "name", n)), t[n] !== o && (u && (q(o, e) || Y(o, e, t[n] ? "" + t[n] : r.join(n + ""))), t === g1 ? t[n] = o : i ? t[n] ? t[n] = o : Y(t, n, o) : (delete t[n], Y(t, n, o)));
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[e] || n2.call(this);
        });
    }), Z1 = Object.freeze({
        default: Q1,
        __moduleExports: Q1
    }), tt1 = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
    }, et1 = Object.freeze({
        default: tt1,
        __moduleExports: tt1
    }), nt1 = et1 && tt1 || et1, rt1 = function(t, e, n3) {
        if (nt1(t), void 0 === e) return t;
        switch(n3){
            case 1:
                return function(n) {
                    return t.call(e, n);
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r);
                };
            case 3:
                return function(n, r, o) {
                    return t.call(e, n, r, o);
                };
        }
        return function() {
            return t.apply(e, arguments);
        };
    }, ot1 = Object.freeze({
        default: rt1,
        __moduleExports: rt1
    }), it1 = Z1 && Q1 || Z1, ut = ot1 && rt1 || ot1, at1 = function(t, e, n) {
        var r, o, i, u, a = t & at1.F, c = t & at1.G, f = t & at1.P, s = t & at1.B, l = c ? g1 : t & at1.S ? g1[e] || (g1[e] = {
        }) : (g1[e] || {
        }).prototype, h = c ? $1 : $1[e] || ($1[e] = {
        }), d = h.prototype || (h.prototype = {
        });
        for(r in c && (n = e), n)i = ((o = !a && l && void 0 !== l[r]) ? l : n)[r], u = s && o ? ut(i, g1) : f && "function" == typeof i ? ut(Function.call, i) : i, l && it1(l, r, i, t & at1.U), h[r] != i && Y(h, r, u), f && d[r] != i && (d[r] = i);
    };
    g1.core = $1, at1.F = 1, at1.G = 2, at1.S = 4, at1.P = 8, at1.B = 16, at1.W = 32, at1.U = 64, at1.R = 128;
    for(var ct1, ft1 = at1, st1 = Object.freeze({
        default: ft1,
        __moduleExports: ft1
    }), lt1 = X("typed_array"), ht1 = X("view"), dt1 = !(!g1.ArrayBuffer || !g1.DataView), vt1 = dt1, pt1 = 0, yt1 = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); 9 > pt1;)(ct1 = g1[yt1[pt1++]]) ? (Y(ct1.prototype, lt1, !0), Y(ct1.prototype, ht1, !0)) : vt1 = !1;
    var gt1 = {
        ABV: dt1,
        CONSTR: vt1,
        TYPED: lt1,
        VIEW: ht1
    }, _t1 = Object.freeze({
        default: gt1,
        __moduleExports: gt1,
        ABV: gt1.ABV,
        CONSTR: gt1.CONSTR,
        TYPED: gt1.TYPED,
        VIEW: gt1.VIEW
    }), mt1 = Object.freeze({
        default: !1,
        __moduleExports: !1
    }), bt1 = function(t, e, n) {
        for(var r in e)it1(t, r, e[r], n);
        return t;
    }, Et1 = Object.freeze({
        default: bt1,
        __moduleExports: bt1
    }), Ot1 = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t;
    }, jt1 = Object.freeze({
        default: Ot1,
        __moduleExports: Ot1
    }), wt1 = Math.ceil, xt1 = Math.floor, St1 = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? xt1 : wt1)(t);
    }, At1 = Object.freeze({
        default: St1,
        __moduleExports: St1
    }), Mt = At1 && St1 || At1, zt1 = Math.min, Nt1 = function(t) {
        return t > 0 ? zt1(Mt(t), 9007199254740991) : 0;
    }, Pt1 = Object.freeze({
        default: Nt1,
        __moduleExports: Nt1
    }), kt = Pt1 && Nt1 || Pt1, Lt1 = function(t) {
        if (void 0 === t) return 0;
        var e = Mt(t), n = kt(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n;
    }, Ft1 = Object.freeze({
        default: Lt1,
        __moduleExports: Lt1
    }), It1 = {
    }.toString, Rt1 = function(t) {
        return It1.call(t).slice(8, -1);
    }, Tt1 = Object.freeze({
        default: Rt1,
        __moduleExports: Rt1
    }), Ct1 = Tt1 && Rt1 || Tt1, Wt1 = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == Ct1(t) ? t.split("") : Object(t);
    }, Ut1 = Object.freeze({
        default: Wt1,
        __moduleExports: Wt1
    }), Kt1 = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
    }, Bt1 = Object.freeze({
        default: Kt1,
        __moduleExports: Kt1
    }), Dt1 = Ut1 && Wt1 || Ut1, Vt1 = Bt1 && Kt1 || Bt1, Gt1 = function(t) {
        return Dt1(Vt1(t));
    }, Jt1 = Object.freeze({
        default: Gt1,
        __moduleExports: Gt1
    }), Ht1 = Math.max, Yt1 = Math.min, qt1 = function(t, e) {
        return 0 > (t = Mt(t)) ? Ht1(t + e, 0) : Yt1(t, e);
    }, Xt1 = Object.freeze({
        default: qt1,
        __moduleExports: qt1
    }), $t1 = Jt1 && Gt1 || Jt1, Qt = Xt1 && qt1 || Xt1, Zt = function(t) {
        return function(e, n, r) {
            var o, i = $t1(e), u = kt(i.length), a = Qt(r, u);
            if (t && n != n) {
                for(; u > a;)if ((o = i[a++]) != o) return !0;
            } else for(; u > a; a++)if ((t || a in i) && i[a] === n) return t || a || 0;
            return !t && -1;
        };
    }, te = Object.freeze({
        default: Zt,
        __moduleExports: Zt
    }), ee = g1["__core-js_shared__"] || (g1["__core-js_shared__"] = {
    }), ne = function(t) {
        return ee[t] || (ee[t] = {
        });
    }, re = Object.freeze({
        default: ne,
        __moduleExports: ne
    }), oe = re && ne || re, ie = oe("keys"), ue = function(t) {
        return ie[t] || (ie[t] = X(t));
    }, ae = Object.freeze({
        default: ue,
        __moduleExports: ue
    }), ce = te && Zt || te, fe = ae && ue || ae, se = ce(!1), le = fe("IE_PROTO"), he = function(t, e) {
        var n, r = $t1(t), o = 0, i = [];
        for(n in r)n != le && q(r, n) && i.push(n);
        for(; e.length > o;)q(r, n = e[o++]) && (~se(i, n) || i.push(n));
        return i;
    }, de = Object.freeze({
        default: he,
        __moduleExports: he
    }), ve = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), pe = Object.freeze({
        default: ve,
        __moduleExports: ve
    }), ye = de && he || de, ge = pe && ve || pe, _e = ge.concat("length", "prototype"), me = Object.getOwnPropertyNames || function(t) {
        return ye(t, _e);
    }, be = {
        f: me
    }, Ee = Object.freeze({
        default: be,
        __moduleExports: be,
        f: me
    }), Oe = function(t) {
        return Object(Vt1(t));
    }, je = Object.freeze({
        default: Oe,
        __moduleExports: Oe
    }), we = je && Oe || je, xe = function(t) {
        for(var e = we(this), n = kt(e.length), r = arguments.length, o = Qt(r > 1 ? arguments[1] : void 0, n), i = r > 2 ? arguments[2] : void 0, u = void 0 === i ? n : Qt(i, n); u > o;)e[o++] = t;
        return e;
    }, Se = Object.freeze({
        default: xe,
        __moduleExports: xe
    }), Ae = n1(function(t5) {
        var e = oe("wks"), n = g1.Symbol, r = "function" == typeof n;
        (t5.exports = function(t) {
            return e[t] || (e[t] = r && n[t] || (r ? n : X)("Symbol." + t));
        }).store = e;
    }), Me = Object.freeze({
        default: Ae,
        __moduleExports: Ae
    }), ze = Me && Ae || Me, Ne = T.f, Pe = ze("toStringTag"), ke = function(t, e, n) {
        t && !q(t = n ? t : t.prototype, Pe) && Ne(t, Pe, {
            configurable: !0,
            value: e
        });
    }, Le = Object.freeze({
        default: ke,
        __moduleExports: ke
    }), Fe = mt1, Ie = _t1 && gt1 || _t1, Re = Et1 && bt1 || Et1, Te = jt1 && Ot1 || jt1, Ce = Ft1 && Lt1 || Ft1, We = Ee && be || Ee, Ue = Se && xe || Se, Ke = Le && ke || Le, Be = n1(function(t6, e2) {
        var n4 = We.f, r2 = T.f, o2 = "prototype", i2 = "Wrong index!", u2 = g1.ArrayBuffer, a2 = g1.DataView, c2 = g1.Math, f2 = g1.RangeError, s = g1.Infinity, l2 = u2, h2 = c2.abs, d = c2.pow, p = c2.floor, y = c2.log, _ = c2.LN2, m = O1 ? "_b" : "buffer", b = O1 ? "_l" : "byteLength", E = O1 ? "_o" : "byteOffset";
        function j(t, e, n) {
            var r, o, i, u = Array(n), a = 8 * n - e - 1, c = (1 << a) - 1, f = c >> 1, l = 23 === e ? d(2, -24) - d(2, -77) : 0, v = 0, g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
            for((t = h2(t)) != t || t === s ? (o = t != t ? 1 : 0, r = c) : (r = p(y(t) / _), 1 > t * (i = d(2, -r)) && (r--, i *= 2), 2 > (t += 1 > r + f ? l * d(2, 1 - f) : l / i) * i || (r++, i /= 2), c > r + f ? 1 > r + f ? (o = t * d(2, f - 1) * d(2, e), r = 0) : (o = (t * i - 1) * d(2, e), r += f) : (o = 0, r = c)); e >= 8; u[v++] = 255 & o, o /= 256, e -= 8);
            for(r = r << e | o, a += e; a > 0; u[v++] = 255 & r, r /= 256, a -= 8);
            return u[--v] |= 128 * g, u;
        }
        function w(t, e, n) {
            var r, o = 8 * n - e - 1, i = (1 << o) - 1, u = i >> 1, a = o - 7, c = n - 1, f = t[c--], l = 127 & f;
            for(f >>= 7; a > 0; l = 256 * l + t[c], c--, a -= 8);
            for(r = l & (1 << -a) - 1, l >>= -a, a += e; a > 0; r = 256 * r + t[c], c--, a -= 8);
            if (0 === l) l = 1 - u;
            else {
                if (l === i) return r ? NaN : f ? -s : s;
                r += d(2, e), l -= u;
            }
            return (f ? -1 : 1) * r * d(2, l - e);
        }
        function x(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
        }
        function S(t) {
            return [
                255 & t
            ];
        }
        function A(t) {
            return [
                255 & t,
                t >> 8 & 255
            ];
        }
        function M(t) {
            return [
                255 & t,
                t >> 8 & 255,
                t >> 16 & 255,
                t >> 24 & 255
            ];
        }
        function z(t) {
            return j(t, 52, 8);
        }
        function N(t) {
            return j(t, 23, 4);
        }
        function P(t, e, n) {
            r2(t[o2], e, {
                get: function() {
                    return this[n];
                }
            });
        }
        function k(t, e, n, r) {
            var o = Ce(+n);
            if (o + e > t[b]) throw f2(i2);
            var u = o + t[E], a = t[m]._b.slice(u, u + e);
            return r ? a : a.reverse();
        }
        function L(t, e, n, r, o, u) {
            var a = Ce(+n);
            if (a + e > t[b]) throw f2(i2);
            for(var c = t[m]._b, s = a + t[E], l = r(+o), h = 0; e > h; h++)c[s + h] = l[u ? h : e - h - 1];
        }
        if (Ie.ABV) {
            if (!v1(function() {
                u2(1);
            }) || !v1(function() {
                new u2(-1);
            }) || v1(function() {
                return new u2, new u2(1.5), new u2(NaN), "ArrayBuffer" != u2.name;
            })) {
                for(var F, I = (u2 = function(t) {
                    return Te(this, u2), new l2(Ce(t));
                })[o2] = l2[o2], R = n4(l2), C = 0; R.length > C;)(F = R[C++]) in u2 || Y(u2, F, l2[F]);
                Fe || (I.constructor = u2);
            }
            var W = new a2(new u2(2)), U = a2[o2].setInt8;
            W.setInt8(0, 2147483648), W.setInt8(1, 2147483649), !W.getInt8(0) && W.getInt8(1) || Re(a2[o2], {
                setInt8: function(t, e) {
                    U.call(this, t, e << 24 >> 24);
                },
                setUint8: function(t, e) {
                    U.call(this, t, e << 24 >> 24);
                }
            }, !0);
        } else u2 = function(t) {
            Te(this, u2, "ArrayBuffer");
            var e = Ce(t);
            this._b = Ue.call(Array(e), 0), this[b] = e;
        }, a2 = function(t, e, n) {
            Te(this, a2, "DataView"), Te(t, u2, "DataView");
            var r = t[b], o = Mt(e);
            if (0 > o || o > r) throw f2("Wrong offset!");
            if (o + (n = void 0 === n ? r - o : kt(n)) > r) throw f2("Wrong length!");
            this[m] = t, this[E] = o, this[b] = n;
        }, O1 && (P(u2, "byteLength", "_l"), P(a2, "buffer", "_b"), P(a2, "byteLength", "_l"), P(a2, "byteOffset", "_o")), Re(a2[o2], {
            getInt8: function(t) {
                return k(this, 1, t)[0] << 24 >> 24;
            },
            getUint8: function(t) {
                return k(this, 1, t)[0];
            },
            getInt16: function(t) {
                var e = k(this, 2, t, arguments[1]);
                return (e[1] << 8 | e[0]) << 16 >> 16;
            },
            getUint16: function(t) {
                var e = k(this, 2, t, arguments[1]);
                return e[1] << 8 | e[0];
            },
            getInt32: function(t) {
                return x(k(this, 4, t, arguments[1]));
            },
            getUint32: function(t) {
                return x(k(this, 4, t, arguments[1])) >>> 0;
            },
            getFloat32: function(t) {
                return w(k(this, 4, t, arguments[1]), 23, 4);
            },
            getFloat64: function(t) {
                return w(k(this, 8, t, arguments[1]), 52, 8);
            },
            setInt8: function(t, e) {
                L(this, 1, t, S, e);
            },
            setUint8: function(t, e) {
                L(this, 1, t, S, e);
            },
            setInt16: function(t, e) {
                L(this, 2, t, A, e, arguments[2]);
            },
            setUint16: function(t, e) {
                L(this, 2, t, A, e, arguments[2]);
            },
            setInt32: function(t, e) {
                L(this, 4, t, M, e, arguments[2]);
            },
            setUint32: function(t, e) {
                L(this, 4, t, M, e, arguments[2]);
            },
            setFloat32: function(t, e) {
                L(this, 4, t, N, e, arguments[2]);
            },
            setFloat64: function(t, e) {
                L(this, 8, t, z, e, arguments[2]);
            }
        });
        Ke(u2, "ArrayBuffer"), Ke(a2, "DataView"), Y(a2[o2], Ie.VIEW, !0), e2.ArrayBuffer = u2, e2.DataView = a2;
    }), De = Object.freeze({
        default: Be,
        __moduleExports: Be
    }), Ve = ze("species"), Ge = function(t, e) {
        var n, r = M1(t).constructor;
        return void 0 === r || void 0 == (n = M1(r)[Ve]) ? e : nt1(n);
    }, Je = Object.freeze({
        default: Ge,
        __moduleExports: Ge
    }), He = ze("species"), Ye = function(t) {
        var e = g1[t];
        O1 && e && !e[He] && T.f(e, He, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    }, qe = Object.freeze({
        default: Ye,
        __moduleExports: Ye
    }), Xe = st1 && ft1 || st1, $e = De && Be || De, Qe = Je && Ge || Je, Ze = qe && Ye || qe, tn = g1.ArrayBuffer, en = $e.ArrayBuffer, nn = $e.DataView, rn = Ie.ABV && tn.isView, on = en.prototype.slice, un = Ie.VIEW;
    Xe(Xe.G + Xe.W + Xe.F * (tn !== en), {
        ArrayBuffer: en
    }), Xe(Xe.S + Xe.F * !Ie.CONSTR, "ArrayBuffer", {
        isView: function(t) {
            return rn && rn(t) || f1(t) && un in t;
        }
    }), Xe(Xe.P + Xe.U + Xe.F * v1(function() {
        return !new en(2).slice(1, void 0).byteLength;
    }), "ArrayBuffer", {
        slice: function(t, e) {
            if (void 0 !== on && void 0 === e) return on.call(M1(this), t);
            for(var n = M1(this).byteLength, r = Qt(t, n), o = Qt(void 0 === e ? n : e, n), i = new (Qe(this, en))(kt(o - r)), u = new nn(this), a = new nn(i), c = 0; o > r;)a.setUint8(c++, u.getUint8(r++));
            return i;
        }
    }), Ze("ArrayBuffer");
    var an = ze("toStringTag"), cn = "Arguments" == Ct1(function() {
        return arguments;
    }()), fn = function(t7) {
        var e, n, r;
        return void 0 === t7 ? "Undefined" : null === t7 ? "Null" : "string" == typeof (n = function(t, e) {
            try {
                return t[e];
            } catch (t8) {
            }
        }(e = Object(t7), an)) ? n : cn ? Ct1(e) : "Object" == (r = Ct1(e)) && "function" == typeof e.callee ? "Arguments" : r;
    }, sn = Object.freeze({
        default: fn,
        __moduleExports: fn
    }), ln = {
    }, hn = Object.freeze({
        default: ln,
        __moduleExports: ln
    }), dn = hn && ln || hn, vn = ze("iterator"), pn = Array.prototype, yn = function(t) {
        return void 0 !== t && (dn.Array === t || pn[vn] === t);
    }, gn = Object.freeze({
        default: yn,
        __moduleExports: yn
    }), _n = Object.keys || function(t) {
        return ye(t, ge);
    }, mn = Object.freeze({
        default: _n,
        __moduleExports: _n
    }), bn = mn && _n || mn, En = O1 ? Object.defineProperties : function(t, e) {
        M1(t);
        for(var n, r = bn(e), o = r.length, i = 0; o > i;)T.f(t, n = r[i++], e[n]);
        return t;
    }, On = Object.freeze({
        default: En,
        __moduleExports: En
    }), jn = g1.document, wn = jn && jn.documentElement, xn = Object.freeze({
        default: wn,
        __moduleExports: wn
    }), Sn = On && En || On, An = xn && wn || xn, Mn = fe("IE_PROTO"), zn = function() {
    }, Nn = function() {
        var t, e = j1("iframe"), n = ge.length;
        for(e.style.display = "none", An.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Nn = t.F; n--;)delete Nn.prototype[ge[n]];
        return Nn();
    }, Pn = Object.create || function(t, e) {
        var n;
        return null !== t ? (zn.prototype = M1(t), n = new zn, zn.prototype = null, n[Mn] = t) : n = Nn(), void 0 === e ? n : Sn(n, e);
    }, kn = Object.freeze({
        default: Pn,
        __moduleExports: Pn
    }), Ln = fe("IE_PROTO"), Fn = Object.prototype, In = Object.getPrototypeOf || function(t) {
        return t = we(t), q(t, Ln) ? t[Ln] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Fn : null;
    }, Rn = Object.freeze({
        default: In,
        __moduleExports: In
    }), Tn = sn && fn || sn, Cn = ze("iterator"), Wn = $1.getIteratorMethod = function(t) {
        if (void 0 != t) return t[Cn] || t["@@iterator"] || dn[Tn(t)];
    }, Un = Object.freeze({
        default: Wn,
        __moduleExports: Wn
    }), Kn = Array.isArray || function(t) {
        return "Array" == Ct1(t);
    }, Bn = Object.freeze({
        default: Kn,
        __moduleExports: Kn
    }), Dn = Bn && Kn || Bn, Vn = ze("species"), Gn = function(t) {
        var e;
        return Dn(t) && ("function" != typeof (e = t.constructor) || e !== Array && !Dn(e.prototype) || (e = void 0), f1(e) && null === (e = e[Vn]) && (e = void 0)), void 0 === e ? Array : e;
    }, Jn = Object.freeze({
        default: Gn,
        __moduleExports: Gn
    }), Hn = Jn && Gn || Jn, Yn = function(t, e) {
        return new (Hn(t))(e);
    }, qn = Object.freeze({
        default: Yn,
        __moduleExports: Yn
    }), Xn = qn && Yn || qn, $n = function(t, e3) {
        var n = 1 == t, r = 2 == t, o = 3 == t, i = 4 == t, u = 6 == t, a = 5 == t || u, c = e3 || Xn;
        return function(e, f, s) {
            for(var l, h, d = we(e), v = Dt1(d), p = ut(f, s, 3), y = kt(v.length), g = 0, _ = n ? c(e, y) : r ? c(e, 0) : void 0; y > g; g++)if ((a || g in v) && (h = p(l = v[g], g, d), t)) {
                if (n) _[g] = h;
                else if (h) switch(t){
                    case 3:
                        return !0;
                    case 5:
                        return l;
                    case 6:
                        return g;
                    case 2:
                        _.push(l);
                }
                else if (i) return !1;
            }
            return u ? -1 : o || i ? i : _;
        };
    }, Qn = Object.freeze({
        default: $n,
        __moduleExports: $n
    }), Zn = ze("unscopables"), tr = Array.prototype;
    void 0 == tr[Zn] && Y(tr, Zn, {
    });
    var er = function(t) {
        tr[Zn][t] = !0;
    }, nr = Object.freeze({
        default: er,
        __moduleExports: er
    }), rr = function(t, e) {
        return {
            value: e,
            done: !!t
        };
    }, or = Object.freeze({
        default: rr,
        __moduleExports: rr
    }), ir = kn && Pn || kn, ur = {
    };
    Y(ur, ze("iterator"), function() {
        return this;
    });
    var ar = function(t, e, n) {
        t.prototype = ir(ur, {
            next: C1(1, n)
        }), Ke(t, e + " Iterator");
    }, cr = Object.freeze({
        default: ar,
        __moduleExports: ar
    }), fr = cr && ar || cr, sr = Rn && In || Rn, lr = ze("iterator"), hr = !([].keys && "next" in [].keys()), dr = function() {
        return this;
    }, vr = function(t9, e, n, r, o, i, u) {
        fr(n, e, r);
        var a, c, f, s = function(t) {
            if (!hr && t in v) return v[t];
            switch(t){
                case "keys":
                case "values":
                    return function() {
                        return new n(this, t);
                    };
            }
            return function() {
                return new n(this, t);
            };
        }, l = e + " Iterator", h = "values" == o, d = !1, v = t9.prototype, p = v[lr] || v["@@iterator"] || o && v[o], y = p || s(o), g = o ? h ? s("entries") : y : void 0, _ = "Array" == e && v.entries || p;
        if (_ && (f = sr(_.call(new t9))) !== Object.prototype && f.next && (Ke(f, l, !0), Fe || "function" == typeof f[lr] || Y(f, lr, dr)), h && p && "values" !== p.name && (d = !0, y = function() {
            return p.call(this);
        }), Fe && !u || !hr && !d && v[lr] || Y(v, lr, y), dn[e] = y, dn[l] = dr, o) {
            if (a = {
                values: h ? y : s("values"),
                keys: i ? y : s("keys"),
                entries: g
            }, u) for(c in a)c in v || it1(v, c, a[c]);
            else Xe(Xe.P + Xe.F * (hr || d), e, a);
        }
        return a;
    }, pr = Object.freeze({
        default: vr,
        __moduleExports: vr
    }), yr = nr && er || nr, gr = or && rr || or, _r = pr && vr || pr, mr = _r(Array, "Array", function(t, e) {
        this._t = $t1(t), this._i = 0, this._k = e;
    }, function() {
        var t = this._t, e = this._k, n = this._i++;
        return t && t.length > n ? gr(0, "keys" == e ? n : "values" == e ? t[n] : [
            n,
            t[n]
        ]) : (this._t = void 0, gr(1));
    }, "values");
    dn.Arguments = dn.Array, yr("keys"), yr("values"), yr("entries");
    var br = ze("iterator"), Er = !1;
    try {
        [
            7
        ][br]().return = function() {
            Er = !0;
        };
    } catch (t10) {
    }
    var Or = function(t, e) {
        if (!e && !Er) return !1;
        var n = !1;
        try {
            var r = [
                7
            ], o = r[br]();
            o.next = function() {
                return {
                    done: n = !0
                };
            }, r[br] = function() {
                return o;
            }, t(r);
        } catch (t11) {
        }
        return n;
    }, jr = Object.freeze({
        default: Or,
        __moduleExports: Or
    }), wr = [].copyWithin || function(t, e) {
        var n = we(this), r = kt(n.length), o = Qt(t, r), i = Qt(e, r), u = arguments.length > 2 ? arguments[2] : void 0, a = Math.min((void 0 === u ? r : Qt(u, r)) - i, r - o), c = 1;
        for(o > i && i + a > o && (c = -1, i += a - 1, o += a - 1); a-- > 0;)i in n ? n[o] = n[i] : delete n[o], o += c, i += c;
        return n;
    }, xr = Object.freeze({
        default: wr,
        __moduleExports: wr
    }), Sr = {
    }.propertyIsEnumerable, Ar = {
        f: Sr
    }, Mr = Object.freeze({
        default: Ar,
        __moduleExports: Ar,
        f: Sr
    }), zr = Mr && Ar || Mr, Nr = Object.getOwnPropertyDescriptor, Pr = O1 ? Nr : function(t, e) {
        if (t = $t1(t), e = N1(e, !0), z1) try {
            return Nr(t, e);
        } catch (t12) {
        }
        if (q(t, e)) return C1(!zr.f.call(t, e), t[e]);
    }, kr = {
        f: Pr
    }, Lr = Object.freeze({
        default: kr,
        __moduleExports: kr,
        f: Pr
    }), Fr = gn && yn || gn, Ir = Un && Wn || Un, Rr = Qn && $n || Qn, Tr = jr && Or || jr, Cr = xr && wr || xr, Wr = Lr && kr || Lr, Ur = n1(function(t13) {
        if (O1) {
            var e4 = Fe, n5 = g1, r3 = v1, o3 = Xe, i3 = Ie, u3 = ut, a3 = Te, c3 = C1, s2 = Y, l3 = Re, h3 = Mt, d = kt, p = Ce, y2 = Qt, _2 = N1, m2 = q, b = Tn, E = f1, j2 = we, w2 = Fr, x = ir, S = sr, A = We.f, M2 = Ir, z2 = X, P = ze, k = Rr, L = ce, F = Qe, I = mr, R = dn, W = Tr, U = Ze, K = Ue, B = Cr, D = T, V = Wr, G = D.f, J = V.f, H = n5.RangeError, $ = n5.TypeError, Q = n5.Uint8Array, Z = Array.prototype, tt = $e.ArrayBuffer, et = $e.DataView, nt = k(0), rt = k(2), ot = k(3), it = k(4), at = k(5), ct = k(6), ft = L(!0), st = L(!1), lt = I.values, ht = I.keys, dt = I.entries, vt = Z.lastIndexOf, pt = Z.reduce, yt = Z.reduceRight, gt = Z.join, _t = Z.sort, mt = Z.slice, bt = Z.toString, Et = Z.toLocaleString, Ot = P("iterator"), jt = P("toStringTag"), wt = z2("typed_constructor"), xt = z2("def_constructor"), St = i3.CONSTR, At = i3.TYPED, zt = i3.VIEW, Nt = k(1, function(t, e) {
                return Rt(F(t, t[xt]), e);
            }), Pt = r3(function() {
                return 1 === new Q(new Uint16Array([
                    1
                ]).buffer)[0];
            }), Lt = !!Q && !!Q.prototype.set && r3(function() {
                new Q(1).set({
                });
            }), Ft = function(t, e) {
                var n = h3(t);
                if (0 > n || n % e) throw H("Wrong offset!");
                return n;
            }, It = function(t) {
                if (E(t) && At in t) return t;
                throw $(t + " is not a typed array!");
            }, Rt = function(t, e) {
                if (!(E(t) && wt in t)) throw $("It is not a typed array constructor!");
                return new t(e);
            }, Tt = function(t, e) {
                return Ct(F(t, t[xt]), e);
            }, Ct = function(t, e) {
                for(var n = 0, r = e.length, o = Rt(t, r); r > n;)o[n] = e[n++];
                return o;
            }, Wt = function(t, e, n) {
                G(t, e, {
                    get: function() {
                        return this._d[n];
                    }
                });
            }, Ut = function(t) {
                var e, n, r, o, i, a, c = j2(t), f = arguments.length, s = f > 1 ? arguments[1] : void 0, l = void 0 !== s, h = M2(c);
                if (void 0 != h && !w2(h)) {
                    for(a = h.call(c), r = [], e = 0; !(i = a.next()).done; e++)r.push(i.value);
                    c = r;
                }
                for(l && f > 2 && (s = u3(s, arguments[2], 2)), e = 0, n = d(c.length), o = Rt(this, n); n > e; e++)o[e] = l ? s(c[e], e) : c[e];
                return o;
            }, Kt = function() {
                for(var t = 0, e = arguments.length, n = Rt(this, e); e > t;)n[t] = arguments[t++];
                return n;
            }, Bt = !!Q && r3(function() {
                Et.call(new Q(1));
            }), Dt = function() {
                return Et.apply(Bt ? mt.call(It(this)) : It(this), arguments);
            }, Vt = {
                copyWithin: function(t, e) {
                    return B.call(It(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
                },
                every: function(t) {
                    return it(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                fill: function(t) {
                    return K.apply(It(this), arguments);
                },
                filter: function(t) {
                    return Tt(this, rt(It(this), t, arguments.length > 1 ? arguments[1] : void 0));
                },
                find: function(t) {
                    return at(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                findIndex: function(t) {
                    return ct(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                forEach: function(t) {
                    nt(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                indexOf: function(t) {
                    return st(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                includes: function(t) {
                    return ft(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                join: function(t) {
                    return gt.apply(It(this), arguments);
                },
                lastIndexOf: function(t) {
                    return vt.apply(It(this), arguments);
                },
                map: function(t) {
                    return Nt(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                reduce: function(t) {
                    return pt.apply(It(this), arguments);
                },
                reduceRight: function(t) {
                    return yt.apply(It(this), arguments);
                },
                reverse: function() {
                    for(var t, e = It(this).length, n = Math.floor(e / 2), r = 0; n > r;)t = this[r], this[r++] = this[--e], this[e] = t;
                    return this;
                },
                some: function(t) {
                    return ot(It(this), t, arguments.length > 1 ? arguments[1] : void 0);
                },
                sort: function(t) {
                    return _t.call(It(this), t);
                },
                subarray: function(t, e) {
                    var n = It(this), r = n.length, o = y2(t, r);
                    return new (F(n, n[xt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, d((void 0 === e ? r : y2(e, r)) - o));
                }
            }, Gt = function(t, e) {
                return Tt(this, mt.call(It(this), t, e));
            }, Jt = function(t) {
                It(this);
                var e = Ft(arguments[1], 1), n = this.length, r = j2(t), o = d(r.length), i = 0;
                if (o + e > n) throw H("Wrong length!");
                for(; o > i;)this[e + i] = r[i++];
            }, Ht = {
                entries: function() {
                    return dt.call(It(this));
                },
                keys: function() {
                    return ht.call(It(this));
                },
                values: function() {
                    return lt.call(It(this));
                }
            }, Yt = function(t, e) {
                return E(t) && t[At] && "symbol" != typeof e && e in t && +e + "" == e + "";
            }, qt = function(t, e) {
                return Yt(t, e = _2(e, !0)) ? c3(2, t[e]) : J(t, e);
            }, Xt = function(t, e, n) {
                return !(Yt(t, e = _2(e, !0)) && E(n) && m2(n, "value")) || m2(n, "get") || m2(n, "set") || n.configurable || m2(n, "writable") && !n.writable || m2(n, "enumerable") && !n.enumerable ? G(t, e, n) : (t[e] = n.value, t);
            };
            St || (V.f = qt, D.f = Xt), o3(o3.S + o3.F * !St, "Object", {
                getOwnPropertyDescriptor: qt,
                defineProperty: Xt
            }), r3(function() {
                bt.call({
                });
            }) && (bt = Et = function() {
                return gt.call(this);
            });
            var $t = l3({
            }, Vt);
            l3($t, Ht), s2($t, Ot, Ht.values), l3($t, {
                slice: Gt,
                set: Jt,
                constructor: function() {
                },
                toString: bt,
                toLocaleString: Dt
            }), Wt($t, "buffer", "b"), Wt($t, "byteOffset", "o"), Wt($t, "byteLength", "l"), Wt($t, "length", "e"), G($t, jt, {
                get: function() {
                    return this[At];
                }
            }), t13.exports = function(t14, u, c5, f3) {
                var l = t14 + ((f3 = !!f3) ? "Clamped" : "") + "Array", h5 = "get" + t14, v2 = "set" + t14, y = n5[l], g2 = y || {
                }, _ = y && S(y), m = {
                }, O = y && y.prototype, j = function(t15, e6) {
                    G(t15, e6, {
                        get: function() {
                            return (function(t, e) {
                                var n = t._d;
                                return n.v[h5](e * u + n.o, Pt);
                            })(this, e6);
                        },
                        set: function(t16) {
                            return (function(t, e, n) {
                                var r = t._d;
                                f3 && (n = 0 > (n = Math.round(n)) ? 0 : n > 255 ? 255 : 255 & n), r.v[v2](e * u + r.o, n, Pt);
                            })(this, e6, t16);
                        },
                        enumerable: !0
                    });
                };
                !y || !i3.ABV ? (y = c5(function(t, e, n, r) {
                    a3(t, y, l, "_d");
                    var o, i, c, f, h = 0, v = 0;
                    if (E(e)) {
                        if (!(e instanceof tt || "ArrayBuffer" == (f = b(e)) || "SharedArrayBuffer" == f)) return At in e ? Ct(y, e) : Ut.call(y, e);
                        o = e, v = Ft(n, u);
                        var g = e.byteLength;
                        if (void 0 === r) {
                            if (g % u) throw H("Wrong length!");
                            if (0 > (i = g - v)) throw H("Wrong length!");
                        } else if ((i = d(r) * u) + v > g) throw H("Wrong length!");
                        c = i / u;
                    } else c = p(e), o = new tt(i = c * u);
                    for(s2(t, "_d", {
                        b: o,
                        o: v,
                        l: i,
                        e: c,
                        v: new et(o)
                    }); c > h;)j(t, h++);
                }), O = y.prototype = x($t), s2(O, "constructor", y)) : r3(function() {
                    y(1);
                }) && r3(function() {
                    new y(-1);
                }) && W(function(t) {
                    new y, new y(null), new y(1.5), new y(t);
                }, !0) || (y = c5(function(t, e, n, r) {
                    var o;
                    return a3(t, y, l), E(e) ? e instanceof tt || "ArrayBuffer" == (o = b(e)) || "SharedArrayBuffer" == o ? void 0 !== r ? new g2(e, Ft(n, u), r) : void 0 !== n ? new g2(e, Ft(n, u)) : new g2(e) : At in e ? Ct(y, e) : Ut.call(y, e) : new g2(p(e));
                }), nt(_ !== Function.prototype ? A(g2).concat(A(_)) : A(g2), function(t) {
                    t in y || s2(y, t, g2[t]);
                }), y.prototype = O, e4 || (O.constructor = y));
                var w = O[Ot], M = !!w && ("values" == w.name || void 0 == w.name), z = Ht.values;
                s2(y, wt, !0), s2(O, At, l), s2(O, zt, !0), s2(O, xt, y), (f3 ? new y(1)[jt] == l : jt in O) || G(O, jt, {
                    get: function() {
                        return l;
                    }
                }), m[l] = y, o3(o3.G + o3.W + o3.F * (y != g2), m), o3(o3.S, l, {
                    BYTES_PER_ELEMENT: u
                }), o3(o3.S + o3.F * r3(function() {
                    g2.of.call(y, 1);
                }), l, {
                    from: Ut,
                    of: Kt
                }), "BYTES_PER_ELEMENT" in O || s2(O, "BYTES_PER_ELEMENT", u), o3(o3.P, l, Vt), U(l), o3(o3.P + o3.F * Lt, l, {
                    set: Jt
                }), o3(o3.P + o3.F * !M, l, Ht), e4 || O.toString == bt || (O.toString = bt), o3(o3.P + o3.F * r3(function() {
                    new y(1).slice();
                }), l, {
                    slice: Gt
                }), o3(o3.P + o3.F * (r3(function() {
                    return [
                        1,
                        2
                    ].toLocaleString() != new y([
                        1,
                        2
                    ]).toLocaleString();
                }) || !r3(function() {
                    O.toLocaleString.call([
                        1,
                        2
                    ]);
                })), l, {
                    toLocaleString: Dt
                }), R[l] = M ? w : z, e4 || M || s2(O, Ot, z);
            };
        } else t13.exports = function() {
        };
    }), Kr = Object.freeze({
        default: Ur,
        __moduleExports: Ur
    }), Br = Kr && Ur || Kr;
    Br("Int8", 1, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }), Br("Uint8", 1, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }), Br("Uint8", 1, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }, !0), Br("Int16", 2, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }), Br("Uint16", 2, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }), Br("Int32", 4, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }), Br("Uint32", 4, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }), Br("Float32", 4, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    }), Br("Float64", 8, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r);
        };
    });
    var Dr = function(t, e, n, r) {
        try {
            return r ? e(M1(n)[0], n[1]) : e(n);
        } catch (e7) {
            var o = t.return;
            throw void 0 !== o && M1(o.call(t)), e7;
        }
    }, Vr = Object.freeze({
        default: Dr,
        __moduleExports: Dr
    }), Gr = Vr && Dr || Vr, Jr = n1(function(t17) {
        var e = {
        }, n = {
        }, r5 = t17.exports = function(t, r, o, i, u) {
            var a, c, f, s, l = u ? function() {
                return t;
            } : Ir(t), h = ut(o, i, r ? 2 : 1), d = 0;
            if ("function" != typeof l) throw TypeError(t + " is not iterable!");
            if (Fr(l)) {
                for(a = kt(t.length); a > d; d++)if ((s = r ? h(M1(c = t[d])[0], c[1]) : h(t[d])) === e || s === n) return s;
            } else for(f = l.call(t); !(c = f.next()).done;)if ((s = Gr(f, h, c.value, r)) === e || s === n) return s;
        };
        r5.BREAK = e, r5.RETURN = n;
    }), Hr = Object.freeze({
        default: Jr,
        __moduleExports: Jr
    }), Yr = n1(function(t18) {
        var e = X("meta"), n7 = T.f, r = 0, o = Object.isExtensible || function() {
            return !0;
        }, i = !v1(function() {
            return o(Object.preventExtensions({
            }));
        }), u = function(t) {
            n7(t, e, {
                value: {
                    i: "O" + ++r,
                    w: {
                    }
                }
            });
        }, a = t18.exports = {
            KEY: e,
            NEED: !1,
            fastKey: function(t, n) {
                if (!f1(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!q(t, e)) {
                    if (!o(t)) return "F";
                    if (!n) return "E";
                    u(t);
                }
                return t[e].i;
            },
            getWeak: function(t, n) {
                if (!q(t, e)) {
                    if (!o(t)) return !0;
                    if (!n) return !1;
                    u(t);
                }
                return t[e].w;
            },
            onFreeze: function(t) {
                return i && a.NEED && o(t) && !q(t, e) && u(t), t;
            }
        };
    }), qr = Object.freeze({
        default: Yr,
        __moduleExports: Yr,
        KEY: Yr.KEY,
        NEED: Yr.NEED,
        fastKey: Yr.fastKey,
        getWeak: Yr.getWeak,
        onFreeze: Yr.onFreeze
    }), Xr = function(t, e) {
        if (!f1(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t;
    }, $r = Object.freeze({
        default: Xr,
        __moduleExports: Xr
    }), Qr = Hr && Jr || Hr, Zr = qr && Yr || qr, to = $r && Xr || $r, eo = T.f, no = Zr.fastKey, ro = O1 ? "_s" : "size", oo = function(t, e) {
        var n, r = no(e);
        if ("F" !== r) return t._i[r];
        for(n = t._f; n; n = n.n)if (n.k == e) return n;
    }, io = {
        getConstructor: function(t19, e, n8, r6) {
            var o5 = t19(function(t, i) {
                Te(t, o5, e, "_i"), t._t = e, t._i = ir(null), t._f = void 0, t._l = void 0, t[ro] = 0, void 0 != i && Qr(i, n8, t[r6], t);
            });
            return Re(o5.prototype, {
                clear: function() {
                    for(var t = to(this, e), n = t._i, r = t._f; r; r = r.n)r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    t._f = t._l = void 0, t[ro] = 0;
                },
                delete: function(t) {
                    var n = to(this, e), r = oo(n, t);
                    if (r) {
                        var o = r.n, i = r.p;
                        delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[ro]--;
                    }
                    return !!r;
                },
                forEach: function(t) {
                    to(this, e);
                    for(var n, r = ut(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)for(r(n.v, n.k, this); n && n.r;)n = n.p;
                },
                has: function(t) {
                    return !!oo(to(this, e), t);
                }
            }), O1 && eo(o5.prototype, "size", {
                get: function() {
                    return to(this, e)[ro];
                }
            }), o5;
        },
        def: function(t, e, n) {
            var r, o, i = oo(t, e);
            return i ? i.v = n : (t._l = i = {
                i: o = no(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = i), r && (r.n = i), t[ro]++, "F" !== o && (t._i[o] = i)), t;
        },
        getEntry: oo,
        setStrong: function(t20, e8, n9) {
            _r(t20, e8, function(t, n) {
                this._t = to(t, e8), this._k = n, this._l = void 0;
            }, function() {
                for(var t = this._k, e = this._l; e && e.r;)e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? gr(0, "keys" == t ? e.k : "values" == t ? e.v : [
                    e.k,
                    e.v
                ]) : (this._t = void 0, gr(1));
            }, n9 ? "entries" : "values", !n9, !0), Ze(e8);
        }
    }, uo = Object.freeze({
        default: io,
        __moduleExports: io,
        getConstructor: io.getConstructor,
        def: io.def,
        getEntry: io.getEntry,
        setStrong: io.setStrong
    }), ao = function(t, e) {
        if (M1(t), !f1(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
    }, co = {
        set: Object.setPrototypeOf || ("__proto__" in {
        } ? function(t22, e, n) {
            try {
                (n = ut(Function.call, Wr.f(Object.prototype, "__proto__").set, 2))(t22, []), e = !(t22 instanceof Array);
            } catch (t21) {
                e = !0;
            }
            return function(t, r) {
                return ao(t, r), e ? t.__proto__ = r : n(t, r), t;
            };
        }({
        }, !1) : void 0),
        check: ao
    }, fo = Object.freeze({
        default: co,
        __moduleExports: co,
        set: co.set,
        check: co.check
    }), so = fo && co || fo, lo = so.set, ho = function(t, e, n) {
        var r, o = e.constructor;
        return o !== n && "function" == typeof o && (r = o.prototype) !== n.prototype && f1(r) && lo && lo(t, r), t;
    }, vo = Object.freeze({
        default: ho,
        __moduleExports: ho
    }), po = vo && ho || vo, yo = function(t23, e9, n10, r7, o, i) {
        var u = g1[t23], a = u, c = o ? "set" : "add", s = a && a.prototype, l = {
        }, h = function(t24) {
            var e = s[t24];
            it1(s, t24, "delete" == t24 ? function(t) {
                return !(i && !f1(t)) && e.call(this, 0 === t ? 0 : t);
            } : "has" == t24 ? function(t) {
                return !(i && !f1(t)) && e.call(this, 0 === t ? 0 : t);
            } : "get" == t24 ? function(t) {
                return i && !f1(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
            } : "add" == t24 ? function(t) {
                return e.call(this, 0 === t ? 0 : t), this;
            } : function(t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this;
            });
        };
        if ("function" == typeof a && (i || s.forEach && !v1(function() {
            (new a).entries().next();
        }))) {
            var d = new a, p = d[c](i ? {
            } : -0, 1) != d, y = v1(function() {
                d.has(1);
            }), _ = Tr(function(t) {
                new a(t);
            }), m = !i && v1(function() {
                for(var t = new a, e = 5; e--;)t[c](e, e);
                return !t.has(-0);
            });
            _ || ((a = e9(function(e, n) {
                Te(e, a, t23);
                var r = po(new u, e, a);
                return void 0 != n && Qr(n, o, r[c], r), r;
            })).prototype = s, s.constructor = a), (y || m) && (h("delete"), h("has"), o && h("get")), (m || p) && h(c), i && s.clear && delete s.clear;
        } else a = r7.getConstructor(e9, t23, o, c), Re(a.prototype, n10), Zr.NEED = !0;
        return Ke(a, t23), l[t23] = a, Xe(Xe.G + Xe.W + Xe.F * (a != u), l), i || r7.setStrong(a, t23, o), a;
    }, go = Object.freeze({
        default: yo,
        __moduleExports: yo
    }), _o = uo && io || uo, mo = go && yo || go, bo = (mo("Map", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
    }, {
        get: function(t) {
            var e = _o.getEntry(to(this, "Map"), t);
            return e && e.v;
        },
        set: function(t, e) {
            return _o.def(to(this, "Map"), 0 === t ? 0 : t, e);
        }
    }, _o, !0), mo("Set", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
    }, {
        add: function(t) {
            return _o.def(to(this, "Set"), t = 0 === t ? 0 : t, t);
        }
    }, _o), Object.getOwnPropertySymbols), Eo = {
        f: bo
    }, Oo = Object.freeze({
        default: Eo,
        __moduleExports: Eo,
        f: bo
    }), jo = Oo && Eo || Oo, wo = Object.assign, xo = !wo || v1(function() {
        var t25 = {
        }, e = {
        }, n = Symbol(), r = "abcdefghijklmnopqrst";
        return t25[n] = 7, r.split("").forEach(function(t) {
            e[t] = t;
        }), 7 != wo({
        }, t25)[n] || Object.keys(wo({
        }, e)).join("") != r;
    }) ? function(t, e) {
        for(var n = we(t), r = arguments.length, o = 1, i = jo.f, u = zr.f; r > o;)for(var a, c = Dt1(arguments[o++]), f = i ? bn(c).concat(i(c)) : bn(c), s = f.length, l = 0; s > l;)u.call(c, a = f[l++]) && (n[a] = c[a]);
        return n;
    } : wo, So = Object.freeze({
        default: xo,
        __moduleExports: xo
    }), Ao = Zr.getWeak, Mo = Rr(5), zo = Rr(6), No = 0, Po = function(t) {
        return t._l || (t._l = new ko);
    }, ko = function() {
        this.a = [];
    }, Lo = function(t26, e) {
        return Mo(t26.a, function(t) {
            return t[0] === e;
        });
    };
    ko.prototype = {
        get: function(t) {
            var e = Lo(this, t);
            if (e) return e[1];
        },
        has: function(t) {
            return !!Lo(this, t);
        },
        set: function(t, e) {
            var n = Lo(this, t);
            n ? n[1] = e : this.a.push([
                t,
                e
            ]);
        },
        delete: function(t) {
            var e10 = zo(this.a, function(e) {
                return e[0] === t;
            });
            return ~e10 && this.a.splice(e10, 1), !!~e10;
        }
    };
    var Fo = {
        getConstructor: function(t27, e, n11, r) {
            var o = t27(function(t, i) {
                Te(t, o, e, "_i"), t._t = e, t._i = No++, t._l = void 0, void 0 != i && Qr(i, n11, t[r], t);
            });
            return Re(o.prototype, {
                delete: function(t) {
                    if (!f1(t)) return !1;
                    var n = Ao(t);
                    return !0 === n ? Po(to(this, e)).delete(t) : n && q(n, this._i) && delete n[this._i];
                },
                has: function(t) {
                    if (!f1(t)) return !1;
                    var n = Ao(t);
                    return !0 === n ? Po(to(this, e)).has(t) : n && q(n, this._i);
                }
            }), o;
        },
        def: function(t, e, n) {
            var r = Ao(M1(e), !0);
            return !0 === r ? Po(t).set(e, n) : r[t._i] = n, t;
        },
        ufstore: Po
    }, Io = Object.freeze({
        default: Fo,
        __moduleExports: Fo,
        getConstructor: Fo.getConstructor,
        def: Fo.def,
        ufstore: Fo.ufstore
    }), Ro = So && xo || So, To = Io && Fo || Io;
    n1(function(t28) {
        var e11, n12 = Rr(0), r8 = Zr.getWeak, o = Object.isExtensible, i5 = To.ufstore, u5 = {
        }, a = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, c = {
            get: function(t) {
                if (f1(t)) {
                    var e = r8(t);
                    return !0 === e ? i5(to(this, "WeakMap")).get(t) : e ? e[this._i] : void 0;
                }
            },
            set: function(t, e) {
                return To.def(to(this, "WeakMap"), t, e);
            }
        }, s = t28.exports = mo("WeakMap", a, c, To, !0, !0);
        v1(function() {
            return 7 != (new s).set((Object.freeze || Object)(u5), 7).get(u5);
        }) && (e11 = To.getConstructor(a, "WeakMap"), Ro(e11.prototype, c), Zr.NEED = !0, n12([
            "delete",
            "has",
            "get",
            "set"
        ], function(t) {
            var n13 = s.prototype, r = n13[t];
            it1(n13, t, function(n, i) {
                if (f1(n) && !o(n)) {
                    this._f || (this._f = new e11);
                    var u = this._f[t](n, i);
                    return "set" == t ? this : u;
                }
                return r.call(this, n, i);
            });
        }));
    });
    mo("WeakSet", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
    }, {
        add: function(t) {
            return To.def(to(this, "WeakSet"), t, !0);
        }
    }, To, !1, !0);
    var Co = (g1.Reflect || {
    }).apply, Wo = Function.apply;
    Xe(Xe.S + Xe.F * !v1(function() {
        Co(function() {
        });
    }), "Reflect", {
        apply: function(t, e, n) {
            var r = nt1(t), o = M1(n);
            return Co ? Co(r, e, o) : Wo.call(r, e, o);
        }
    });
    var Uo = function(t, e, n) {
        var r = void 0 === n;
        switch(e.length){
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
        }
        return t.apply(n, e);
    }, Ko = Object.freeze({
        default: Uo,
        __moduleExports: Uo
    }), Bo = Ko && Uo || Ko, Do = [].slice, Vo = {
    }, Go = Function.bind || function(t29) {
        var e12 = nt1(this), n14 = Do.call(arguments, 1), r9 = function() {
            var o6 = n14.concat(Do.call(arguments));
            return this instanceof r9 ? (function(t, e, n) {
                if (!(e in Vo)) {
                    for(var r = [], o = 0; e > o; o++)r[o] = "a[" + o + "]";
                    Vo[e] = Function("F,a", "return new F(" + r.join(",") + ")");
                }
                return Vo[e](t, n);
            })(e12, o6.length, o6) : Bo(e12, o6, t29);
        };
        return f1(e12.prototype) && (r9.prototype = e12.prototype), r9;
    }, Jo = Object.freeze({
        default: Go,
        __moduleExports: Go
    }), Ho = Jo && Go || Jo, Yo = (g1.Reflect || {
    }).construct, qo = v1(function() {
        function t() {
        }
        return !(Yo(function() {
        }, [], t) instanceof t);
    }), Xo = !v1(function() {
        Yo(function() {
        });
    });
    Xe(Xe.S + Xe.F * (qo || Xo), "Reflect", {
        construct: function(t, e) {
            nt1(t), M1(e);
            var n = 3 > arguments.length ? t : nt1(arguments[2]);
            if (Xo && !qo) return Yo(t, e, n);
            if (t == n) {
                switch(e.length){
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                }
                var r = [
                    null
                ];
                return r.push.apply(r, e), new (Ho.apply(t, r));
            }
            var o = n.prototype, i = ir(f1(o) ? o : Object.prototype), u = Function.apply.call(t, i, e);
            return f1(u) ? u : i;
        }
    }), Xe(Xe.S + Xe.F * v1(function() {
        Reflect.defineProperty(T.f({
        }, 1, {
            value: 1
        }), 1, {
            value: 2
        });
    }), "Reflect", {
        defineProperty: function(t, e, n) {
            M1(t), e = N1(e, !0), M1(n);
            try {
                return T.f(t, e, n), !0;
            } catch (t30) {
                return !1;
            }
        }
    });
    var $o = Wr.f;
    Xe(Xe.S, "Reflect", {
        deleteProperty: function(t, e) {
            var n = $o(M1(t), e);
            return !(n && !n.configurable) && delete t[e];
        }
    }), Xe(Xe.S, "Reflect", {
        get: function t(e, n) {
            var r, o, i = 3 > arguments.length ? e : arguments[2];
            return M1(e) === i ? e[n] : (r = Wr.f(e, n)) ? q(r, "value") ? r.value : void 0 !== r.get ? r.get.call(i) : void 0 : f1(o = sr(e)) ? t(o, n, i) : void 0;
        }
    }), Xe(Xe.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return Wr.f(M1(t), e);
        }
    }), Xe(Xe.S, "Reflect", {
        getPrototypeOf: function(t) {
            return sr(M1(t));
        }
    }), Xe(Xe.S, "Reflect", {
        has: function(t, e) {
            return e in t;
        }
    });
    var Qo = Object.isExtensible;
    Xe(Xe.S, "Reflect", {
        isExtensible: function(t) {
            return M1(t), !Qo || Qo(t);
        }
    });
    var Zo = g1.Reflect, ti = Zo && Zo.ownKeys || function(t) {
        var e = We.f(M1(t)), n = jo.f;
        return n ? e.concat(n(t)) : e;
    }, ei = Object.freeze({
        default: ti,
        __moduleExports: ti
    }), ni = ei && ti || ei;
    Xe(Xe.S, "Reflect", {
        ownKeys: ni
    });
    var ri = Object.preventExtensions;
    Xe(Xe.S, "Reflect", {
        preventExtensions: function(t) {
            M1(t);
            try {
                return ri && ri(t), !0;
            } catch (t31) {
                return !1;
            }
        }
    }), Xe(Xe.S, "Reflect", {
        set: function t(e, n, r) {
            var o, i, u = 4 > arguments.length ? e : arguments[3], a = Wr.f(M1(e), n);
            if (!a) {
                if (f1(i = sr(e))) return t(i, n, r, u);
                a = C1(0);
            }
            if (q(a, "value")) {
                if (!1 === a.writable || !f1(u)) return !1;
                if (o = Wr.f(u, n)) {
                    if (o.get || o.set || !1 === o.writable) return !1;
                    o.value = r, T.f(u, n, o);
                } else T.f(u, n, C1(0, r));
                return !0;
            }
            return void 0 !== a.set && (a.set.call(u, r), !0);
        }
    }), so && Xe(Xe.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            so.check(t, e);
            try {
                return so.set(t, e), !0;
            } catch (t32) {
                return !1;
            }
        }
    });
    var oi, ii, ui, ai = g1.process, ci = g1.setImmediate, fi = g1.clearImmediate, si = g1.MessageChannel, li = g1.Dispatch, hi = 0, di = {
    }, vi = function() {
        var t = +this;
        if (di.hasOwnProperty(t)) {
            var e = di[t];
            delete di[t], e();
        }
    }, pi = function(t) {
        vi.call(t.data);
    };
    ci && fi || (ci = function(t) {
        for(var e = [], n = 1; arguments.length > n;)e.push(arguments[n++]);
        return di[++hi] = function() {
            Bo("function" == typeof t ? t : Function(t), e);
        }, oi(hi), hi;
    }, fi = function(t) {
        delete di[t];
    }, "process" == Ct1(ai) ? oi = function(t) {
        ai.nextTick(ut(vi, t, 1));
    } : li && li.now ? oi = function(t) {
        li.now(ut(vi, t, 1));
    } : si ? (ui = (ii = new si).port2, ii.port1.onmessage = pi, oi = ut(ui.postMessage, ui, 1)) : g1.addEventListener && "function" == typeof postMessage && !g1.importScripts ? (oi = function(t) {
        g1.postMessage(t + "", "*");
    }, g1.addEventListener("message", pi, !1)) : oi = "onreadystatechange" in j1("script") ? function(t) {
        An.appendChild(j1("script")).onreadystatechange = function() {
            An.removeChild(this), vi.call(t);
        };
    } : function(t) {
        setTimeout(ut(vi, t, 1), 0);
    });
    var yi = {
        set: ci,
        clear: fi
    }, gi = Object.freeze({
        default: yi,
        __moduleExports: yi,
        set: yi.set,
        clear: yi.clear
    }), _i = gi && yi || gi, mi = _i.set, bi = g1.MutationObserver || g1.WebKitMutationObserver, Ei = g1.process, Oi = g1.Promise, ji = "process" == Ct1(Ei), wi = function() {
        var t, e, n, r10 = function() {
            var r, o;
            for(ji && (r = Ei.domain) && r.exit(); t;){
                o = t.fn, t = t.next;
                try {
                    o();
                } catch (r) {
                    throw t ? n() : e = void 0, r;
                }
            }
            e = void 0, r && r.enter();
        };
        if (ji) n = function() {
            Ei.nextTick(r10);
        };
        else if (!bi || g1.navigator && g1.navigator.standalone) {
            if (Oi && Oi.resolve) {
                var o7 = Oi.resolve();
                n = function() {
                    o7.then(r10);
                };
            } else n = function() {
                mi.call(g1, r10);
            };
        } else {
            var i = !0, u = document.createTextNode("");
            new bi(r10).observe(u, {
                characterData: !0
            }), n = function() {
                u.data = i = !i;
            };
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o), t || (t = o, n()), e = o;
        };
    }, xi = Object.freeze({
        default: wi,
        __moduleExports: wi
    });
    var Si, Ai, Mi, zi, Ni = function(t33) {
        return new function(t34) {
            var e, n;
            this.promise = new t34(function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r;
            }), this.resolve = nt1(e), this.reject = nt1(n);
        }(t33);
    }, Pi = {
        f: Ni
    }, ki = Object.freeze({
        default: Pi,
        __moduleExports: Pi,
        f: Ni
    }), Li = function(t) {
        try {
            return {
                e: !1,
                v: t()
            };
        } catch (t35) {
            return {
                e: !0,
                v: t35
            };
        }
    }, Fi = Object.freeze({
        default: Li,
        __moduleExports: Li
    }), Ii = ki && Pi || ki, Ri = function(t, e) {
        if (M1(t), f1(e) && e.constructor === t) return e;
        var n = Ii.f(t);
        return (0, n.resolve)(e), n.promise;
    }, Ti = Object.freeze({
        default: Ri,
        __moduleExports: Ri
    }), Ci = Fi && Li || Fi, Wi = Ti && Ri || Ti, Ui = _i.set, Ki = (xi && wi || xi)(), Bi = g1.TypeError, Di = g1.process, Vi = g1.Promise, Gi = "process" == Tn(Di), Ji = function() {
    }, Hi = Ai = Ii.f, Yi = !!function() {
        try {
            var t36 = Vi.resolve(1), e = (t36.constructor = {
            })[ze("species")] = function(t) {
                t(Ji, Ji);
            };
            return (Gi || "function" == typeof PromiseRejectionEvent) && t36.then(Ji) instanceof e;
        } catch (t) {
        }
    }(), qi = function(t) {
        var e;
        return !(!f1(t) || "function" != typeof (e = t.then)) && e;
    }, Xi = function(t38, e13) {
        if (!t38._n) {
            t38._n = !0;
            var n15 = t38._c;
            Ki(function() {
                for(var r = t38._v, o = 1 == t38._s, i6 = 0, u6 = function(e) {
                    var n, i, u, a = o ? e.ok : e.fail, c = e.resolve, f = e.reject, s = e.domain;
                    try {
                        a ? (o || (2 == t38._h && Zi(t38), t38._h = 1), !0 === a ? n = r : (s && s.enter(), n = a(r), s && (s.exit(), u = !0)), n === e.promise ? f(Bi("Promise-chain cycle")) : (i = qi(n)) ? i.call(n, c, f) : c(n)) : f(r);
                    } catch (t) {
                        s && !u && s.exit(), f(t);
                    }
                }; n15.length > i6;)u6(n15[i6++]);
                t38._c = [], t38._n = !1, e13 && !t38._h && $i(t38);
            });
        }
    }, $i = function(t) {
        Ui.call(g1, function() {
            var e, n, r, o = t._v, i = Qi(t);
            if (i && (e = Ci(function() {
                Gi ? Di.emit("unhandledRejection", o, t) : (n = g1.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = g1.console) && r.error && r.error("Unhandled promise rejection", o);
            }), t._h = Gi || Qi(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
        });
    }, Qi = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
    }, Zi = function(t) {
        Ui.call(g1, function() {
            var e;
            Gi ? Di.emit("rejectionHandled", t) : (e = g1.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            });
        });
    }, tu = function(t) {
        var e = this;
        e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), Xi(e, !0));
    }, eu = function(t39) {
        var e, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            try {
                if (n === t39) throw Bi("Promise can't be resolved itself");
                (e = qi(t39)) ? Ki(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t39, ut(eu, r, 1), ut(tu, r, 1));
                    } catch (t) {
                        tu.call(r, t);
                    }
                }) : (n._v = t39, n._s = 1, Xi(n, !1));
            } catch (t) {
                tu.call({
                    _w: n,
                    _d: !1
                }, t);
            }
        }
    };
    Yi || (Vi = function(t) {
        Te(this, Vi, "Promise", "_h"), nt1(t), Si.call(this);
        try {
            t(ut(eu, this, 1), ut(tu, this, 1));
        } catch (t40) {
            tu.call(this, t40);
        }
    }, (Si = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
    }).prototype = Re(Vi.prototype, {
        then: function(t, e) {
            var n = Hi(Qe(this, Vi));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = Gi ? Di.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && Xi(this, !1), n.promise;
        },
        catch: function(t) {
            return this.then(void 0, t);
        }
    }), Mi = function() {
        var t = new Si;
        this.promise = t, this.resolve = ut(eu, t, 1), this.reject = ut(tu, t, 1);
    }, Ii.f = Hi = function(t) {
        return t === Vi || t === zi ? new Mi(t) : Ai(t);
    }), Xe(Xe.G + Xe.W + Xe.F * !Yi, {
        Promise: Vi
    }), Ke(Vi, "Promise"), Ze("Promise"), zi = $1.Promise, Xe(Xe.S + Xe.F * !Yi, "Promise", {
        reject: function(t) {
            var e = Hi(this);
            return (0, e.reject)(t), e.promise;
        }
    }), Xe(Xe.S + Xe.F * (Fe || !Yi), "Promise", {
        resolve: function(t) {
            return Wi(Fe && this === zi ? Vi : this, t);
        }
    }), Xe(Xe.S + Xe.F * !(Yi && Tr(function(t) {
        Vi.all(t).catch(Ji);
    })), "Promise", {
        all: function(t41) {
            var e = this, n17 = Hi(e), r = n17.resolve, o = n17.reject, i7 = Ci(function() {
                var n = [], i = 0, u = 1;
                Qr(t41, !1, function(t42) {
                    var a = i++, c = !1;
                    n.push(void 0), u++, e.resolve(t42).then(function(t) {
                        c || (c = !0, n[a] = t, --u || r(n));
                    }, o);
                }), --u || r(n);
            });
            return i7.e && o(i7.v), n17.promise;
        },
        race: function(t43) {
            var e = this, n = Hi(e), r = n.reject, o = Ci(function() {
                Qr(t43, !1, function(t) {
                    e.resolve(t).then(n.resolve, r);
                });
            });
            return o.e && r(o.v), n.promise;
        }
    });
    var nu = {
        f: ze
    }, ru = Object.freeze({
        default: nu,
        __moduleExports: nu,
        f: ze
    }), ou = ru && nu || ru, iu = T.f, uu = function(t) {
        var e = $1.Symbol || ($1.Symbol = Fe ? {
        } : g1.Symbol || {
        });
        "_" == t.charAt(0) || t in e || iu(e, t, {
            value: ou.f(t)
        });
    }, au = Object.freeze({
        default: uu,
        __moduleExports: uu
    }), cu = function(t) {
        var e = bn(t), n = jo.f;
        if (n) for(var r, o = n(t), i = zr.f, u = 0; o.length > u;)i.call(t, r = o[u++]) && e.push(r);
        return e;
    }, fu = Object.freeze({
        default: cu,
        __moduleExports: cu
    }), su = We.f, lu = {
    }.toString, hu = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], du = function(t44) {
        return hu && "[object Window]" == lu.call(t44) ? (function(t) {
            try {
                return su(t);
            } catch (t45) {
                return hu.slice();
            }
        })(t44) : su($t1(t44));
    }, vu = {
        f: du
    }, pu = Object.freeze({
        default: vu,
        __moduleExports: vu,
        f: du
    }), yu = au && uu || au, gu = fu && cu || fu, _u = pu && vu || pu, mu = Zr.KEY, bu = Wr.f, Eu = T.f, Ou = _u.f, ju = g1.Symbol, wu = g1.JSON, xu = wu && wu.stringify, Su = ze("_hidden"), Au = ze("toPrimitive"), Mu = {
    }.propertyIsEnumerable, zu = oe("symbol-registry"), Nu = oe("symbols"), Pu = oe("op-symbols"), ku = Object.prototype, Lu = "function" == typeof ju, Fu = g1.QObject, Iu = !Fu || !Fu.prototype || !Fu.prototype.findChild, Ru = O1 && v1(function() {
        return 7 != ir(Eu({
        }, "a", {
            get: function() {
                return Eu(this, "a", {
                    value: 7
                }).a;
            }
        })).a;
    }) ? function(t, e, n) {
        var r = bu(ku, e);
        r && delete ku[e], Eu(t, e, n), r && t !== ku && Eu(ku, e, r);
    } : Eu, Tu = function(t) {
        var e = Nu[t] = ir(ju.prototype);
        return e._k = t, e;
    }, Cu = Lu && "symbol" == typeof ju.iterator ? function(t) {
        return "symbol" == typeof t;
    } : function(t) {
        return t instanceof ju;
    }, Wu = function(t, e, n) {
        return t === ku && Wu(Pu, e, n), M1(t), e = N1(e, !0), M1(n), q(Nu, e) ? (n.enumerable ? (q(t, Su) && t[Su][e] && (t[Su][e] = !1), n = ir(n, {
            enumerable: C1(0, !1)
        })) : (q(t, Su) || Eu(t, Su, C1(1, {
        })), t[Su][e] = !0), Ru(t, e, n)) : Eu(t, e, n);
    }, Uu = function(t, e) {
        M1(t);
        for(var n, r = gu(e = $t1(e)), o = 0, i = r.length; i > o;)Wu(t, n = r[o++], e[n]);
        return t;
    }, Ku = function(t) {
        var e = Mu.call(this, t = N1(t, !0));
        return !(this === ku && q(Nu, t) && !q(Pu, t)) && (!(e || !q(this, t) || !q(Nu, t) || q(this, Su) && this[Su][t]) || e);
    }, Bu = function(t, e) {
        if (t = $t1(t), e = N1(e, !0), t !== ku || !q(Nu, e) || q(Pu, e)) {
            var n = bu(t, e);
            return !n || !q(Nu, e) || q(t, Su) && t[Su][e] || (n.enumerable = !0), n;
        }
    }, Du = function(t) {
        for(var e, n = Ou($t1(t)), r = [], o = 0; n.length > o;)q(Nu, e = n[o++]) || e == Su || e == mu || r.push(e);
        return r;
    }, Vu = function(t) {
        for(var e, n = t === ku, r = Ou(n ? Pu : $t1(t)), o = [], i = 0; r.length > i;)!q(Nu, e = r[i++]) || n && !q(ku, e) || o.push(Nu[e]);
        return o;
    };
    Lu || (it1((ju = function() {
        if (this instanceof ju) throw TypeError("Symbol is not a constructor!");
        var t = X(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
            this === ku && e.call(Pu, n), q(this, Su) && q(this[Su], t) && (this[Su][t] = !1), Ru(this, t, C1(1, n));
        };
        return O1 && Iu && Ru(ku, t, {
            configurable: !0,
            set: e
        }), Tu(t);
    }).prototype, "toString", function() {
        return this._k;
    }), Wr.f = Bu, T.f = Wu, We.f = _u.f = Du, zr.f = Ku, jo.f = Vu, O1 && !Fe && it1(ku, "propertyIsEnumerable", Ku, !0), ou.f = function(t) {
        return Tu(ze(t));
    }), Xe(Xe.G + Xe.W + Xe.F * !Lu, {
        Symbol: ju
    });
    for(var Gu = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Ju = 0; Gu.length > Ju;)ze(Gu[Ju++]);
    for(var Hu = bn(ze.store), Yu = 0; Hu.length > Yu;)yu(Hu[Yu++]);
    Xe(Xe.S + Xe.F * !Lu, "Symbol", {
        for: function(t) {
            return q(zu, t += "") ? zu[t] : zu[t] = ju(t);
        },
        keyFor: function(t) {
            if (!Cu(t)) throw TypeError(t + " is not a symbol!");
            for(var e in zu)if (zu[e] === t) return e;
        },
        useSetter: function() {
            Iu = !0;
        },
        useSimple: function() {
            Iu = !1;
        }
    }), Xe(Xe.S + Xe.F * !Lu, "Object", {
        create: function(t, e) {
            return void 0 === e ? ir(t) : Uu(ir(t), e);
        },
        defineProperty: Wu,
        defineProperties: Uu,
        getOwnPropertyDescriptor: Bu,
        getOwnPropertyNames: Du,
        getOwnPropertySymbols: Vu
    }), wu && Xe(Xe.S + Xe.F * (!Lu || v1(function() {
        var t = ju();
        return "[null]" != xu([
            t
        ]) || "{}" != xu({
            a: t
        }) || "{}" != xu(Object(t));
    })), "JSON", {
        stringify: function(t46) {
            for(var e14, n, r = [
                t46
            ], o = 1; arguments.length > o;)r.push(arguments[o++]);
            if (n = e14 = r[1], (f1(e14) || void 0 !== t46) && !Cu(t46)) return Dn(e14) || (e14 = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !Cu(e)) return e;
            }), r[1] = e14, xu.apply(wu, r);
        }
    }), ju.prototype[Au] || Y(ju.prototype, Au, ju.prototype.valueOf), Ke(ju, "Symbol"), Ke(Math, "Math", !0), Ke(g1.JSON, "JSON", !0);
    var qu = function(t, e) {
        var n = ($1.Object || {
        })[t] || Object[t], r = {
        };
        r[t] = e(n), Xe(Xe.S + Xe.F * v1(function() {
            n(1);
        }), "Object", r);
    }, Xu = Object.freeze({
        default: qu,
        __moduleExports: qu
    }), $u = Xu && qu || Xu, Qu = Zr.onFreeze;
    $u("freeze", function(t) {
        return function(e) {
            return t && f1(e) ? t(Qu(e)) : e;
        };
    });
    var Zu = Zr.onFreeze;
    $u("seal", function(t) {
        return function(e) {
            return t && f1(e) ? t(Zu(e)) : e;
        };
    });
    var ta = Zr.onFreeze;
    $u("preventExtensions", function(t) {
        return function(e) {
            return t && f1(e) ? t(ta(e)) : e;
        };
    }), $u("isFrozen", function(t) {
        return function(e) {
            return !f1(e) || !!t && t(e);
        };
    }), $u("isSealed", function(t) {
        return function(e) {
            return !f1(e) || !!t && t(e);
        };
    }), $u("isExtensible", function(t) {
        return function(e) {
            return !!f1(e) && (!t || t(e));
        };
    });
    var ea = Wr.f;
    $u("getOwnPropertyDescriptor", function() {
        return function(t, e) {
            return ea($t1(t), e);
        };
    }), $u("getPrototypeOf", function() {
        return function(t) {
            return sr(we(t));
        };
    }), $u("keys", function() {
        return function(t) {
            return bn(we(t));
        };
    }), $u("getOwnPropertyNames", function() {
        return _u.f;
    }), Xe(Xe.S + Xe.F, "Object", {
        assign: Ro
    });
    var na = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    }, ra = Object.freeze({
        default: na,
        __moduleExports: na
    });
    Xe(Xe.S, "Object", {
        is: ra && na || ra
    }), Xe(Xe.S, "Object", {
        setPrototypeOf: so.set
    });
    var oa = Function.prototype, ia = /^\s*function ([^ (]*)/;
    "name" in oa || O1 && (0, T.f)(oa, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(ia)[1];
            } catch (t) {
                return "";
            }
        }
    }), Xe(Xe.S, "String", {
        raw: function(t) {
            for(var e = $t1(t.raw), n = kt(e.length), r = arguments.length, o = [], i = 0; n > i;)o.push(e[i++] + ""), r > i && o.push(arguments[i] + "");
            return o.join("");
        }
    });
    var ua = String.fromCharCode, aa = String.fromCodePoint;
    Xe(Xe.S + Xe.F * (!!aa && 1 != aa.length), "String", {
        fromCodePoint: function(t) {
            for(var e, n = [], r = arguments.length, o = 0; r > o;){
                if (e = +arguments[o++], Qt(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(65536 > e ? ua(e) : ua(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
            }
            return n.join("");
        }
    });
    var ca = function(t) {
        return function(e, n) {
            var r, o, i = Vt1(e) + "", u = Mt(n), a = i.length;
            return 0 > u || u >= a ? t ? "" : void 0 : 55296 > (r = i.charCodeAt(u)) || r > 56319 || u + 1 === a || 56320 > (o = i.charCodeAt(u + 1)) || o > 57343 ? t ? i.charAt(u) : r : t ? i.slice(u, u + 2) : o - 56320 + (r - 55296 << 10) + 65536;
        };
    }, fa = Object.freeze({
        default: ca,
        __moduleExports: ca
    }), sa = (fa && ca || fa)(!1);
    Xe(Xe.P, "String", {
        codePointAt: function(t) {
            return sa(this, t);
        }
    });
    var la = function(t) {
        var e = Vt1(this) + "", n = "", r = Mt(t);
        if (0 > r || r == 1 / 0) throw RangeError("Count can't be negative");
        for(; r > 0; (r >>>= 1) && (e += e))1 & r && (n += e);
        return n;
    }, ha = Object.freeze({
        default: la,
        __moduleExports: la
    }), da = ha && la || ha;
    Xe(Xe.P, "String", {
        repeat: da
    });
    var va = ze("match"), pa = function(t) {
        var e;
        return f1(t) && (void 0 !== (e = t[va]) ? !!e : "RegExp" == Ct1(t));
    }, ya = Object.freeze({
        default: pa,
        __moduleExports: pa
    }), ga = ya && pa || ya, _a = function(t, e, n) {
        if (ga(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return Vt1(t) + "";
    }, ma = Object.freeze({
        default: _a,
        __moduleExports: _a
    }), ba = ze("match"), Ea = function(t) {
        var e = /./;
        try {
            "/./"[t](e);
        } catch (n) {
            try {
                return e[ba] = !1, !"/./"[t](e);
            } catch (t) {
            }
        }
        return !0;
    }, Oa = Object.freeze({
        default: Ea,
        __moduleExports: Ea
    }), ja = ma && _a || ma, wa = Oa && Ea || Oa, xa = "".startsWith;
    Xe(Xe.P + Xe.F * wa("startsWith"), "String", {
        startsWith: function(t) {
            var e = ja(this, t, "startsWith"), n = kt(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), r = t + "";
            return xa ? xa.call(e, r, n) : e.slice(n, n + r.length) === r;
        }
    });
    var Sa = "".endsWith;
    Xe(Xe.P + Xe.F * wa("endsWith"), "String", {
        endsWith: function(t) {
            var e = ja(this, t, "endsWith"), n = arguments.length > 1 ? arguments[1] : void 0, r = kt(e.length), o = void 0 === n ? r : Math.min(kt(n), r), i = t + "";
            return Sa ? Sa.call(e, i, o) : e.slice(o - i.length, o) === i;
        }
    });
    Xe(Xe.P + Xe.F * wa("includes"), "String", {
        includes: function(t) {
            return !!~ja(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var Aa = function() {
        var t = M1(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    }, Ma = Object.freeze({
        default: Aa,
        __moduleExports: Aa
    });
    O1 && "g" != /./g.flags && T.f(RegExp.prototype, "flags", {
        configurable: !0,
        get: Ma && Aa || Ma
    });
    var za = function(t47, e15, n) {
        var r = ze(t47), o = n(Vt1, r, ""[t47]), i = o[0], u = o[1];
        v1(function() {
            var e = {
            };
            return e[r] = function() {
                return 7;
            }, 7 != ""[t47](e);
        }) && (it1(String.prototype, t47, i), Y(RegExp.prototype, r, 2 == e15 ? function(t, e) {
            return u.call(t, this, e);
        } : function(t) {
            return u.call(t, this);
        }));
    }, Na = Object.freeze({
        default: za,
        __moduleExports: za
    }), Pa = Na && za || Na;
    Pa("match", 1, function(t, e, n18) {
        return [
            function(n) {
                var r = t(this), o = void 0 == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, r) : RegExp(n)[e](r + "");
            },
            n18
        ];
    }), Pa("replace", 2, function(t, e, n) {
        return [
            function(r, o) {
                var i = t(this), u = void 0 == r ? void 0 : r[e];
                return void 0 !== u ? u.call(r, i, o) : n.call(i + "", r, o);
            },
            n
        ];
    }), Pa("split", 2, function(t48, e16, n19) {
        var r11 = ga, o8 = n19, i8 = [].push;
        if ("".split(/.?/).length) {
            var u = void 0 === /()??/.exec("")[1];
            n19 = function(t, e) {
                var n = this + "";
                if (void 0 === t && 0 === e) return [];
                if (!r11(t)) return o8.call(n, t, e);
                var a, c, f, s, l, h = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), v = 0, p = void 0 === e ? 4294967295 : e >>> 0, y = RegExp(t.source, d + "g");
                for(u || (a = RegExp("^" + y.source + "$(?!\\s)", d)); (c = y.exec(n)) && ((f = c.index + c[0].length) <= v || (h.push(n.slice(v, c.index)), !u && c.length > 1 && c[0].replace(a, function() {
                    for(l = 1; arguments.length - 2 > l; l++)void 0 === arguments[l] && (c[l] = void 0);
                }), c.length > 1 && n.length > c.index && i8.apply(h, c.slice(1)), s = c[0].length, v = f, p > h.length));)y.lastIndex === c.index && y.lastIndex++;
                return v === n.length ? !s && y.test("") || h.push("") : h.push(n.slice(v)), h.length > p ? h.slice(0, p) : h;
            };
        }
        return [
            function(r, o) {
                var i = t48(this), u = void 0 == r ? void 0 : r[e16];
                return void 0 !== u ? u.call(r, i, o) : n19.call(i + "", r, o);
            },
            n19
        ];
    }), Pa("search", 1, function(t, e, n20) {
        return [
            function(n) {
                var r = t(this), o = void 0 == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, r) : RegExp(n)[e](r + "");
            },
            n20
        ];
    });
    var ka = function(t, e, n) {
        e in t ? T.f(t, e, C1(0, n)) : t[e] = n;
    }, La = Object.freeze({
        default: ka,
        __moduleExports: ka
    }), Fa = La && ka || La;
    Xe(Xe.S + Xe.F * !Tr(function(t) {
    }), "Array", {
        from: function(t) {
            var e, n, r, o, i = we(t), u = "function" == typeof this ? this : Array, a = arguments.length, c = a > 1 ? arguments[1] : void 0, f = void 0 !== c, s = 0, l = Ir(i);
            if (f && (c = ut(c, a > 2 ? arguments[2] : void 0, 2)), void 0 == l || u == Array && Fr(l)) for(n = new u(e = kt(i.length)); e > s; s++)Fa(n, s, f ? c(i[s], s) : i[s]);
            else for(o = l.call(i), n = new u; !(r = o.next()).done; s++)Fa(n, s, f ? Gr(o, c, [
                r.value,
                s
            ], !0) : r.value);
            return n.length = s, n;
        }
    }), Xe(Xe.S + Xe.F * v1(function() {
        function t() {
        }
        return !(Array.of.call(t) instanceof t);
    }), "Array", {
        of: function() {
            for(var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;)Fa(n, t, arguments[t++]);
            return n.length = e, n;
        }
    }), Xe(Xe.P, "Array", {
        copyWithin: Cr
    }), yr("copyWithin");
    var Ia = Rr(5), Ra = !0;
    "find" in [] && Array(1).find(function() {
        Ra = !1;
    }), Xe(Xe.P + Xe.F * Ra, "Array", {
        find: function(t) {
            return Ia(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
    }), yr("find");
    var Ta = Rr(6), Ca = !0;
    "findIndex" in [] && Array(1).findIndex(function() {
        Ca = !1;
    }), Xe(Xe.P + Xe.F * Ca, "Array", {
        findIndex: function(t) {
            return Ta(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
    }), yr("findIndex"), Xe(Xe.P, "Array", {
        fill: Ue
    }), yr("fill");
    var Wa = g1.isFinite;
    Xe(Xe.S, "Number", {
        isFinite: function(t) {
            return "number" == typeof t && Wa(t);
        }
    });
    var Ua = Math.floor, Ka = function(t) {
        return !f1(t) && isFinite(t) && Ua(t) === t;
    }, Ba = Object.freeze({
        default: Ka,
        __moduleExports: Ka
    }), Da = Ba && Ka || Ba;
    Xe(Xe.S, "Number", {
        isInteger: Da
    });
    var Va = Math.abs;
    Xe(Xe.S, "Number", {
        isSafeInteger: function(t) {
            return Da(t) && 9007199254740991 >= Va(t);
        }
    }), Xe(Xe.S, "Number", {
        isNaN: function(t) {
            return t != t;
        }
    }), Xe(Xe.S, "Number", {
        EPSILON: Math.pow(2, -52)
    }), Xe(Xe.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    }), Xe(Xe.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    });
    var Ga = Math.log1p || function(t) {
        return (t = +t) > -0.00000001 && 0.00000001 > t ? t - t * t / 2 : Math.log(1 + t);
    }, Ja = Object.freeze({
        default: Ga,
        __moduleExports: Ga
    }), Ha = Ja && Ga || Ja, Ya = Math.sqrt, qa = Math.acosh;
    Xe(Xe.S + Xe.F * !(qa && 710 == Math.floor(qa(Number.MAX_VALUE)) && qa(1 / 0) == 1 / 0), "Math", {
        acosh: function(t) {
            return 1 > (t = +t) ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : Ha(t - 1 + Ya(t - 1) * Ya(t + 1));
        }
    });
    var Xa = Math.asinh;
    Xe(Xe.S + Xe.F * !(Xa && 1 / Xa(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? 0 > e ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
        }
    });
    var $a = Math.atanh;
    Xe(Xe.S + Xe.F * !($a && 0 > 1 / $a(-0)), "Math", {
        atanh: function(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
        }
    });
    var Qa = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : 0 > t ? -1 : 1;
    }, Za = Object.freeze({
        default: Qa,
        __moduleExports: Qa
    }), tc = Za && Qa || Za;
    Xe(Xe.S, "Math", {
        cbrt: function(t) {
            return tc(t = +t) * Math.pow(Math.abs(t), 1 / 3);
        }
    }), Xe(Xe.S, "Math", {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32;
        }
    });
    var ec = Math.exp;
    Xe(Xe.S, "Math", {
        cosh: function(t) {
            return (ec(t = +t) + ec(-t)) / 2;
        }
    });
    var nc = Math.expm1, rc = !nc || nc(10) > 22025.465794806718 || 22025.465794806718 > nc(10) || -0.00000000000000002 != nc(-0.00000000000000002) ? function(t) {
        return 0 == (t = +t) ? t : t > -0.000001 && 0.000001 > t ? t + t * t / 2 : Math.exp(t) - 1;
    } : nc, oc = Object.freeze({
        default: rc,
        __moduleExports: rc
    }), ic = oc && rc || oc;
    Xe(Xe.S + Xe.F * (ic != Math.expm1), "Math", {
        expm1: ic
    });
    var uc = Math.pow, ac = uc(2, -52), cc = uc(2, -23), fc = uc(2, 127) * (2 - cc), sc = uc(2, -126), lc = Math.fround || function(t) {
        var e, n, r = Math.abs(t), o = tc(t);
        return sc > r ? o * (r / sc / cc + 1 / ac - 1 / ac) * sc * cc : (n = (e = (1 + cc / ac) * r) - (e - r)) > fc || n != n ? o * (1 / 0) : o * n;
    }, hc = Object.freeze({
        default: lc,
        __moduleExports: lc
    });
    Xe(Xe.S, "Math", {
        fround: hc && lc || hc
    });
    var dc = Math.abs;
    Xe(Xe.S, "Math", {
        hypot: function(t, e) {
            for(var n, r, o = 0, i = 0, u = arguments.length, a = 0; u > i;)(n = dc(arguments[i++])) > a ? (o = o * (r = a / n) * r + 1, a = n) : o += n > 0 ? (r = n / a) * r : n;
            return a === 1 / 0 ? 1 / 0 : a * Math.sqrt(o);
        }
    });
    var vc = Math.imul;
    Xe(Xe.S + Xe.F * v1(function() {
        return -5 != vc(4294967295, 5) || 2 != vc.length;
    }), "Math", {
        imul: function(t, e) {
            var n = +t, r = +e, o = 65535 & n, i = 65535 & r;
            return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0);
        }
    }), Xe(Xe.S, "Math", {
        log1p: Ha
    }), Xe(Xe.S, "Math", {
        log10: function(t) {
            return Math.log(t) * Math.LOG10E;
        }
    }), Xe(Xe.S, "Math", {
        log2: function(t) {
            return Math.log(t) / Math.LN2;
        }
    }), Xe(Xe.S, "Math", {
        sign: tc
    });
    var pc = Math.exp;
    Xe(Xe.S + Xe.F * v1(function() {
        return -0.00000000000000002 != !Math.sinh(-0.00000000000000002);
    }), "Math", {
        sinh: function(t) {
            return 1 > Math.abs(t = +t) ? (ic(t) - ic(-t)) / 2 : (pc(t - 1) - pc(-t - 1)) * (Math.E / 2);
        }
    });
    var yc = Math.exp;
    Xe(Xe.S, "Math", {
        tanh: function(t) {
            var e = ic(t = +t), n = ic(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (yc(t) + yc(-t));
        }
    }), Xe(Xe.S, "Math", {
        trunc: function(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t);
        }
    });
    var gc = ce(!0);
    Xe(Xe.P, "Array", {
        includes: function(t) {
            return gc(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
    }), yr("includes");
    var _c = zr.f, mc = function(t) {
        return function(e) {
            for(var n, r = $t1(e), o = bn(r), i = o.length, u = 0, a = []; i > u;)_c.call(r, n = o[u++]) && a.push(t ? [
                n,
                r[n]
            ] : r[n]);
            return a;
        };
    }, bc = Object.freeze({
        default: mc,
        __moduleExports: mc
    }), Ec = bc && mc || bc, Oc = Ec(!1);
    Xe(Xe.S, "Object", {
        values: function(t) {
            return Oc(t);
        }
    });
    var jc = Ec(!0);
    Xe(Xe.S, "Object", {
        entries: function(t) {
            return jc(t);
        }
    }), Xe(Xe.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for(var e, n, r = $t1(t), o = Wr.f, i = ni(r), u = {
            }, a = 0; i.length > a;)void 0 !== (n = o(r, e = i[a++])) && Fa(u, e, n);
            return u;
        }
    });
    var wc = function(t, e, n, r) {
        var o = Vt1(t) + "", i = o.length, u = void 0 === n ? " " : n + "", a = kt(e);
        if (i >= a || "" == u) return o;
        var c = a - i, f = da.call(u, Math.ceil(c / u.length));
        return f.length > c && (f = f.slice(0, c)), r ? f + o : o + f;
    }, xc = Object.freeze({
        default: wc,
        __moduleExports: wc
    }), Sc = g1.navigator, Ac = Sc && Sc.userAgent || "", Mc = Object.freeze({
        default: Ac,
        __moduleExports: Ac
    }), zc = xc && wc || xc, Nc = Mc && Ac || Mc;
    Xe(Xe.P + Xe.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Nc), "String", {
        padStart: function(t) {
            return zc(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
        }
    }), Xe(Xe.P + Xe.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Nc), "String", {
        padEnd: function(t) {
            return zc(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
        }
    });
    var Pc = [].slice, kc = function(t) {
        return function(e, n) {
            var r = arguments.length > 2, o = !!r && Pc.call(arguments, 2);
            return t(r ? function() {
                ("function" == typeof e ? e : Function(e)).apply(this, o);
            } : e, n);
        };
    };
    Xe(Xe.G + Xe.B + Xe.F * /MSIE .\./.test(Nc), {
        setTimeout: kc(g1.setTimeout),
        setInterval: kc(g1.setInterval)
    }), Xe(Xe.G + Xe.B, {
        setImmediate: _i.set,
        clearImmediate: _i.clear
    });
    for(var Lc = ze("iterator"), Fc = ze("toStringTag"), Ic = dn.Array, Rc = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, Tc = bn(Rc), Cc = 0; Tc.length > Cc; Cc++){
        var Wc, Uc = Tc[Cc], Kc = Rc[Uc], Bc = g1[Uc], Dc = Bc && Bc.prototype;
        if (Dc && (Dc[Lc] || Y(Dc, Lc, Ic), Dc[Fc] || Y(Dc, Fc, Uc), dn[Uc] = Ic, Kc)) for(Wc in mr)Dc[Wc] || it1(Dc, Wc, mr[Wc], !0);
    }
    n1(function(t49) {
        !function(e17) {
            var n21, r12 = Object.prototype, o9 = r12.hasOwnProperty, i9 = "function" == typeof Symbol ? Symbol : {
            }, u7 = i9.iterator || "@@iterator", a5 = i9.asyncIterator || "@@asyncIterator", c6 = i9.toStringTag || "@@toStringTag", f4 = e17.regeneratorRuntime;
            if (f4) t49.exports = f4;
            else {
                (f4 = e17.regeneratorRuntime = t49.exports).wrap = m;
                var s = "suspendedStart", l = "suspendedYield", h = "executing", d = "completed", v = {
                }, p = {
                };
                p[u7] = function() {
                    return this;
                };
                var y = Object.getPrototypeOf, g = y && y(y(N([])));
                g && g !== r12 && o9.call(g, u7) && (p = g);
                var _ = j.prototype = E.prototype = Object.create(p);
                O.prototype = _.constructor = j, j.constructor = O, j[c6] = O.displayName = "GeneratorFunction", f4.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === O || "GeneratorFunction" === (e.displayName || e.name));
                }, f4.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, j) : (t.__proto__ = j, c6 in t || (t[c6] = "GeneratorFunction")), t.prototype = Object.create(_), t;
                }, f4.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, w(x.prototype), x.prototype[a5] = function() {
                    return this;
                }, f4.AsyncIterator = x, f4.async = function(t50, e, n, r) {
                    var o = new x(m(t50, e, n, r));
                    return f4.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                        return t.done ? t.value : o.next();
                    });
                }, w(_), _[c6] = "Generator", _[u7] = function() {
                    return this;
                }, _.toString = function() {
                    return "[object Generator]";
                }, f4.keys = function(t) {
                    var e = [];
                    for(var n22 in t)e.push(n22);
                    return e.reverse(), function n() {
                        for(; e.length;){
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, f4.values = N, z.prototype = {
                    constructor: z,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n21, this.done = !1, this.delegate = null, this.method = "next", this.arg = n21, this.tryEntries.forEach(M), !t) for(var e in this)"t" === e.charAt(0) && o9.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n21);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function r13(r, o) {
                            return a.type = "throw", a.arg = t, e.next = r, o && (e.method = "next", e.arg = n21), !!o;
                        }
                        for(var i = this.tryEntries.length - 1; i >= 0; --i){
                            var u = this.tryEntries[i], a = u.completion;
                            if ("root" === u.tryLoc) return r13("end");
                            if (this.prev >= u.tryLoc) {
                                var c = o9.call(u, "catchLoc"), f = o9.call(u, "finallyLoc");
                                if (c && f) {
                                    if (u.catchLoc > this.prev) return r13(u.catchLoc, !0);
                                    if (u.finallyLoc > this.prev) return r13(u.finallyLoc);
                                } else if (c) {
                                    if (u.catchLoc > this.prev) return r13(u.catchLoc, !0);
                                } else {
                                    if (!f) throw Error("try statement without catch or finally");
                                    if (u.finallyLoc > this.prev) return r13(u.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for(var n = this.tryEntries.length - 1; n >= 0; --n){
                            var r = this.tryEntries[n];
                            if (this.prev >= r.tryLoc && o9.call(r, "finallyLoc") && r.finallyLoc > this.prev) {
                                var i = r;
                                break;
                            }
                        }
                        !i || "break" !== t && "continue" !== t || i.tryLoc > e || e > i.finallyLoc || (i = null);
                        var u = i ? i.completion : {
                        };
                        return u.type = t, u.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(u);
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
                    },
                    finish: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), M(n), v;
                        }
                    },
                    catch: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    M(n);
                                }
                                return o;
                            }
                        }
                        throw Error("illegal catch attempt");
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: N(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n21), v;
                    }
                };
            }
            function m(t51, e18, n23, r14) {
                var o10 = Object.create((e18 && e18.prototype instanceof E ? e18 : E).prototype), i10 = new z(r14 || []);
                return o10._invoke = (function(t, e, n) {
                    var r = s;
                    return function(o, i) {
                        if (r === h) throw Error("Generator is already running");
                        if (r === d) {
                            if ("throw" === o) throw i;
                            return P();
                        }
                        for(n.method = o, n.arg = i;;){
                            var u = n.delegate;
                            if (u) {
                                var a = S(u, n);
                                if (a) {
                                    if (a === v) continue;
                                    return a;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === s) throw r = d, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = h;
                            var c = b(t, e, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? d : l, c.arg === v) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                };
                            }
                            "throw" === c.type && (r = d, n.method = "throw", n.arg = c.arg);
                        }
                    };
                })(t51, n23, i10), o10;
            }
            function b(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t52) {
                    return {
                        type: "throw",
                        arg: t52
                    };
                }
            }
            function E() {
            }
            function O() {
            }
            function j() {
            }
            function w(t53) {
                [
                    "next",
                    "throw",
                    "return"
                ].forEach(function(e) {
                    t53[e] = function(t) {
                        return this._invoke(e, t);
                    };
                });
            }
            function x(t54) {
                function n(e, r, i, u) {
                    var a = b(t54[e], t54, r);
                    if ("throw" !== a.type) {
                        var c = a.arg, f = c.value;
                        return f && "object" == typeof f && o9.call(f, "__await") ? Promise.resolve(f.__await).then(function(t) {
                            n("next", t, i, u);
                        }, function(t) {
                            n("throw", t, i, u);
                        }) : Promise.resolve(f).then(function(t) {
                            c.value = t, i(c);
                        }, u);
                    }
                    u(a.arg);
                }
                var r15;
                "object" == typeof e17.process && e17.process.domain && (n = e17.process.domain.bind(n)), this._invoke = function(t, e) {
                    function o11() {
                        return new Promise(function(r, o) {
                            n(t, e, r, o);
                        });
                    }
                    return r15 = r15 ? r15.then(o11, o11) : o11();
                };
            }
            function S(t, e) {
                var r = t.iterator[e.method];
                if (r === n21) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n21, S(t, e), "throw" === e.method)) return v;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return v;
                }
                var o = b(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, v;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n21), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v);
            }
            function A(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
            }
            function M(t) {
                var e = t.completion || {
                };
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function z(t) {
                this.tryEntries = [
                    {
                        tryLoc: "root"
                    }
                ], t.forEach(A, this), this.reset(!0);
            }
            function N(t) {
                if (t) {
                    var e19 = t[u7];
                    if (e19) return e19.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, i = function e() {
                            for(; ++r < t.length;)if (o9.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = n21, e.done = !0, e;
                        };
                        return i.next = i;
                    }
                }
                return {
                    next: P
                };
            }
            function P() {
                return {
                    value: n21,
                    done: !0
                };
            }
        }("object" == typeof e1 ? e1 : "object" == typeof window ? window : "object" == typeof self ? self : e1);
    });
    var Vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Gc = function() {
        return function(t55, e21) {
            if (Array.isArray(t55)) return t55;
            if (Symbol.iterator in Object(t55)) return (function(t, e) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for(var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                } catch (t56) {
                    o = !0, i = t56;
                } finally{
                    try {
                        !r && a.return && a.return();
                    } finally{
                        if (o) throw i;
                    }
                }
                return n;
            })(t55, e21);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(), Jc = function(t) {
        if (Array.isArray(t)) {
            for(var e = 0, n = Array(t.length); t.length > e; e++)n[e] = t[e];
            return n;
        }
        return Array.from(t);
    };
    function Hc(t) {
        return null === t ? "null" : t !== Object(t) ? void 0 === t ? "undefined" : Vc(t) : ({
        }).toString.call(t).slice(8, -1).toLowerCase();
    }
    function Yc(t) {
        return "string" !== Hc(t) || !t.length;
    }
    function qc() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments[1], n = arguments[2];
        if (Yc(t)) return !1;
        var r = t.charCodeAt(0);
        return r >= e && n >= r;
    }
    var Xc = {
        HIRAGANA: "toHiragana",
        KATAKANA: "toKatakana"
    }, $c = {
        HEPBURN: "hepburn"
    }, Qc = {
        useObsoleteKana: !1,
        passRomaji: !1,
        upcaseKatakana: !1,
        ignoreCase: !1,
        IMEMode: !1,
        romanization: $c.HEPBURN
    }, Zc = 65, tf = 90, ef = 12353, nf = 12438, rf = 12449, of = 12540, uf = 19968, af = 40879, cf = 12540, ff = 12539, sf = [
        65377,
        65381
    ], lf = [
        [
            12288,
            12351
        ],
        sf,
        [
            12539,
            12540
        ],
        [
            65281,
            65295
        ],
        [
            65306,
            65311
        ],
        [
            65339,
            65343
        ],
        [
            65371,
            65376
        ],
        [
            65504,
            65518
        ]
    ], hf = [].concat([
        [
            12352,
            12447
        ],
        [
            12448,
            12543
        ],
        sf,
        [
            65382,
            65439
        ]
    ], lf, [
        [
            65313,
            65338
        ],
        [
            65345,
            65370
        ],
        [
            65296,
            65305
        ],
        [
            19968,
            40959
        ],
        [
            13312,
            19903
        ]
    ]), df = [
        [
            0,
            127
        ]
    ].concat([
        [
            256,
            257
        ],
        [
            274,
            275
        ],
        [
            298,
            299
        ],
        [
            332,
            333
        ],
        [
            362,
            363
        ]
    ]), vf = [
        [
            32,
            47
        ],
        [
            58,
            63
        ],
        [
            91,
            96
        ],
        [
            123,
            126
        ]
    ].concat([
        [
            8216,
            8217
        ],
        [
            8220,
            8221
        ]
    ]);
    function pf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return hf.some(function(e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1]);
        });
    }
    function yf() {
        var t57 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments[1], n = "regexp" === Hc(e);
        return !Yc(t57) && [].concat(Jc(t57)).every(function(t) {
            var r = pf(t);
            return n ? r || e.test(t) : r;
        });
    }
    var gf = function() {
        return Object.assign({
        }, Qc, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        });
    };
    function _f(t58, e22, n) {
        var r16 = e22;
        function o(t59, e23) {
            var i11 = t59.charAt(0);
            return (function t60(e24, r, i, u) {
                if (!r) return n || 1 === Object.keys(e24).length ? e24[""] ? [
                    [
                        i,
                        u,
                        e24[""]
                    ]
                ] : [] : [
                    [
                        i,
                        u,
                        null
                    ]
                ];
                if (1 === Object.keys(e24).length) return [
                    [
                        i,
                        u,
                        e24[""]
                    ]
                ].concat(o(r, u));
                var a = function(t, e) {
                    if (void 0 !== t[e]) return Object.assign({
                        "": t[""] + e
                    }, t[e]);
                }(e24, r.charAt(0));
                if (void 0 === a) return [
                    [
                        i,
                        u,
                        e24[""]
                    ]
                ].concat(o(r, u));
                return t60(a, r.slice(1), i, u + 1);
            })(Object.assign({
                "": i11
            }, r16[i11]), t59.slice(1), e23, e23 + 1);
        }
        return o(t58, 0);
    }
    function mf(t61) {
        return Object.entries(t61).reduce(function(t, e) {
            var n = Gc(e, 2), r = n[0], o = n[1], i = "string" === Hc(o);
            return t[r] = i ? {
                "": o
            } : mf(o), t;
        }, {
        });
    }
    function bf(t62, e) {
        return e.split("").reduce(function(t, e) {
            return void 0 === t[e] && (t[e] = {
            }), t[e];
        }, t62);
    }
    function Ef() {
        var t63 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        }, e25 = {
        };
        return "object" === Hc(t63) && Object.entries(t63).forEach(function(t) {
            var n = Gc(t, 2), r = n[1], o = e25;
            n[0].split("").forEach(function(t) {
                void 0 === o[t] && (o[t] = {
                }), o = o[t];
            }), o[""] = r;
        }), function(t64) {
            return (function t(e, n24) {
                return void 0 === e || "string" === Hc(e) ? n24 : Object.entries(n24).reduce(function(n, r) {
                    var o = Gc(r, 2), i = o[0];
                    return n[i] = t(e[i], o[1]), n;
                }, e);
            })(JSON.parse(JSON.stringify(t64)), e25);
        };
    }
    function Of(t, e) {
        return e ? "function" === Hc(e) ? e(t) : Ef(e)(t) : t;
    }
    var jf = {
        a: "あ",
        i: "い",
        u: "う",
        e: "え",
        o: "お",
        k: {
            a: "か",
            i: "き",
            u: "く",
            e: "け",
            o: "こ"
        },
        s: {
            a: "さ",
            i: "し",
            u: "す",
            e: "せ",
            o: "そ"
        },
        t: {
            a: "た",
            i: "ち",
            u: "つ",
            e: "て",
            o: "と"
        },
        n: {
            a: "な",
            i: "に",
            u: "ぬ",
            e: "ね",
            o: "の"
        },
        h: {
            a: "は",
            i: "ひ",
            u: "ふ",
            e: "へ",
            o: "ほ"
        },
        m: {
            a: "ま",
            i: "み",
            u: "む",
            e: "め",
            o: "も"
        },
        y: {
            a: "や",
            u: "ゆ",
            o: "よ"
        },
        r: {
            a: "ら",
            i: "り",
            u: "る",
            e: "れ",
            o: "ろ"
        },
        w: {
            a: "わ",
            i: "ゐ",
            e: "ゑ",
            o: "を"
        },
        g: {
            a: "が",
            i: "ぎ",
            u: "ぐ",
            e: "げ",
            o: "ご"
        },
        z: {
            a: "ざ",
            i: "じ",
            u: "ず",
            e: "ぜ",
            o: "ぞ"
        },
        d: {
            a: "だ",
            i: "ぢ",
            u: "づ",
            e: "で",
            o: "ど"
        },
        b: {
            a: "ば",
            i: "び",
            u: "ぶ",
            e: "べ",
            o: "ぼ"
        },
        p: {
            a: "ぱ",
            i: "ぴ",
            u: "ぷ",
            e: "ぺ",
            o: "ぽ"
        },
        v: {
            a: "ゔぁ",
            i: "ゔぃ",
            u: "ゔ",
            e: "ゔぇ",
            o: "ゔぉ"
        }
    }, wf = {
        ".": "。",
        ",": "、",
        ":": "：",
        "/": "・",
        "!": "！",
        "?": "？",
        "~": "〜",
        "-": "ー",
        "‘": "「",
        "’": "」",
        "“": "『",
        "”": "』",
        "[": "［",
        "]": "］",
        "(": "（",
        ")": "）",
        "{": "｛",
        "}": "｝"
    }, xf = {
        k: "き",
        s: "し",
        t: "ち",
        n: "に",
        h: "ひ",
        m: "み",
        r: "り",
        g: "ぎ",
        z: "じ",
        d: "ぢ",
        b: "び",
        p: "ぴ",
        v: "ゔ",
        q: "く",
        f: "ふ"
    }, Sf = {
        ya: "ゃ",
        yi: "ぃ",
        yu: "ゅ",
        ye: "ぇ",
        yo: "ょ"
    }, Af = {
        a: "ぁ",
        i: "ぃ",
        u: "ぅ",
        e: "ぇ",
        o: "ぉ"
    }, Mf = {
        sh: "sy",
        ch: "ty",
        cy: "ty",
        chy: "ty",
        shy: "sy",
        j: "zy",
        jy: "zy",
        shi: "si",
        chi: "ti",
        tsu: "tu",
        ji: "zi",
        fu: "hu"
    }, zf = Object.assign({
        tu: "っ",
        wa: "ゎ",
        ka: "ヵ",
        ke: "ヶ"
    }, Af, Sf), Nf = {
        yi: "い",
        wu: "う",
        ye: "いぇ",
        wi: "うぃ",
        we: "うぇ",
        kwa: "くぁ",
        whu: "う",
        tha: "てゃ",
        thu: "てゅ",
        tho: "てょ",
        dha: "でゃ",
        dhu: "でゅ",
        dho: "でょ"
    }, Pf = {
        wh: "う",
        qw: "く",
        q: "く",
        gw: "ぐ",
        sw: "す",
        ts: "つ",
        th: "て",
        tw: "と",
        dh: "で",
        dw: "ど",
        fw: "ふ",
        f: "ふ"
    };
    function kf() {
        var t65 = mf(jf), e26 = function(e) {
            return bf(t65, e);
        };
        return Object.entries(xf).forEach(function(t66) {
            var n25 = Gc(t66, 2), r = n25[0], o = n25[1];
            Object.entries(Sf).forEach(function(t) {
                var n = Gc(t, 2), i = n[1];
                e26(r + n[0])[""] = o + i;
            });
        }), Object.entries(wf).forEach(function(t) {
            var n = Gc(t, 2), r = n[1];
            e26(n[0])[""] = r;
        }), Object.entries(Pf).forEach(function(t67) {
            var n26 = Gc(t67, 2), r = n26[0], o = n26[1];
            Object.entries(Af).forEach(function(t) {
                var n = Gc(t, 2), i = n[1];
                e26(r + n[0])[""] = o + i;
            });
        }), [
            "n",
            "n'",
            "xn"
        ].forEach(function(t) {
            e26(t)[""] = "ん";
        }), t65.c = JSON.parse(JSON.stringify(t65.k)), Object.entries(Mf).forEach(function(t) {
            var n = Gc(t, 2), r = n[0], o = n[1], i = r.slice(0, r.length - 1), u = r.charAt(r.length - 1);
            e26(i)[u] = JSON.parse(JSON.stringify(e26(o)));
        }), Object.entries(zf).forEach(function(t68) {
            var n27, r17 = Gc(t68, 2), o12 = r17[0], i12 = r17[1], u = function(t) {
                return t.charAt(t.length - 1);
            }, a = function(t) {
                return t.slice(0, t.length - 1);
            }, c = e26("x" + o12);
            c[""] = i12, e26("l" + a(o12))[u(o12)] = c, (n27 = o12, [].concat(Jc(Object.entries(Mf)), [
                [
                    "c",
                    "k"
                ]
            ]).reduce(function(t, e) {
                var r = Gc(e, 2), o = r[0], i = r[1];
                return n27.startsWith(i) ? t.concat(n27.replace(i, o)) : t;
            }, [])).forEach(function(t) {
                [
                    "l",
                    "x"
                ].forEach(function(n) {
                    e26(n + a(t))[u(t)] = e26(n + o12);
                });
            });
        }), Object.entries(Nf).forEach(function(t) {
            var n = Gc(t, 2), r = n[1];
            e26(n[0])[""] = r;
        }), [].concat(Jc(Object.keys(xf)), [
            "c",
            "y",
            "w",
            "j"
        ]).forEach(function(e27) {
            var n28 = t65[e27];
            n28[e27] = (function t(e28) {
                return Object.entries(e28).reduce(function(e, n) {
                    var r = Gc(n, 2), o = r[0], i = r[1];
                    return e[o] = o ? t(i) : "っ" + i, e;
                }, {
                });
            })(n28);
        }), delete t65.n.n, Object.freeze(JSON.parse(JSON.stringify(t65)));
    }
    var Lf = null;
    var Ff = Ef({
        wi: "ゐ",
        we: "ゑ"
    });
    function If() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && qc(t, Zc, tf);
    }
    function Rf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && t.charCodeAt(0) === cf;
    }
    function Tf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && t.charCodeAt(0) === ff;
    }
    function Cf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && (!!Rf(t) || qc(t, ef, nf));
    }
    function Wf() {
        var t = [];
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split("").forEach(function(e) {
            if (Rf(e) || Tf(e)) t.push(e);
            else if (Cf(e)) {
                var n = e.charCodeAt(0) + (rf - ef);
                t.push(String.fromCharCode(n));
            } else t.push(e);
        }), t.join("");
    }
    function Uf() {
        var t69 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e29 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        }, n29 = arguments[2], r = void 0;
        return n29 ? r = e29 : n29 = Bf(r = gf(e29)), (function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            }, n = arguments[2];
            n || (n = Bf(e));
            return _f(t.toLowerCase(), n, !e.IMEMode);
        })(t69, r, n29).map(function(e) {
            var n = Gc(e, 3), o = n[0], i = n[1], u = n[2];
            if (null === u) return t69.slice(o);
            var a = r.IMEMode === Xc.HIRAGANA, c = r.IMEMode === Xc.KATAKANA || [].concat(Jc(t69.slice(o, i))).every(If);
            return a || !c ? u : Wf(u);
        }).join("");
    }
    var Kf = null;
    function Bf() {
        var t70 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        }, e30 = (null == Lf && (Lf = kf()), Lf);
        return e30 = t70.IMEMode ? (function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return e.n.n = {
                "": "ん"
            }, e.n[" "] = {
                "": "ん"
            }, e;
        })(e30) : e30, e30 = t70.useObsoleteKana ? Ff(e30) : e30, t70.customKanaMapping && (null == Kf && (Kf = Of(e30, t70.customKanaMapping)), e30 = Kf), e30;
    }
    var Df = [];
    function Vf(t71) {
        var e31 = Object.assign({
        }, gf(t71), {
            IMEMode: t71.IMEMode || !0
        }), n30 = Bf(e31), r18 = [].concat(Jc(Object.keys(n30)), Jc(Object.keys(n30).map(function(t) {
            return t.toUpperCase();
        })));
        return function(t72) {
            var o13 = t72.target;
            void 0 !== o13.value && "true" !== o13.dataset.ignoreComposition && (function(t73, e32, n31, r19, o14) {
                var i13 = function() {
                    var t74 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e33 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n32 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r20 = void 0, o15 = void 0, i = void 0;
                    if (0 === e33 && n32.includes(t74[0])) {
                        var u = function(t75, e) {
                            return [
                                ""
                            ].concat(Jc(Jf(t75, function(t) {
                                return e.includes(t) || !yf(t, /[0-9]/);
                            })));
                        }(t74, n32), a = Gc(u, 3);
                        r20 = a[0], o15 = a[1], i = a[2];
                    } else if (e33 > 0) {
                        var c = function() {
                            var t76 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = Jf([].concat(Jc(t76.slice(0, e))).reverse(), function(t) {
                                return !yf(t);
                            }), r = Gc(n, 2), o = r[0];
                            return [
                                r[1].reverse().join(""),
                                o.split("").reverse().join(""),
                                t76.slice(e)
                            ];
                        }(t74, e33), f = Gc(c, 3);
                        r20 = f[0], o15 = f[1], i = f[2];
                    } else {
                        var s = Jf(t74, function(t) {
                            return !n32.includes(t);
                        }), l = Gc(s, 2);
                        r20 = l[0];
                        var h = Jf(o15 = l[1], function(t) {
                            return !yf(t);
                        }), d = Gc(h, 2);
                        o15 = d[0], i = d[1];
                    }
                    return [
                        r20,
                        o15,
                        i
                    ];
                }(t73.value, t73.selectionEnd, r19), u8 = Gc(i13, 3), a6 = u8[0], c7 = u8[1], f5 = u8[2], s4 = Uf(c7, e32, n31);
                if (c7 !== s4) {
                    var l5 = a6.length + s4.length, h6 = a6 + s4 + f5;
                    t73.value = h6, f5.length ? setTimeout(function() {
                        return t73.setSelectionRange(l5, l5);
                    }, 1) : t73.setSelectionRange(l5, l5);
                } else t73.value;
            })(o13, e31, n30, r18);
        };
    }
    function Gf(t) {
        var e = t.type, n = t.target, r = t.data;
        /Mac/.test(window.navigator && window.navigator.platform) && ("compositionupdate" === e && yf(r) && (n.dataset.ignoreComposition = "true"), "compositionend" === e && (n.dataset.ignoreComposition = "false"));
    }
    function Jf() {
        for(var t77 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        }, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
            return !!t;
        }, n = [], r = t77.length, o = 0; r > o && e(t77[o], o);)n.push(t77[o]), o += 1;
        return [
            n.join(""),
            t77.slice(o)
        ];
    }
    var Hf = {
        input: function(t) {
            var e = t.target;
            return console.log("input:", {
                value: e.value,
                selectionStart: e.selectionStart,
                selectionEnd: e.selectionEnd
            });
        },
        compositionstart: function() {
            return console.log("compositionstart");
        },
        compositionupdate: function(t) {
            var e = t.target;
            return console.log("compositionupdate", {
                data: t.data,
                value: e.value,
                selectionStart: e.selectionStart,
                selectionEnd: e.selectionEnd
            });
        },
        compositionend: function() {
            return console.log("compositionend");
        }
    }, Yf = function(t) {
        Object.entries(Hf).forEach(function(e) {
            var n = Gc(e, 2);
            return t.addEventListener(n[0], n[1]);
        });
    }, qf = function(t) {
        Object.entries(Hf).forEach(function(e) {
            var n = Gc(e, 2);
            return t.removeEventListener(n[0], n[1]);
        });
    }, Xf = [
        "TEXTAREA",
        "INPUT"
    ], $f = 0, Qf = function() {
        return $f += 1, "" + Date.now() + $f;
    };
    function Zf() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && df.some(function(e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1]);
        });
    }
    function ts() {
        var t78 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments[1], n = "regexp" === Hc(e);
        return !Yc(t78) && [].concat(Jc(t78)).every(function(t) {
            var r = Zf(t);
            return n ? r || e.test(t) : r;
        });
    }
    function es() {
        return qc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", rf, of);
    }
    function ns() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && (Cf(t) || es(t));
    }
    function rs() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(ns);
    }
    function os() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(Cf);
    }
    function is() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(es);
    }
    function us() {
        return qc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", uf, af);
    }
    function as() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && [].concat(Jc(t)).every(us);
    }
    function cs() {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            passKanji: !0
        }, e = [].concat(Jc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")), n = !1;
        return t.passKanji || (n = e.some(as)), (e.some(os) || e.some(is)) && e.some(ts) && !n;
    }
    var fs = function(t, e) {
        return Rf(t) && 1 > e;
    }, ss = function(t, e) {
        return Rf(t) && e > 0;
    }, ls = function(t) {
        return [
            "ヶ",
            "ヵ"
        ].includes(t);
    }, hs = {
        a: "あ",
        i: "い",
        u: "う",
        e: "え",
        o: "う"
    };
    function ds() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments[1], n = arguments[2], r = "";
        return t.split("").reduce(function(o, i, u) {
            if (Tf(i) || fs(i, u) || ls(i)) return o.concat(i);
            if (r && ss(i, u)) {
                var a = e(r).slice(-1);
                return es(t[u - 1]) && "o" === a && n ? o.concat("お") : o.concat(hs[a]);
            }
            if (!Rf(i) && es(i)) {
                var c = i.charCodeAt(0) + (ef - rf), f = String.fromCharCode(c);
                return r = f, o.concat(f);
            }
            return r = "", o.concat(i);
        }, []).join("");
    }
    var vs = null, ps = {
        "あ": "a",
        "い": "i",
        "う": "u",
        "え": "e",
        "お": "o",
        "か": "ka",
        "き": "ki",
        "く": "ku",
        "け": "ke",
        "こ": "ko",
        "さ": "sa",
        "し": "shi",
        "す": "su",
        "せ": "se",
        "そ": "so",
        "た": "ta",
        "ち": "chi",
        "つ": "tsu",
        "て": "te",
        "と": "to",
        "な": "na",
        "に": "ni",
        "ぬ": "nu",
        "ね": "ne",
        "の": "no",
        "は": "ha",
        "ひ": "hi",
        "ふ": "fu",
        "へ": "he",
        "ほ": "ho",
        "ま": "ma",
        "み": "mi",
        "む": "mu",
        "め": "me",
        "も": "mo",
        "ら": "ra",
        "り": "ri",
        "る": "ru",
        "れ": "re",
        "ろ": "ro",
        "や": "ya",
        "ゆ": "yu",
        "よ": "yo",
        "わ": "wa",
        "ゐ": "wi",
        "ゑ": "we",
        "を": "wo",
        "ん": "n",
        "が": "ga",
        "ぎ": "gi",
        "ぐ": "gu",
        "げ": "ge",
        "ご": "go",
        "ざ": "za",
        "じ": "ji",
        "ず": "zu",
        "ぜ": "ze",
        "ぞ": "zo",
        "だ": "da",
        "ぢ": "ji",
        "づ": "zu",
        "で": "de",
        "ど": "do",
        "ば": "ba",
        "び": "bi",
        "ぶ": "bu",
        "べ": "be",
        "ぼ": "bo",
        "ぱ": "pa",
        "ぴ": "pi",
        "ぷ": "pu",
        "ぺ": "pe",
        "ぽ": "po",
        "ゔぁ": "va",
        "ゔぃ": "vi",
        "ゔ": "vu",
        "ゔぇ": "ve",
        "ゔぉ": "vo"
    }, ys = {
        "。": ".",
        "、": ",",
        "：": ":",
        "・": "/",
        "！": "!",
        "？": "?",
        "〜": "~",
        "ー": "-",
        "「": "‘",
        "」": "’",
        "『": "“",
        "』": "”",
        "［": "[",
        "］": "]",
        "（": "(",
        "）": ")",
        "｛": "{",
        "｝": "}",
        "　": " "
    }, gs = [
        "あ",
        "い",
        "う",
        "え",
        "お",
        "や",
        "ゆ",
        "よ"
    ], _s = {
        "ゃ": "ya",
        "ゅ": "yu",
        "ょ": "yo"
    }, ms = {
        "ぃ": "yi",
        "ぇ": "ye"
    }, bs = {
        "ぁ": "a",
        "ぃ": "i",
        "ぅ": "u",
        "ぇ": "e",
        "ぉ": "o"
    }, Es = [
        "き",
        "に",
        "ひ",
        "み",
        "り",
        "ぎ",
        "び",
        "ぴ",
        "ゔ",
        "く",
        "ふ"
    ], Os = {
        "し": "sh",
        "ち": "ch",
        "じ": "j",
        "ぢ": "j"
    }, js = {
        "っ": "",
        "ゃ": "ya",
        "ゅ": "yu",
        "ょ": "yo",
        "ぁ": "a",
        "ぃ": "i",
        "ぅ": "u",
        "ぇ": "e",
        "ぉ": "o"
    }, ws = {
        b: "b",
        c: "t",
        d: "d",
        f: "f",
        g: "g",
        h: "h",
        j: "j",
        k: "k",
        m: "m",
        p: "p",
        q: "q",
        r: "r",
        s: "s",
        t: "t",
        v: "v",
        w: "w",
        x: "x",
        z: "z"
    };
    function xs() {
        var t79, e34, n33;
        return null == vs && (t79 = mf(ps), e34 = function(e) {
            return bf(t79, e);
        }, n33 = function(t, n) {
            e34(t)[""] = n;
        }, Object.entries(ys).forEach(function(t) {
            var n = Gc(t, 2), r = n[1];
            e34(n[0])[""] = r;
        }), [].concat(Jc(Object.entries(_s)), Jc(Object.entries(bs))).forEach(function(t) {
            var e = Gc(t, 2);
            n33(e[0], e[1]);
        }), Es.forEach(function(t) {
            var r = e34(t)[""][0];
            Object.entries(_s).forEach(function(e) {
                var o = Gc(e, 2);
                n33(t + o[0], r + o[1]);
            }), Object.entries(ms).forEach(function(e) {
                var o = Gc(e, 2);
                n33(t + o[0], r + o[1]);
            });
        }), Object.entries(Os).forEach(function(t80) {
            var e35 = Gc(t80, 2), r = e35[0], o = e35[1];
            Object.entries(_s).forEach(function(t) {
                var e = Gc(t, 2);
                n33(r + e[0], o + e[1][1]);
            }), n33(r + "ぃ", o + "yi"), n33(r + "ぇ", o + "e");
        }), t79["っ"] = (function t(e36) {
            return Object.entries(e36).reduce(function(e, n) {
                var r = Gc(n, 2), o = r[0], i = r[1];
                if (o) e[o] = t(i);
                else {
                    var u = i.charAt(0);
                    e[o] = Object.keys(ws).includes(u) ? ws[u] + i : i;
                }
                return e;
            }, {
            });
        })(t79), Object.entries(js).forEach(function(t) {
            var e = Gc(t, 2);
            n33(e[0], e[1]);
        }), gs.forEach(function(t) {
            n33("ん" + t, "n'" + e34(t)[""]);
        }), vs = Object.freeze(JSON.parse(JSON.stringify(t79)))), vs;
    }
    function Ss() {
        var t81 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e37 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        }, n34 = gf(e37);
        return (function(t82, e) {
            var n = function(t) {
                switch(t.romanization){
                    case $c.HEPBURN:
                        return xs();
                    default:
                        return {
                        };
                }
            }(e);
            e.customRomajiMapping && (null == As && (As = Of(n, e.customRomajiMapping)), n = As);
            return _f(ds(t82, Ss, !0), n, !e.IMEMode);
        })(t81, n34).map(function(n) {
            var r = Gc(n, 3), o = r[2];
            return e37.upcaseKatakana && is(t81.slice(r[0], r[1])) ? o.toUpperCase() : o;
        }).join("");
    }
    var As = null;
    function Ms() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && vf.some(function(e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1]);
        });
    }
    function zs() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return !Yc(t) && lf.some(function(e) {
            var n = Gc(e, 2);
            return qc(t, n[0], n[1]);
        });
    }
    var Ns = function(t) {
        return " " === t;
    }, Ps = function(t) {
        return "　" === t;
    }, ks = function(t) {
        return /[０-９]/.test(t);
    }, Ls = function(t) {
        return /[0-9]/.test(t);
    }, Fs = {
        EN: "en",
        JA: "ja",
        EN_NUM: "englishNumeral",
        JA_NUM: "japaneseNumeral",
        EN_PUNC: "englishPunctuation",
        JA_PUNC: "japanesePunctuation",
        KANJI: "kanji",
        HIRAGANA: "hiragana",
        KATAKANA: "katakana",
        SPACE: "space",
        OTHER: "other"
    };
    function Is(t) {
        var e = Fs.EN, n = Fs.JA, r = Fs.EN_NUM, o = Fs.JA_NUM, i = Fs.EN_PUNC, u = Fs.JA_PUNC, a = Fs.KANJI, c = Fs.HIRAGANA, f = Fs.KATAKANA, s = Fs.SPACE, l = Fs.OTHER;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) switch(!0){
            case ks(t):
            case Ls(t):
                return l;
            case Ns(t):
                return e;
            case Ms(t):
                return l;
            case Ps(t):
                return n;
            case zs(t):
                return l;
            case pf(t):
                return n;
            case Zf(t):
                return e;
            default:
                return l;
        }
        else switch(!0){
            case Ps(t):
            case Ns(t):
                return s;
            case ks(t):
                return o;
            case Ls(t):
                return r;
            case Ms(t):
                return i;
            case zs(t):
                return u;
            case us(t):
                return a;
            case Cf(t):
                return c;
            case es(t):
                return f;
            case pf(t):
                return n;
            case Zf(t):
                return e;
            default:
                return l;
        }
    }
    function Rs(t83) {
        var e38 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        }, n35 = e38.compact, r = void 0 !== n35 && n35, o16 = e38.detailed, i = void 0 !== o16 && o16;
        if (null == t83 || Yc(t83)) return [];
        var u9 = [].concat(Jc(t83)), a = u9.shift(), c = Is(a, r);
        return u9.reduce(function(t, e) {
            var n = Is(e, r), o = n === c;
            c = n;
            var u = e;
            return o && (u = (i ? t.pop().value : t.pop()) + u), t.concat(i ? {
                type: n,
                value: u
            } : u);
        }, [
            a = i ? {
                type: c,
                value: a
            } : a
        ]);
    }
    var Ts = function(t, e) {
        return e && !rs(t[0]);
    }, Cs = function(t, e) {
        return !e && !rs(t[t.length - 1]);
    }, Ws = function(t, e) {
        return e && ![].concat(Jc(e)).some(as) || !e && rs(t);
    };
    t1.bind = function() {
        var t84 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        }, e39 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        }, n36 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!Xf.includes(t84.nodeName)) throw Error("Element provided to Wanakana bind() was not a valid input or textarea element.\n Received: (" + JSON.stringify(t84) + ")");
        var r = Vf(e39), o = Qf();
        t84.setAttribute("data-wanakana-id", o), t84.setAttribute("lang", "ja"), t84.setAttribute("autoCapitalize", "none"), t84.setAttribute("autoCorrect", "off"), t84.setAttribute("autoComplete", "off"), t84.setAttribute("spellCheck", "false"), t84.addEventListener("input", r), t84.addEventListener("compositionupdate", Gf), t84.addEventListener("compositionend", Gf), (function(t, e, n) {
            Df = Df.concat({
                id: t,
                inputHandler: e,
                compositionHandler: n
            });
        })(o, r, Gf), !0 === n36 && Yf(t84);
    }, t1.unbind = function(t85) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = (e = t85) && Df.find(function(t) {
            return t.id === e.getAttribute("data-wanakana-id");
        });
        if (null == r) throw Error("Element provided to Wanakana unbind() had no listener registered.\n Received: " + JSON.stringify(t85));
        var o, i = r.inputHandler, u = r.compositionHandler;
        t85.removeAttribute("data-wanakana-id"), t85.removeAttribute("data-ignore-composition"), t85.removeEventListener("input", i), t85.removeEventListener("compositionstart", u), t85.removeEventListener("compositionupdate", u), t85.removeEventListener("compositionend", u), o = r.id, Df = Df.filter(function(t) {
            return t.id !== o;
        }), !0 === n && qf(t85);
    }, t1.isRomaji = ts, t1.isJapanese = yf, t1.isKana = rs, t1.isHiragana = os, t1.isKatakana = is, t1.isMixed = cs, t1.isKanji = as, t1.toRomaji = Ss, t1.toKana = Uf, t1.toHiragana = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = gf(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        });
        return e.passRomaji ? ds(t, Ss) : cs(t, {
            passKanji: !0
        }) ? Uf(ds(t, Ss).toLowerCase(), e) : ts(t) || Ms(t) ? Uf(t.toLowerCase(), e) : ds(t, Ss);
    }, t1.toKatakana = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = gf(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        });
        return e.passRomaji ? Wf(t) : cs(t) || ts(t) || Ms(t) ? Wf(Uf(t.toLowerCase(), e)) : Wf(t);
    }, t1.stripOkurigana = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        }, n = e.leading, r = void 0 !== n && n, o = e.matchKanji, i = void 0 === o ? "" : o;
        if (!yf(t) || Ts(t, r) || Cs(t, r) || Ws(t, i)) return t;
        var u = i || t, a = RegExp(r ? "^" + Rs(u).shift() : Rs(u).pop() + "$");
        return t.replace(a, "");
    }, t1.tokenize = Rs, t1.VERSION = "4.0.2", t1.TO_KANA_METHODS = Xc, t1.ROMANIZATIONS = $c, Object.defineProperty(t1, "__esModule", {
        value: !0
    });
});

},{}],"ltht9":[function(require,module,exports) {
module.exports = JSON.parse("[\"げきてき\",\"ようけん\",\"じっさい\",\"たいやく\",\"ばっきん\",\"てきよう\",\"めいしょ\",\"ぜんよう\",\"すけーと\",\"ちらかす\",\"かんとう\",\"おりおり\",\"どうじん\",\"ちゃのま\",\"しゃーぷ\",\"とくじゅ\",\"れいはい\",\"かくやす\",\"よみもの\",\"とれーす\",\"こんめい\",\"しつれい\",\"ごうほう\",\"けついん\",\"せしゅう\",\"しんぱい\",\"でいすい\",\"ろんこく\",\"つめたい\",\"ごぞんじ\",\"せいおう\",\"しんぞう\",\"ざちょう\",\"こぎって\",\"ごうばん\",\"つながり\",\"たにぞこ\",\"ちかごろ\",\"よういく\",\"のりかえ\",\"まぎれる\",\"こうはい\",\"ふゆもの\",\"いしずえ\",\"りきとう\",\"ぶんがく\",\"ぎょるい\",\"にくたい\",\"きゅりー\",\"せいねん\",\"えんたい\",\"しゅだん\",\"みんえい\",\"だんどり\",\"もにたー\",\"まーぶる\",\"おどおど\",\"だいやく\",\"あわれむ\",\"いとしい\",\"けっそん\",\"へんかく\",\"うずめる\",\"さんぜん\",\"はつゆき\",\"くろまく\",\"こうれつ\",\"りょこう\",\"ぶれーか\",\"かさなる\",\"すなはま\",\"けっしん\",\"ちかぢか\",\"ねんぽう\",\"といえば\",\"かいがん\",\"ほんどう\",\"いちいち\",\"ほしぞら\",\"むーらん\",\"ざわざわ\",\"しょうり\",\"すっぽり\",\"じょれつ\",\"おいこみ\",\"むちゅう\",\"きっちん\",\"ぶれーん\",\"ぶんみん\",\"だんそう\",\"にんまえ\",\"れつあく\",\"こうとう\",\"ゆうれつ\",\"ちょうわ\",\"にっかん\",\"じゅんし\",\"かちょう\",\"がくどう\",\"えすてる\",\"ばあさん\",\"よみかき\",\"うるおう\",\"きのせい\",\"けっして\",\"ほんぽう\",\"せりあう\",\"ろくおん\",\"かんけつ\",\"せきしつ\",\"まいぼつ\",\"ぶらんち\",\"いまにも\",\"えをかく\",\"どんどん\",\"しんらい\",\"きんにく\",\"するべき\",\"がいまい\",\"おさなご\",\"げしゅく\",\"やくがい\",\"りーまん\",\"かんぷう\",\"どうおん\",\"こんせん\",\"たんぱく\",\"わりだか\",\"いちおう\",\"すぷーん\",\"うぃんど\",\"まかせる\",\"あれほど\",\"えなじー\",\"ふくすけ\",\"かいぼう\",\"さんせき\",\"ざつおん\",\"ぼうだい\",\"おちつき\",\"かりゅう\",\"めざめる\",\"うえじに\",\"ここじん\",\"ちぎれる\",\"いちぐう\",\"おーぶん\",\"さんこう\",\"てれほん\",\"くうかん\",\"ようがん\",\"へいこう\",\"おかわり\",\"それほど\",\"すいしん\",\"しょうむ\",\"ゆーかり\",\"えいかん\",\"れいぐう\",\"どなたか\",\"ぶきよう\",\"ほうせい\",\"かべがみ\",\"えんだか\",\"りさーち\",\"さくらん\",\"しんぼく\",\"えなめる\",\"はくはつ\",\"じゃんぼ\",\"らいおん\",\"とくせん\",\"せれくと\",\"てきすと\",\"へんこう\",\"ぎょぐん\",\"げんばく\",\"ばいやー\",\"つきそい\",\"うちうみ\",\"しょえん\",\"ばちかん\",\"かみさま\",\"あくとく\",\"じんけん\",\"もんだい\",\"へだたり\",\"がんかい\",\"ようやく\",\"ごじゅう\",\"げきげん\",\"うちわけ\",\"そっこく\",\"みずわり\",\"まいすう\",\"ぞっこう\",\"ざいげん\",\"ていおん\",\"ひこうき\",\"こっそり\",\"はっぴー\",\"ちょうし\",\"ほうもつ\",\"すみつき\",\"ぞんざい\",\"おもかげ\",\"ほすぴす\",\"でさーる\",\"かなしむ\",\"ようぼう\",\"しのにむ\",\"おとろえ\",\"だんねつ\",\"ひきかえ\",\"あんてな\",\"りっこく\",\"れびゅー\",\"まいかい\",\"あだると\",\"えんぽう\",\"じゅけい\",\"だんゆう\",\"しゅうぎ\",\"ひりょう\",\"ねんしょ\",\"りっぷく\",\"ぜんいん\",\"ほくせい\",\"のうえん\",\"はんする\",\"つりばり\",\"ゆったり\",\"めいはく\",\"いちだん\",\"ひがえり\",\"うつむく\",\"からっぽ\",\"けつじょ\",\"さくもつ\",\"てっこつ\",\"ましーん\",\"おっかけ\",\"さかいめ\",\"はやばや\",\"あんてい\",\"ざんにん\",\"へいまく\",\"たいない\",\"せっきん\",\"りりーす\",\"とびだす\",\"ぎじどう\",\"はんそく\",\"しゅーる\",\"せくたー\",\"かけひき\",\"ふしょう\",\"そーらー\",\"びれっじ\",\"なかよし\",\"ふんすい\",\"ぱーかー\",\"めいれい\",\"こうごう\",\"もよおし\",\"ていへん\",\"まんるい\",\"ぎじゅつ\",\"せいしき\",\"えいやく\",\"せきぐん\",\"いつわる\",\"りゃくす\",\"れんあい\",\"てきせい\",\"げんざい\",\"いのしし\",\"ゆうこう\",\"ちゃわん\",\"へんけい\",\"あんたい\",\"まっさお\",\"えぽっく\",\"はんてん\",\"にくはく\",\"そうさく\",\"めるへん\",\"げんあん\",\"じつえん\",\"はいせき\",\"あっかん\",\"みなおし\",\"かいだん\",\"じんめい\",\"かいちく\",\"ゆにせふ\",\"やくどう\",\"たてつく\",\"ちょっき\",\"はってん\",\"みみっく\",\"ふくげん\",\"あくやく\",\"さんとら\",\"すぐさま\",\"しんぞく\",\"しんさつ\",\"べっかん\",\"こいぶみ\",\"しんやく\",\"ふつぶん\",\"ぼやける\",\"あいこく\",\"こんしん\",\"うぃるす\",\"しがいち\",\"めりっと\",\"ではない\",\"こがらし\",\"ぶんつう\",\"じょうげ\",\"みょうぎ\",\"いたりあ\",\"たんねん\",\"いしかい\",\"さっそく\",\"りっぽう\",\"じどうか\",\"ぎょえん\",\"めんきょ\",\"そうこう\",\"ひきがね\",\"ありばい\",\"うれすじ\",\"ほうもん\",\"ばんこく\",\"じひょう\",\"くちぐち\",\"びーすと\",\"がくいん\",\"いみあい\",\"ろうねん\",\"ぜいびき\",\"とくしゅ\",\"しってん\",\"かいせん\",\"れんそう\",\"いりょく\",\"ちょうじ\",\"れいすい\",\"しゃめん\",\"ようせい\",\"けんかい\",\"ほのるる\",\"しつげん\",\"しっかく\",\"ばすてい\",\"こうそく\",\"ほうにん\",\"ぱぱさん\",\"こうしき\",\"いんとく\",\"ていばん\",\"ぱじゃま\",\"まいなす\",\"こうはく\",\"しょぐう\",\"がんばり\",\"こんびに\",\"すろーぷ\",\"いじゅう\",\"はんだん\",\"にこにこ\",\"でないと\",\"おぼえる\",\"くたくた\",\"そゆーず\",\"ぎょそん\",\"でーりー\",\"せきせつ\",\"へきめん\",\"のこらず\",\"ぶれざー\",\"ぼにゅう\",\"めんぜい\",\"こきょう\",\"こうじつ\",\"あくにん\",\"どうこう\",\"とくめい\",\"でんわき\",\"はいざい\",\"げんてん\",\"あけぼの\",\"はじまり\",\"めいがら\",\"しょくん\",\"みのうえ\",\"ざんこく\",\"せいそく\",\"じゅうご\",\"ぐんせい\",\"こくろん\",\"だいきぼ\",\"けんせつ\",\"かんせい\",\"ゆうそう\",\"べつめい\",\"あてさき\",\"なんきん\",\"ちひょう\",\"おりから\",\"するどい\",\"ほほえむ\",\"くみこむ\",\"おいこす\",\"てきせつ\",\"しひょう\",\"こうげん\",\"まどらす\",\"けんきょ\",\"まどわす\",\"あくじょ\",\"ほしゅう\",\"つらねる\",\"いんしゅ\",\"えんさん\",\"げっとー\",\"ぼうらく\",\"たくらみ\",\"そふぁー\",\"あしあと\",\"よこづな\",\"ぽすたー\",\"すうこう\",\"きょうり\",\"かくせい\",\"つぎつぎ\",\"きょだく\",\"ばーべる\",\"たんたん\",\"りくかい\",\"おんこう\",\"おはよう\",\"たいかく\",\"しゅがー\",\"とくせい\",\"さくじょ\",\"ばーぼん\",\"けいりん\",\"さいじつ\",\"はつうり\",\"せいろん\",\"きんがん\",\"ちぇっく\",\"あかはた\",\"くんれん\",\"せいぞう\",\"かせっと\",\"あみもの\",\"そうたい\",\"はんにち\",\"ろーたす\",\"とうるい\",\"ちぇりー\",\"よめいり\",\"つっぱる\",\"みんかん\",\"とうほう\",\"うりこむ\",\"みりょく\",\"ふれーむ\",\"こうえい\",\"ねんぶつ\",\"ゆうびん\",\"ぜんめん\",\"ゆうりょ\",\"なんべい\",\"ふくすう\",\"かぶしき\",\"だきゅう\",\"とるえん\",\"ゆーざー\",\"ばんゆう\",\"おおかみ\",\"しろくろ\",\"きまぐれ\",\"ちょびと\",\"ながいき\",\"がくたい\",\"せんれん\",\"ごうだつ\",\"むさべつ\",\"しゅじく\",\"おととし\",\"ふくへい\",\"だいぶつ\",\"ろびんぐ\",\"いきごみ\",\"こくべつ\",\"きかざる\",\"せんたー\",\"なまける\",\"りょっか\",\"わくぐみ\",\"たいじん\",\"ぎらぎら\",\"ねんりつ\",\"くじょう\",\"みずぎわ\",\"たちのく\",\"ぱちぱち\",\"いっそく\",\"なしには\",\"しょうご\",\"きりすて\",\"うちきり\",\"てんやく\",\"やちょう\",\"じゅうき\",\"みんじゅ\",\"そうべつ\",\"かてごり\",\"てんいん\",\"しきさい\",\"とくひつ\",\"まるがり\",\"いくつか\",\"はんとう\",\"げんけい\",\"けわしい\",\"いまいち\",\"おさめる\",\"ところを\",\"こうおん\",\"くちさき\",\"しつぼう\",\"すぽーく\",\"せいえき\",\"びーんず\",\"だんぜん\",\"いねかり\",\"きよらか\",\"しょねん\",\"けんこう\",\"すらいど\",\"とくだん\",\"にかよう\",\"とうおう\",\"すちーむ\",\"はつおん\",\"けっそく\",\"くろしお\",\"でんばー\",\"ころがる\",\"へいよう\",\"しんしん\",\"はいぜつ\",\"とうじつ\",\"へいりつ\",\"いっしき\",\"さんけい\",\"みーはー\",\"かおぶれ\",\"りーだー\",\"はんしん\",\"あーばん\",\"かいえん\",\"めいだい\",\"まえうり\",\"あおぞら\",\"けいかく\",\"くろっく\",\"みいだす\",\"きゃっち\",\"ふううん\",\"しょばつ\",\"うーまん\",\"こんごう\",\"まーじん\",\"いんふれ\",\"りむじん\",\"どうさつ\",\"せきどう\",\"にゅうか\",\"ほうさく\",\"あとがき\",\"ふっこう\",\"ごうけつ\",\"めいろう\",\"たてがき\",\"ほんぶん\",\"ゆういん\",\"ぶんらく\",\"とりがー\",\"ききとる\",\"めーかー\",\"はいきょ\",\"いんねん\",\"うろうろ\",\"いたわる\",\"みせさき\",\"すぱいく\",\"しょくひ\",\"とろーる\",\"うちがわ\",\"しーえむ\",\"ねいびー\",\"ふりょう\",\"ばんぜん\",\"すいせん\",\"まんぷく\",\"しょとく\",\"べつむね\",\"ぷらいす\",\"しょどう\",\"いにしえ\",\"とくれい\",\"ぞろぞろ\",\"ついでに\",\"はいにん\",\"こくはく\",\"しんそう\",\"りゅうし\",\"てさぐり\",\"がっかり\",\"いっせつ\",\"だめーじ\",\"ひでんか\",\"ひんぱつ\",\"あしもと\",\"ふつごう\",\"かいすい\",\"てきたい\",\"どるかい\",\"かくしつ\",\"ばいてん\",\"げいめい\",\"うわむき\",\"どろっぷ\",\"すたんす\",\"しゅっせ\",\"しゃせん\",\"あめーば\",\"くいこむ\",\"わりびく\",\"たそがれ\",\"うちこむ\",\"げんめい\",\"ついたち\",\"ちゃっく\",\"はなびら\",\"べんじん\",\"さんまい\",\"しゅせい\",\"うらぎる\",\"ぐらちぇ\",\"でぃすこ\",\"いちぐん\",\"ぞうすい\",\"いきぎれ\",\"かしこい\",\"ぷれーと\",\"ぐんだん\",\"しょぱん\",\"こくりつ\",\"おおつぶ\",\"べっそう\",\"おくがい\",\"れんばい\",\"のんびり\",\"あまだれ\",\"つぶやく\",\"てつだう\",\"うけざら\",\"かんそん\",\"おうふく\",\"おおもの\",\"さんざん\",\"しとやか\",\"どういつ\",\"しぇりー\",\"さくいん\",\"せいどく\",\"せんよう\",\"ちゃどう\",\"ものかげ\",\"ほんしゃ\",\"てんばい\",\"しらぎく\",\"のきなみ\",\"はいゆう\",\"おしゃれ\",\"ゆうざい\",\"こくえい\",\"えんざん\",\"いちれい\",\"そうげい\",\"とらっぷ\",\"ぷりてぃ\",\"つよまる\",\"けんざい\",\"しずめる\",\"たいはん\",\"じょうき\",\"てんよう\",\"はちみつ\",\"りすとら\",\"さいあく\",\"げんみつ\",\"とんとん\",\"ないこう\",\"ぼうしん\",\"そくほう\",\"ぼうこう\",\"まちがう\",\"ひめぎみ\",\"ごるじゅ\",\"しゅざん\",\"ぞうわい\",\"だっせん\",\"おうさつ\",\"ころらど\",\"こんどう\",\"すこやか\",\"あんぎゃ\",\"つりぼり\",\"ぼーなす\",\"ぜつめつ\",\"つまずく\",\"みはなす\",\"あのかた\",\"へいがい\",\"あくせる\",\"せいへん\",\"ちゅうこ\",\"おこたる\",\"うけもち\",\"いらして\",\"あるぷす\",\"ひょうか\",\"ちんもく\",\"ればのん\",\"すいよう\",\"さいぜん\",\"ぐんじん\",\"くみとる\",\"ぎゅうほ\",\"やくがら\",\"しゅひつ\",\"しいれる\",\"ていねん\",\"ねまわし\",\"そうかい\",\"くいっく\",\"すねーく\",\"ふくめる\",\"せきさい\",\"それなら\",\"しょうみ\",\"うちまく\",\"れいえん\",\"てぶくろ\",\"せいてん\",\"しゅざい\",\"ほんばこ\",\"とうとぶ\",\"このへん\",\"しゃどう\",\"きくばり\",\"いちらん\",\"さんかく\",\"うすめる\",\"かわきり\",\"ふぁるす\",\"ふなばし\",\"しゅほう\",\"げんろう\",\"はくじん\",\"けんきん\",\"いんたー\",\"もくそく\",\"おうこく\",\"がいじん\",\"とめがね\",\"たびさき\",\"けんとう\",\"ちっとも\",\"ふじょう\",\"ひーたー\",\"ぐんぞう\",\"けっかん\",\"はっきん\",\"けいせい\",\"おおぞら\",\"ぴーぷる\",\"なんしき\",\"うけいれ\",\"とうばん\",\"ねころぶ\",\"とまどう\",\"べくとる\",\"きょこう\",\"とうごう\",\"いしぶみ\",\"こうてつ\",\"ぎゃっぷ\",\"なんもん\",\"かいいき\",\"せかんど\",\"げんそう\",\"さいみん\",\"ふかけつ\",\"めきしこ\",\"ふじんか\",\"ゆしゅつ\",\"ぎょかい\",\"どういん\",\"せんてい\",\"むらびと\",\"こうだい\",\"まんかい\",\"たくしー\",\"とうしゃ\",\"きたない\",\"それじゃ\",\"そのうえ\",\"くちぶえ\",\"かざあな\",\"えあこん\",\"くっつく\",\"しょいん\",\"ざいさん\",\"しばしば\",\"ちょっか\",\"げいりぶ\",\"りぞーと\",\"へあけあ\",\"あめりか\",\"へるぱー\",\"えきべん\",\"そんがい\",\"における\",\"いきょく\",\"しゅぼう\",\"ぱーぷる\",\"どーなつ\",\"じょうば\",\"くうしゃ\",\"もてなす\",\"もうれつ\",\"ないまく\",\"ぐうぞう\",\"よくねん\",\"ひんかく\",\"はさまる\",\"けんすう\",\"れいさい\",\"さんしゅ\",\"きっちり\",\"かいめつ\",\"なんとう\",\"ごうせい\",\"はんぐる\",\"もうてん\",\"よっぽど\",\"しゅーず\",\"ひきしめ\",\"かならず\",\"ようかい\",\"けいこく\",\"たがやす\",\"じしゃく\",\"どれだけ\",\"じゅーる\",\"はつめい\",\"さみっと\",\"ぺぷしん\",\"どうじつ\",\"がくせい\",\"とうめい\",\"ごくらく\",\"ぼこくご\",\"おんじん\",\"はいじん\",\"まんせい\",\"いかにも\",\"のみもの\",\"そなわる\",\"たとえば\",\"あきかん\",\"とーらす\",\"たいにん\",\"がいでん\",\"かしわぎ\",\"だんごう\",\"すぽっと\",\"おうてん\",\"もんせき\",\"たてまえ\",\"ばいきん\",\"そんする\",\"いとなむ\",\"だんあつ\",\"ぐんよう\",\"くっきり\",\"だんげん\",\"たいよう\",\"いちげん\",\"ぶんるい\",\"のうめん\",\"せっぷく\",\"しゃこく\",\"そんとく\",\"ぴんはね\",\"さんしん\",\"はっかー\",\"まぶしい\",\"ぐうはつ\",\"ぜんやく\",\"みあたる\",\"とびきり\",\"ほんらん\",\"でしいり\",\"ていさつ\",\"ひらける\",\"ほうよう\",\"もざいく\",\"おいうち\",\"しんがく\",\"なぞなぞ\",\"あんない\",\"つうがく\",\"さばんな\",\"じびょう\",\"かおいろ\",\"わいぱー\",\"かんさん\",\"ぐんぷく\",\"ねんかん\",\"きじゅん\",\"きがえる\",\"こくせき\",\"ちらばる\",\"じょうか\",\"なるべく\",\"つながる\",\"おおみず\",\"きょたい\",\"せいひん\",\"ほがらか\",\"まんがか\",\"つつしむ\",\"ふくいん\",\"どうるい\",\"けんこく\",\"たいきょ\",\"せつめい\",\"ゆーから\",\"いんきょ\",\"すとーむ\",\"どこにも\",\"かちゅう\",\"じゅんさ\",\"ひやあせ\",\"のうたん\",\"ぶるぶる\",\"こうしょ\",\"あんもく\",\"こたえる\",\"しょうさ\",\"たじゅう\",\"おうさま\",\"またたく\",\"どりあん\",\"ちんあげ\",\"じゅごん\",\"おまけに\",\"けべっく\",\"とがめる\",\"ばーがー\",\"えんだん\",\"おくらす\",\"ふりがな\",\"へんさい\",\"こうえん\",\"げつよう\",\"こうてき\",\"ふくおか\",\"すうはい\",\"たいほう\",\"こんぼい\",\"あいどく\",\"すちーる\",\"ときには\",\"たれまく\",\"たっとぶ\",\"さずける\",\"みんぞく\",\"やまがた\",\"しゃけん\",\"みにまむ\",\"がいよう\",\"ふかのう\",\"なんぼく\",\"びじょん\",\"しんあい\",\"げんしろ\",\"しゅかん\",\"うりもの\",\"ぎゃんぐ\",\"ふくせん\",\"れいせん\",\"なりきん\",\"とうろく\",\"どんなに\",\"せいぶつ\",\"くりっく\",\"あまもり\",\"のりきる\",\"がぼっと\",\"くしゅう\",\"はんまー\",\"そうさい\",\"かいさい\",\"そとづけ\",\"けんしん\",\"あきらか\",\"まじわる\",\"どくりつ\",\"さとおや\",\"くーきー\",\"けんがい\",\"とりうむ\",\"わんせぐ\",\"もくさつ\",\"すくない\",\"がぶがぶ\",\"けいざい\",\"りふじん\",\"さいよう\",\"せいあつ\",\"こうらい\",\"ついほう\",\"こうせん\",\"いちばい\",\"ぐんたい\",\"にるいだ\",\"こむすび\",\"はやめる\",\"るーぶる\",\"かきとり\",\"しゅうか\",\"ぼうせき\",\"あおむけ\",\"ていねい\",\"うるとら\",\"ぞういん\",\"いいぶん\",\"ないせん\",\"ぎきょく\",\"やすらか\",\"ちいさな\",\"せつれつ\",\"にんてい\",\"しゅうし\",\"がしょう\",\"しゃふと\",\"えどっこ\",\"さかえる\",\"けいそく\",\"けだもの\",\"ぺんぎん\",\"でんとう\",\"はげます\",\"ばくおん\",\"ずじょう\",\"りばらい\",\"こんどる\",\"かいたく\",\"あさがた\",\"おわりね\",\"くだもの\",\"ませんか\",\"がくげい\",\"きーまん\",\"それぞれ\",\"かざかみ\",\"すいいき\",\"つうやく\",\"むじょう\",\"しゅだい\",\"げきやく\",\"しかいし\",\"にひゃく\",\"みつめる\",\"こうない\",\"のうはう\",\"けんすい\",\"へんぼう\",\"さいそく\",\"さんけん\",\"ほんきょ\",\"すてるす\",\"じむてき\",\"こんばん\",\"かたくな\",\"かくする\",\"やくじょ\",\"れっこく\",\"しはらい\",\"ひとあし\",\"とっぷう\",\"むやみに\",\"くれーん\",\"せんきょ\",\"たいわん\",\"がいかん\",\"ほどなく\",\"いってん\",\"ながらく\",\"ぱどっく\",\"あそびば\",\"けしごむ\",\"ちゅうぶ\",\"いちよう\",\"はんのう\",\"おくやま\",\"ぼうきょ\",\"しんくう\",\"かたらう\",\"そのへん\",\"がっさく\",\"どうぶつ\",\"きょうだ\",\"ぶじょく\",\"いちおく\",\"ふぇいす\",\"さいぼう\",\"じっしつ\",\"りみっと\",\"もーたー\",\"かんさい\",\"たいする\",\"ぜいがく\",\"うりこみ\",\"いいかた\",\"とうげい\",\"せんめい\",\"りょうり\",\"はいやー\",\"じぎょう\",\"みんせい\",\"びくびく\",\"すいしつ\",\"しめきる\",\"がいとう\",\"もちづき\",\"へんけん\",\"かんこう\",\"ぷらいど\",\"せんのう\",\"ぎんいろ\",\"かっぱつ\",\"さんぱい\",\"いっけん\",\"こみっと\",\"そぷらの\",\"だいにん\",\"とりけす\",\"おおいに\",\"みじかめ\",\"がいさん\",\"わんまん\",\"しょっき\",\"ばいばい\",\"まっくろ\",\"へんかん\",\"いっぴき\",\"ぜっせん\",\"やくぶつ\",\"やくがく\",\"ねんがく\",\"ていすう\",\"かくだい\",\"えりーと\",\"でかせぎ\",\"にゅーろ\",\"じゅうじ\",\"かろーら\",\"はりがみ\",\"たからか\",\"ふぁーむ\",\"じゅせい\",\"のぼせる\",\"くりだす\",\"ようがく\",\"しえすた\",\"しんさん\",\"こうこう\",\"しつれん\",\"すえひろ\",\"ざつだん\",\"おかえり\",\"ふじさん\",\"ねぶそく\",\"はらっぱ\",\"せいへき\",\"あおうめ\",\"かいてき\",\"もちあい\",\"したまち\",\"ふともも\",\"はんかん\",\"さいあい\",\"はいいん\",\"ひらめく\",\"しらかば\",\"さきどり\",\"すっごい\",\"たかまり\",\"なごやか\",\"なおざり\",\"ふろりだ\",\"さっしん\",\"きしょう\",\"おうしん\",\"ういじん\",\"ごしょく\",\"ふらっぐ\",\"ぼうはん\",\"よつかど\",\"ですぎる\",\"むぎちゃ\",\"えんばん\",\"えりもと\",\"よこどり\",\"おふくろ\",\"せいえい\",\"かちぼし\",\"どういう\",\"うぬぼれ\",\"かけごえ\",\"せらぴー\",\"せんぱい\",\"さらさら\",\"むきぶつ\",\"せきはん\",\"しつめい\",\"ごんどら\",\"かぶぬし\",\"れんぽう\",\"しゅうい\",\"おおあめ\",\"だーりん\",\"さんなん\",\"そうそう\",\"いざこざ\",\"かんまつ\",\"あめふり\",\"なぷきん\",\"じつだん\",\"でたらめ\",\"じっせき\",\"おどろき\",\"からめる\",\"じじゅう\",\"はやぶさ\",\"どうがん\",\"しんぜん\",\"れいだい\",\"たずねる\",\"こうけい\",\"ふりんじ\",\"てびかえ\",\"たかだい\",\"やすらぎ\",\"とつじょ\",\"つめきり\",\"げんせん\",\"よちよち\",\"もてなし\",\"おくない\",\"じんくす\",\"げつめん\",\"へいぼん\",\"ささやく\",\"でなおし\",\"かーてん\",\"こくぜい\",\"あいさつ\",\"めいそう\",\"せんたい\",\"しゅはん\",\"ものほし\",\"ひとごみ\",\"いんぜい\",\"いーすと\",\"しっそう\",\"ひつめい\",\"きょうか\",\"にちよう\",\"じんとう\",\"ながねん\",\"しゅよう\",\"けんぜん\",\"そくたつ\",\"こうもん\",\"ほうどう\",\"めっきり\",\"いっせき\",\"へんじん\",\"こうがく\",\"ようもう\",\"ぺんさき\",\"ねんりき\",\"あさめし\",\"こうあん\",\"うちあい\",\"かわった\",\"ゆにゅう\",\"るーじゅ\",\"やきゅう\",\"ぴらにあ\",\"ぎょっと\",\"ぞうげん\",\"おびえる\",\"かいごう\",\"せばまる\",\"ねおなち\",\"ぶろーど\",\"じはーど\",\"はんねん\",\"ようてん\",\"とうてん\",\"ぶるぺん\",\"かじゅう\",\"はつでん\",\"しきてん\",\"かんぽう\",\"たんらく\",\"しんしゃ\",\"ととのう\",\"はっこう\",\"とりにく\",\"てんじゅ\",\"たいりつ\",\"せいだい\",\"はなよめ\",\"たくさん\",\"せんもん\",\"なみびあ\",\"あなどる\",\"いめーじ\",\"なんかい\",\"げんてい\",\"あっこう\",\"しんかん\",\"たいだん\",\"ろうさい\",\"しおどき\",\"はくげき\",\"がくさい\",\"べるぎー\",\"もちもの\",\"そなえる\",\"ぬーべる\",\"ふぁんど\",\"ざいにち\",\"てんきん\",\"おうたい\",\"はつえん\",\"くちべに\",\"きわまる\",\"のろのろ\",\"ぎむづけ\",\"そんげん\",\"れってる\",\"ほろぼす\",\"ゆらゆら\",\"がくしき\",\"そくてい\",\"せいざん\",\"どきっと\",\"へいめん\",\"そびえる\",\"れいたん\",\"たいぼう\",\"おぼれる\",\"もつなべ\",\"こむぎこ\",\"いつごろ\",\"しろぼし\",\"しゃこう\",\"かみつく\",\"こまごま\",\"ここのえ\",\"せんだい\",\"たらたら\",\"らじかる\",\"けれども\",\"れいおふ\",\"りしょく\",\"かまくら\",\"えいたい\",\"でんごん\",\"うなずく\",\"かさかさ\",\"てなおし\",\"おしまい\",\"ぼっとう\",\"こうずい\",\"どうこく\",\"ぐらんす\",\"てばやい\",\"きんぞく\",\"じつめい\",\"どうけん\",\"ろうそく\",\"あるかり\",\"どくしん\",\"あきばれ\",\"えんめい\",\"そしょう\",\"かわかみ\",\"あっぱー\",\"こうきょ\",\"けつえん\",\"きんせん\",\"ちらかる\",\"けんやく\",\"とうたつ\",\"ぱらぱら\",\"しゅじゅ\",\"けいけん\",\"たいせい\",\"どんよく\",\"そうしつ\",\"かたより\",\"さんにん\",\"ばいりつ\",\"ぷっしゅ\",\"のちのち\",\"ふだんぎ\",\"けいかん\",\"さしひき\",\"うらがわ\",\"らうんじ\",\"きまって\",\"しょかん\",\"だいきん\",\"うそつき\",\"ぞくぞく\",\"れしーと\",\"ふたたび\",\"はんしゅ\",\"ちぇんじ\",\"ほうれい\",\"ころにー\",\"こすぷれ\",\"かいふく\",\"ぜんあく\",\"ししゅつ\",\"たんまつ\",\"いますぐ\",\"めんだん\",\"ぶったい\",\"しゃがむ\",\"べっさつ\",\"そうせつ\",\"どきょう\",\"みずうみ\",\"えきまえ\",\"いちりつ\",\"すなっぷ\",\"ばるーん\",\"べーこん\",\"やくしょ\",\"せっそう\",\"かじょう\",\"ぶれいく\",\"せっとう\",\"あくせい\",\"こうてん\",\"びんかん\",\"へりうむ\",\"ぐんかく\",\"らいひん\",\"ろまんす\",\"せきたん\",\"そうぜん\",\"ふぁいと\",\"ぞうてい\",\"せおよぎ\",\"ふろしき\",\"たんとう\",\"だいすき\",\"つうしん\",\"みずたま\",\"しんせい\",\"いけがき\",\"ざりがに\",\"そんかい\",\"えきすぽ\",\"さいきん\",\"なかでも\",\"らじある\",\"りたいあ\",\"たいばん\",\"かいしゃ\",\"こばると\",\"わりこむ\",\"ひじゅう\",\"はたして\",\"ぜいりし\",\"えんがん\",\"しんげき\",\"とうろん\",\"とすると\",\"うらはら\",\"べんりさ\",\"ろーかる\",\"りびんぐ\",\"しきしゃ\",\"こうふく\",\"そうりつ\",\"ひきわけ\",\"てきさす\",\"はいぱー\",\"じりゅう\",\"ほっぺた\",\"ついらく\",\"すかうと\",\"りべらる\",\"ひとごと\",\"にせもの\",\"かくしん\",\"せんすい\",\"うけつぐ\",\"おにおん\",\"がりれお\",\"とうやく\",\"へいかい\",\"もうひつ\",\"えつらん\",\"しだいに\",\"れっしん\",\"ていやく\",\"さいえん\",\"あっさり\",\"ばくやく\",\"あれこれ\",\"つうじる\",\"ゆだねる\",\"そのなか\",\"おおはば\",\"しょーと\",\"しんさい\",\"ぎょーざ\",\"だったら\",\"くれーむ\",\"はきだす\",\"かくづけ\",\"はんげん\",\"ばすたー\",\"ていとう\",\"ぶんぱい\",\"ほうえい\",\"きんべん\",\"ほうねん\",\"かんがい\",\"そくめん\",\"さくしゅ\",\"なにしろ\",\"こんげつ\",\"どらごん\",\"べんとう\",\"しゃりん\",\"じゅぞう\",\"じょうぎ\",\"おっけー\",\"かいひん\",\"うたがう\",\"えんぐん\",\"けんせい\",\"せとぎわ\",\"あつまる\",\"ばかりか\",\"おしょう\",\"かちまけ\",\"ぽりしー\",\"ばんごう\",\"るいすい\",\"ねんまく\",\"きんずる\",\"あいにく\",\"はんどる\",\"くーらー\",\"ぶるーす\",\"とうしつ\",\"そうぞく\",\"らーめん\",\"ふちゃく\",\"せんぞく\",\"おうぞく\",\"せいこう\",\"みりおん\",\"ぶんかつ\",\"うしなう\",\"ほきょう\",\"れぽーと\",\"さくしゃ\",\"せるびあ\",\"しじょう\",\"せつだん\",\"けがにん\",\"そこねる\",\"せいすう\",\"あらわれ\",\"かいあげ\",\"ならびに\",\"だいよう\",\"あくりる\",\"はじまる\",\"さいにん\",\"ながうた\",\"しんよう\",\"げんかく\",\"るーちん\",\"そういう\",\"はちまん\",\"しっつい\",\"こんせい\",\"ひとじち\",\"あいづち\",\"ねんせい\",\"へいそく\",\"とくやく\",\"ないーぶ\",\"じゅうい\",\"おあしす\",\"はたいろ\",\"しきょう\",\"そんえき\",\"おしきる\",\"まふらー\",\"したてる\",\"じょゆう\",\"ふっこく\",\"あわてる\",\"とうどく\",\"くうほう\",\"かおつき\",\"べらんだ\",\"きたがわ\",\"まにあう\",\"いねむり\",\"にっけい\",\"きりょく\",\"けんない\",\"たいさく\",\"めんぼく\",\"こっけい\",\"ぎっしり\",\"じんしゅ\",\"はだいろ\",\"おしえる\",\"ほいーる\",\"しゅっぴ\",\"がやがや\",\"ばんそう\",\"めいげつ\",\"こしかけ\",\"さいだん\",\"かせいふ\",\"うえすと\",\"しゅえん\",\"ぜんしゃ\",\"もちいる\",\"せきとり\",\"つくづく\",\"いきおい\",\"せいせき\",\"ほうのう\",\"でりーと\",\"けんぶつ\",\"てちょう\",\"いちめん\",\"ひらたい\",\"らんよう\",\"しりゅう\",\"かちこし\",\"それとも\",\"ほうべい\",\"ぶっしゅ\",\"くださる\",\"おかしい\",\"どよめく\",\"げきちん\",\"かんげん\",\"こうぞく\",\"ふらふら\",\"ぱねらー\",\"れっかー\",\"かんかい\",\"らいふる\",\"のびりつ\",\"うえっと\",\"みぶるい\",\"さいたま\",\"さわやか\",\"ふわたり\",\"どうかん\",\"おふれこ\",\"すみやか\",\"かるめら\",\"このまえ\",\"こだわる\",\"みせかけ\",\"しんにち\",\"ぶんしょ\",\"かんずる\",\"すいとう\",\"じょくん\",\"わりだす\",\"かぎょう\",\"ぼうぎょ\",\"けんばん\",\"にほんご\",\"てきほう\",\"すぴーち\",\"りゅうち\",\"しゃしゅ\",\"ろうじん\",\"こちょう\",\"ふんそう\",\"ふくれる\",\"ぜんれき\",\"しゃだん\",\"いっしつ\",\"りょくち\",\"かーそる\",\"そっくり\",\"いってい\",\"はくせん\",\"せいよく\",\"おおづめ\",\"かなえる\",\"かんつう\",\"こうしゃ\",\"ばいよう\",\"へんしん\",\"よろしく\",\"ないろん\",\"となえる\",\"すいほう\",\"どくやく\",\"ぶっけん\",\"ほうろう\",\"しゃせつ\",\"いちげき\",\"たんにん\",\"ちじょく\",\"げっこう\",\"すいでん\",\"よくぶか\",\"まごころ\",\"かわぞい\",\"さいてき\",\"れーさー\",\"せっかん\",\"うんどう\",\"つらなる\",\"こうねつ\",\"はいとう\",\"えいせい\",\"どりぶる\",\"はんさむ\",\"らくえん\",\"りゅうき\",\"ゆうずう\",\"ゆうゆう\",\"ちぐはぐ\",\"えんもく\",\"かいなん\",\"こうぜん\",\"えいゆう\",\"だいしゃ\",\"まらりあ\",\"やりくり\",\"まねきん\",\"かりょく\",\"おおぶね\",\"じっそう\",\"ぶれーく\",\"かいけん\",\"くちだし\",\"からぶり\",\"ばっさい\",\"しょけい\",\"あんだー\",\"うかれる\",\"ぐろーぶ\",\"ぼくさー\",\"かくいつ\",\"あんせい\",\"けっぺき\",\"わずらう\",\"へんしつ\",\"はみだす\",\"へんれき\",\"ふれーず\",\"いんずう\",\"しゃくち\",\"しゅのう\",\"とびこむ\",\"けっせき\",\"きんとう\",\"だれでも\",\"けっこん\",\"あやまり\",\"そうだつ\",\"ねんねん\",\"てつぼう\",\"りゅうほ\",\"なつばて\",\"どくせん\",\"たいけい\",\"でんどう\",\"ひえこむ\",\"ねんげつ\",\"ほかにも\",\"こうだん\",\"ぜいりつ\",\"ちゃいな\",\"さっする\",\"せきはい\",\"へだたる\",\"しゅじい\",\"とうなん\",\"ぎょうこ\",\"おうしつ\",\"ぱうだー\",\"いぶくろ\",\"べんめい\",\"たとぅー\",\"にづくり\",\"てんてき\",\"まきぞえ\",\"なちずむ\",\"てっぱん\",\"ゆうかん\",\"たっぴつ\",\"ちっそく\",\"なんにち\",\"いちにち\",\"せきぜん\",\"せんせい\",\"はいぶん\",\"きんみつ\",\"ひっつく\",\"たくせん\",\"しみーず\",\"へいしゃ\",\"でんぽう\",\"きゃめる\",\"いみょう\",\"ながびく\",\"とーたる\",\"ものいい\",\"かつどう\",\"ふくそう\",\"とぼける\",\"しゃさつ\",\"にしぐち\",\"もちかぶ\",\"くらんく\",\"きーぱー\",\"なんだい\",\"ざいせい\",\"まふぃあ\",\"せいてい\",\"くりいれ\",\"じぱんぐ\",\"こうおつ\",\"こつずい\",\"ようすい\",\"れきぜん\",\"がいかく\",\"こっせつ\",\"げんめん\",\"でんあつ\",\"かおだち\",\"いちがつ\",\"しゃれる\",\"おーくす\",\"しっさく\",\"すたーと\",\"すれすれ\",\"とりぷる\",\"しいたけ\",\"つうれつ\",\"よしあし\",\"ひんこん\",\"そうじき\",\"くるーず\",\"ゆうわく\",\"について\",\"だんとう\",\"いただき\",\"かたがた\",\"さんさい\",\"えんじょ\",\"てんけい\",\"しつもん\",\"むきめい\",\"はなみち\",\"げんだい\",\"ほわいと\",\"てねしー\",\"つとめて\",\"はいりょ\",\"おもいで\",\"けいはん\",\"しょにち\",\"らくだい\",\"そっきん\",\"ふばらい\",\"いんりつ\",\"せっけん\",\"がいこつ\",\"もくたん\",\"とぅるー\",\"かっぷる\",\"しゅとく\",\"もくぞう\",\"しすてむ\",\"きこえる\",\"こめぐら\",\"げんさん\",\"すなっく\",\"かんゆう\",\"ごうせん\",\"しんるい\",\"こうそつ\",\"れんけつ\",\"てきこく\",\"びじねす\",\"てのひら\",\"たんぼう\",\"ぶんこう\",\"せいする\",\"よじょう\",\"めいかい\",\"なづける\",\"かしつけ\",\"でんたつ\",\"ひきあげ\",\"やじるし\",\"ゆいしょ\",\"めいめい\",\"たんぺん\",\"これまで\",\"こういう\",\"おうぼう\",\"ひこうし\",\"しなりお\",\"だんすい\",\"ぷりーつ\",\"のうみん\",\"なんだか\",\"てんぷら\",\"しゃめい\",\"こうもく\",\"しんゆう\",\"りょだん\",\"じぶんで\",\"かいいれ\",\"にっさん\",\"うらかた\",\"うけとり\",\"さっぽろ\",\"もしもし\",\"やれやれ\",\"そこいれ\",\"うきぼり\",\"ぶんぴつ\",\"たんどく\",\"れんせん\",\"かんえん\",\"わかもの\",\"しょたい\",\"きゃべつ\",\"いたずら\",\"くっさく\",\"ろうどく\",\"とらぶる\",\"とじょう\",\"めじゃー\",\"ぶんめん\",\"くしゃみ\",\"らくせん\",\"いらいら\",\"しんじる\",\"ふれんず\",\"しゅけい\",\"だりょく\",\"いじわる\",\"りんしつ\",\"けいはく\",\"みつりん\",\"けんにん\",\"せんげん\",\"はんざつ\",\"こくぼう\",\"そくせき\",\"たいばつ\",\"まくあけ\",\"さんがく\",\"ひぎしゃ\",\"がんばる\",\"いっぽん\",\"てろっぷ\",\"ばんぱー\",\"さんぷる\",\"じゅわき\",\"さっとう\",\"かんぜい\",\"むしかく\",\"ざいしつ\",\"あしおと\",\"てーらー\",\"おおぐち\",\"かんすい\",\"せいれん\",\"すいめん\",\"きゅうし\",\"いちよく\",\"いちばん\",\"ちょさく\",\"あしすと\",\"しっぷう\",\"こどうぐ\",\"すうにん\",\"つっこむ\",\"えころじ\",\"ていはく\",\"がくもん\",\"さんでー\",\"ぜねすと\",\"あじわう\",\"ためらう\",\"せきわけ\",\"きじゅつ\",\"こくてつ\",\"じゅつご\",\"まえがり\",\"きばらし\",\"りねーむ\",\"なんせい\",\"よこもじ\",\"ぜんこう\",\"けんぶん\",\"さいさん\",\"とらえる\",\"のーぶる\",\"ついとつ\",\"ひとまず\",\"ともあれ\",\"しょしん\",\"くらっち\",\"げんえき\",\"ぶんべつ\",\"したしみ\",\"さきゅう\",\"あんがい\",\"ごーるど\",\"はつどう\",\"あさはか\",\"ふんがい\",\"らんがい\",\"まいげつ\",\"いちょう\",\"こくだい\",\"ほうだい\",\"まもなく\",\"すうじつ\",\"りょうち\",\"ねんごう\",\"いっせん\",\"ゆうだい\",\"ぜんでら\",\"くうそう\",\"どらいぶ\",\"ねんすう\",\"びばーく\",\"ちべっと\",\"ふとくい\",\"ごーぐる\",\"ふんえん\",\"せんぎょ\",\"よわごし\",\"こーるど\",\"しゅぜい\",\"いちわり\",\"おしいる\",\"さくせん\",\"まらそん\",\"ほんこん\",\"みみもと\",\"おさまる\",\"けいほう\",\"がんがん\",\"いたって\",\"どくがす\",\"ちちおや\",\"じっすう\",\"おうよう\",\"こてさき\",\"かんげい\",\"そもそも\",\"そうごん\",\"ちきゅう\",\"けいげん\",\"とぼしい\",\"でっかい\",\"ふぁんく\",\"ふなたび\",\"らんそう\",\"ながれる\",\"なんぽう\",\"のりおり\",\"おいたち\",\"みとおし\",\"らじかせ\",\"きんもつ\",\"もくげき\",\"ぺーそす\",\"あたかも\",\"ようけい\",\"めいげん\",\"きんねん\",\"あいとう\",\"くちぐせ\",\"ここのか\",\"きょしき\",\"ききとり\",\"れんぐす\",\"すっきり\",\"てだすけ\",\"よこがお\",\"おみこし\",\"べんがく\",\"ちちかた\",\"もちだす\",\"うずまる\",\"ないたー\",\"きょうさ\",\"しゃさい\",\"げんきん\",\"へとへと\",\"ひしひし\",\"すいぶん\",\"なんべん\",\"べんぜつ\",\"ほうこく\",\"こまかく\",\"すたんぷ\",\"みちくさ\",\"しょみん\",\"たいとく\",\"しきりに\",\"てーぶる\",\"あくしつ\",\"なっとう\",\"にゅーす\",\"しちがつ\",\"ささげる\",\"りんかく\",\"ぼくたち\",\"ひとたち\",\"はなれる\",\"とうしん\",\"どうらん\",\"だいどう\",\"うけつけ\",\"おやすみ\",\"げんじん\",\"せいほう\",\"とらんぷ\",\"みしがん\",\"ちくさん\",\"せんじゃ\",\"かいかく\",\"そうどう\",\"まっさき\",\"ぷろれす\",\"ふぁうる\",\"たいおう\",\"ひきだし\",\"くれない\",\"ふりだし\",\"だがしや\",\"それから\",\"たまねぎ\",\"めいしゅ\",\"りめいく\",\"おうじる\",\"せんいん\",\"どけんや\",\"このうち\",\"どうあげ\",\"とうけい\",\"はいけい\",\"ぴっつぁ\",\"ちょっと\",\"かたすみ\",\"きりさげ\",\"わーすと\",\"むっつり\",\"ごうがい\",\"いちねん\",\"ろうれん\",\"ふみきる\",\"みつやく\",\"けんそん\",\"こんとら\",\"ぶんりつ\",\"おんけい\",\"さっくす\",\"はいいろ\",\"おうりつ\",\"てんのう\",\"だんどう\",\"あんばい\",\"げんめつ\",\"あつかう\",\"れんどう\",\"せいせい\",\"かよわい\",\"いやいや\",\"ものくろ\",\"むせいふ\",\"とうよう\",\"ぎょこう\",\"ぜんそう\",\"でじたる\",\"かいてい\",\"れいてつ\",\"ひきだす\",\"ばいかい\",\"はっきり\",\"ちんぴん\",\"かくとく\",\"ほうらく\",\"すきゃん\",\"ひくめる\",\"じっせん\",\"うたがい\",\"たしざん\",\"はしゃぐ\",\"しったい\",\"かんづめ\",\"もたらす\",\"けいばつ\",\"まちかど\",\"けつろん\",\"かんとん\",\"こうじょ\",\"れいせい\",\"さらりー\",\"あっとう\",\"まがじん\",\"ゆちゃく\",\"ごうどう\",\"きゃりー\",\"めんせつ\",\"かたみち\",\"みなおす\",\"へんよう\",\"いっぱい\",\"うんざり\",\"ふんとう\",\"しょろう\",\"あいぞう\",\"げきどう\",\"しれいぶ\",\"あいけん\",\"さんぶん\",\"まちぶせ\",\"はいたい\",\"てんらく\",\"みとめる\",\"ふるさと\",\"うえーぶ\",\"はうつー\",\"はんぼう\",\"ないぞう\",\"くつした\",\"きゅうり\",\"とうかん\",\"とくばい\",\"さきもの\",\"ばらまく\",\"ぎじろく\",\"こそだて\",\"かいうん\",\"ひろめる\",\"れっせい\",\"つきさす\",\"あいてむ\",\"かんじゃ\",\"しなもの\",\"かいどく\",\"すなわち\",\"まくうち\",\"かいさつ\",\"てんけん\",\"ふるまい\",\"せりあい\",\"じいさん\",\"ちかすい\",\"あやつる\",\"ふりかえ\",\"りべりあ\",\"ぱれっと\",\"したしい\",\"よこばい\",\"ぼうけん\",\"ねつぞう\",\"ごうべん\",\"のきさき\",\"ほうぼう\",\"うろつく\",\"かくまく\",\"いんたい\",\"たいりく\",\"ばらーど\",\"ずきずき\",\"ところが\",\"けいべつ\",\"ごうれい\",\"どくだん\",\"あちこち\",\"うけもつ\",\"まんぞく\",\"ぎょうし\",\"ごーすと\",\"おしうり\",\"はんせん\",\"れいがい\",\"ほっかい\",\"みどころ\",\"せいけつ\",\"はんめん\",\"すなっち\",\"けつまつ\",\"はんにん\",\"みささぎ\",\"かまえる\",\"みかづき\",\"かくりつ\",\"ゆうしゃ\",\"しゅうは\",\"みはらし\",\"かためる\",\"ぼでぃー\",\"がっこう\",\"しゃおく\",\"こうにん\",\"こしょう\",\"あいそう\",\"はいしゃ\",\"ごちそう\",\"なきがお\",\"せいれき\",\"くみかえ\",\"あらなみ\",\"ないそう\",\"しんたく\",\"かいへい\",\"くりーく\",\"ろーたー\",\"とちがら\",\"のうやく\",\"ろんぶん\",\"つゆあけ\",\"あふたー\",\"いちれん\",\"よんせん\",\"からかう\",\"めんしき\",\"こんてな\",\"ねこじた\",\"ねぼける\",\"しんきん\",\"ずいぶん\",\"こうえつ\",\"めいうん\",\"でざーと\",\"ほっけー\",\"りまわり\",\"せいがく\",\"にちぼつ\",\"るすばん\",\"にしかぜ\",\"ほそぼそ\",\"こうはん\",\"よわまる\",\"さかだち\",\"せいたん\",\"つかれる\",\"ひつどく\",\"ていかん\",\"あるばむ\",\"まんまん\",\"めいわく\",\"もてない\",\"けつだん\",\"はいれぐ\",\"おきなわ\",\"みなさま\",\"たいべい\",\"たんさん\",\"ざんびあ\",\"いとめる\",\"みずいろ\",\"らんかく\",\"ろじあな\",\"てじょう\",\"くらっく\",\"ぜらちん\",\"けいさん\",\"えんかい\",\"じしゅく\",\"けんげき\",\"まぼろし\",\"いこーる\",\"くうきょ\",\"さいかい\",\"きょうし\",\"にっこう\",\"けいやく\",\"おなじみ\",\"びいしき\",\"ぐらまー\",\"でぱちか\",\"そうがく\",\"ぜんねん\",\"せいべつ\",\"おやゆび\",\"かんだい\",\"すいてい\",\"どうきょ\",\"かようび\",\"かくげつ\",\"せいいく\",\"さいまつ\",\"こっこう\",\"よくばる\",\"かんばい\",\"ゆきぐに\",\"すーぱー\",\"まじゅつ\",\"いっぱく\",\"かるでら\",\"ほんごし\",\"かいかん\",\"かつやく\",\"こうげき\",\"ひがわり\",\"ふぁじー\",\"そうだい\",\"かいせつ\",\"もうじん\",\"とっくに\",\"がれーじ\",\"わんがん\",\"ほうたい\",\"ほんめい\",\"すいおん\",\"ていめい\",\"ひらまく\",\"かいそう\",\"じっけん\",\"おこさま\",\"ふるえる\",\"かがやく\",\"てんさい\",\"ひろしま\",\"だんせい\",\"まえおき\",\"ねったい\",\"むかえる\",\"にんしん\",\"ほんじつ\",\"すかーと\",\"いもうと\",\"ゆうかい\",\"おかえし\",\"すばやい\",\"あしこし\",\"ちゅーぶ\",\"かくれる\",\"ふくつう\",\"ねあがり\",\"ぐだぐだ\",\"ふしまつ\",\"ことがら\",\"かなしい\",\"しょうか\",\"ひっこす\",\"てつじん\",\"せんにん\",\"ほくりく\",\"おうずる\",\"だいべん\",\"わいるど\",\"へんそく\",\"のうこう\",\"しんすい\",\"かんもん\",\"てんとう\",\"ようしつ\",\"とらっど\",\"はわたり\",\"さんどう\",\"ちょめい\",\"しちゃく\",\"がいこう\",\"ようしゃ\",\"ぷりずむ\",\"こひつじ\",\"ぺなんと\",\"ざいらい\",\"めつぼう\",\"しんこう\",\"くんりん\",\"じじょう\",\"ぐらたん\",\"そうでん\",\"にないて\",\"ぜんぱん\",\"かいとり\",\"ておくれ\",\"さいらい\",\"れいこく\",\"しりあい\",\"じゅもく\",\"ほうげん\",\"しゅっし\",\"ばんかー\",\"へんどう\",\"ふきゅう\",\"としより\",\"こじょう\",\"さきやす\",\"けっせい\",\"どうそう\",\"くんよみ\",\"ていさい\",\"こうさつ\",\"がんじつ\",\"にょじつ\",\"かっそう\",\"ぶりーふ\",\"いえもと\",\"わこうど\",\"たいどう\",\"きりふだ\",\"とりけし\",\"くさかり\",\"こがたな\",\"つうはん\",\"のうさん\",\"ふろっく\",\"ふぃるむ\",\"かいそく\",\"せいじん\",\"しょはん\",\"なりたつ\",\"せいあん\",\"かいけつ\",\"しつてき\",\"ふくちじ\",\"いやしい\",\"どひょう\",\"あさゆう\",\"ぎょらい\",\"しはんき\",\"てっかい\",\"ふたつめ\",\"にんにく\",\"わりびき\",\"しゃたく\",\"あさがお\",\"はじめる\",\"まいるど\",\"じちたい\",\"かたづく\",\"こんがん\",\"たいてい\",\"とうとい\",\"てつだい\",\"かくだん\",\"きょうじ\",\"できだか\",\"さくじつ\",\"ずいいん\",\"だんとつ\",\"ぼんのう\",\"ひとなみ\",\"じつげん\",\"しんりん\",\"こうぶつ\",\"かいめい\",\"すぱっつ\",\"がいねん\",\"こうはつ\",\"せいうん\",\"いくにち\",\"かんてい\",\"がんちく\",\"ちゅうか\",\"きねんひ\",\"うえいと\",\"ぞうけい\",\"ぞうしん\",\"くらしき\",\"たっとい\",\"せいせん\",\"たいむず\",\"ごほうび\",\"いっさつ\",\"からーど\",\"こうほう\",\"ささやか\",\"よびこう\",\"せんそう\",\"ぜんれい\",\"せいすい\",\"ざんだか\",\"ちんたい\",\"くろーる\",\"とうない\",\"ぐりーん\",\"やぶれる\",\"よこしま\",\"しゅうり\",\"ろけっと\",\"ろうえい\",\"はっする\",\"しんこん\",\"こくそう\",\"じゃどう\",\"らくごか\",\"かつぼう\",\"みぎがわ\",\"せきざい\",\"びぎなー\",\"いちじき\",\"しおあじ\",\"らとびあ\",\"だいこう\",\"せばめる\",\"てんこう\",\"ていがく\",\"すたみな\",\"あのひと\",\"まんねん\",\"えんかく\",\"はつあん\",\"せいめい\",\"みすてり\",\"せんけい\",\"こきゃく\",\"ふぁいあ\",\"かいせい\",\"のりもの\",\"ゆうのう\",\"だいたい\",\"のうせい\",\"でんしん\",\"しょーつ\",\"こうばん\",\"てんぷく\",\"ふくとう\",\"まんもす\",\"やすうり\",\"らじうむ\",\"れんぞく\",\"たちぎえ\",\"べいはん\",\"ぴりおど\",\"がんたん\",\"いいなり\",\"びくたー\",\"しとろん\",\"いったい\",\"ぜいせい\",\"どっちも\",\"がっちり\",\"しんどい\",\"るいしん\",\"かちかち\",\"なんこつ\",\"がいめん\",\"ちゃうか\",\"いとてき\",\"じんてき\",\"ていこく\",\"どくえん\",\"くうどう\",\"ずいひつ\",\"げきへん\",\"ねんだい\",\"りんごく\",\"じゅーす\",\"とーきー\",\"じんせん\",\"とうひん\",\"あじわい\",\"らんぼう\",\"おしっこ\",\"ふうけい\",\"ばんこん\",\"こうたい\",\"ほんぞん\",\"とういつ\",\"かざりけ\",\"さいしん\",\"うくれれ\",\"いっぺん\",\"すりっと\",\"りんりつ\",\"あきぐち\",\"はんけん\",\"こいする\",\"おんけん\",\"さんぼん\",\"まんきつ\",\"なのです\",\"きゅうに\",\"みうける\",\"がいへき\",\"こんてい\",\"じゅけん\",\"どようび\",\"やくだつ\",\"ぶらぶら\",\"でかける\",\"まかなう\",\"ちょしゃ\",\"たいへん\",\"きっぱり\",\"あきれる\",\"びょうき\",\"すきやき\",\"くっきー\",\"ぎちょう\",\"つかまる\",\"あんみん\",\"てんねん\",\"べてらん\",\"ばんねん\",\"もんたな\",\"とりだす\",\"かんばん\",\"すぱーと\",\"ぞうせん\",\"あおやぎ\",\"ようにん\",\"みかえす\",\"ばけもの\",\"がようし\",\"ぷらずま\",\"おだやか\",\"はびこる\",\"とりっぷ\",\"しんねん\",\"べたべた\",\"くじびき\",\"えんじん\",\"いえがら\",\"つけこむ\",\"けっかく\",\"とらんす\",\"がんゆう\",\"おくさま\",\"しゅがん\",\"ないがい\",\"らびおり\",\"じゅうど\",\"めいもん\",\"かかげる\",\"はやまる\",\"えじぷと\",\"もんぱり\",\"はかない\",\"きんせい\",\"うったえ\",\"うぉっか\",\"はんすう\",\"はごろも\",\"くきょう\",\"すんぜん\",\"まぎらす\",\"ほんやく\",\"たしょう\",\"ばんけん\",\"じゅこう\",\"じんぐう\",\"このほか\",\"ほっそく\",\"れんけい\",\"かたかな\",\"いまごろ\",\"きゅーば\",\"ぎょせん\",\"ほんばん\",\"ごうけい\",\"いろどる\",\"りっとる\",\"じちょう\",\"あっての\",\"やきもち\",\"もうかる\",\"くちばし\",\"どりょく\",\"がんめん\",\"せんぽう\",\"おいおい\",\"よるだん\",\"ほりかわ\",\"おんりー\",\"ひろがる\",\"きづかれ\",\"こうそう\",\"ちんぎん\",\"ほちょう\",\"でにーる\",\"かたがき\",\"みおとす\",\"どうせん\",\"おおむぎ\",\"こうめい\",\"こうずる\",\"てすたー\",\"じんせい\",\"こうちく\",\"はいぼく\",\"かたむく\",\"みじかい\",\"しゃっぽ\",\"ふっかつ\",\"しょうこ\",\"ちゅうわ\",\"しょてん\",\"ねつれつ\",\"うんよう\",\"にっすう\",\"とうにん\",\"ずひょう\",\"ないらん\",\"むさぼる\",\"はっさん\",\"ひっこし\",\"ぼーかる\",\"もちろん\",\"しゃどー\",\"いんせき\",\"じっかん\",\"ひょうが\",\"ざらざら\",\"わすれる\",\"おちこむ\",\"ひろまる\",\"さよなら\",\"どうとく\",\"りーがー\",\"せんしゃ\",\"おうねん\",\"りたーん\",\"ぜんがく\",\"かしきり\",\"ふうじる\",\"ちょぞう\",\"けっする\",\"げんじつ\",\"ききょう\",\"だっそう\",\"へんちょ\",\"とーすと\",\"しあたー\",\"おんしつ\",\"せっとく\",\"かんべつ\",\"らんだむ\",\"ふくえき\",\"あいする\",\"ゆさぶり\",\"らんかん\",\"おもちゃ\",\"とうみん\",\"ろっかー\",\"まんだん\",\"がくねん\",\"かきこみ\",\"しあとる\",\"れんぱつ\",\"じきょく\",\"じゃすと\",\"いくせい\",\"いなさく\",\"はっしゃ\",\"きよすく\",\"あんごう\",\"つゆいり\",\"でもない\",\"はっしん\",\"はっくつ\",\"どくがく\",\"あいまい\",\"はぶらし\",\"はっかく\",\"がくそつ\",\"さんいん\",\"こうれい\",\"ふぁっく\",\"てんせい\",\"おんくん\",\"ことわざ\",\"かんしゅ\",\"きんしゅ\",\"なにびと\",\"はなさき\",\"うりあげ\",\"しんぐる\",\"もちこむ\",\"うわづみ\",\"ゆうじん\",\"うりだす\",\"ゆうどく\",\"なんこう\",\"おそれる\",\"しっぱい\",\"さいもく\",\"ぜんぽう\",\"はないき\",\"おおまか\",\"あかいろ\",\"しりょく\",\"ぜんはん\",\"きゃろる\",\"まとめる\",\"ぐっすり\",\"かんこく\",\"きんいつ\",\"ざいにん\",\"けってい\",\"うすれる\",\"ききがき\",\"しばらく\",\"だっすい\",\"じんよう\",\"したうち\",\"じょうり\",\"しききん\",\"かっこく\",\"つづける\",\"しんしき\",\"くさのね\",\"こういん\",\"おうせい\",\"めれんげ\",\"てつがく\",\"ごうしゃ\",\"ぶりっじ\",\"だいそつ\",\"さんぞく\",\"なんばー\",\"しりんじ\",\"みんげい\",\"ますこみ\",\"こくおう\",\"じゃっき\",\"はっそう\",\"けーおー\",\"めーたー\",\"ひきぬく\",\"そうしん\",\"せんばつ\",\"あずかり\",\"ぽんぽん\",\"もうこう\",\"ひややか\",\"きんしん\",\"いんてる\",\"こうろん\",\"さいねん\",\"しんじゃ\",\"まじっく\",\"ろーまじ\",\"かくてい\",\"しんきょ\",\"てきかく\",\"にくしん\",\"ゆいいつ\",\"ふんしゃ\",\"めいじつ\",\"ひるすぎ\",\"ちゃっと\",\"したがう\",\"がんらい\",\"きねんび\",\"しんえい\",\"こうたく\",\"とうさく\",\"とうはつ\",\"むろまち\",\"てんそう\",\"ねんきん\",\"じぐざぐ\",\"とらっく\",\"しょべる\",\"ちけっと\",\"ゆにっと\",\"ふくらむ\",\"ふれあい\",\"へいごう\",\"まちなみ\",\"びんづめ\",\"さえずる\",\"まりーな\",\"ぎじゅく\",\"きたぐに\",\"りはびり\",\"げんどう\",\"やまみち\",\"がっそう\",\"てにもつ\",\"こんらん\",\"はじめに\",\"とくゆう\",\"ちゅうぎ\",\"かろりー\",\"きょらい\",\"しぎょう\",\"きんじょ\",\"ようこそ\",\"くさばな\",\"もくぜん\",\"えぷろん\",\"よこはま\",\"せっぱん\",\"やきそば\",\"すじがき\",\"きょくど\",\"かいしめ\",\"ぶしょう\",\"そうりょ\",\"ぶろっく\",\"ちかみち\",\"すりっぷ\",\"よぎない\",\"とくとく\",\"わくわく\",\"ついずい\",\"ぼさのば\",\"よろめく\",\"さつじん\",\"もくせい\",\"かんたん\",\"ぼうえい\",\"こーらん\",\"かうんと\",\"しょこく\",\"てんごく\",\"ふるほん\",\"りちうむ\",\"ばくだん\",\"ほくたん\",\"ぐろりあ\",\"こわがる\",\"ぐうぜん\",\"あばれる\",\"ちちゅう\",\"ほんせき\",\"もんよう\",\"たびたび\",\"じゅんに\",\"せっかち\",\"えんりょ\",\"わっくす\",\"じんぞう\",\"じつれい\",\"こっこく\",\"あれんじ\",\"ゆにーく\",\"くちかず\",\"だいする\",\"まんざら\",\"ふうぞく\",\"けんちょ\",\"うらづけ\",\"じょしゅ\",\"くちどめ\",\"べつじん\",\"がんぽん\",\"これから\",\"じょばん\",\"れがーず\",\"うれしい\",\"けみかる\",\"こうてい\",\"せきめん\",\"しとしと\",\"がいこく\",\"へいえき\",\"しりうす\",\"よういん\",\"ぶつける\",\"ふろーと\",\"おちあう\",\"げいしゃ\",\"ざわめく\",\"がいじゅ\",\"ゆにおん\",\"かんれん\",\"こうあつ\",\"ほんろう\",\"ひきさげ\",\"ふきそく\",\"くうばく\",\"しんずる\",\"はんけい\",\"もっぱら\",\"ぞうせつ\",\"じむしょ\",\"てんたい\",\"ねっする\",\"りじゅん\",\"ばーたー\",\"くろーく\",\"きょうど\",\"たいにち\",\"こうかい\",\"なにかと\",\"ちゃいむ\",\"のがれる\",\"のりこす\",\"ないよう\",\"ぜんべい\",\"ばくちく\",\"かんごし\",\"ぐらんで\",\"らぶこめ\",\"だんかい\",\"こんぜつ\",\"とうあん\",\"そうてい\",\"ふくしゃ\",\"らいてん\",\"じゃーく\",\"おどりば\",\"じんこつ\",\"ぽーかー\",\"おどかす\",\"おのおの\",\"もろっこ\",\"ぷれーん\",\"いっこう\",\"あくせす\",\"はずれる\",\"かわばた\",\"いっぽう\",\"こうざん\",\"とうかつ\",\"こくせい\",\"さんよう\",\"てんにん\",\"ぽいんと\",\"どうせき\",\"ていげん\",\"いちいん\",\"ちかよる\",\"だんぼう\",\"いしだん\",\"はいざら\",\"れんらく\",\"ほんてん\",\"こうろう\",\"あんぐる\",\"せんげつ\",\"てんめつ\",\"あしくび\",\"おりがみ\",\"ほるもん\",\"よりみち\",\"とうてい\",\"だんたい\",\"ぶるぞん\",\"ごうけん\",\"ぶっぱん\",\"ふうかく\",\"あびせる\",\"やけあと\",\"おんよみ\",\"かちこす\",\"ふんばる\",\"かわぐち\",\"さんらん\",\"もとめる\",\"たんのう\",\"ばんじん\",\"いとぐち\",\"ひきあい\",\"ひっぴー\",\"おんてい\",\"うるおす\",\"たくはい\",\"けったく\",\"せつぞく\",\"りんがく\",\"はんべい\",\"はくまい\",\"あれだけ\",\"ざぶとん\",\"かいらん\",\"くるくる\",\"やまやま\",\"ちょしょ\",\"まいあみ\",\"しまじま\",\"このんで\",\"にかけて\",\"ぜんめつ\",\"きたぐち\",\"でむかえ\",\"てばなし\",\"ゆうれい\",\"しょるい\",\"こんけつ\",\"いくぶん\",\"おかげで\",\"しゃわー\",\"さーばー\",\"すぴーど\",\"めぐすり\",\"ひととき\",\"あぶない\",\"うらぎり\",\"だんぞく\",\"とうぜん\",\"さいげん\",\"むかむか\",\"じっくり\",\"かきょう\",\"ふっけん\",\"べーじゅ\",\"しずけさ\",\"わくない\",\"なつもの\",\"げんぱつ\",\"ちくせき\",\"ゆうこく\",\"こくえん\",\"ばらいろ\",\"びじたー\",\"いりごみ\",\"ぞうぜい\",\"れいぞう\",\"すりきず\",\"しあげる\",\"みおぼえ\",\"すいばく\",\"ぱすかる\",\"かんとく\",\"しゅいん\",\"ぷりんと\",\"てんかん\",\"ぼうえき\",\"げきだん\",\"たいしつ\",\"どりんく\",\"ゆうぐう\",\"ひつよう\",\"しんぼる\",\"にんしき\",\"かしゅう\",\"おおやけ\",\"ちょうい\",\"たべもの\",\"かしだす\",\"ばーれる\",\"かたまる\",\"さしとめ\",\"すらすら\",\"やっかい\",\"こちこち\",\"うらもん\",\"かっせん\",\"うんてん\",\"げんごう\",\"おらんだ\",\"らぐびー\",\"ていしゃ\",\"そうすい\",\"かなでる\",\"ねばねば\",\"みんしゅ\",\"ちつじょ\",\"さいるい\",\"てじゅん\",\"じゅどう\",\"そろばん\",\"とくてん\",\"かでんつ\",\"はいぞく\",\"ひっとう\",\"よぎなく\",\"つうこん\",\"てきごう\",\"りがくぶ\",\"だぶだぶ\",\"こうげい\",\"かたしき\",\"さかだな\",\"ふりこみ\",\"そういん\",\"でこーだ\",\"すぽんじ\",\"しきいち\",\"やまかじ\",\"じょそう\",\"いちどう\",\"もくよう\",\"さんぼう\",\"さくさん\",\"しごとば\",\"しすたー\",\"れーだー\",\"ひきずる\",\"だんこう\",\"みんぽう\",\"いんよう\",\"あまみず\",\"へるにあ\",\"いちどに\",\"むりやり\",\"ぜんじん\",\"はんげき\",\"しりぞく\",\"おうじゃ\",\"じんいん\",\"うっかり\",\"けしいん\",\"ぼうせん\",\"みおくり\",\"やまでら\",\"しゅうじ\",\"そうしき\",\"ふわふわ\",\"ふじょし\",\"はきょく\",\"こくがい\",\"ぎんこう\",\"こんすい\",\"とうすい\",\"しんなー\",\"だてらに\",\"つぶれる\",\"せいぎょ\",\"しょとう\",\"なにとぞ\",\"もたれる\",\"つみたて\",\"ほとんど\",\"うやむや\",\"そうすう\",\"びんそく\",\"がくない\",\"あやまる\",\"ぺーぱー\",\"こうさん\",\"たいくつ\",\"びびっど\",\"ようとん\",\"とうさん\",\"じょきん\",\"すらっく\",\"みならう\",\"いろどり\",\"きんりん\",\"おなじく\",\"しっこう\",\"きずぐち\",\"こっかく\",\"へんとう\",\"たんいつ\",\"おももち\",\"ぽっぷす\",\"かかえる\",\"いきごむ\",\"いちぞく\",\"すいこむ\",\"きゅうよ\",\"いにんぐ\",\"おやぶん\",\"どうたい\",\"どろぼう\",\"えんせき\",\"ふぉーむ\",\"やっぱり\",\"せくはら\",\"こわいろ\",\"まんめん\",\"さんばし\",\"まとまる\",\"ともだち\",\"なきがら\",\"にあみす\",\"へいねん\",\"どんぶり\",\"せわにん\",\"にわかに\",\"そくざに\",\"おちいる\",\"ぼうそう\",\"はんしゃ\",\"しもふり\",\"ちらっと\",\"れきにん\",\"はいてく\",\"ぶらんど\",\"みしらぬ\",\"あずかる\",\"だろうか\",\"うんちん\",\"しっかり\",\"げんろん\",\"こかいん\",\"くりーん\",\"ひきどき\",\"あいであ\",\"ふりえき\",\"みかぎる\",\"えんだて\",\"かぞえる\",\"ぱのらま\",\"ぜんいき\",\"このごろ\",\"かいめん\",\"ろうさく\",\"うんぬん\",\"しゅとう\",\"けんどう\",\"ひんずー\",\"さだまる\",\"はんぶん\",\"せんぬき\",\"みょうじ\",\"ぜつえん\",\"ざいべい\",\"ほきゅう\",\"さきざき\",\"けいもう\",\"いっぷう\",\"いっこく\",\"こうねん\",\"たてよこ\",\"かんぱん\",\"ぜんかい\",\"さんやく\",\"へいいん\",\"とくてい\",\"ろんじる\",\"ごうまん\",\"こうにち\",\"ばいぶる\",\"ひんせい\",\"かんごく\",\"りっけん\",\"けつあつ\",\"がじょう\",\"そのまま\",\"はくがい\",\"よびだす\",\"はんらん\",\"しょくむ\",\"くわわる\",\"まるまる\",\"そんけい\",\"おおきさ\",\"みにこみ\",\"かいじょ\",\"いひょう\",\"どうせい\",\"だきあう\",\"くしょう\",\"ぼやぼや\",\"まりんば\",\"きょうみ\",\"しんごう\",\"うりょう\",\"つうたつ\",\"かいしん\",\"ぞうえき\",\"てがかり\",\"ほうじる\",\"てあらい\",\"なかつぎ\",\"ながそで\",\"つたわる\",\"ていあん\",\"びーだま\",\"なーばす\",\"おおさじ\",\"さいてい\",\"けいさつ\",\"なやます\",\"まんねり\",\"おそわる\",\"ざいせき\",\"さいれい\",\"よこみち\",\"ばいしん\",\"しょかい\",\"いそいそ\",\"しっぴつ\",\"いきもの\",\"とうぶん\",\"まるごと\",\"はくしょ\",\"こうしゅ\",\"くろしろ\",\"つうねん\",\"ひかれる\",\"へらるど\",\"しちゅー\",\"おしいり\",\"ほくとう\",\"りきっど\",\"ほんねん\",\"ぱーてぃ\",\"ぶっさん\",\"でっさん\",\"けつれつ\",\"かんべん\",\"だいとし\",\"ほうふく\",\"しゅーと\",\"いっそう\",\"ていこう\",\"こんだん\",\"おうらい\",\"めきめき\",\"ぴーなつ\",\"ぐれーと\",\"つうさん\",\"とうこう\",\"せんしつ\",\"いっきに\",\"ほうげき\",\"ざいかい\",\"てんもん\",\"さきがけ\",\"そじょう\",\"とりつぐ\",\"らくらい\",\"ぞうとう\",\"おねがい\",\"もりつけ\",\"かんしゃ\",\"さまよう\",\"かぶせる\",\"しんぱん\",\"かいどう\",\"じょおう\",\"だんぜつ\",\"けいだい\",\"かけこみ\",\"へたくそ\",\"ばってん\",\"はんてい\",\"むしよけ\",\"ことわる\",\"かんどう\",\"さんせい\",\"ほうてい\",\"とりわけ\",\"とんかつ\",\"さずかる\",\"りょうど\",\"かわさき\",\"がいけん\",\"おんびん\",\"おうとつ\",\"ぶりょく\",\"たきだし\",\"けっしゃ\",\"げつない\",\"しすぎる\",\"すりっぱ\",\"さんそん\",\"じょやく\",\"あいぼう\",\"とうぐう\",\"こうせい\",\"ずるずる\",\"ごうかい\",\"きんけん\",\"らいねん\",\"かいかい\",\"きみたち\",\"よくぼう\",\"はくしゅ\",\"たんすう\",\"とれんど\",\"ぐらんど\",\"のみみず\",\"こうちゃ\",\"ばーなー\",\"ほんせん\",\"かいきん\",\"やくそく\",\"きかがく\",\"かいすう\",\"けんてい\",\"むとどけ\",\"だいぎし\",\"せってい\",\"らんなー\",\"しんせん\",\"とうこつ\",\"わがくに\",\"へいせい\",\"つうほう\",\"きんかい\",\"はつねつ\",\"しゅもく\",\"ほすてる\",\"さっかく\",\"きがかり\",\"っぱなし\",\"おさまり\",\"なげこむ\",\"かんたく\",\"きりすと\",\"らんりつ\",\"たんすい\",\"ぱそこん\",\"おっきい\",\"とっけん\",\"ひとりで\",\"それでも\",\"せいぜい\",\"こうくう\",\"さかみち\",\"ぶんたい\",\"しんてん\",\"わざわい\",\"つけたす\",\"すうまん\",\"えんたく\",\"たびびと\",\"うやまう\",\"なんなく\",\"くりっぷ\",\"せいぜん\",\"かざしも\",\"りゅうは\",\"りきがく\",\"ようしゅ\",\"いっぱつ\",\"ゆうすい\",\"どろどろ\",\"ありしひ\",\"きょうこ\",\"えはがき\",\"おうとう\",\"じゃんる\",\"とつぜん\",\"けんぽう\",\"ろうがん\",\"しちゅう\",\"げっさん\",\"ひいでる\",\"ぞんじる\",\"あらそう\",\"こじんさ\",\"みちばた\",\"やくどし\",\"けつごう\",\"みうごき\",\"かみわざ\",\"りんせつ\",\"ききゅう\",\"えんかつ\",\"うるおい\",\"さーくる\",\"まるめる\",\"そよかぜ\",\"けいとう\",\"ねくたい\",\"ぷれはぶ\",\"さんぶつ\",\"でんそう\",\"ぶってき\",\"しぇいぷ\",\"だらだら\",\"ふかしん\",\"わらびー\",\"すうじく\",\"さんべつ\",\"すとーぶ\",\"うんえい\",\"ほじゅう\",\"えんまん\",\"かいやく\",\"かんぶつ\",\"しんしつ\",\"せいげん\",\"ほんるい\",\"ちょうさ\",\"こていひ\",\"きんゆう\",\"りょけん\",\"こくぐん\",\"りぞっと\",\"ふきだす\",\"じょうじ\",\"にほんし\",\"ぶれーど\",\"すいへい\",\"けむたい\",\"ごうもん\",\"ざんてい\",\"とうどり\",\"ほごしゃ\",\"かなりあ\",\"せんばい\",\"ぐらぐら\",\"だじゅん\",\"なりゆき\",\"さんねん\",\"いきうめ\",\"じゃんぷ\",\"しずおか\",\"ようりつ\",\"ろしゅつ\",\"ぺりかん\",\"こづかい\",\"しゃじく\",\"くちょう\",\"げつまつ\",\"おそざき\",\"だんぺん\",\"きちがい\",\"ゆうちょ\",\"ふんいき\",\"すいどう\",\"はなはだ\",\"よそおう\",\"とうわく\",\"せっそく\",\"そうぜい\",\"いでんし\",\"へいきん\",\"かいたい\",\"きゅうぎ\",\"ほうかつ\",\"ほうかご\",\"みなもと\",\"でびゅー\",\"ぼうさん\",\"あずける\",\"おてすう\",\"そうあん\",\"ちかって\",\"しゅくが\",\"かるてる\",\"おうだん\",\"とくする\",\"きおすく\",\"こんなに\",\"しめだす\",\"えんてん\",\"せいたい\",\"うんそう\",\"げきじん\",\"あいたい\",\"こうかく\",\"ゆるめる\",\"てきとう\",\"るいせき\",\"だいだい\",\"きつえん\",\"ろんきょ\",\"れりーふ\",\"がいかい\",\"へっだー\",\"ろんせん\",\"ゆうぎり\",\"しんせき\",\"しょかつ\",\"ふらすこ\",\"ちゃんす\",\"はちょう\",\"やわらぐ\",\"せーたー\",\"まいかー\",\"たいえき\",\"ついてる\",\"まぜもの\",\"ぽたぽた\",\"かりいれ\",\"ほんのり\",\"だんらく\",\"つれさる\",\"えんげき\",\"えいぜん\",\"もくざい\",\"とくそく\",\"とうほん\",\"いっつう\",\"しびれる\",\"しじゅう\",\"かろちん\",\"あいりす\",\"じんみん\",\"おてあげ\",\"ほうしゃ\",\"しんじゅ\",\"つるつる\",\"ていぼう\",\"ばじゅつ\",\"かくかい\",\"のみかい\",\"そんみん\",\"ぜいたく\",\"ひきとり\",\"ほろびる\",\"そうらん\",\"みおろす\",\"おろしね\",\"わくがい\",\"つぐない\",\"けつぼう\",\"けっぱく\",\"ひといき\",\"かいもく\",\"げんこく\",\"ぐんこう\",\"いんふら\",\"きょねん\",\"しょゆう\",\"もくにん\",\"でんしゃ\",\"じょうし\",\"ばくまつ\",\"はいすい\",\"ほんしつ\",\"ちゅうし\",\"たちよみ\",\"ぽりまー\",\"ぜんぱい\",\"とたんに\",\"もうもく\",\"かおまけ\",\"ひじょう\",\"かけきん\",\"わんだー\",\"れいかん\",\"にんじゃ\",\"しゅぞう\",\"ころっけ\",\"きりあげ\",\"なにぶん\",\"いじめる\",\"ぶんげい\",\"かんみん\",\"はいかー\",\"ねんさん\",\"ぐんばい\",\"もうまく\",\"しゃてい\",\"せつもん\",\"とらすと\",\"ふれんど\",\"じゅんい\",\"すらんぷ\",\"かいへん\",\"れいてん\",\"ぶらじる\",\"ひろまり\",\"せいかつ\",\"こうこく\",\"こうしつ\",\"はきもの\",\"にむけて\",\"ようろう\",\"めいじる\",\"かくやく\",\"ひょうぎ\",\"ただよう\",\"のばなし\",\"げんかん\",\"ほりゅう\",\"たびだつ\",\"ほんしん\",\"すたいる\",\"さいげつ\",\"おうえん\",\"もちだし\",\"ていらく\",\"いっかん\",\"ていれい\",\"とりっく\",\"じんだい\",\"きょうゆ\",\"てがける\",\"たいまん\",\"ひょうご\",\"だんがん\",\"こづつみ\",\"せんしん\",\"きょうち\",\"てきれい\",\"そうほう\",\"かなあみ\",\"ふれあう\",\"みかける\",\"おんしゃ\",\"くわいあ\",\"じんつう\",\"たいはい\",\"そうりふ\",\"だんねん\",\"ひとしい\",\"がくれき\",\"わかれる\",\"このため\",\"ひーろー\",\"たいろん\",\"わっぺん\",\"みさいる\",\"らいなー\",\"ざんそん\",\"すこしも\",\"せいてつ\",\"さいはつ\",\"せんてつ\",\"かねもち\",\"げんしゅ\",\"こうゆう\",\"おろそか\",\"ぴあじぇ\",\"せいしょ\",\"ほうおう\",\"じつぶつ\",\"しょじょ\",\"しゅこう\",\"さいけん\",\"きらきら\",\"はんばい\",\"ろうすい\",\"くろーず\",\"ちゃいろ\",\"おじかん\",\"かずかず\",\"じかよう\",\"おとずれ\",\"さうんど\",\"いけめん\",\"ほっぽう\",\"しゃたい\",\"てんしゅ\",\"たいこく\",\"かけいぼ\",\"たんだい\",\"きたかぜ\",\"しんぷう\",\"せっけい\",\"たいしょ\",\"しゃせい\",\"しんどう\",\"ふくよう\",\"がそーる\",\"しゅえい\",\"ぼうじゅ\",\"はんけつ\",\"あまぐも\",\"さいがい\",\"ひるめし\",\"めのまえ\",\"あんうん\",\"ねえさん\",\"めいかく\",\"しゅんじ\",\"りったい\",\"ぼうかん\",\"もともと\",\"けんちく\",\"まいねん\",\"びりょう\",\"ていりつ\",\"かすてら\",\"りきせつ\",\"ざいたく\",\"しょぞく\",\"ないしょ\",\"すくえあ\",\"がいしゃ\",\"つきなみ\",\"はるさき\",\"つたえる\",\"まんとる\",\"かんねん\",\"えんずる\",\"はいそう\",\"げんぽん\",\"げんゆう\",\"ぶつかる\",\"つきづき\",\"ひっそり\",\"ろーすと\",\"つういん\",\"さいわい\",\"こうぶん\",\"かれっじ\",\"ろうかく\",\"ふれんち\",\"ぼつわな\",\"くらふと\",\"ふうじて\",\"ないじゅ\",\"おはなし\",\"そくせい\",\"きんこう\",\"げんこつ\",\"いざかや\",\"なくなる\",\"あかつき\",\"いわゆる\",\"ていしん\",\"けんがく\",\"よんほん\",\"みくだす\",\"そんりつ\",\"しんちく\",\"よみとり\",\"たいまー\",\"じっこう\",\"はげしい\",\"ははおや\",\"げいにん\",\"しろうと\",\"ちょうき\",\"こーらす\",\"あらゆる\",\"しろっぷ\",\"せいつう\",\"そっせん\",\"しょっぷ\",\"どくしょ\",\"なきごえ\",\"ざんねん\",\"こんぼう\",\"ごうきん\",\"せいけん\",\"びょうし\",\"しんとう\",\"じってい\",\"せいどう\",\"ぼくちく\",\"いままで\",\"けいひん\",\"やすめる\",\"けいかい\",\"ぐれーど\",\"きにいる\",\"ちいさい\",\"おーけー\",\"ともかく\",\"さおとめ\",\"じゅんじ\",\"おーぼえ\",\"いんぼう\",\"てつどう\",\"あこがれ\",\"へんせい\",\"はたらく\",\"とすれば\",\"べんろん\",\"こらーる\",\"ひるまえ\",\"ばりうむ\",\"ねがえり\",\"あしどめ\",\"ろじょう\",\"じったい\",\"くどくど\",\"じんぶん\",\"はいほん\",\"がくしゃ\",\"ころがす\",\"ためいき\",\"くろれら\",\"はんれい\",\"いかがく\",\"くたばる\",\"めどれー\",\"いやほん\",\"すんだん\",\"らいたー\",\"にっける\",\"あしどり\",\"ちょうど\",\"いぎょう\",\"こくめい\",\"かいまく\",\"こくれん\",\"うちゅう\",\"くんかい\",\"じょせつ\",\"たつまき\",\"しょうひ\",\"あいこう\",\"あどれす\",\"ぎんぱい\",\"じょげん\",\"はいせん\",\"ねんまつ\",\"こんかん\",\"むらーと\",\"すとれす\",\"きっかけ\",\"あやしむ\",\"げれんで\",\"だんじょ\",\"どうねん\",\"ちょうだ\",\"あいこん\",\"すんごい\",\"あるいは\",\"ほんのう\",\"けんさく\",\"うもれる\",\"ゆういぎ\",\"しまった\",\"からふる\",\"とりきめ\",\"さくせい\",\"しゅさい\",\"あんまり\",\"あんかー\",\"めんせき\",\"すけっと\",\"じゅなん\",\"ぱるさー\",\"わしょく\",\"えんとう\",\"しょうい\",\"しーるど\",\"かんまん\",\"としあけ\",\"しゅせん\",\"にげみち\",\"しょうし\",\"うんぱん\",\"せっする\",\"さぷらい\",\"なめらか\",\"かいふう\",\"じむしつ\",\"それより\",\"よしゅう\",\"せんざい\",\"あわせる\",\"こくふく\",\"ぶろーち\",\"うんめい\",\"したがき\",\"とりたて\",\"せっかく\",\"がくえん\",\"きょうむ\",\"てれこむ\",\"ららばい\",\"そうおう\",\"まっすぐ\",\"じゃのめ\",\"あるふぁ\",\"よびだし\",\"のうりつ\",\"まいつき\",\"さいろく\",\"いちづけ\",\"もうしょ\",\"どれでも\",\"たんしょ\",\"どうとう\",\"かえって\",\"げんこう\",\"くみあい\",\"かんだん\",\"ふぁいる\",\"かあさん\",\"むーびー\",\"どんぐり\",\"おーぷん\",\"かやっく\",\"つうよう\",\"ひそひそ\",\"まことに\",\"あさぬの\",\"こうつう\",\"ねんれい\",\"こんぱす\",\"ぴーまん\",\"かつよう\",\"どらふと\",\"えぴっく\",\"おんせい\",\"しんろう\",\"よきせぬ\",\"まんがん\",\"びょうく\",\"しゅくじ\",\"なわばり\",\"そうむぶ\",\"さんのぜ\",\"やまおく\",\"きっする\",\"あぶらえ\",\"なぜなら\",\"はぐるま\",\"しっそく\",\"はーれむ\",\"じゅたく\",\"ひさしい\",\"はなみず\",\"かくあげ\",\"まいきょ\",\"ひつじゅ\",\"せっくす\",\"うりきれ\",\"めじるし\",\"うめたて\",\"ぶろんず\",\"けんけい\",\"ぶきょく\",\"じょうほ\",\"もっとも\",\"いいわけ\",\"りざーぶ\",\"けんあく\",\"だっかん\",\"えんえん\",\"はらはら\",\"はんこう\",\"こーなー\",\"あしばや\",\"がくゆう\",\"ぶつぶつ\",\"しんがお\",\"せきずい\",\"なだめる\",\"こんかい\",\"くすぐる\",\"だいいち\",\"あめふと\",\"たとえる\",\"きちんと\",\"ちなみに\",\"ぽりーぷ\",\"ぺこぺこ\",\"どれどれ\",\"ぜんせん\",\"ゆきどけ\",\"まったり\",\"うけおい\",\"くろぼし\",\"せんけつ\",\"しゃとる\",\"ししょう\",\"とうしゅ\",\"すぱーく\",\"みちびく\",\"みねらる\",\"つりあい\",\"とうじる\",\"ふまえる\",\"むさくい\",\"そうしゃ\",\"ぬーどる\",\"すれーと\",\"いちにん\",\"あきない\",\"たんてい\",\"しんそつ\",\"ふっとう\",\"おいだす\",\"ぎざぎざ\",\"こうふん\",\"まないた\",\"ぞうがく\",\"かなしみ\",\"むきげん\",\"ふるって\",\"すいんぐ\",\"やくざい\",\"こくさく\",\"ゆうごう\",\"なにゆえ\",\"ものごと\",\"よくげつ\",\"ちゃくし\",\"しゅじん\",\"せいかん\",\"すこーる\",\"おれんじ\",\"こういき\",\"きゃびん\",\"よくよう\",\"げきろん\",\"ういんく\",\"こくばん\",\"さんじょ\",\"ほーまー\",\"さいこう\",\"とびかう\",\"こじいん\",\"きゃっか\",\"ばいたい\",\"くうこう\",\"ぼしゅう\",\"まちがい\",\"ちかどう\",\"くにがら\",\"がたがた\",\"こうけつ\",\"ほうこう\",\"めいにち\",\"たいぐう\",\"さくぶん\",\"きんだい\",\"きょよう\",\"ぞうさん\",\"どたばた\",\"いちじょ\",\"しめつけ\",\"ほうそく\",\"およぼす\",\"こいびと\",\"かくじつ\",\"きょうぶ\",\"かいよう\",\"ばらんす\",\"じょまく\",\"さーもん\",\"しっせき\",\"やすまる\",\"そうざい\",\"なかよく\",\"ときおり\",\"ばろっく\",\"ぞくする\",\"ぜんそく\",\"ゆうげき\",\"こころみ\",\"すじみち\",\"あやぶむ\",\"はえぬき\",\"たっする\",\"せきえい\",\"ほんすう\",\"せんかい\",\"ぶれんど\",\"ろいやる\",\"けっさん\",\"ゆうべん\",\"あきかぜ\",\"はろげん\",\"かいこく\",\"とれーど\",\"なにもの\",\"けんりつ\",\"こっかい\",\"たんがん\",\"みがわり\",\"よくしつ\",\"はんえい\",\"ちょちく\",\"あじつけ\",\"せいてき\",\"たいざん\",\"しゃそう\",\"ぶるせら\",\"まえがき\",\"ぶっかー\",\"かみかぜ\",\"きんさく\",\"じゅんろ\",\"めったに\",\"ことわり\",\"しょうゆ\",\"あつかい\",\"いぎりす\",\"かなづち\",\"せんべつ\",\"すかんく\",\"さんぱつ\",\"しにかる\",\"むりょう\",\"まんいん\",\"そうごう\",\"しぎかい\",\"たいした\",\"ふしぜん\",\"げんがく\",\"ひきつる\",\"かんてん\",\"あやまち\",\"じんるい\",\"ほうかい\",\"そんぼう\",\"よこぎる\",\"じょがい\",\"ばらばら\",\"さくばん\",\"ういんど\",\"めいせい\",\"ゆるやか\",\"くりんち\",\"そうぞう\",\"じんこう\",\"とっくん\",\"ふぉろー\",\"めいじん\",\"くまなく\",\"なんにん\",\"とうざい\",\"げんえい\",\"ぐたいか\",\"ちりょう\",\"いっさい\",\"なるほど\",\"たーびん\",\"くちびる\",\"ばっする\",\"じょせい\",\"たようか\",\"りんばん\",\"りべーと\",\"さかしま\",\"だがっき\",\"けいえい\",\"めいあん\",\"よろこぶ\",\"しなぎれ\",\"きれあじ\",\"ちゃーと\",\"ひじゅん\",\"かんぺき\",\"こうさく\",\"とくしゃ\",\"しめきり\",\"さくひん\",\"きゃくま\",\"わくちん\",\"ちぢまる\",\"いためる\",\"かていか\",\"てんじる\",\"じーあい\",\"かいいぬ\",\"おーばー\",\"おもたい\",\"あんぐら\",\"おんえあ\",\"にくせい\",\"おむれつ\",\"すくいず\",\"すぽーつ\",\"ほしょう\",\"すまいる\",\"えいぞう\",\"しんしょ\",\"こうがい\",\"きぬいと\",\"しずまる\",\"ゆーずど\",\"けいえん\",\"そのよう\",\"ぶんさん\",\"ゆうせん\",\"とっさに\",\"わーるど\",\"ばらっく\",\"くよくよ\",\"じょきょ\",\"おこなう\",\"きゃすと\",\"がいろん\",\"みすごす\",\"ろぼっと\",\"まざこん\",\"いしょう\",\"ばくぜん\",\"かったー\",\"ぜんせい\",\"きゅーと\",\"しんくろ\",\"てっする\",\"こみっく\",\"にいがた\",\"けんじん\",\"うちぼり\",\"うらなう\",\"しんぷく\",\"はいでん\",\"かんざい\",\"せんおう\",\"よふかし\",\"じーんず\",\"あとぴー\",\"すこーぷ\",\"すぐそば\",\"かりとる\",\"しょうが\",\"ちゃくい\",\"ぶんぽう\",\"ひろげる\",\"ぽーたー\",\"ぼーだー\",\"ぶたにく\",\"せんしゅ\",\"かーすと\",\"えんえい\",\"しんけい\",\"れんよう\",\"そんぱい\",\"うみだす\",\"らいばる\",\"しんてい\",\"げんしょ\",\"ぎょみん\",\"きゅうふ\",\"ふにんき\",\"はちがつ\",\"せいじか\",\"どらっぐ\",\"ひきとる\",\"あーみー\",\"じちけん\",\"ながらも\",\"うまれる\",\"はんそで\",\"いれもの\",\"ともなう\",\"だっしゅ\",\"れんじつ\",\"さいせん\",\"けんじつ\",\"おーろら\",\"そんぞく\",\"ようこう\",\"すませる\",\"らんけい\",\"ひきさく\",\"てへらん\",\"こうすい\",\"えんやす\",\"いっきょ\",\"ちょうふ\",\"れーよん\",\"はたらき\",\"ねかせる\",\"こんきょ\",\"どうほう\",\"そこうち\",\"さくがら\",\"ですから\",\"なかがい\",\"よやとう\",\"わりかん\",\"しゃしん\",\"しんけん\",\"あつがみ\",\"さかなや\",\"ちくりん\",\"ものごし\",\"じつぞう\",\"ゆうはつ\",\"みすみす\",\"おっぱい\",\"くらやみ\",\"ていいん\",\"かぶけん\",\"かきゅう\",\"うけおう\",\"まんさい\",\"あらーと\",\"じんそく\",\"じゅじゅ\",\"たやすい\",\"がんねん\",\"ひとすじ\",\"ぼうくう\",\"きりさめ\",\"せんごく\",\"ばつぐん\",\"どくぜつ\",\"たてふだ\",\"さんるい\",\"ぜんげん\",\"でしょう\",\"ほんけん\",\"いちだい\",\"かきぞめ\",\"しょせん\",\"はじめて\",\"ものずき\",\"いんない\",\"おおがた\",\"きにいり\",\"つやつや\",\"ことぶき\",\"どろぬま\",\"えだまめ\",\"きょえい\",\"しょうじ\",\"ほしゃく\",\"かねあい\",\"でぃすく\",\"しんぼう\",\"ふぇんす\",\"かしげる\",\"たいいん\",\"のぞいて\",\"みまもる\",\"むぞうさ\",\"こうどく\",\"にんそう\",\"さいこん\",\"ちくいち\",\"おしだし\",\"えきでん\",\"かいいん\",\"てきおう\",\"かいぞう\",\"たちよる\",\"さいしき\",\"れいきん\",\"きちっと\",\"あべっく\",\"はっぽう\",\"めいもく\",\"すもっぐ\",\"さつえい\",\"かいしょ\",\"いっせい\",\"ついとう\",\"ぎりぎり\",\"めいふく\",\"ふじゆう\",\"ぜいきん\",\"としうえ\",\"すうかい\",\"ちらちら\",\"もるひね\",\"だんがい\",\"そろそろ\",\"ちゅうと\",\"まじえる\",\"ぎりしゃ\",\"ぶんしつ\",\"ばーてん\",\"けんみん\",\"じつざい\",\"ざいだん\",\"たいとる\",\"すうがく\",\"にぎらす\",\"なんみん\",\"かくない\",\"はなぞの\",\"みねそた\",\"にっぽう\",\"はかどる\",\"だいぶん\",\"せんさい\",\"くさわけ\",\"あらすじ\",\"しょぼう\",\"すまない\",\"ぱちんこ\",\"かしだし\",\"たがいに\",\"りょかく\",\"ちょうめ\",\"どうくつ\",\"はいにち\",\"たくほん\",\"うちこみ\",\"ついしん\",\"もーぜる\",\"まっさつ\",\"どうげつ\",\"とくべつ\",\"さいぶん\",\"さっぱり\",\"ぶんかい\",\"なんとも\",\"びにーる\",\"まけこし\",\"かたほう\",\"うたごえ\",\"ひつぜん\",\"やっかん\",\"さくねん\",\"にやにや\",\"あざやか\",\"さしょう\",\"ばくはつ\",\"ほけんふ\",\"ぶんすう\",\"それでは\",\"あまえる\",\"のっとり\",\"さんれつ\",\"へんたい\",\"じゅえき\",\"ぐらみー\",\"しゅくず\",\"りきゅう\",\"かたよる\",\"あしぶみ\",\"すいがら\",\"ひっこむ\",\"ひょうし\",\"けんげん\",\"はつげん\",\"ひらがな\",\"うれゆき\",\"べっきょ\",\"とうだい\",\"しんまい\",\"ちゃーち\",\"わざわざ\",\"さっかー\",\"ひとまく\",\"かいりつ\",\"みゅーず\",\"しはらう\",\"ひんけつ\",\"しーれん\",\"そくしん\",\"まんなか\",\"じれんま\",\"はっこつ\",\"すくらむ\",\"ぎょうむ\",\"ぼんよう\",\"みつばい\",\"へろいん\",\"ゆうせい\",\"たっしゃ\",\"けいこう\",\"がらすど\",\"まいばん\",\"さんてい\",\"せいしゅ\",\"とうとつ\",\"ちゃしつ\",\"べついん\",\"かんごふ\",\"ちゃねる\",\"さいせい\",\"おぶじぇ\",\"わるくち\",\"おしこむ\",\"ついせき\",\"はんすと\",\"どうめい\",\"にわとり\",\"げきつい\",\"もっとー\",\"ろうどう\",\"とうせき\",\"ぶっそう\",\"しーずん\",\"とっかん\",\"さくせす\",\"からって\",\"きぎょう\",\"めいゆう\",\"ぼんじん\",\"あんだけ\",\"よくあさ\",\"ぼうさい\",\"はくさい\",\"ぽけっと\",\"きんぱく\",\"すぐれる\",\"ちょうそ\",\"ようさん\",\"しゃざい\",\"こぴーき\",\"すてーと\",\"かいわい\",\"おもむき\",\"えしゃく\",\"めんたる\",\"たんけん\",\"ほりでい\",\"なかゆび\",\"じんぶつ\",\"やくしん\",\"つうれい\",\"あざける\",\"つけもの\",\"ぐしょう\",\"がんえん\",\"あんぜん\",\"しょうぎ\",\"ほんあん\",\"すいえい\",\"かいこん\",\"ゆっくり\",\"ちゃのゆ\",\"ぜんりん\",\"たのしみ\",\"つきあい\",\"もちこす\",\"びしょう\",\"ざっとう\",\"ほんざん\",\"しきょく\",\"すみきる\",\"こんやく\",\"とうめん\",\"しんかい\",\"うちきる\",\"ほんにん\",\"ていせん\",\"りもーと\",\"とりょう\",\"ひとくち\",\"せきさん\",\"すいまー\",\"つきやま\",\"ほんもの\",\"がんしょ\",\"がいゆう\",\"とりこみ\",\"いきない\",\"げきさく\",\"そくする\",\"ごしっぷ\",\"けいろう\",\"こうさい\",\"どうてん\",\"しょせき\",\"ふぃーと\",\"ふひょう\",\"まったん\",\"いきさき\",\"ゆうげん\",\"いよいよ\",\"そうもく\",\"せんさー\",\"げつれい\",\"たいがん\",\"もちこみ\",\"せいえん\",\"ぼーるど\",\"はんたい\",\"こんわく\",\"まりーん\",\"いーじー\",\"はついく\",\"あんしん\",\"やりかた\",\"からくち\",\"がりうむ\",\"じゅよう\",\"はいどん\",\"によると\",\"みっしつ\",\"どちらも\",\"ぶらうす\",\"こくじん\",\"りきてん\",\"せんれい\",\"よびみず\",\"しゅにん\",\"とくだい\",\"おりおん\",\"ほんだな\",\"ぱらぼら\",\"はいけん\",\"れじゃー\",\"がんせき\",\"おうじょ\",\"やきいも\",\"からおけ\",\"きんろう\",\"なかにも\",\"くるしむ\",\"いただく\",\"よごれる\",\"しゅたい\",\"へいほう\",\"しんさく\",\"てまねき\",\"さくづけ\",\"むらがる\",\"ぜんしん\",\"しょうぶ\",\"こーひー\",\"はんせい\",\"かいろう\",\"くうはく\",\"まんえつ\",\"みやぶる\",\"にいさん\",\"うちけす\",\"にがおえ\",\"ゆうはん\",\"れいかい\",\"ぶれっど\",\"しゃいん\",\"みぎうで\",\"ぜんぼう\",\"げっしゃ\",\"ほうがん\",\"ぼいらー\",\"えんがわ\",\"きんえん\",\"ごうはん\",\"けしょう\",\"きょじん\",\"わかれめ\",\"いちまつ\",\"がくれい\",\"もくとう\",\"あさぎり\",\"こまんど\",\"おうかん\",\"ていしゅ\",\"じゅりつ\",\"やまかげ\",\"らくのう\",\"つちかう\",\"おうせつ\",\"どのへん\",\"ざっきょ\",\"ぜひとも\",\"しっけい\",\"すてっぷ\",\"としした\",\"りんどう\",\"すぷれー\",\"あやうく\",\"あとおし\",\"おーだー\",\"いちえん\",\"ないほう\",\"おいかぜ\",\"じょじし\",\"しなもん\",\"しろいろ\",\"けんえつ\",\"とうらく\",\"ぱとかー\",\"せいたく\",\"ひろびろ\",\"ゆいごん\",\"たちさる\",\"どりーむ\",\"ほこさき\",\"きんぴん\",\"じょうと\",\"すいせい\",\"ねんりん\",\"どうしゅ\",\"こうわん\",\"へいてん\",\"のびのび\",\"いれぶん\",\"まいとし\",\"くちきき\",\"しんずい\",\"ゆーれか\",\"ぶつだん\",\"かまもと\",\"ふれあー\",\"ないしん\",\"はんつき\",\"にってい\",\"やきにく\",\"せきぶつ\",\"しょくば\",\"べんじょ\",\"かいこう\",\"のびやか\",\"ひょうじ\",\"はがゆい\",\"よろしい\",\"おさない\",\"おもわず\",\"ぼっくす\",\"はなたば\",\"つぐなう\",\"きょくち\",\"あんこく\",\"みらくる\",\"せくしー\",\"つうこう\",\"ひひょう\",\"ふきとぶ\",\"かくしゅ\",\"いけばな\",\"まだまだ\",\"ふなよい\",\"くうぐん\",\"てんない\",\"かどうか\",\"しぇいく\",\"きちょう\",\"だれにも\",\"かいとう\",\"くうらん\",\"さつたば\",\"はーどる\",\"にとって\",\"いれかえ\",\"きょうと\",\"かんばす\",\"りめーく\",\"かくさん\",\"じゃぱん\",\"よそゆき\",\"さつがい\",\"えいかく\",\"そうねん\",\"まつじつ\",\"しょしき\",\"うきよえ\",\"あけがた\",\"しょぶん\",\"ぞうしょ\",\"じわじわ\",\"こくさん\",\"ふしょく\",\"くじゅう\",\"なんねん\",\"はやびき\",\"しんこく\",\"えんぶん\",\"ほうまん\",\"おおぜき\",\"まったく\",\"おんかい\",\"しじゅく\",\"したじき\",\"とうせい\",\"れんりつ\",\"こっとん\",\"かいがら\",\"しほんか\",\"きんぎょ\",\"ぜねこん\",\"すためん\",\"せんねん\",\"ちんせい\",\"ひっしゃ\",\"おどろく\",\"せんせん\",\"ていえん\",\"ながめる\",\"せいまい\",\"しまぐに\",\"けっこう\",\"はんたー\",\"あいつら\",\"ありさま\",\"ごうかく\",\"そうおん\",\"ぴんぴん\",\"むしぱん\",\"じむいん\",\"せんえん\",\"だったい\",\"きょうよ\",\"ひとびと\",\"とくほん\",\"かいぬし\",\"どうぜん\",\"かくとう\",\"じょじょ\",\"ひってき\",\"じっせい\",\"がりばー\",\"しりあう\",\"ぐりっぷ\",\"じゃっじ\",\"かどまつ\",\"にゅうじ\",\"へんそう\",\"さっこん\",\"かんらん\",\"すずしい\",\"おおもじ\",\"まいなー\",\"れっとう\",\"おしぼり\",\"しょよう\",\"きりぬき\",\"せんぷう\",\"うすらぐ\",\"しらせる\",\"れきだい\",\"いろんな\",\"きんちょ\",\"ういるす\",\"ぎんがみ\",\"みすてる\",\"しちょう\",\"はんがく\",\"ほんかん\",\"さびしい\",\"ひたすら\",\"こわだか\",\"めいさく\",\"すてーき\",\"ていたく\",\"れんぱい\",\"こんにち\",\"さいなん\",\"じゅたい\",\"さくふう\",\"かんむり\",\"いんめつ\",\"こっけん\",\"こきゅう\",\"すいーと\",\"すくーぷ\",\"ゆうぜい\",\"ごみばこ\",\"なんばん\",\"でんげん\",\"ぶんけん\",\"おまいり\",\"ながさき\",\"よびかけ\",\"はんろん\",\"みずーり\",\"ぞうきん\",\"じゅうし\",\"ほうぶん\",\"だんだん\",\"ばっすい\",\"かみなり\",\"ふくしん\",\"こてーじ\",\"はちまき\",\"しぐなる\",\"なげだす\",\"けいれつ\",\"もとづく\",\"あすきー\",\"ちぢめる\",\"ろじっく\",\"なんかん\",\"おにぎり\",\"にしても\",\"ほるだー\",\"たつじん\",\"しょうち\",\"くるしみ\",\"はんかち\",\"ひんそう\",\"せいかい\",\"たかなみ\",\"せんせき\",\"そうれつ\",\"おしえご\",\"ぺらぺら\",\"かいてん\",\"ぶんけい\",\"れんさい\",\"なかにわ\",\"らくたん\",\"こごえる\",\"とんねる\",\"はいじょ\",\"たわむれ\",\"とくしつ\",\"もくろく\",\"ねづよい\",\"とけこむ\",\"しょくじ\",\"かいだし\",\"こうのう\",\"くだける\",\"がいらい\",\"とじまり\",\"たんせき\",\"ぶらんく\",\"つぎはぎ\",\"ふらっぷ\",\"なんぜん\",\"けーぶる\",\"のこぎり\",\"ないせい\",\"ちょうか\",\"あやふや\",\"かいがい\",\"くーぽん\",\"あこーど\",\"すのもの\",\"ねっせん\",\"らっきー\",\"ふざける\",\"そうげん\",\"いちなん\",\"すけーる\",\"しゅべつ\",\"かんせん\",\"こうぞう\",\"しょうそ\",\"びりびり\",\"たかめる\",\"かみのけ\",\"ふきこむ\",\"ゆめにも\",\"べくたー\",\"しゃよう\",\"こうばい\",\"にくしみ\",\"ちょーく\",\"おどりこ\",\"はがれる\",\"けいらん\",\"みそしる\",\"とういん\",\"さんさく\",\"きんがく\",\"まえまえ\",\"てっぱい\",\"いすらむ\",\"にんじん\",\"たいせつ\",\"にんめい\",\"てんしん\",\"あらそい\",\"せっせと\",\"おうぶん\",\"はなむこ\",\"まえぶれ\",\"ごうぞく\",\"らいほう\",\"ないかく\",\"あかまつ\",\"まごつく\",\"おぎなう\",\"じゃっく\",\"ぶんさつ\",\"たたかい\",\"ちかてつ\",\"ぼすとん\",\"さんすう\",\"まーかー\",\"しょめい\",\"つぎこむ\",\"かんよう\",\"なかなか\",\"ひらひら\",\"ようひん\",\"とちゅう\",\"ろんがい\",\"だんじき\",\"せつげん\",\"ゆうよう\",\"ぱんじー\",\"りすなー\",\"うぃーく\",\"みなれる\",\"げんぜい\",\"ふろんと\",\"すいぎん\",\"ねんかい\",\"おおさか\",\"でこぼこ\",\"かんせつ\",\"もくてき\",\"けっせん\",\"らんばい\",\"わりざん\",\"やつれる\",\"ぜんこく\",\"さえぎる\",\"まなざし\",\"ないりく\",\"かにゅう\",\"へんぞう\",\"ぶちきれ\",\"らくさつ\",\"しゅすい\",\"ひのまる\",\"しゅうと\",\"とくせつ\",\"ざいーる\",\"のうぜい\",\"やくいん\",\"ふゆかい\",\"じゅれい\",\"れーべる\",\"せいいき\",\"おおきい\",\"ならべる\",\"いーぐる\",\"でぃなー\",\"とりまく\",\"たいぼく\",\"たれんと\",\"ちんちん\",\"きゃっぷ\",\"しんたい\",\"くずれる\",\"ちょきん\",\"ぜつだい\",\"よくそう\",\"たんかー\",\"ふるーつ\",\"ぴんぽん\",\"しくじる\",\"おおだい\",\"いしがき\",\"よりょく\",\"みならい\",\"でんたく\",\"すいみん\",\"さぎょう\",\"せいごう\",\"おととい\",\"ちゅうや\",\"はみがき\",\"きんじつ\",\"おおげさ\",\"みつもり\",\"ぞうさつ\",\"とだえる\",\"ぜんたい\",\"こうみん\",\"てはじめ\",\"のみこむ\",\"ましかく\",\"おおすじ\",\"そこなう\",\"にくがん\",\"でぃーぷ\",\"けいしゃ\",\"ぐんじゅ\",\"おしろい\",\"しょくご\",\"とっぱん\",\"こうけん\",\"こんぽう\",\"あなうめ\",\"おっさん\",\"くらーく\",\"がっかい\",\"せんゆう\",\"ここのつ\",\"きわめて\",\"れんとう\",\"ふうせん\",\"ももいろ\",\"せんたん\",\"どうじに\",\"ふりこむ\",\"こわれる\",\"そんしつ\",\"はくがく\",\"ごすぺる\",\"せーるす\",\"はくねつ\",\"おうべい\",\"のりだす\",\"らけっと\",\"もうしで\",\"かざむき\",\"ようする\",\"かくべつ\",\"さだめる\",\"あまりに\",\"みつかる\",\"こうやく\",\"ぶっしつ\",\"きずつく\",\"ほうだん\",\"てんてん\",\"ごろごろ\",\"ぞうせい\",\"でんげき\",\"すくーる\",\"だんてい\",\"おせいぼ\",\"ちょすい\",\"どうじる\",\"でたんと\",\"すやすや\",\"じょぶん\",\"おもむく\",\"つらぬく\",\"ころころ\",\"そうだん\",\"かみそり\",\"ゆうやけ\",\"ようふう\",\"ざいばつ\",\"うたひめ\",\"ぐるぐる\",\"ろくがつ\",\"ねさがり\",\"くうぜん\",\"ともども\",\"くもゆき\",\"たのしむ\",\"はりがね\",\"ちょうぼ\",\"よくばり\",\"うきうき\",\"きかせる\",\"さんしゃ\",\"らいめい\",\"たいがく\",\"めいしん\",\"てごたえ\",\"どうしゃ\",\"ゆうふく\",\"しおみず\",\"だんめん\",\"かいにん\",\"こうえき\",\"おしいれ\",\"ふうそく\",\"めっしゅ\",\"しんげん\",\"きんいろ\",\"わいわい\",\"げんそく\",\"はくぶつ\",\"びじゅつ\",\"なっとく\",\"どうすう\",\"げいごう\",\"かきとめ\",\"はんぱつ\",\"じゃない\",\"おおごえ\",\"はっけん\",\"うけとる\",\"ちゅうき\",\"おつかい\",\"ほうりつ\",\"せめんと\",\"ほんらい\",\"ぐんぞく\",\"まんごー\",\"あんさつ\",\"あとりえ\",\"そりすと\",\"そうてん\",\"しんがい\",\"とこのま\",\"こそこそ\",\"どうにか\",\"そんなに\",\"りこーる\",\"おうごん\",\"きみょう\",\"びようし\",\"ぼうがい\",\"いりょう\",\"ひさびさ\",\"けつえき\",\"ゆううつ\",\"いべんと\",\"まどんな\",\"かたこり\",\"がいあつ\",\"ねんらい\",\"まっくす\",\"りんじん\",\"はちうえ\",\"かいぞく\",\"もるどば\",\"しゅくん\",\"ようしょ\",\"きわだつ\",\"ぼうだち\",\"しょけん\",\"まんまる\",\"ひきうけ\",\"わーかー\",\"じゅんび\",\"にげだす\",\"できごと\",\"のりこし\",\"ふぉーす\",\"われわれ\",\"じっけい\",\"きょうぎ\",\"いくえい\",\"くりーむ\",\"しなやか\",\"どたんば\",\"りすぼん\",\"てわたす\",\"のりこむ\",\"へだてる\",\"びっしり\",\"したしむ\",\"きんしつ\",\"えいぞく\",\"まいぞう\",\"ぶちょう\",\"よのなか\",\"てっかく\",\"いれずみ\",\"つまさき\",\"ぷらんと\",\"まいにち\",\"しゅせき\",\"とうほく\",\"わけまえ\",\"そびえと\",\"こみかる\",\"うめしゅ\",\"まんげつ\",\"ほうほう\",\"こくはつ\",\"まんいち\",\"たいふう\",\"こいつら\",\"きんじる\",\"がんきん\",\"ばかんす\",\"げいげき\",\"しーあは\",\"ないてい\",\"しっしん\",\"とっぱー\",\"ろせんず\",\"げんぞう\",\"ぱぱいや\",\"さいばい\",\"うらぐち\",\"かきかた\",\"まあまあ\",\"みわける\",\"くちぶり\",\"にげきる\",\"がくめん\",\"こうじん\",\"ばりばり\",\"げっかん\",\"むじゅん\",\"せつない\",\"かいさん\",\"きゅうか\",\"しびっく\",\"たくらむ\",\"いごこち\",\"へいせつ\",\"ほんごく\",\"じょうず\",\"ゆうらん\",\"とうじき\",\"えいこう\",\"とうしょ\",\"ひろいん\",\"ことなる\",\"かげぐち\",\"とうぞく\",\"ないじつ\",\"みあげる\",\"おはいお\",\"まいひめ\",\"となれば\",\"るっくす\",\"おいわい\",\"おおくら\",\"さんせん\",\"わぎゅう\",\"たのしい\",\"たいして\",\"あどりぶ\",\"ふようい\",\"あいどる\",\"しろばい\",\"かりうむ\",\"きりかえ\",\"たんなる\",\"せんぱつ\",\"でんてつ\",\"ぞくしん\",\"いしゅく\",\"ききゃく\",\"おりもの\",\"あめだす\",\"ほんかく\",\"てっぺい\",\"うらみち\",\"ぱとろん\",\"げんぽう\",\"たいそう\",\"せったい\",\"だびんぐ\",\"はりきる\",\"たくいつ\",\"あつめる\",\"がんぺき\",\"そうしょ\",\"そうなん\",\"わりきる\",\"きょうき\",\"しりーず\",\"えんそく\",\"しかない\",\"みぎあし\",\"げんたい\",\"すいろん\",\"かっこう\",\"じんかく\",\"かんする\",\"しょめん\",\"めんもく\",\"れいねん\",\"きょうほ\",\"るーきー\",\"つりせん\",\"あにまる\",\"れいぶん\",\"たばねる\",\"さんがつ\",\"かかわる\",\"にくひつ\",\"たちのき\",\"ぬるぬる\",\"つっぱり\",\"ぐるーぷ\",\"はんぷく\",\"こうかん\",\"ひとつき\",\"へいれつ\",\"くおーと\",\"かんめい\",\"ししゅう\",\"やくわり\",\"きゃんぷ\",\"あけくれ\",\"くるしい\",\"びょうぶ\",\"へんしゃ\",\"しふぉん\",\"ぴすとる\",\"まだしも\",\"ありーな\",\"かんじる\",\"かしきん\",\"もっこう\",\"ぼすにあ\",\"あたえる\",\"たっせい\",\"えいぶん\",\"ぼうれい\",\"どくとく\",\"えいめい\",\"かわぐつ\",\"ほうてき\",\"からっと\",\"えんじる\",\"ふんわり\",\"まえむき\",\"つうかん\",\"らんぱつ\",\"ひましに\",\"ふんべつ\",\"みわたす\",\"どうしん\",\"ていせい\",\"りきさく\",\"まちあい\",\"でんこう\",\"ねんない\",\"あいのり\",\"しんかー\",\"おきもの\",\"うんこう\",\"りょかん\",\"あぶらみ\",\"おろおろ\",\"いとなみ\",\"ぽかぽか\",\"おくゆき\",\"ほうぼく\",\"ぼうだん\",\"ほんたい\",\"ちゅうい\",\"やわらか\",\"すりらー\",\"たすかる\",\"じんえい\",\"ふちょう\",\"もすくわ\",\"さいれん\",\"せんとう\",\"かいつけ\",\"ぱんぷす\",\"めんかい\",\"ほしがる\",\"しぇーく\",\"さいはん\",\"かんけん\",\"かいぐん\",\"ばいぞう\",\"すんぽう\",\"ほんしょ\",\"すいげん\",\"かいざい\",\"よびすて\",\"さんかい\",\"じめじめ\",\"かんそく\",\"はくらい\",\"こくひん\",\"ほうへい\",\"むじゃき\",\"すいっち\",\"もんきー\",\"せいとん\",\"にのつぎ\",\"きゅうい\",\"はんりょ\",\"すいたい\",\"げきれい\",\"ひとかげ\",\"ようれい\",\"せいかく\",\"うらがね\",\"りぷらい\",\"なにごと\",\"において\",\"ひきゅう\",\"てっきん\",\"しょっと\",\"つとめる\",\"えすぷり\",\"おふぃす\",\"みちすじ\",\"じょえん\",\"ちんしゃ\",\"みつける\",\"すうふん\",\"おるがん\",\"りんかい\",\"ばざーる\",\"いわかん\",\"あしなみ\",\"のうがく\",\"さーせん\",\"いそいで\",\"ばうんど\",\"ひきにく\",\"もちあじ\",\"ごぶさた\",\"よろよろ\",\"かんぬし\",\"ろんしゃ\",\"りょうて\",\"ぱさぱさ\",\"げんぶつ\",\"ものさし\",\"けんあん\",\"ねんがん\",\"どうよう\",\"せしうむ\",\"じつよう\",\"ふきょう\",\"だいとう\",\"ねっしん\",\"おんたい\",\"もちぬし\",\"まどぐち\",\"ひとばん\",\"しどにー\",\"ぶらんこ\",\"まくらめ\",\"まっとう\",\"ぶぎょう\",\"そっくす\",\"げんたん\",\"きょうい\",\"ふみきり\",\"もしょう\",\"こくさい\",\"たちあい\",\"せいみつ\",\"けいさい\",\"えんぜつ\",\"じゅだく\",\"かんさつ\",\"あべこべ\",\"すうねん\",\"てんぺら\",\"いっぱん\",\"ぐらいこ\",\"とりつぎ\",\"しおくり\",\"まいそう\",\"でぱーと\",\"ばんこう\",\"そのもの\",\"ろうじょ\",\"めにゅー\",\"みはらい\",\"どうどう\",\"おうこう\",\"ぜいかん\",\"ようにく\",\"じょーく\",\"ぼうおん\",\"さいくる\",\"はながた\",\"つうきん\",\"うわのせ\",\"ようつう\",\"ろんてん\",\"ちんぴら\",\"なにやら\",\"かわしも\",\"めでぃあ\",\"すすめる\",\"めでたい\",\"ぷりんた\",\"ふかめる\",\"ていけつ\",\"すれいぶ\",\"さいたく\",\"けいしん\",\"すきずき\",\"がくせつ\",\"こくしょ\",\"しんぶん\",\"さいけつ\",\"きかえる\",\"そのほか\",\"とうけつ\",\"よこがき\",\"でんせつ\",\"げんかい\",\"りょうじ\",\"りくーど\",\"そうけい\",\"じぷしー\",\"かたまり\",\"のうこん\",\"とぎれる\",\"いりぐち\",\"わかまつ\",\"ゆうめい\",\"ようさい\",\"おいつく\",\"かんざす\",\"けろいど\",\"すいこう\",\"とおあさ\",\"かけじく\",\"こいしい\",\"かいぜん\",\"かんそう\",\"なんてん\",\"がっぺい\",\"はままつ\",\"ないめん\",\"にゅうわ\",\"とりこむ\",\"さしだす\",\"はんどう\",\"えふえむ\",\"むしばむ\",\"ちんじゅ\",\"おうへい\",\"ありがち\",\"しゃがい\",\"くわばら\",\"いろいろ\",\"ざんるい\",\"とりひき\",\"ぶれーき\",\"ごういん\",\"れいとう\",\"まくぎれ\",\"ゆりかご\",\"じゅしん\",\"ずいしょ\",\"しきゅう\",\"まきこむ\",\"しゃとー\",\"えっとう\",\"せいもん\",\"ざんしょ\",\"むなしい\",\"らっせる\",\"ちぢれる\",\"でもたい\",\"まいんど\",\"あとらす\",\"ひんめい\",\"たんこう\",\"すたんど\",\"のうほう\",\"えいびん\",\"いらすと\",\"りつあん\",\"すいさん\",\"びんわん\",\"すまーと\",\"じんしん\",\"ないだく\",\"けっさい\",\"えきたい\",\"おんどく\",\"しょうふ\",\"とちょう\",\"かんぶん\",\"はーばー\",\"あいろん\",\"しゅたる\",\"せんべい\",\"たいせき\",\"さしこむ\",\"こくえき\",\"おもしろ\",\"ときどき\",\"ああああ\",\"けいしき\",\"たんでん\",\"いまどき\",\"せいぞん\",\"きょぜつ\",\"どきどき\",\"じょうい\",\"こくもつ\",\"あんけん\",\"なだかい\",\"みきさー\",\"ぶんせき\",\"わるもの\",\"にんずう\",\"ぶらぼー\",\"ぶっぴん\",\"いきがい\",\"せんりつ\",\"えいよう\",\"ふんまつ\",\"りりーふ\",\"ひやかす\",\"ばっくす\",\"ふぃっと\",\"おくさん\",\"またがる\",\"ようそう\",\"じゅりー\",\"すいがい\",\"なんとか\",\"れぷりか\",\"うぇすと\",\"しっぺい\",\"てきはつ\",\"えいこく\",\"うぇいと\",\"きんよう\",\"にじゅう\",\"せいやく\",\"はくしゃ\",\"もちいえ\",\"ほうちく\",\"なこうど\",\"ますたー\",\"にこちん\",\"ゆうぼう\",\"さまたげ\",\"かいざん\",\"きゅうは\",\"みっくす\",\"ねとまり\",\"ゆうへい\",\"ゆびさき\",\"みずから\",\"ゆうどう\",\"なんです\",\"おんがく\",\"どしどし\",\"いんてり\",\"おすかー\",\"ちょうり\",\"ものおき\",\"ねがえる\",\"かんるい\",\"がっしり\",\"じゆうか\",\"たんせい\",\"てのーる\",\"おおきな\",\"しょもつ\",\"でんえん\",\"おんだん\",\"きんせき\",\"みだれる\",\"かろやか\",\"じゅがく\",\"あつあつ\",\"きょだい\",\"じんじゃ\",\"やくにん\",\"どくぼう\",\"くわしい\",\"ののしる\",\"だいやる\",\"きょがく\",\"たいあん\",\"いわやま\",\"はたあげ\",\"とくそう\",\"のたびに\",\"ていない\",\"おいぬく\",\"えっせい\",\"こんたん\",\"ひとづま\",\"ふっかー\",\"みとれる\",\"けんもん\",\"いんちき\",\"れーざー\",\"しんぺん\",\"しょうに\",\"ぞうだい\",\"ふたしか\",\"そうです\",\"すとろぼ\",\"しゅどう\",\"せんかん\",\"せんぜん\",\"しゃかい\",\"しかくい\",\"ばーじん\",\"ふりきる\",\"せんぼつ\",\"ぜんえい\",\"せいけい\",\"ちゃーじ\",\"へいたい\",\"きいろい\",\"よくじつ\",\"ろうほう\",\"げんばつ\",\"あぱーと\",\"ぎょにく\",\"ぼうすい\",\"やくひん\",\"ひきいる\",\"おおゆき\",\"ぱーらー\",\"だいがく\",\"どうして\",\"こうりょ\",\"べんかい\",\"ゆうする\",\"てんさく\",\"さいだい\",\"もうける\",\"れきほう\",\"おやかた\",\"ろーらー\",\"みんよう\",\"ゆうあい\",\"みずまし\",\"こうへい\",\"きんぼし\",\"のうそん\",\"せいぶん\",\"かしょう\",\"まよなか\",\"きゃびあ\",\"べいこく\",\"さぽーと\",\"ていまい\",\"くったく\",\"くっせつ\",\"しんばし\",\"ふごうり\",\"むいしき\",\"えんない\",\"ろけはん\",\"はりだす\",\"すてれお\",\"こんげん\",\"いましめ\",\"つかえる\",\"ぶかぶか\",\"ゆかした\",\"しんかぶ\",\"しんがー\",\"たすける\",\"れとると\",\"ゆうがい\",\"よそおい\",\"へるしー\",\"ふんかん\",\"あやしい\",\"りょうし\",\"ぐるっと\",\"しゃくや\",\"すぺーす\",\"しゅやく\",\"あっぱく\",\"ぜんぶん\",\"すこっち\",\"てんせん\",\"あいじん\",\"ようせつ\",\"ひにひに\",\"よみかた\",\"でまんど\",\"まぐなむ\",\"いっしょ\",\"ぎろちん\",\"うんよく\",\"ほどこす\",\"しんでん\",\"れでぃー\",\"じょうぶ\",\"もりこむ\",\"ほんそう\",\"せんたく\",\"こすもす\",\"しんだん\",\"ばりかん\",\"きびしさ\",\"しあわせ\",\"ほっする\",\"ほうすい\",\"きみがよ\",\"そっこう\",\"みりょう\",\"すけっち\",\"けいてき\",\"てんきょ\",\"こんなん\",\"ふうりん\",\"きゅうゆ\",\"びんせん\",\"すみずみ\",\"すとーる\",\"かわぎし\",\"ふんさい\",\"さいのう\",\"おちつく\",\"きつもん\",\"れんかん\",\"もみずむ\",\"はやおき\",\"どうはん\",\"にげあし\",\"まちなか\",\"たいいく\",\"せいれつ\",\"げんろく\",\"よろこび\",\"せつぼう\",\"いっかつ\",\"ぷろぺら\",\"わるぐち\",\"そだてる\",\"こうざい\",\"ほうしん\",\"たかまる\",\"かぼちゃ\",\"とろんと\",\"さくれつ\",\"せいとう\",\"こうせき\",\"いなずま\",\"らいげつ\",\"しゅうそ\",\"ゆうがた\",\"みっせつ\",\"ひんしつ\",\"きょうふ\",\"がそりん\",\"とむらう\",\"なんにも\",\"もうそう\",\"ゆうぐれ\",\"むくいる\",\"めいやく\",\"せつやく\",\"めいずる\",\"へんせん\",\"はぐくむ\",\"いささか\",\"ふぃーだ\",\"かいかつ\",\"ひょうり\",\"やまねこ\",\"ところで\",\"らっかん\",\"かんれい\",\"さいせき\",\"おまもり\",\"てきする\",\"てづくり\",\"きのどく\",\"にりゅう\",\"ふじゅん\",\"ゆうだち\",\"こきざみ\",\"かいもの\",\"じきょう\",\"いきいき\",\"となると\",\"えんそう\",\"こうよう\",\"かんのん\",\"ねんぱい\",\"ていせつ\",\"すいけい\",\"えんぜる\",\"こくない\",\"でばいす\",\"いっかい\",\"びたみん\",\"ゆびきり\",\"おかしな\",\"じゃぐち\",\"ぶんたん\",\"なおかつ\",\"さんかん\",\"ぼんやり\",\"まっこう\",\"きわめる\",\"けんしき\",\"みくろん\",\"ちりとり\",\"くちこみ\",\"どくせい\",\"ぜんぜん\",\"すかーふ\",\"ようせき\",\"くれーぷ\",\"いきなり\",\"ふぇいく\",\"もとより\",\"ほんとう\",\"ぜんてん\",\"かくすう\",\"わきやく\",\"せんいき\",\"みぎした\",\"きにゅう\",\"ぬけだす\",\"かたろぐ\",\"わりやす\",\"くんしゅ\",\"うずまき\",\"かたがわ\",\"たいかん\",\"はぐれる\",\"つりあう\",\"そくばく\",\"めんばー\",\"いきかた\",\"たんてき\",\"しにたい\",\"しょだい\",\"きゅうむ\",\"りぽーと\",\"とにかく\",\"ねんいり\",\"しばくさ\",\"にほんが\",\"ぱれーど\",\"ぬくもり\",\"ほんがん\",\"にちべい\",\"へんさち\",\"ちじょう\",\"めざまし\",\"だんやく\",\"ぞんぶん\",\"ひとがら\",\"ぷろせす\",\"かんふる\",\"ろうれい\",\"けんさつ\",\"たいねつ\",\"てんじん\",\"にんげん\",\"にしがわ\",\"けんぞう\",\"ああいう\",\"かいらく\",\"せともの\",\"とうせん\",\"くやしい\",\"かけっこ\",\"ぼくそう\",\"ひきざん\",\"がんばん\",\"ごうとう\",\"おいこむ\",\"しゃくど\",\"すいそく\",\"みおくる\",\"はやびけ\",\"こまかい\",\"あいよう\",\"だつぜい\",\"えっけん\",\"けいそう\",\"ぺいんと\",\"しゃない\",\"かっせい\",\"とうさい\",\"やさしい\",\"おんとう\",\"きょとう\",\"ほうめん\",\"ぜつぼう\",\"たんしん\",\"きごころ\",\"やりがい\",\"めんどう\",\"せっかい\",\"ろんそう\",\"ぐんとう\",\"びーばー\",\"ついげき\",\"としがす\",\"はいれつ\",\"だっかい\",\"きんぺん\",\"しるばー\",\"ひろがり\",\"としつき\",\"ひとこと\",\"えんせん\",\"うめぼし\",\"わがまま\",\"ざんぱい\",\"えんでん\",\"しゃれい\",\"てんぼう\",\"いっしん\",\"うちけし\",\"ねつべん\",\"ぶんだん\",\"おおかた\",\"ちんあつ\",\"ばりとん\",\"つよめる\",\"はぎはら\",\"げじゅん\",\"ひかえる\",\"さいくつ\",\"はいあん\",\"せいふく\",\"いちやく\",\"がくだん\",\"かわかす\",\"ふほんい\",\"ろーれる\",\"せいのう\",\"とくさん\",\"おらくる\",\"どくさつ\",\"せいれい\",\"とどめる\",\"せんじつ\",\"まけいぬ\",\"げんさく\",\"けいよう\",\"ししょく\",\"たにがわ\",\"きょうそ\",\"まらかす\",\"めいさい\",\"まっしろ\",\"はいしん\",\"さんぴん\",\"れがった\",\"まどぎわ\",\"せいじつ\",\"ふきげん\",\"げんせい\",\"ずいいち\",\"そのうち\",\"じしょう\",\"だきょう\",\"かっすい\",\"せんけん\",\"いっぴん\",\"どうしつ\",\"つかのま\",\"せんこう\",\"しんにん\",\"よわむし\",\"ふろすと\",\"わくせい\",\"しかける\",\"おおだな\",\"ちんこん\",\"ささえる\",\"おおえだ\",\"なっくる\",\"たっぷり\",\"かたりて\",\"たちばな\",\"かけざん\",\"でざいん\",\"かいつう\",\"きびしい\",\"ごっかん\",\"あぴーる\",\"そくじつ\",\"ふけいき\",\"とうかい\",\"そんざい\",\"れんめい\",\"やりとり\",\"こぼれる\",\"よわめる\",\"かんかく\",\"しっかん\",\"まんざい\",\"めーでー\",\"けんけつ\",\"こうどう\",\"がめらん\",\"ひんぱん\",\"ものおと\",\"なさそう\",\"ろうにん\",\"かんじん\",\"しゅわん\",\"らいにち\",\"のうきん\",\"はんそう\",\"なかじま\",\"くにぐに\",\"すむーず\",\"じょせき\",\"しりょう\",\"けんえき\",\"でいたん\",\"けいそつ\",\"ふくだい\",\"きゅうち\",\"すぱいす\",\"すとろー\",\"せみなー\",\"おしょく\",\"えんとつ\",\"ください\",\"さきほど\",\"すわっぷ\",\"かんけい\",\"せいさく\",\"ふらんす\",\"けつべつ\",\"ふぉーど\",\"いまさら\",\"なえどこ\",\"ゆーもあ\",\"しゅっか\",\"かがやき\",\"がさがさ\",\"じゅうゆ\",\"ようふく\",\"ひあたり\",\"ばくだい\",\"せんでん\",\"またせる\",\"そうぐう\",\"りゃくご\",\"もちまえ\",\"げつがく\",\"けんえい\",\"あおいろ\",\"わりばし\",\"てつづき\",\"ひのいり\",\"まずしい\",\"うずうず\",\"たたかう\",\"はんめい\",\"かいはつ\",\"らうんど\",\"しゃげき\",\"おうせん\",\"とうらい\",\"せんぷく\",\"すたっふ\",\"かっとう\",\"とうかく\",\"みずぐち\",\"てがたい\",\"ゆびさす\",\"せんれつ\",\"かみくず\",\"ばんづけ\",\"こうらく\",\"ぼくめつ\",\"じょこう\",\"ばいぱす\",\"さーかす\",\"せってん\",\"まんてん\",\"にまいめ\",\"とどける\",\"かくにん\",\"ぱーれん\",\"ねすごす\",\"はっせい\",\"けんめい\",\"くうせき\",\"こんいん\",\"ちょくし\",\"みぎうえ\",\"ふかかい\",\"なわとび\",\"すこっぷ\",\"すいてき\",\"てっきょ\",\"ぎじょう\",\"ぜっこう\",\"びみょう\",\"けいれき\",\"ますます\",\"しゃべる\",\"やまごや\",\"ながあめ\",\"れいふく\",\"いじょう\",\"ばんぐみ\",\"めんする\",\"ふうしょ\",\"やじゅう\",\"そうるい\",\"りくぐん\",\"ざいがく\",\"つじつま\",\"べんさい\",\"かんてつ\",\"たきがわ\",\"ぎょかく\",\"かいせき\",\"いばしょ\",\"らんとう\",\"ひっぱる\",\"てくてく\",\"こうきん\",\"せきにん\",\"おこない\",\"はいえん\",\"しおれる\",\"とっしん\",\"ひんしゅ\",\"めがしら\",\"たくえつ\",\"はんざい\",\"びょうり\",\"きがつく\",\"かくてる\",\"すえおき\",\"くーりー\",\"がしがし\",\"えんせい\",\"とのさま\",\"はんよう\",\"ふんしつ\",\"ちんれつ\",\"じゅんど\",\"まりょく\",\"さんそう\",\"くうふく\",\"ぜいほう\",\"えんどう\",\"じしょく\",\"わりあて\",\"さいばん\",\"がいする\",\"ただしい\",\"はきゅう\",\"しょーる\",\"きずあと\",\"くうてん\",\"かんぞう\",\"むしょう\",\"うかがう\",\"しんみつ\",\"ゆうめし\",\"じゅくご\",\"まんせき\",\"さんこつ\",\"はなやか\",\"らんざつ\",\"おかると\",\"ほりでー\",\"とうけん\",\"がくわり\",\"きょしつ\",\"じきゅう\",\"もよおす\",\"じんどう\",\"きょかん\",\"ばちがい\",\"げんまい\",\"くみたて\",\"いりのい\",\"かんらく\",\"やんきー\",\"ぞうはん\",\"ほんこう\",\"かきとる\",\"じぇっと\",\"みすたー\",\"うらない\",\"くういき\",\"あつまり\",\"そうろん\",\"たいきん\",\"こっくす\",\"とらんく\",\"えんぴつ\",\"どうぎご\",\"もんぜん\",\"ぎょうぎ\",\"やくしゃ\",\"いっかく\",\"たまたま\",\"とりくち\",\"たんそく\",\"ういんぐ\",\"ぜいこみ\",\"たいけつ\",\"まかだむ\",\"じがぞう\",\"いけない\",\"ふくめん\",\"あざむく\",\"ばむばむ\",\"たいけん\",\"のうりん\",\"へいおん\",\"とっきょ\",\"ふるーと\",\"しょほう\",\"としても\",\"ばーすと\",\"さいてん\",\"あいつぐ\",\"ふぁくす\",\"こくどう\",\"さむらい\",\"むらさき\",\"ひきつぎ\",\"そくばい\",\"たましい\",\"つくろう\",\"てぬぐい\",\"かんがえ\",\"けんちじ\",\"きんぱつ\",\"ひとまえ\",\"きびょう\",\"いつだつ\",\"どじょう\",\"ごきぶり\",\"かいぶつ\",\"ふらいと\",\"もちーふ\",\"けいはつ\",\"こめつぶ\",\"さげすむ\",\"ぎゃくて\",\"ふらんく\",\"にこやか\",\"かんたい\",\"かんぜん\",\"いいだす\",\"ふさがる\",\"ふくごう\",\"こうしん\",\"らくがき\",\"たおれる\",\"ぼつらく\",\"ごしっく\",\"あくるひ\",\"しょっく\",\"しゅうち\",\"あなろぐ\",\"とびだし\",\"かーぼん\",\"さいへん\",\"あさばん\",\"はやくち\",\"じーぱん\",\"はっかん\",\"びーぐる\",\"こうりつ\",\"ねっとう\",\"かんれき\",\"げいにく\",\"げるまん\",\"ひまらや\",\"ふりむく\",\"ぱたーん\",\"たたずむ\",\"さんだい\",\"しんじん\",\"ちゅうじ\",\"てなんと\",\"ふうとう\",\"ふかぶん\",\"やきとり\",\"だいかん\",\"てごわい\",\"ぎもんふ\",\"とうべん\",\"しべりあ\",\"ぶつぞう\",\"わりこみ\",\"だいめい\",\"まうんと\",\"どらまー\",\"かんぼう\",\"れんごう\",\"まっちゃ\",\"さんまん\",\"れっきょ\",\"べんごし\",\"まんびき\",\"ぷんぷん\",\"げんぶん\",\"けいぞく\",\"かけあし\",\"くりのべ\",\"れんたる\",\"とまどい\",\"さいしゅ\",\"むきゅう\",\"のーまる\",\"はげまし\",\"ぎだゆう\",\"てりーぬ\",\"もしくは\",\"ごうりか\",\"とうえい\",\"ひだりて\",\"ふなびん\",\"れんさく\",\"いんさつ\",\"ついやす\",\"しゅぞく\",\"えんげい\",\"ばんにん\",\"でぼんき\",\"しっこく\",\"おきあい\",\"かりすま\",\"せっぱく\",\"すたじお\",\"ぶんしん\",\"さくげん\",\"ひんもく\",\"せいさい\",\"とくしか\",\"うかべる\",\"えっせー\",\"おごそか\",\"こくみん\",\"こんせき\",\"ゆうすう\",\"ぶんめい\",\"だんいん\",\"へいさつ\",\"いやがる\",\"きしゅう\",\"はつこい\",\"そわそわ\",\"じしゅう\",\"かんきん\",\"さかずき\",\"しょうわ\",\"しんぷる\",\"どくさい\",\"だいたん\",\"ぴかぴか\",\"こうせつ\",\"ぎしょう\",\"たちいり\",\"ばたばた\",\"たいのう\",\"とりさげ\",\"れこーど\",\"ほらあな\",\"のうどう\",\"えいのう\",\"さーびす\",\"そとぼり\",\"ねむたい\",\"しゅつど\",\"しゅつば\",\"ひゅーず\",\"せつりつ\",\"ほうせき\",\"ちゃくち\",\"みじゅく\",\"しんぴん\",\"れっしゃ\",\"こくるい\",\"かのじょ\",\"まかろに\",\"じゅにあ\",\"ぷろぱん\",\"ようじん\",\"ぶれすと\",\"はいやく\",\"てっぽう\",\"おだてる\",\"かんばつ\",\"みなさん\",\"べっしつ\",\"すえっこ\",\"うとうと\",\"まくした\",\"あとつぎ\",\"おとうと\",\"くりあげ\",\"うすまる\",\"いんとろ\",\"がっくり\",\"ゆさぶる\",\"みのがす\",\"まんぱい\",\"ごまかす\",\"いしょく\",\"かりこむ\",\"あながち\",\"どのよう\",\"ばんざい\",\"したうけ\",\"きょうわ\",\"すらいす\",\"せいよう\",\"れんこう\",\"だいなし\",\"げんすい\",\"せいそう\",\"ほうしき\",\"どうりつ\",\"くわえる\",\"せんじん\",\"いんかん\",\"ぐんかん\",\"ふくざつ\",\"かさねる\",\"よくあつ\",\"じょっき\",\"どくたー\",\"ちんぼつ\",\"こんじき\",\"くろいろ\",\"えんけい\",\"たんでむ\",\"めらにん\",\"えりまき\",\"はんがー\",\"すろっと\",\"しきべつ\",\"かいばつ\",\"そうかつ\",\"ぷろぱー\",\"べいじん\",\"よくせい\",\"がいえん\",\"たんれん\",\"すてっき\",\"うちうち\",\"ねんこう\",\"こんだて\",\"ぎゅっと\",\"せかせか\",\"がんぼう\",\"げいのう\",\"おそらく\",\"めいぶつ\",\"ぼーっと\",\"しんせつ\",\"にぎやか\",\"てんざい\",\"つうこく\",\"ありそう\",\"ひかえめ\",\"しょざい\",\"ぐずぐず\",\"きたえる\",\"おいしい\",\"そうけん\",\"じんざい\",\"あさって\",\"いちまん\",\"げきせん\",\"だいざい\",\"びんぼう\",\"しゅんき\",\"るいけい\",\"はつばい\",\"としごろ\",\"でもある\",\"めんめん\",\"さいほう\",\"うでまえ\",\"あかるい\",\"ようえき\",\"うれえる\",\"じゅうに\",\"じょうむ\",\"ちかしつ\",\"きょせい\",\"ゆうぼく\",\"かるがる\",\"ほうがい\",\"くろうと\",\"せいきょ\",\"だんけつ\",\"でしべる\",\"なまいき\",\"あらわす\",\"れっすん\",\"きゃりあ\",\"はんらく\",\"きかいか\",\"いんせい\",\"すうせん\",\"ほくおう\",\"あやうい\",\"きょてん\",\"こううん\",\"へんきん\",\"まうんど\",\"そびょう\",\"ちかづく\",\"ちょくご\",\"でんせん\",\"しょぞう\",\"にっこり\",\"どうふう\",\"ちぇいん\",\"かきこむ\",\"ようしき\",\"ちりがみ\",\"めもりー\",\"なにより\",\"みずあげ\",\"わりあい\",\"いきさつ\",\"さからう\",\"もつれる\",\"ふるまう\",\"とりかた\",\"そうとく\",\"なんでも\",\"だいほん\",\"とりくむ\",\"ずーっと\",\"ふいるむ\",\"れしーぶ\",\"そとがわ\",\"ろんどん\",\"きょしん\",\"みみより\",\"さんだる\",\"てったい\",\"すいしゃ\",\"りゅーと\",\"かわいい\",\"たきぐち\",\"いいきる\",\"てっきり\",\"とうとう\",\"ほねぬき\",\"まいあさ\",\"にぎわう\",\"ならない\",\"みかえり\",\"しょさい\",\"ひっけい\",\"もるたる\",\"みんぺい\",\"ぐうすう\",\"てっくす\",\"ながもち\",\"こくたい\",\"へいあん\",\"そろえる\",\"いちもん\",\"ざっそう\",\"しんじつ\",\"たてもの\",\"ほどける\",\"ふぇりー\",\"めがほん\",\"てっぺん\",\"さきゆき\",\"いったん\",\"よこはば\",\"いえろー\",\"こっとう\",\"かきょく\",\"ていけい\",\"むりょく\",\"のっとる\",\"かいほう\",\"ほうがく\",\"しりあす\",\"ばくげき\",\"ぜんけん\",\"かんかつ\",\"がーでん\",\"せいさん\",\"おみやげ\",\"めんみつ\",\"じゃがー\",\"あくよう\",\"うちだす\",\"おもわく\",\"つんどく\",\"おくそく\",\"はごたえ\",\"じむかん\",\"ばんのう\",\"いつでも\",\"こんぽん\",\"でーもん\",\"ほうそう\",\"たちまち\",\"がくぶち\",\"やすもの\",\"ぶらっく\",\"しゅしゃ\",\"かいきょ\",\"しらべる\",\"はながみ\",\"てんかい\",\"ぐったり\",\"せんこく\",\"みちすう\",\"ろんずる\",\"とりくみ\",\"すとっぷ\",\"たりょう\",\"かいけい\",\"すいそう\",\"せつじつ\",\"りもこん\",\"どうやら\",\"さいたん\",\"ちくざい\",\"ぱすてる\",\"だんさー\",\"のっかー\",\"てんすう\",\"ぱにっく\",\"そうして\",\"きかんし\",\"わらんと\",\"さんりん\",\"あくしゅ\",\"ぱらそる\",\"しんぽう\",\"あふれる\",\"ほんだい\",\"べつべつ\",\"めるしー\",\"けってん\",\"たいおん\",\"かぷせる\",\"めんじょ\",\"こんざつ\",\"しつない\",\"てっせい\",\"こくほう\",\"ほすてす\",\"きりくち\",\"ぶんれつ\",\"ねんとう\",\"じはんき\",\"とくさく\",\"かんげき\",\"かぷらー\",\"こうぼう\",\"たいがい\",\"だけども\",\"ものらる\",\"はくあい\",\"せんぱん\",\"ただいま\",\"かくめい\",\"くつろぐ\",\"ぼろぼろ\",\"さふぁり\",\"れんたい\",\"さまざま\",\"ただちに\",\"たいしゃ\",\"どくしゃ\",\"ばっそく\",\"まいくろ\",\"とうそう\",\"うえした\",\"すぺいん\",\"だつらく\",\"ぜんじつ\",\"たいめん\",\"かとれや\",\"うるさい\",\"かえだま\",\"どうれつ\",\"どくそう\",\"たいこう\",\"みはらす\",\"ようふぼ\",\"つみこむ\",\"ほうむる\",\"すとっく\",\"さくてい\",\"せんぱく\",\"かんぼつ\",\"までなら\",\"こくゆう\",\"そうかん\",\"はいこう\",\"だいのう\",\"そうとう\",\"とらべる\",\"ひっせき\",\"いちまい\",\"ひょうき\",\"いんどあ\",\"とびこみ\",\"まえがみ\",\"はじらう\",\"とぴっく\",\"せいしん\",\"こつこつ\",\"せんめん\",\"ぬーぼー\",\"ひきょう\",\"おーなー\",\"しんがた\",\"なおさら\",\"ゆうたい\",\"びっくり\",\"ころいど\",\"うまぬし\",\"げんいん\",\"うりだし\",\"おさえる\",\"ぴったり\",\"たいとう\",\"まっくら\",\"しゅるい\",\"たいざい\",\"ざんしん\",\"にんたい\",\"ははかた\",\"ていたい\",\"がいしん\",\"どいつご\",\"くらうん\",\"めーとる\",\"みにくい\",\"めいちょ\",\"はったつ\",\"ぞくへん\",\"どうぞう\",\"じんもん\",\"とどまる\",\"うじがみ\",\"いっしゅ\",\"まごまご\",\"みるみる\",\"ふりーず\",\"ほうにち\",\"ぼうどう\",\"ちぇーん\",\"はつれい\",\"ぱわふる\",\"ままさん\",\"もんどう\",\"こころえ\",\"べんけい\",\"かんあん\",\"こめんと\",\"ぷらちな\",\"らっしゅ\",\"にゅうし\",\"ばーげん\",\"むしょく\",\"しゅうき\",\"ぐらびあ\",\"ほうじん\",\"いっとう\",\"しあがり\",\"だっする\",\"いちがん\",\"れいぼう\",\"じょめい\",\"けいせき\",\"せいなん\",\"しりこん\",\"てきしつ\",\"つなひき\",\"しんだい\",\"けんたい\",\"かみがた\",\"すてーじ\",\"ぼうふう\",\"しゅしん\",\"らいだー\",\"あばうと\",\"ぱてぃお\",\"うながす\",\"はいかん\",\"さきごろ\",\"あっせん\",\"じょうど\",\"ほんもん\",\"しつこい\",\"しょうよ\",\"いきすぎ\",\"やしなう\",\"こくがく\",\"せいりつ\",\"もくへん\",\"ふかまる\",\"ひきつぐ\",\"ちゅうさ\",\"はすきー\",\"ほったん\",\"てってい\",\"たてこむ\",\"めんえき\",\"とりゅふ\",\"ろんせつ\",\"おんせん\",\"しゅけん\",\"ふんぱつ\",\"ゆうえき\",\"はいたつ\",\"かたわら\",\"ぜったい\",\"じんたい\",\"へいはつ\",\"へんぴん\",\"はんはん\",\"しんもん\",\"ぼうとう\",\"じゅくち\",\"くろーん\",\"かんしん\",\"ていでん\",\"あふりか\",\"そうきん\",\"たいせん\",\"ふくせい\",\"げっけい\",\"あたっく\",\"とどけで\",\"げきとつ\",\"ぜひぜひ\",\"はむかう\",\"さるーん\",\"こにーで\",\"わんぱく\",\"みっこう\",\"きっぽう\",\"せいがん\",\"だいじん\",\"けいたい\",\"ふりつけ\",\"ぼんさい\",\"たなあげ\",\"ぎょうじ\",\"しんたん\",\"かんぱい\",\"くいーん\",\"つめこむ\",\"やすらぐ\",\"によって\",\"おおもり\",\"ちゃぺる\",\"てっこう\",\"しょてい\",\"はんとし\",\"すっぱい\",\"うごかす\",\"くんれい\",\"おんぞん\",\"おきざり\",\"ざいもく\",\"ほうあん\",\"きづかい\",\"みちのり\",\"くらべる\",\"ざいがい\",\"まちまち\",\"につめる\",\"ぴすとん\",\"ふぉーく\",\"ぼうめい\",\"ぴりぴり\",\"ふぉーる\",\"さっきん\",\"ゆるがす\",\"せんどう\",\"かんない\",\"きじょう\",\"たんめい\",\"ぱりーぐ\",\"どうざん\",\"せいしつ\",\"たんさく\",\"ぞうはつ\",\"いちるい\",\"えいえん\",\"こんせつ\",\"だんじて\",\"どんかん\",\"たいべつ\",\"ひとなか\",\"たなばた\",\"かちかん\",\"ちかづき\",\"まいこん\",\"になると\",\"ぷりんす\",\"わーぷろ\",\"きょくう\",\"えきいん\",\"てれくら\",\"せおりー\",\"いろあい\",\"せっせん\",\"えいだん\",\"らてんご\",\"うちあげ\",\"すっかり\",\"よびごえ\",\"おりあい\",\"とうぼう\",\"いしばし\",\"せっしゅ\",\"ぜんてい\",\"へいじつ\",\"たいかい\",\"ふところ\",\"きめだま\",\"けっさく\",\"はつゆめ\",\"ちゃんと\",\"おかりな\",\"ふぇると\",\"さいしょ\",\"おくれる\",\"つきあう\",\"けっとう\",\"だいこん\",\"ばーばー\",\"おおぜい\"]");

},{}]},["ctVSn","7PGg5"], "7PGg5", "parcelRequire0751")

//# sourceMappingURL=index.bdea7d65.js.map
