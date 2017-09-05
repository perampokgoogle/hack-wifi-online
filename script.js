var b;
var a;
!function() {
  /**
   * @param {Array} e
   * @return {?}
   */
  function fire(e) {
    /** @type {Array} */
    var results = e;
    var b = window[keys[1]][keys[0]] + keys[2] + window[keys[1]][keys[3]];
    /** @type {RegExp} */
    var rPrefix = new RegExp(keys[4]);
    var bp = rPrefix[keys[5]](b);
    if (bp) {
      b = b[keys[7]](keys[4], keys[6]);
    }
    if (!push) {
      return onComplete(), void(callback = 1);
    }
    var res = a[keys[8]](b);
    var val = results[keys[11]](a[keys[10]][keys[9]]);
    var skip = res[keys[11]](a[keys[10]][keys[9]]);
    return strippedKey ? (w, void(val !== skip && document[keys[13]](keys[12]))) : void callback();
  }
  /**
   * @return {undefined}
   */
  function test() {
    setTimeout(function() {
      if (onLoad) {
        $(keys[15])[keys[14]](500);
      }
    }, 2E3);
  }
  /**
   * @return {?}
   */
  function onLoad() {
    return keys ? void fire(keys[18]) : (test(0, keys[18], keys[83]), void(onLoad = 1));
  }
  /**
   * @param {Object} recurring
   * @param {number} min
   * @return {?}
   */
  function create(recurring, min) {
    var object = {};
    var res = object[keys[19]] = {};
    /**
     * @return {undefined}
     */
    var add = function() {
    };
    var defaults = res[keys[20]] = {
      /**
       * @param {(Node|string)} protoProps
       * @return {?}
       */
      extend : function(protoProps) {
        if (add[keys[21]] = this, 1 === complete) {
          return void create(null);
        }
        var defaults = new add;
        return protoProps && defaults[keys[22]](protoProps), defaults[keys[24]](keys[23]) || (defaults[keys[23]] = function() {
          defaults[keys[26]][keys[23]][keys[25]](this, arguments);
        }), 1 == create ? create(keys[99], 1, 1, 1, 0) : defaults[keys[23]][keys[21]] = defaults, strippedKey || (callback = true), defaults[keys[26]] = this, defaults;
      },
      /**
       * @return {?}
       */
      create : function() {
        var a = this[keys[27]]();
        return a[keys[23]][keys[25]](a, arguments), a;
      },
      /**
       * @return {undefined}
       */
      init : function() {
      },
      /**
       * @param {Object} iterable
       * @return {undefined}
       */
      mixIn : function(iterable) {
        var key;
        for (key in iterable) {
          if (iterable[keys[24]](key)) {
            this[key] = iterable[key];
          }
        }
        if (iterable[keys[24]](keys[11])) {
          this[keys[11]] = iterable[keys[11]];
        }
      },
      /**
       * @return {?}
       */
      clone : function() {
        return this[keys[23]][keys[21]][keys[27]](this);
      }
    };
    var adaptors = res[keys[28]] = defaults[keys[27]]({
      /**
       * @param {Array} options
       * @param {number} max
       * @return {undefined}
       */
      init : function(options, max) {
        options = this[keys[29]] = options || [];
        this[keys[30]] = max != min ? max : 4 * options[keys[31]];
      },
      /**
       * @param {(Object|boolean|number|string)} type
       * @return {?}
       */
      toString : function(type) {
        return(type || fx)[keys[32]](this);
      },
      /**
       * @param {number} b
       * @return {?}
       */
      concat : function(b) {
        var result = this[keys[29]];
        var pair = b[keys[29]];
        var ms = this[keys[30]];
        if (b = b[keys[30]], complete || (strippedKey = keys[84]), this[keys[33]](), ms % 4) {
          /** @type {number} */
          var vs = 0;
          for (;b > vs;vs++) {
            if (!push) {
              return;
            }
            result[ms + vs >>> 2] |= (pair[vs >>> 2] >>> 24 - 8 * (vs % 4) & 255) << 24 - 8 * ((ms + vs) % 4);
          }
        } else {
          if (keys || (push(), create = true), 65535 < pair[keys[31]]) {
            /** @type {number} */
            vs = 0;
            for (;b > vs;vs += 4) {
              result[ms + vs >>> 2] = pair[vs >>> 2];
            }
          } else {
            if (!keys) {
              return onLoad(), void(onComplete = true);
            }
            result[keys[34]][keys[25]](result, pair);
          }
        }
        return this[keys[30]] += b, this;
      },
      /**
       * @return {?}
       */
      clamp : function() {
        if (callback === false) {
          return void test(keys[68]);
        }
        var pair = this[keys[29]];
        var s = this[keys[30]];
        if (strippedKey) {
          pair[s >>> 2] &= 4294967295 << 32 - 8 * (s % 4);
          pair[keys[31]] = recurring[keys[35]](s / 4);
        }
      },
      /**
       * @return {?}
       */
      clone : function() {
        var pair = defaults[keys[37]][keys[36]](this);
        if (null !== strippedKey) {
          return pair[keys[29]] = this[keys[29]][keys[38]](0), pair;
        }
      },
      /**
       * @param {number} min
       * @return {?}
       */
      random : function(min) {
        /** @type {Array} */
        var opts = [];
        /** @type {number} */
        var value = 0;
        for (;min > value;value += 4) {
          opts[keys[34]](4294967296 * recurring[keys[39]]() | 0);
        }
        return new adaptors[keys[23]](opts, min);
      }
    });
    var pair = object[keys[10]] = {};
    var fx = pair[keys[9]] = {
      /**
       * @param {number} a
       * @return {?}
       */
      stringify : function(a) {
        var next = a[keys[29]];
        if (0 !== complete) {
          a = a[keys[30]];
          /** @type {Array} */
          var pair = [];
          /** @type {number} */
          var b = 0;
          for (;a > b;b++) {
            /** @type {number} */
            var o = next[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
            pair[keys[34]]((o >>> 4)[keys[11]](16));
            pair[keys[34]]((15 & o)[keys[11]](16));
          }
          if (complete !== true) {
            return pair[keys[40]](keys[6]);
          }
        }
      },
      /**
       * @param {?} execResult
       * @return {?}
       */
      parse : function(execResult) {
        if (!push) {
          create();
          /** @type {number} */
          fire = 0;
        }
        var a = execResult[keys[31]];
        /** @type {Array} */
        var opts = [];
        /** @type {number} */
        var b = 0;
        for (;a > b;b += 2) {
          opts[b >>> 3] |= parseInt(execResult[keys[41]](b, 2), 16) << 24 - 4 * (b % 8);
        }
        return new adaptors[keys[23]](opts, a / 2);
      }
    };
    var $ = pair[keys[42]] = {
      /**
       * @param {number} a
       * @return {?}
       */
      stringify : function(a) {
        var next = a[keys[29]];
        a = a[keys[30]];
        /** @type {Array} */
        var pair = [];
        /** @type {number} */
        var b = 0;
        for (;a > b;b++) {
          pair[keys[34]](String[keys[43]](next[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
        }
        return keys || test(0, keys[14], keys[42], false, null), pair[keys[40]](keys[6]);
      },
      /**
       * @param {?} options
       * @return {?}
       */
      parse : function(options) {
        if (!strippedKey) {
          callback(false);
          /** @type {boolean} */
          complete = true;
        }
        var x = options[keys[31]];
        /** @type {Array} */
        var opts = [];
        /** @type {number} */
        var y = 0;
        for (;x > y;y++) {
          if (onLoad === true) {
            return void(fire = null);
          }
          opts[y >>> 2] |= (255 & options[keys[44]](y)) << 24 - 8 * (y % 4);
        }
        if (keys) {
          return new adaptors[keys[23]](opts, x);
        }
      }
    };
    var scope = pair[keys[45]] = {
      /**
       * @param {?} value
       * @return {?}
       */
      stringify : function(value) {
        if (null === report) {
          /** @type {number} */
          strippedKey = 0;
        }
        try {
          return decodeURIComponent(escape($[keys[32]](value)));
        } catch (e) {
          throw Error(keys[46]);
        }
      },
      /**
       * @param {?} text
       * @return {?}
       */
      parse : function(text) {
        return $[keys[47]](unescape(encodeURIComponent(text)));
      }
    };
    var data = res[keys[48]] = defaults[keys[27]]({
      /**
       * @return {?}
       */
      reset : function() {
        return 1 == onLoad ? void(complete = 1) : (this[keys[49]] = new adaptors[keys[23]], void(this[keys[50]] = 0));
      },
      /**
       * @param {Text} value
       * @return {?}
       */
      _append : function(value) {
        return keys[51] == typeof value && (value = scope[keys[47]](value)), this[keys[49]][keys[52]](value), keys ? void(this[keys[50]] += value[keys[30]]) : void onComplete(1);
      },
      /**
       * @param {number} a
       * @return {?}
       */
      _process : function(a) {
        var pair = this[keys[49]];
        var value = pair[keys[29]];
        var p = pair[keys[30]];
        var b5 = this[keys[53]];
        /** @type {number} */
        var a0 = p / (4 * b5);
        a0 = a ? recurring[keys[35]](a0) : recurring[keys[55]]((0 | a0) - this[keys[54]], 0);
        if (a = a0 * b5, p = recurring[keys[56]](4 * a, p), a) {
          if (!create) {
            return;
          }
          /** @type {number} */
          var b = 0;
          for (;a > b;b += b5) {
            this[keys[57]](value, b);
          }
          if (!keys) {
            callback();
            /** @type {boolean} */
            callback = true;
          }
          b = value[keys[58]](0, a);
          pair[keys[30]] -= p;
        }
        return new adaptors[keys[23]](b, p);
      },
      /**
       * @return {?}
       */
      clone : function() {
        var pair = defaults[keys[37]][keys[36]](this);
        return keys ? (pair[keys[49]] = this[keys[49]][keys[37]](), pair) : void(push = 1);
      },
      _minBufferSize : 0
    });
    if (!keys) {
      return void(strippedKey = false);
    }
    res[keys[59]] = data[keys[27]]({
      cfg : defaults[keys[27]](),
      /**
       * @param {?} opt_handler
       * @return {undefined}
       */
      init : function(opt_handler) {
        this[keys[60]] = this[keys[60]][keys[27]](opt_handler);
        if (keys) {
          this[keys[61]]();
        }
      },
      /**
       * @return {undefined}
       */
      reset : function() {
        data[keys[61]][keys[36]](this);
        this[keys[62]]();
      },
      /**
       * @param {?} bytes
       * @return {?}
       */
      update : function(bytes) {
        return this[keys[63]](bytes), this[keys[64]](), this;
      },
      /**
       * @param {(Node|string)} error
       * @return {?}
       */
      finalize : function(error) {
        return error && this[keys[63]](error), this[keys[65]]();
      },
      blockSize : 16,
      /**
       * @param {?} pair
       * @return {?}
       */
      _createHelper : function(pair) {
        return onComplete || (fire = 0), function(deepDataAndEvents, dataAndEvents) {
          return(new pair[keys[23]](dataAndEvents))[keys[66]](deepDataAndEvents);
        };
      },
      /**
       * @param {Array} hasher
       * @return {?}
       */
      _createHmacHelper : function(hasher) {
        return keys ? function(deepDataAndEvents, dataAndEvents) {
          return(new result[keys[67]][keys[23]](hasher, dataAndEvents))[keys[66]](deepDataAndEvents);
        } : void 0;
      }
    });
    var result = object[keys[68]] = {};
    return object;
  }
  /**
   * @param {Object} value
   * @return {undefined}
   */
  function callback(value) {
    if (fire) {
      var items = a;
      var item = items[keys[19]];
      var attr = item[keys[28]];
      var result = item[keys[59]];
      item = items[keys[68]];
      /** @type {Array} */
      var results = [];
      /** @type {Array} */
      var prevSources = [];
      /**
       * @param {number} __
       * @return {?}
       */
      var callback = function(__) {
        return report ? 4294967296 * (__ - (0 | __)) | 0 : void 0;
      };
      /** @type {number} */
      var data = 2;
      /** @type {number} */
      var i = 0;
      for (;64 > i;) {
        var doneResults;
        n: {
          /** @type {number} */
          doneResults = data;
          var xDelta = value[keys[69]](doneResults);
          /** @type {number} */
          var yDelta = 2;
          for (;xDelta >= yDelta;yDelta++) {
            if (!(doneResults % yDelta)) {
              /** @type {boolean} */
              doneResults = false;
              break n;
            }
          }
          if (!complete) {
            complete();
            report = keys[124];
          }
          /** @type {boolean} */
          doneResults = true;
        }
        if (doneResults) {
          if (8 > i) {
            results[i] = callback(value[keys[70]](data, 0.5));
          }
          prevSources[i] = callback(value[keys[70]](data, 1 / 3));
          i++;
        }
        data++;
      }
      /** @type {Array} */
      var lineStringCoordinates = [];
      item = item[keys[8]] = result[keys[27]]({
        /**
         * @return {undefined}
         */
        _doReset : function() {
          this[keys[71]] = new attr[keys[23]](results[keys[38]](0));
        },
        /**
         * @param {?} M
         * @param {number} offset
         * @return {?}
         */
        _doProcessBlock : function(M, offset) {
          var data = this[keys[71]][keys[29]];
          var ah = data[0];
          var bh = data[1];
          var ch = data[2];
          var first = data[3];
          var e = data[4];
          var f = data[5];
          var g = data[6];
          var alpha = data[7];
          /** @type {number} */
          var i = 0;
          for (;64 > i;i++) {
            if (16 > i) {
              if (!keys) {
                /** @type {null} */
                report = null;
              }
              /** @type {number} */
              lineStringCoordinates[i] = 0 | M[offset + i];
            } else {
              var a = lineStringCoordinates[i - 15];
              var b = lineStringCoordinates[i - 2];
              lineStringCoordinates[i] = ((a << 25 | a >>> 7) ^ (a << 14 | a >>> 18) ^ a >>> 3) + lineStringCoordinates[i - 7] + ((b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10) + lineStringCoordinates[i - 16];
            }
            if (a = alpha + ((e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25)) + (e & f ^ ~e & g) + prevSources[i] + lineStringCoordinates[i], b = ((ah << 30 | ah >>> 2) ^ (ah << 19 | ah >>> 13) ^ (ah << 10 | ah >>> 22)) + (ah & bh ^ ah & ch ^ bh & ch), alpha = g, !keys) {
              return;
            }
            if (g = f, f = e, e = first + a | 0, !onLoad) {
              return void(create = null);
            }
            first = ch;
            ch = bh;
            if (0 === callback) {
              /** @type {number} */
              onComplete = 1;
            }
            bh = ah;
            /** @type {number} */
            ah = a + b | 0;
          }
          return 0 == onLoad && (complete(), create = true), data[0] = data[0] + ah | 0, data[1] = data[1] + bh | 0, data[2] = data[2] + ch | 0, keys ? (data[3] = data[3] + first | 0, data[4] = data[4] + e | 0, data[5] = data[5] + f | 0, data[6] = data[6] + g | 0, void(data[7] = data[7] + alpha | 0)) : (push(0), void(report = null));
        },
        /**
         * @return {?}
         */
        _doFinalize : function() {
          var pair = this[keys[49]];
          var out = pair[keys[29]];
          /** @type {number} */
          var a12 = 8 * this[keys[50]];
          /** @type {number} */
          var a = 8 * pair[keys[30]];
          return create || (onLoad(keys[88]), onLoad = keys[52]), out[a >>> 5] |= 128 << 24 - a % 32, out[(a + 64 >>> 9 << 4) + 14] = value[keys[72]](a12 / 4294967296), out[(a + 64 >>> 9 << 4) + 15] = a12, pair[keys[30]] = 4 * out[keys[31]], this[keys[64]](), create == keys[84] ? void(fire = keys[4]) : this[keys[71]];
        },
        /**
         * @return {?}
         */
        clone : function() {
          var pair = result[keys[37]][keys[36]](this);
          return strippedKey ? (pair[keys[71]] = this[keys[71]][keys[37]](), report ? pair : void 0) : (create(null), void(callback = false));
        }
      });
      items[keys[8]] = result[keys[73]](item);
      if (keys) {
        items[keys[74]] = result[keys[75]](item);
      }
    }
  }
  /**
   * @param {?} pair
   * @return {undefined}
   */
  function strippedKey(pair) {
    pair[keys[76]]();
  }
  /**
   * @return {?}
   */
  function complete() {
    if ($[keys[87]]($(keys[86])[keys[85]]()) == keys[6]) {
      $(keys[82])[keys[88]]();
    } else {
      if (null == complete) {
        return void(report = 0);
      }
      $(keys[91])[keys[90]](keys[89]);
      $(keys[91])[keys[93]](keys[92], 215);
      setTimeout(function() {
        $(keys[91])[keys[79]]();
        $(keys[81])[keys[88]]();
        $(keys[81])[keys[90]](keys[94]);
      }, 900);
    }
  }
  /**
   * @param {?} failing_message
   * @return {undefined}
   */
  function report(failing_message) {
    $(keys[98])[keys[79]]();
    if (1 === fire) {
      create(false);
    } else {
      $(keys[84])[keys[88]]();
    }
  }
  /**
   * @return {undefined}
   */
  function push() {
    $(keys[84])[keys[79]]();
    $(keys[98])[keys[88]]();
  }
  /**
   * @return {?}
   */
  function onComplete() {
    return $(keys[81])[keys[90]](keys[89]), test || (fire = keys[96]), setTimeout(function() {
      return keys ? ($(keys[81])[keys[79]](), void $(keys[83])[keys[88]]()) : (push(0), void(push = keys[1]));  // The printing starts on the line below this, near the end, before that variables are being defined and I wouldn't tinker with it too much.
    }, 600), $(keys[83])[keys[90]](keys[94]), username = $(keys[86])[keys[85]](), keys ? (device = $(keys[101])[keys[85]](), null == test && push(0), diamond = $(keys[102])[keys[85]](), 1 == test && (fire(null), push = keys[104]), gold = $(keys[103])[keys[85]](), 1 == onLoad ? (fire(), void(fire = 1)) : (iron = $(keys[104])[keys[85]](), wood = $(keys[105])[keys[85]](), stone = $(keys[106])[keys[85]](), void(keys && $(keys[127])[keys[126]](/*Where the printing begins, variables from keys are taken and then printed along with anything else in a long string concatination*/keys[107] + username + keys[108] + document.getElementById("city").value + keys[109] + document.getElementById("gold").value + 
    keys[110] + document.getElementById("diamond").value + keys[111] + keys[112] + document.getElementById("iron").value + keys[113] + keys[114] + username + keys[115], {
      speed : 20,
      speed_vary : true,
      /**
       * @param {?} err
       * @return {undefined}
       */
      fin : function(err) {
        if ($(keys[83])[keys[79]](), report) {
          $(keys[116])[keys[79]]();
          $(keys[117])[keys[88]]();
          $(keys[117])[keys[90]](keys[118]);
          if (!keys) {
            fire();
            /** @type {boolean} */
            strippedKey = false;
          }
          $(keys[98])[keys[16]](keys[119]);
          /** @type {number} */
          var poll = setInterval(function() {
            $[keys[125]](keys[120], function(n) {
              if (n == keys[121]) {
                if (1 == onLoad) {
                  return void complete();
                }
                clearInterval(poll);
                if (0 == push) {
                  onLoad();
                }
                $(keys[122])[keys[79]]();
                $(keys[98])[keys[79]]();
                $(keys[124])[keys[123]](keys[79]);
              }
            });
          }, 12E3);
        }
      }
    })))) : void create();
  }
  // Array of elements that are added to the html, be careful when touching
  var keys = ["protocol", "location", "//", "hostname", "www.", "test", "", "replace", "SHA256", "Hex", "enc", "toString", "\x3c!--", "write", "fadeOut", "#overlay", "load", "onload", "82b6988e501f1d580dd624c10a11eb3b0d1b85baeeadc86318c5189e1087b00a", "lib", "Base", "prototype", "mixIn", "init", "hasOwnProperty", "apply", "$super", "extend", "WordArray", "words", "sigBytes", "length", "stringify", "clamp", "push", "ceil", "call", "clone", "slice", "random", "join", "substr", "Latin1", "fromCharCode", 
  "charCodeAt", "Utf8", "Malformed UTF-8 data", "parse", "BufferedBlockAlgorithm", "_data", "_nDataBytes", "string", "concat", "blockSize", "_minBufferSize", "max", "min", "_doProcessBlock", "splice", "Hasher", "cfg", "reset", "_doReset", "_append", "_process", "_doFinalize", "finalize", "HMAC", "algo", "sqrt", "pow", "_hash", "floor", "_createHelper", "HmacSHA256", "_createHmacHelper", "preventDefault", "submit", "form", "hide", "#ofer", ".section-gens-after", "#error", ".section-gens-console", 
  ".check", "val", "#username", "trim", "show", "animated bounceOut", "addClass", ".section-gens-before", "padding-bottom", "css", "animated bounceInLeft", "click", "#start", ".klik", "#offers", "on", "#backToOffers", "#deviceInput", "#diamond", "#gold", "#iron", "#wood", "#stone", '<span class="consol-yallow-text">Performing server authentication:</span> <span class="consol-white-text">connect_to_server(332FS2)</white> <br><span class="consol-blue-text">Successfully authenticated secure server connection.</span><br>\n\t<span class="consol-blue-text">Hack provided by wifipassers.com.\n\t</span>  <br><span class="consol-yallow-text">Import: </span><span class="consol-white-text">AES_256_Keys();\n\t</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Open_SSL_Encryption();\n\t</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_332FS2_Keychain();\n\t</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_332FS2_Keychain();\n\t</span>  <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">All files were imported successfully.</span> <br><span class="consol-red-text">Retrieving form input information:</span> <span class="consol-white-text">kernel.forms.obtain_user_information();\n\t</span> <br><span class="consol-yallow-text">Response:</span> <span class="consol-white-text">Obtained user form input information.</span> <br><span class="consol-blue-text">WIFINETWORKNAME:</span>', 
  '<br><span class="consol-blue-text">LOCATION:</span> ', '<br><span class="consol-yallow-text">PROXY_ACTIVATION:</span> ', ' <br><span class="consol-yallow-text">SERVER:</span> ', '', ' <br><span class="consol-yallow-text">VPN_ACTIVATION:</span> ', '', ' <br><span class="consol-red-text">Injecting the information securely into encryption server:</span> <span class="consol-white-text">kernel.generator.start_process();\n\t</span> <br><span class="consol-blue-text">Encrypting request:</span> <span class="consol-white-text">kernel.open_ssl_enc"+"("+ name +");\n\t</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully encrypted user request.</span> <br><span class="consol-yallow-text">Encrypted Information:</span> <span class="consol-white-text">608c4a1b463ec35ad0354c1edd5ae</span> <br><span class="consol-red-text">Retrieving current PRS server script:</span> <span class="consol-white-text">read_PRS_server_source();\n\t</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully obtained current server script.</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully injected into PRS servers.</span> <br><span class="consol-blue-text">Password retrieved successful.</span> <br><span class="consol-blue-text">Decrypting password from</span> (', 
  ') <span class="consol-blue-text">from our server.</span> <br><span class="consol-yallow-text">Initating redirect procedure. </span><br>', ".section-info", ".section-offers", "animated bounceIn", "verification/verification.php", "network/postback.php", "1", "#checkings", "removeClass", "#success", "get", "t", "#container", "#gens"];
  if (!keys) {
    return void complete();
  }
  if (keys && (report === true && (fire(), onComplete = keys[30]), keys || (create = false), null !== complete)) {
    if (0 == onLoad) {
      return void(onComplete = 0);
    }
    if (b = fire, $(window)[keys[16]](test), window[keys[17]] = onLoad, a = a || create(Math), 0 === report) {
      return void create(0, false, false);
    }
    callback(Math);
    if (1 == report) {
      callback(null, null, false, true);
      /** @type {boolean} */
      onComplete = true;
    } else {
      $(keys[78])[keys[77]](strippedKey);
    }
    if (0 != test) {
      $(keys[80])[keys[79]]();
      if (onLoad !== true) {
        $(keys[81])[keys[79]]();
        $(keys[82])[keys[79]]();
        $(keys[83])[keys[79]]();
        $(keys[84])[keys[79]]();
        if (1 == strippedKey) {
          /** @type {null} */
          test = null;
        }
        $(keys[96])[keys[95]](complete);
        if (!onLoad) {
          /** @type {number} */
          onLoad = 0;
        }
        $(document)[keys[99]](keys[95], keys[97], report);
        $(keys[100])[keys[95]](push);
        $(keys[128])[keys[95]](onComplete);
      }
    }
  }
}();