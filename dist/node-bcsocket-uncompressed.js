(function(){
var g, aa = aa || {}, l = this;
function ba() {
}
function ca(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function n(a) {
  return "array" == ca(a);
}
function da(a) {
  var b = ca(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function p(a) {
  return "string" == typeof a;
}
function fa(a) {
  return "function" == ca(a);
}
var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, e);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function q(a, b, c) {
  q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
  return q.apply(null, arguments);
}
var r = Date.now || function() {
  return +new Date;
};
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.$ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Ib = function(a, c, f) {
    for (var k = Array(arguments.length - 2), h = 2;h < arguments.length;h++) {
      k[h - 2] = arguments[h];
    }
    return b.prototype[c].apply(a, k);
  };
}
;function ka(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ka);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
t(ka, Error);
ka.prototype.name = "CustomError";
function la(a, b) {
  for (var c = a.split("%s"), e = "", d = Array.prototype.slice.call(arguments, 1);d.length && 1 < c.length;) {
    e += c.shift() + d.shift();
  }
  return e + c.join("%s");
}
var ma = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, na = /&/g, oa = /</g, pa = />/g, qa = /"/g, ra = /'/g, sa = /\x00/g, ta = /[\x00&<>"']/, ua = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, va = {"'":"\\'"};
function wa() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ r()).toString(36);
}
function xa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function ya(a, b) {
  b.unshift(a);
  ka.call(this, la.apply(null, b));
  b.shift();
}
t(ya, ka);
ya.prototype.name = "AssertionError";
function za(a, b) {
  throw new ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Aa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Ba(a, b) {
  if (a) {
    for (var c = a.split("&"), e = 0;e < c.length;e++) {
      var d = c[e].indexOf("="), f = null, k = null;
      0 <= d ? (f = c[e].substring(0, d), k = c[e].substring(d + 1)) : f = c[e];
      b(f, k ? decodeURIComponent(k.replace(/\+/g, " ")) : "");
    }
  }
}
;function Ca(a, b, c) {
  for (var e in a) {
    b.call(c, a[e], e, a);
  }
}
function Da(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = a[e];
  }
  return b;
}
function Ea(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = e;
  }
  return b;
}
var Fa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ga(a, b) {
  for (var c, e, d = 1;d < arguments.length;d++) {
    e = arguments[d];
    for (c in e) {
      a[c] = e[c];
    }
    for (var f = 0;f < Fa.length;f++) {
      c = Fa[f], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
    }
  }
}
;var u = Array.prototype, Ha = u.indexOf ? function(a, b, c) {
  return u.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (p(a)) {
    return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, Ia = u.forEach ? function(a, b, c) {
  u.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, d = p(a) ? a.split("") : a, f = 0;f < e;f++) {
    f in d && b.call(c, d[f], f, a);
  }
};
function Ja(a) {
  var b;
  a: {
    b = Ka;
    for (var c = a.length, e = p(a) ? a.split("") : a, d = 0;d < c;d++) {
      if (d in e && b.call(void 0, e[d], d, a)) {
        b = d;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
}
function La(a) {
  return u.concat.apply(u, arguments);
}
function Ma(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), e = 0;e < b;e++) {
      c[e] = a[e];
    }
    return c;
  }
  return [];
}
;function Na(a, b) {
  this.b = {};
  this.a = [];
  this.f = this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < c;e += 2) {
      x(this, arguments[e], arguments[e + 1]);
    }
  } else {
    if (a) {
      a instanceof Na ? (c = a.M(), e = a.N()) : (c = Ea(a), e = Da(a));
      for (var d = 0;d < c.length;d++) {
        x(this, c[d], e[d]);
      }
    }
  }
}
g = Na.prototype;
g.N = function() {
  Oa(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.b[this.a[b]]);
  }
  return a;
};
g.M = function() {
  Oa(this);
  return this.a.concat();
};
g.clear = function() {
  this.b = {};
  this.f = this.c = this.a.length = 0;
};
function Oa(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var e = a.a[b];
      y(a.b, e) && (a.a[c++] = e);
      b++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    for (var d = {}, c = b = 0;b < a.a.length;) {
      e = a.a[b], y(d, e) || (a.a[c++] = e, d[e] = 1), b++;
    }
    a.a.length = c;
  }
}
function Pa(a, b) {
  return y(a.b, b) ? a.b[b] : void 0;
}
function x(a, b, c) {
  y(a.b, b) || (a.c++, a.a.push(b), a.f++);
  a.b[b] = c;
}
g.forEach = function(a, b) {
  for (var c = this.M(), e = 0;e < c.length;e++) {
    var d = c[e];
    a.call(b, Pa(this, d), d, this);
  }
};
g.clone = function() {
  return new Na(this);
};
function y(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function Qa(a) {
  if ("function" == typeof a.N) {
    return a.N();
  }
  if (p(a)) {
    return a.split("");
  }
  if (da(a)) {
    for (var b = [], c = a.length, e = 0;e < c;e++) {
      b.push(a[e]);
    }
    return b;
  }
  return Da(a);
}
function Ra(a, b) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, void 0);
  } else {
    if (da(a) || p(a)) {
      Ia(a, b, void 0);
    } else {
      var c;
      if ("function" == typeof a.M) {
        c = a.M();
      } else {
        if ("function" != typeof a.N) {
          if (da(a) || p(a)) {
            c = [];
            for (var e = a.length, d = 0;d < e;d++) {
              c.push(d);
            }
          } else {
            c = Ea(a);
          }
        } else {
          c = void 0;
        }
      }
      for (var e = Qa(a), d = e.length, f = 0;f < d;f++) {
        b.call(void 0, e[f], c && c[f], a);
      }
    }
  }
}
;function z(a, b) {
  this.c = this.i = this.f = "";
  this.l = null;
  this.h = this.g = "";
  this.a = !1;
  var c;
  a instanceof z ? (this.a = void 0 !== b ? b : a.a, Sa(this, a.f), this.i = a.i, Ta(this, a.c), Ua(this, a.l), this.g = a.g, Va(this, a.b.clone()), this.h = a.h) : a && (c = String(a).match(Aa)) ? (this.a = !!b, Sa(this, c[1] || "", !0), this.i = Wa(c[2] || ""), Ta(this, c[3] || "", !0), Ua(this, c[4]), this.g = Wa(c[5] || "", !0), Va(this, c[6] || "", !0), this.h = Wa(c[7] || "")) : (this.a = !!b, this.b = new Xa(null, 0, this.a));
}
z.prototype.toString = function() {
  var a = [], b = this.f;
  b && a.push(Ya(b, Za, !0), ":");
  var c = this.c;
  if (c || "file" == b) {
    a.push("//"), (b = this.i) && a.push(Ya(b, Za, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
  }
  if (c = this.g) {
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Ya(c, "/" == c.charAt(0) ? $a : ab, !0));
  }
  (c = this.b.toString()) && a.push("?", c);
  (c = this.h) && a.push("#", Ya(c, bb));
  return a.join("");
};
z.prototype.clone = function() {
  return new z(this);
};
function Sa(a, b, c) {
  a.f = c ? Wa(b, !0) : b;
  a.f && (a.f = a.f.replace(/:$/, ""));
}
function Ta(a, b, c) {
  a.c = c ? Wa(b, !0) : b;
}
function Ua(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.l = b;
  } else {
    a.l = null;
  }
}
function Va(a, b, c) {
  b instanceof Xa ? (a.b = b, cb(a.b, a.a)) : (c || (b = Ya(b, db)), a.b = new Xa(b, 0, a.a));
}
function A(a, b, c) {
  a = a.b;
  B(a);
  a.b = null;
  b = eb(a, b);
  fb(a, b) && (a.c -= Pa(a.a, b).length);
  x(a.a, b, [c]);
  a.c++;
}
function gb(a, b, c) {
  n(c) || (c = [String(c)]);
  hb(a.b, b, c);
}
function C(a) {
  A(a, "zx", wa());
  return a;
}
function ib(a) {
  return a instanceof z ? a.clone() : new z(a, void 0);
}
function jb(a, b, c, e) {
  var d = new z(null, void 0);
  a && Sa(d, a);
  b && Ta(d, b);
  c && Ua(d, c);
  e && (d.g = e);
  return d;
}
function Wa(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Ya(a, b, c) {
  return p(a) ? (a = encodeURI(a).replace(b, kb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function kb(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Za = /[#\/\?@]/g, ab = /[\#\?:]/g, $a = /[\#\?]/g, db = /[\#\?@]/g, bb = /#/g;
function Xa(a, b, c) {
  this.c = this.a = null;
  this.b = a || null;
  this.f = !!c;
}
function B(a) {
  a.a || (a.a = new Na, a.c = 0, a.b && Ba(a.b, function(b, c) {
    var e = decodeURIComponent(b.replace(/\+/g, " "));
    B(a);
    a.b = null;
    var e = eb(a, e), d = Pa(a.a, e);
    d || x(a.a, e, d = []);
    d.push(c);
    a.c++;
  }));
}
function lb(a, b) {
  B(a);
  b = eb(a, b);
  if (y(a.a.b, b)) {
    a.b = null;
    a.c -= Pa(a.a, b).length;
    var c = a.a;
    y(c.b, b) && (delete c.b[b], c.c--, c.f++, c.a.length > 2 * c.c && Oa(c));
  }
}
g = Xa.prototype;
g.clear = function() {
  this.a = this.b = null;
  this.c = 0;
};
function fb(a, b) {
  B(a);
  b = eb(a, b);
  return y(a.a.b, b);
}
g.M = function() {
  B(this);
  for (var a = this.a.N(), b = this.a.M(), c = [], e = 0;e < b.length;e++) {
    for (var d = a[e], f = 0;f < d.length;f++) {
      c.push(b[e]);
    }
  }
  return c;
};
g.N = function(a) {
  B(this);
  var b = [];
  if (p(a)) {
    fb(this, a) && (b = La(b, Pa(this.a, eb(this, a))));
  } else {
    a = this.a.N();
    for (var c = 0;c < a.length;c++) {
      b = La(b, a[c]);
    }
  }
  return b;
};
function hb(a, b, c) {
  lb(a, b);
  0 < c.length && (a.b = null, x(a.a, eb(a, b), Ma(c)), a.c += c.length);
}
g.toString = function() {
  if (this.b) {
    return this.b;
  }
  if (!this.a) {
    return "";
  }
  for (var a = [], b = this.a.M(), c = 0;c < b.length;c++) {
    for (var e = b[c], d = encodeURIComponent(String(e)), e = this.N(e), f = 0;f < e.length;f++) {
      var k = d;
      "" !== e[f] && (k += "=" + encodeURIComponent(String(e[f])));
      a.push(k);
    }
  }
  return this.b = a.join("&");
};
g.clone = function() {
  var a = new Xa;
  a.b = this.b;
  this.a && (a.a = this.a.clone(), a.c = this.c);
  return a;
};
function eb(a, b) {
  var c = String(b);
  a.f && (c = c.toLowerCase());
  return c;
}
function cb(a, b) {
  b && !a.f && (B(a), a.b = null, a.a.forEach(function(a, b) {
    var d = b.toLowerCase();
    b != d && (lb(this, b), hb(this, d, a));
  }, a));
  a.f = b;
}
;function mb(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function nb(a) {
  return eval("(" + a + ")");
}
function ob(a) {
  var b = [];
  pb(new qb, a, b);
  return b.join("");
}
function qb() {
}
function pb(a, b, c) {
  if (null == b) {
    c.push("null");
  } else {
    if ("object" == typeof b) {
      if (n(b)) {
        var e = b;
        b = e.length;
        c.push("[");
        for (var d = "", f = 0;f < b;f++) {
          c.push(d), pb(a, e[f], c), d = ",";
        }
        c.push("]");
        return;
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean) {
        b = b.valueOf();
      } else {
        c.push("{");
        d = "";
        for (e in b) {
          Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], "function" != typeof f && (c.push(d), rb(e, c), c.push(":"), pb(a, f, c), d = ","));
        }
        c.push("}");
        return;
      }
    }
    switch(typeof b) {
      case "string":
        rb(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? b : "null");
        break;
      case "boolean":
        c.push(b);
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof b);;
    }
  }
}
var sb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, tb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function rb(a, b) {
  b.push('"', a.replace(tb, function(a) {
    var b = sb[a];
    b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), sb[a] = b);
    return b;
  }), '"');
}
;function E() {
  this.a = "";
  this.b = ub;
}
E.prototype.hb = !0;
E.prototype.$a = function() {
  return this.a;
};
E.prototype.toString = function() {
  return "SafeUrl{" + this.a + "}";
};
var vb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i, ub = {};
function wb() {
  this.a = "";
  this.b = xb;
}
wb.prototype.hb = !0;
wb.prototype.$a = function() {
  return this.a;
};
wb.prototype.toString = function() {
  return "SafeHtml{" + this.a + "}";
};
function yb(a) {
  if (a instanceof wb && a.constructor === wb && a.b === xb) {
    return a.a;
  }
  za("expected object of type SafeHtml, got '" + a + "'");
  return "type_error:SafeHtml";
}
var xb = {};
function zb(a) {
  var b = new wb;
  b.a = a;
  return b;
}
zb("<!DOCTYPE html>");
zb("");
var F;
a: {
  var Ab = l.navigator;
  if (Ab) {
    var Bb = Ab.userAgent;
    if (Bb) {
      F = Bb;
      break a;
    }
  }
  F = "";
}
;var Cb = -1 != F.indexOf("Opera") || -1 != F.indexOf("OPR"), G = -1 != F.indexOf("Trident") || -1 != F.indexOf("MSIE"), Db = -1 != F.indexOf("Edge"), Eb = -1 != F.indexOf("Gecko") && !(-1 != F.toLowerCase().indexOf("webkit") && -1 == F.indexOf("Edge")) && !(-1 != F.indexOf("Trident") || -1 != F.indexOf("MSIE")) && -1 == F.indexOf("Edge"), Fb = -1 != F.toLowerCase().indexOf("webkit") && -1 == F.indexOf("Edge");
function Gb() {
  var a = F;
  if (Eb) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (Db) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (G) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (Fb) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function Hb() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Ib = function() {
  if (Cb && l.opera) {
    var a;
    var b = l.opera.version;
    try {
      a = b();
    } catch (c) {
      a = b;
    }
    return a;
  }
  a = "";
  (b = Gb()) && (a = b ? b[1] : "");
  return G && (b = Hb(), b > parseFloat(a)) ? String(b) : a;
}(), Jb = {};
function H(a) {
  var b;
  if (!(b = Jb[a])) {
    b = 0;
    for (var c = ma(String(Ib)).split("."), e = ma(String(a)).split("."), d = Math.max(c.length, e.length), f = 0;0 == b && f < d;f++) {
      var k = c[f] || "", h = e[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), v = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = m.exec(k) || ["", "", ""], I = v.exec(h) || ["", "", ""];
        if (0 == w[0].length && 0 == I[0].length) {
          break;
        }
        b = xa(0 == w[1].length ? 0 : parseInt(w[1], 10), 0 == I[1].length ? 0 : parseInt(I[1], 10)) || xa(0 == w[2].length, 0 == I[2].length) || xa(w[2], I[2]);
      } while (0 == b);
    }
    b = Jb[a] = 0 <= b;
  }
  return b;
}
var Kb = l.document, J = Kb && G ? Hb() || ("CSS1Compat" == Kb.compatMode ? parseInt(Ib, 10) : 5) : void 0;
function Lb(a, b, c, e, d) {
  this.reset(a, b, c, e, d);
}
Lb.prototype.a = null;
var Mb = 0;
Lb.prototype.reset = function(a, b, c, e, d) {
  "number" == typeof d || Mb++;
  e || r();
  this.b = b;
  delete this.a;
};
function Nb(a) {
  this.f = a;
  this.b = this.c = this.a = null;
}
function Ob(a, b) {
  this.name = a;
  this.value = b;
}
Ob.prototype.toString = function() {
  return this.name;
};
var Pb = new Ob("SEVERE", 1E3), Qb = new Ob("WARNING", 900), Rb = new Ob("INFO", 800), Sb = new Ob("CONFIG", 700), Tb = new Ob("FINE", 500);
function Ub(a) {
  if (a.c) {
    return a.c;
  }
  if (a.a) {
    return Ub(a.a);
  }
  za("Root logger has no level set.");
  return null;
}
Nb.prototype.log = function(a, b, c) {
  if (a.value >= Ub(this).value) {
    for (fa(b) && (b = b()), a = new Lb(a, String(b), this.f), c && (a.a = c), c = "log:" + a.b, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this;c;) {
      c = c.a;
    }
  }
};
function Vb(a, b) {
  a.log(Qb, b, void 0);
}
var Wb = {}, Xb = null;
function Yb(a) {
  Xb || (Xb = new Nb(""), Wb[""] = Xb, Xb.c = Sb);
  var b;
  if (!(b = Wb[a])) {
    b = new Nb(a);
    var c = a.lastIndexOf("."), e = a.substr(c + 1), c = Yb(a.substr(0, c));
    c.b || (c.b = {});
    c.b[e] = b;
    b.a = c;
    Wb[a] = b;
  }
  return b;
}
;function K(a, b) {
  a && a.log(Pb, b, void 0);
}
function L(a, b) {
  a && a.log(Tb, b, void 0);
}
;function Zb() {
  this.a = Yb("goog.net.BrowserChannel");
}
function $b(a, b, c, e) {
  M(a, "XMLHTTP TEXT (" + b + "): " + ac(a, c) + (e ? " " + e : ""));
}
function bc(a, b) {
  M(a, b);
}
function N(a, b, c) {
  K(a.a, (c || "Exception") + b);
}
function M(a, b) {
  var c = a.a;
  c && c.log(Rb, b, void 0);
}
function ac(a, b) {
  if (!b || b == cc) {
    return b;
  }
  try {
    var c = nb(b);
    if (c) {
      for (var e = 0;e < c.length;e++) {
        if (n(c[e])) {
          var d = c[e];
          if (!(2 > d.length)) {
            var f = d[1];
            if (n(f) && !(1 > f.length)) {
              var k = f[0];
              if ("noop" != k && "stop" != k) {
                for (var h = 1;h < f.length;h++) {
                  f[h] = "";
                }
              }
            }
          }
        }
      }
    }
    return ob(c);
  } catch (m) {
    return M(a, "Exception parsing expected JS array - probably was not JS"), b;
  }
}
;function dc(a, b) {
  this.a = b ? nb : mb;
}
dc.prototype.parse = function(a) {
  return this.a(a);
};
function O() {
  0 != ec && (fc[this[ga] || (this[ga] = ++ha)] = this);
  this.l = this.l;
  this.Aa = this.Aa;
}
var ec = 0, fc = {};
O.prototype.l = !1;
O.prototype.Ja = function() {
  if (!this.l && (this.l = !0, this.C(), 0 != ec)) {
    var a = this[ga] || (this[ga] = ++ha);
    delete fc[a];
  }
};
O.prototype.C = function() {
  if (this.Aa) {
    for (;this.Aa.length;) {
      this.Aa.shift()();
    }
  }
};
var gc = "closure_listenable_" + (1E6 * Math.random() | 0), hc = 0;
function ic(a, b, c, e, d) {
  this.listener = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.pa = !!e;
  this.va = d;
  this.ab = ++hc;
  this.Z = this.oa = !1;
}
function jc(a) {
  a.Z = !0;
  a.listener = null;
  a.a = null;
  a.src = null;
  a.va = null;
}
;function kc(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
function lc(a, b, c, e, d) {
  var f = b.toString();
  b = a.a[f];
  b || (b = a.a[f] = [], a.b++);
  var k = mc(b, c, e, d);
  -1 < k ? (a = b[k], a.oa = !1) : (a = new ic(c, a.src, f, !!e, d), a.oa = !1, b.push(a));
  return a;
}
function nc(a, b) {
  var c = b.type;
  if (c in a.a) {
    var e = a.a[c], d = Ha(e, b), f;
    (f = 0 <= d) && u.splice.call(e, d, 1);
    f && (jc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }
}
function oc(a, b, c, e, d) {
  a = a.a[b.toString()];
  b = -1;
  a && (b = mc(a, c, e, d));
  return -1 < b ? a[b] : null;
}
function mc(a, b, c, e) {
  for (var d = 0;d < a.length;++d) {
    var f = a[d];
    if (!f.Z && f.listener == b && f.pa == !!c && f.va == e) {
      return d;
    }
  }
  return -1;
}
;function P(a, b) {
  this.type = a;
  this.a = this.target = b;
  this.pb = !0;
}
P.prototype.b = function() {
  this.pb = !1;
};
var pc = !G || 9 <= J, qc = G && !H("9");
!Fb || H("528");
Eb && H("1.9b") || G && H("8") || Cb && H("9.5") || Fb && H("528");
Eb && !H("8") || G && H("9");
function rc(a) {
  rc[" "](a);
  return a;
}
rc[" "] = ba;
function sc(a, b) {
  P.call(this, a ? a.type : "");
  this.c = this.state = this.a = this.target = null;
  if (a) {
    this.type = a.type;
    this.target = a.target || a.srcElement;
    this.a = b;
    var c = a.relatedTarget;
    if (c && Eb) {
      try {
        rc(c.nodeName);
      } catch (e) {
      }
    }
    this.state = a.state;
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
t(sc, P);
sc.prototype.b = function() {
  sc.$.b.call(this);
  var a = this.c;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, qc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var tc = "closure_lm_" + (1E6 * Math.random() | 0), uc = {}, vc = 0;
function wc(a, b, c, e, d) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      wc(a, b[f], c, e, d);
    }
    return null;
  }
  c = xc(c);
  if (a && a[gc]) {
    a = a.wa(b, c, e, d);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!e, k = yc(a);
    k || (a[tc] = k = new kc(a));
    c = lc(k, b, c, e, d);
    if (!c.a) {
      e = zc();
      c.a = e;
      e.src = a;
      e.listener = c;
      if (a.addEventListener) {
        a.addEventListener(b.toString(), e, f);
      } else {
        if (a.attachEvent) {
          a.attachEvent(Ac(b.toString()), e);
        } else {
          throw Error("addEventListener and attachEvent are unavailable.");
        }
      }
      vc++;
    }
    a = c;
  }
  return a;
}
function zc() {
  var a = Bc, b = pc ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Cc(a, b, c, e, d) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      Cc(a, b[f], c, e, d);
    }
  } else {
    c = xc(c), a && a[gc] ? a.Qa(b, c, e, d) : a && (a = yc(a)) && (b = oc(a, b, c, !!e, d)) && Dc(b);
  }
}
function Dc(a) {
  if ("number" != typeof a && a && !a.Z) {
    var b = a.src;
    if (b && b[gc]) {
      nc(b.L, a);
    } else {
      var c = a.type, e = a.a;
      b.removeEventListener ? b.removeEventListener(c, e, a.pa) : b.detachEvent && b.detachEvent(Ac(c), e);
      vc--;
      (c = yc(b)) ? (nc(c, a), 0 == c.b && (c.src = null, b[tc] = null)) : jc(a);
    }
  }
}
function Ac(a) {
  return a in uc ? uc[a] : uc[a] = "on" + a;
}
function Ec(a, b, c, e) {
  var d = !0;
  if (a = yc(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.pa == c && !f.Z && (f = Fc(f, e), d = d && !1 !== f);
      }
    }
  }
  return d;
}
function Fc(a, b) {
  var c = a.listener, e = a.va || a.src;
  a.oa && Dc(a);
  return c.call(e, b);
}
function Bc(a, b) {
  if (a.Z) {
    return !0;
  }
  if (!pc) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var e = l, d;d = c.shift();) {
          if (null != e[d]) {
            e = e[d];
          } else {
            c = null;
            break a;
          }
        }
        c = e;
      }
    }
    d = c;
    c = new sc(d, this);
    e = !0;
    if (!(0 > d.keyCode || void 0 != d.returnValue)) {
      a: {
        var f = !1;
        if (0 == d.keyCode) {
          try {
            d.keyCode = -1;
            break a;
          } catch (k) {
            f = !0;
          }
        }
        if (f || void 0 == d.returnValue) {
          d.returnValue = !0;
        }
      }
      d = [];
      for (f = c.a;f;f = f.parentNode) {
        d.push(f);
      }
      for (var f = a.type, h = d.length - 1;0 <= h;h--) {
        c.a = d[h];
        var m = Ec(d[h], f, !0, c), e = e && m;
      }
      for (h = 0;h < d.length;h++) {
        c.a = d[h], m = Ec(d[h], f, !1, c), e = e && m;
      }
    }
    return e;
  }
  return Fc(a, new sc(b, this));
}
function yc(a) {
  a = a[tc];
  return a instanceof kc ? a : null;
}
var Gc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function xc(a) {
  if (fa(a)) {
    return a;
  }
  a[Gc] || (a[Gc] = function(b) {
    return a.handleEvent(b);
  });
  return a[Gc];
}
;function Q() {
  O.call(this);
  this.L = new kc(this);
  this.tb = this;
  this.Ia = null;
}
t(Q, O);
Q.prototype[gc] = !0;
g = Q.prototype;
g.addEventListener = function(a, b, c, e) {
  wc(this, a, b, c, e);
};
g.removeEventListener = function(a, b, c, e) {
  Cc(this, a, b, c, e);
};
function R(a, b) {
  var c, e = a.Ia;
  if (e) {
    for (c = [];e;e = e.Ia) {
      c.push(e);
    }
  }
  var e = a.tb, d = b, f = d.type || d;
  if (p(d)) {
    d = new P(d, e);
  } else {
    if (d instanceof P) {
      d.target = d.target || e;
    } else {
      var k = d, d = new P(f, e);
      Ga(d, k);
    }
  }
  var k = !0, h;
  if (c) {
    for (var m = c.length - 1;0 <= m;m--) {
      h = d.a = c[m], k = Hc(h, f, !0, d) && k;
    }
  }
  h = d.a = e;
  k = Hc(h, f, !0, d) && k;
  k = Hc(h, f, !1, d) && k;
  if (c) {
    for (m = 0;m < c.length;m++) {
      h = d.a = c[m], k = Hc(h, f, !1, d) && k;
    }
  }
}
g.C = function() {
  Q.$.C.call(this);
  if (this.L) {
    var a = this.L, b = 0, c;
    for (c in a.a) {
      for (var e = a.a[c], d = 0;d < e.length;d++) {
        ++b, jc(e[d]);
      }
      delete a.a[c];
      a.b--;
    }
  }
  this.Ia = null;
};
g.wa = function(a, b, c, e) {
  return lc(this.L, String(a), b, c, e);
};
g.Qa = function(a, b, c, e) {
  var d;
  d = this.L;
  a = String(a).toString();
  if (a in d.a) {
    var f = d.a[a];
    b = mc(f, b, c, e);
    -1 < b ? (jc(f[b]), u.splice.call(f, b, 1), 0 == f.length && (delete d.a[a], d.b--), d = !0) : d = !1;
  } else {
    d = !1;
  }
  return d;
};
function Hc(a, b, c, e) {
  b = a.L.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var d = !0, f = 0;f < b.length;++f) {
    var k = b[f];
    if (k && !k.Z && k.pa == c) {
      var h = k.listener, m = k.va || k.src;
      k.oa && nc(a.L, k);
      d = !1 !== h.call(m, e) && d;
    }
  }
  return d && 0 != e.pb;
}
;function S(a, b) {
  Q.call(this);
  this.c = a || 1;
  this.b = b || Ic;
  this.g = q(this.i, this);
  this.h = r();
}
t(S, Q);
S.prototype.f = !1;
var Ic = l;
S.prototype.a = null;
S.prototype.setInterval = function(a) {
  this.c = a;
  this.a && this.f ? (Jc(this), Kc(this)) : this.a && Jc(this);
};
S.prototype.i = function() {
  if (this.f) {
    var a = r() - this.h;
    0 < a && a < .8 * this.c ? this.a = this.b.setTimeout(this.g, this.c - a) : (this.a && (this.b.clearTimeout(this.a), this.a = null), R(this, Lc), this.f && (this.a = this.b.setTimeout(this.g, this.c), this.h = r()));
  }
};
function Kc(a) {
  a.f = !0;
  a.a || (a.a = a.b.setTimeout(a.g, a.c), a.h = r());
}
function Jc(a) {
  a.f = !1;
  a.a && (a.b.clearTimeout(a.a), a.a = null);
}
S.prototype.C = function() {
  S.$.C.call(this);
  Jc(this);
  delete this.b;
};
var Lc = "tick";
function Mc(a, b, c) {
  if (fa(a)) {
    c && (a = q(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = q(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : Ic.setTimeout(a, b || 0);
}
;function Nc() {
}
Nc.prototype.a = null;
function Oc(a) {
  var b;
  (b = a.a) || (b = {}, Pc(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b;
}
;var Qc;
function Rc() {
}
t(Rc, Nc);
function Sc(a) {
  return (a = Pc(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Pc(a) {
  if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var e = b[c];
      try {
        return new ActiveXObject(e), a.b = e;
      } catch (d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.b;
}
Qc = new Rc;
function Tc(a) {
  Q.call(this);
  this.ub = new Na;
  this.na = a || null;
  this.c = !1;
  this.Fa = this.a = null;
  this.Ta = this.xa = "";
  this.g = 0;
  this.h = "";
  this.f = this.Ha = this.I = this.Ga = !1;
  this.i = 0;
  this.Da = null;
  this.Ua = Uc;
  this.Ea = this.Va = !1;
}
t(Tc, Q);
var Uc = "";
Tc.prototype.b = Yb("goog.net.XhrIo");
var Vc = /^https?$/i, Wc = ["POST", "PUT"];
function Xc(a, b, c, e, d) {
  if (a.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + a.xa + "; newUri=" + b);
  }
  c = c ? c.toUpperCase() : "GET";
  a.xa = b;
  a.h = "";
  a.g = 0;
  a.Ta = c;
  a.Ga = !1;
  a.c = !0;
  a.a = a.Xa();
  a.Fa = a.na ? Oc(a.na) : Oc(Qc);
  a.a.onreadystatechange = q(a.kb, a);
  try {
    L(a.b, T(a, "Opening Xhr")), a.Ha = !0, a.a.open(c, String(b), !0), a.Ha = !1;
  } catch (f) {
    L(a.b, T(a, "Error opening Xhr: " + f.message));
    Yc(a, f);
    return;
  }
  b = e || "";
  var k = a.ub.clone();
  d && Ra(d, function(a, b) {
    x(k, b, a);
  });
  d = Ja(k.M());
  e = l.FormData && b instanceof l.FormData;
  !(0 <= Ha(Wc, c)) || d || e || x(k, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  k.forEach(function(a, b) {
    this.a.setRequestHeader(b, a);
  }, a);
  a.Ua && (a.a.responseType = a.Ua);
  "withCredentials" in a.a && (a.a.withCredentials = a.Va);
  try {
    Zc(a), 0 < a.i && (a.Ea = $c(a.a), L(a.b, T(a, "Will abort after " + a.i + "ms if incomplete, xhr2 " + a.Ea)), a.Ea ? (a.a.timeout = a.i, a.a.ontimeout = q(a.gb, a)) : a.Da = Mc(a.gb, a.i, a)), L(a.b, T(a, "Sending request")), a.I = !0, a.a.send(b), a.I = !1;
  } catch (h) {
    L(a.b, T(a, "Send error: " + h.message)), Yc(a, h);
  }
}
function $c(a) {
  return G && H(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
}
function Ka(a) {
  return "content-type" == a.toLowerCase();
}
g = Tc.prototype;
g.Xa = function() {
  return this.na ? Sc(this.na) : Sc(Qc);
};
g.gb = function() {
  "undefined" != typeof aa && this.a && (this.h = "Timed out after " + this.i + "ms, aborting", this.g = 8, L(this.b, T(this, this.h)), R(this, "timeout"), ad(this, 8));
};
function Yc(a, b) {
  a.c = !1;
  a.a && (a.f = !0, a.a.abort(), a.f = !1);
  a.h = b;
  a.g = 5;
  bd(a);
  cd(a);
}
function bd(a) {
  a.Ga || (a.Ga = !0, R(a, "complete"), R(a, "error"));
}
function ad(a, b) {
  a.a && a.c && (L(a.b, T(a, "Aborting")), a.c = !1, a.f = !0, a.a.abort(), a.f = !1, a.g = b || 7, R(a, "complete"), R(a, "abort"), cd(a));
}
g.C = function() {
  this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), cd(this, !0));
  Tc.$.C.call(this);
};
g.kb = function() {
  this.l || (this.Ha || this.I || this.f ? dd(this) : this.zb());
};
g.zb = function() {
  dd(this);
};
function dd(a) {
  if (a.c && "undefined" != typeof aa) {
    if (a.Fa[1] && 4 == U(a) && 2 == ed(a)) {
      L(a.b, T(a, "Local request error detected and ignored"));
    } else {
      if (a.I && 4 == U(a)) {
        Mc(a.kb, 0, a);
      } else {
        if (R(a, "readystatechange"), 4 == U(a)) {
          L(a.b, T(a, "Request complete"));
          a.c = !1;
          try {
            var b = ed(a), c;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 206:
                ;
                case 304:
                ;
                case 1223:
                  c = !0;
                  break a;
                default:
                  c = !1;
              }
            }
            var e;
            if (!(e = c)) {
              var d;
              if (d = 0 === b) {
                var f = String(a.xa).match(Aa)[1] || null;
                if (!f && l.self && l.self.location) {
                  var k = l.self.location.protocol, f = k.substr(0, k.length - 1)
                }
                d = !Vc.test(f ? f.toLowerCase() : "");
              }
              e = d;
            }
            if (e) {
              R(a, "complete"), R(a, "success");
            } else {
              a.g = 6;
              var h;
              try {
                h = 2 < U(a) ? a.a.statusText : "";
              } catch (m) {
                L(a.b, "Can not get status: " + m.message), h = "";
              }
              a.h = h + " [" + ed(a) + "]";
              bd(a);
            }
          } finally {
            cd(a);
          }
        }
      }
    }
  }
}
function cd(a, b) {
  if (a.a) {
    Zc(a);
    var c = a.a, e = a.Fa[0] ? ba : null;
    a.a = null;
    a.Fa = null;
    b || R(a, "ready");
    try {
      c.onreadystatechange = e;
    } catch (d) {
      K(a.b, "Problem encountered resetting onreadystatechange: " + d.message);
    }
  }
}
function Zc(a) {
  a.a && a.Ea && (a.a.ontimeout = null);
  "number" == typeof a.Da && (Ic.clearTimeout(a.Da), a.Da = null);
}
function U(a) {
  return a.a ? a.a.readyState : 0;
}
function ed(a) {
  try {
    return 2 < U(a) ? a.a.status : -1;
  } catch (b) {
    return -1;
  }
}
function fd(a) {
  try {
    return a.a ? a.a.responseText : "";
  } catch (b) {
    return L(a.b, "Can not get responseText: " + b.message), "";
  }
}
function T(a, b) {
  return b + " [" + a.Ta + " " + a.xa + " " + ed(a) + "]";
}
;function gd() {
  r();
}
new gd;
gd.prototype.reset = function() {
  r();
};
function hd(a) {
  O.call(this);
  this.b = a;
  this.a = {};
}
t(hd, O);
var id = [];
hd.prototype.wa = function(a, b, c, e) {
  n(b) || (b && (id[0] = b.toString()), b = id);
  for (var d = 0;d < b.length;d++) {
    var f = wc(a, b[d], c || this.handleEvent, e || !1, this.b || this);
    if (!f) {
      break;
    }
    this.a[f.ab] = f;
  }
  return this;
};
hd.prototype.Qa = function(a, b, c, e, d) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      this.Qa(a, b[f], c, e, d);
    }
  } else {
    c = c || this.handleEvent, d = d || this.b || this, c = xc(c), e = !!e, b = a && a[gc] ? oc(a.L, String(b), c, e, d) : a ? (a = yc(a)) ? oc(a, b, c, e, d) : null : null, b && (Dc(b), delete this.a[b.ab]);
  }
  return this;
};
function jd(a) {
  Ca(a.a, function(a, c) {
    this.a.hasOwnProperty(c) && Dc(a);
  }, a);
  a.a = {};
}
hd.prototype.C = function() {
  hd.$.C.call(this);
  jd(this);
};
hd.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function kd(a, b, c) {
  O.call(this);
  this.h = a;
  this.g = b;
  this.f = c;
  this.c = q(this.i, this);
}
t(kd, O);
kd.prototype.b = !1;
kd.prototype.a = null;
kd.prototype.C = function() {
  kd.$.C.call(this);
  this.a && (Ic.clearTimeout(this.a), this.a = null, this.b = !1);
};
kd.prototype.i = function() {
  this.a = null;
  this.b && (this.b = !1, ld(this));
};
function ld(a) {
  a.a = Mc(a.c, a.g);
  a.h.call(a.f);
}
;function V(a, b, c, e, d) {
  this.b = a;
  this.a = b;
  this.g = c;
  this.c = e;
  this.f = d || 1;
  this.i = md;
  this.h = new hd(this);
  this.l = new S;
  this.l.setInterval(nd);
}
g = V.prototype;
g.W = null;
g.B = !1;
g.ca = null;
g.Sa = null;
g.la = null;
g.aa = null;
g.J = null;
g.w = null;
g.Y = null;
g.o = null;
g.ma = 0;
g.G = null;
g.ba = null;
g.P = null;
g.ha = -1;
g.qb = !0;
g.R = !1;
g.Oa = 0;
g.ya = null;
var md = 45E3, nd = 250;
function pd(a, b) {
  switch(a) {
    case 0:
      return "Non-200 return code (" + b + ")";
    case 1:
      return "XMLHTTP failure (no data)";
    case 2:
      return "HttpConnection timeout";
    default:
      return "Unknown error";
  }
}
var qd = {}, rd = {};
g = V.prototype;
g.setTimeout = function(a) {
  this.i = a;
};
function sd(a, b, c) {
  a.aa = 1;
  a.J = C(b.clone());
  a.Y = c;
  a.I = !0;
  td(a, null);
}
function ud(a, b, c, e, d) {
  a.aa = 1;
  a.J = C(b.clone());
  a.Y = null;
  a.I = c;
  d && (a.qb = !1);
  td(a, e);
}
function td(a, b) {
  a.la = r();
  vd(a);
  a.w = a.J.clone();
  gb(a.w, "t", a.f);
  a.ma = 0;
  a.o = a.b.qa(a.b.Ba() ? b : null);
  0 < a.Oa && (a.ya = new kd(q(a.sb, a, a.o), a.Oa));
  a.h.wa(a.o, "readystatechange", a.Fb);
  var c;
  if (a.W) {
    c = a.W;
    var e = {}, d;
    for (d in c) {
      e[d] = c[d];
    }
    c = e;
  } else {
    c = {};
  }
  a.Y ? (a.ba = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", Xc(a.o, a.w, a.ba, a.Y, c)) : (a.ba = "GET", a.qb && !Fb && (c.Connection = "close"), Xc(a.o, a.w, a.ba, null, c));
  a.b.F(wd);
  if (e = a.Y) {
    for (c = "", e = e.split("&"), d = 0;d < e.length;d++) {
      var f = e[d].split("=");
      if (1 < f.length) {
        var k = f[0], f = f[1], h = k.split("_");
        c = 2 <= h.length && "type" == h[1] ? c + (k + "=" + f + "&") : c + (k + "=redacted&");
      }
    }
  } else {
    c = null;
  }
  M(a.a, "XMLHTTP REQ (" + a.c + ") [attempt " + a.f + "]: " + a.ba + "\n" + a.w + "\n" + c);
}
g.Fb = function(a) {
  a = a.target;
  var b = this.ya;
  b && 3 == U(a) ? (M(this.a, "Throttling readystatechange."), b.a ? b.b = !0 : ld(b)) : this.sb(a);
};
g.sb = function(a) {
  try {
    if (a == this.o) {
      a: {
        var b = U(this.o), c = this.o.g, e = ed(this.o);
        if (G && !(10 <= J) || Fb && !H("420+")) {
          if (4 > b) {
            break a;
          }
        } else {
          if (3 > b || 3 == b && !Cb && !fd(this.o)) {
            break a;
          }
        }
        this.R || 4 != b || 7 == c || (8 == c || 0 >= e ? this.b.F(xd) : this.b.F(yd));
        zd(this);
        var d = ed(this.o);
        this.ha = d;
        var f = fd(this.o);
        f || M(this.a, "No response text for uri " + this.w + " status " + d);
        this.B = 200 == d;
        M(this.a, "XMLHTTP RESP (" + this.c + ") [ attempt " + this.f + "]: " + this.ba + "\n" + this.w + "\n" + b + " " + d);
        if (this.B) {
          4 == b && Ad(this), this.I ? (Bd(this, b, f), Cb && this.B && 3 == b && (this.h.wa(this.l, Lc, this.Eb), Kc(this.l))) : ($b(this.a, this.c, f, null), Cd(this, f)), this.B && !this.R && (4 == b ? this.b.ka(this) : (this.B = !1, vd(this)));
        } else {
          if (400 == d && 0 < f.indexOf("Unknown SID")) {
            this.P = 3;
            W();
            var k = this.a.a;
            k && Vb(k, "XMLHTTP Unknown SID (" + this.c + ")");
          } else {
            this.P = 0;
            W();
            var h = this.a.a;
            h && Vb(h, "XMLHTTP Bad status " + d + " (" + this.c + ")");
          }
          Ad(this);
          Dd(this);
        }
      }
    } else {
      var m = this.a.a;
      m && Vb(m, "Called back with an unexpected xmlhttp");
    }
  } catch (v) {
    M(this.a, "Failed call to OnXmlHttpReadyStateChanged_"), this.o && fd(this.o) ? N(this.a, v, "ResponseText: " + fd(this.o)) : N(this.a, v, "No response text");
  } finally {
  }
};
function Bd(a, b, c) {
  for (var e = !0;!a.R && a.ma < c.length;) {
    var d = Ed(a, c);
    if (d == rd) {
      4 == b && (a.P = 4, W(), e = !1);
      $b(a.a, a.c, null, "[Incomplete Response]");
      break;
    } else {
      if (d == qd) {
        a.P = 4;
        W();
        $b(a.a, a.c, c, "[Invalid Chunk]");
        e = !1;
        break;
      } else {
        $b(a.a, a.c, d, null), Cd(a, d);
      }
    }
  }
  4 == b && 0 == c.length && (a.P = 1, W(), e = !1);
  a.B = a.B && e;
  e || ($b(a.a, a.c, c, "[Invalid Chunked Response]"), Ad(a), Dd(a));
}
g.Eb = function() {
  var a = U(this.o), b = fd(this.o);
  this.ma < b.length && (zd(this), Bd(this, a, b), this.B && 4 != a && vd(this));
};
function Ed(a, b) {
  var c = a.ma, e = b.indexOf("\n", c);
  if (-1 == e) {
    return rd;
  }
  c = Number(b.substring(c, e));
  if (isNaN(c)) {
    return qd;
  }
  e += 1;
  if (e + c > b.length) {
    return rd;
  }
  var d = b.substr(e, c);
  a.ma = e + c;
  return d;
}
function Fd(a, b) {
  a.la = r();
  vd(a);
  var c = b ? window.location.hostname : "";
  a.w = a.J.clone();
  A(a.w, "DOMAIN", c);
  A(a.w, "t", a.f);
  try {
    a.G = new ActiveXObject("htmlfile");
  } catch (e) {
    K(a.a.a, "ActiveX blocked");
    Ad(a);
    a.P = 7;
    W();
    Dd(a);
    return;
  }
  var d = "<html><body>";
  if (b) {
    for (var f = "", k = 0;k < c.length;k++) {
      var h = c.charAt(k);
      if ("<" == h) {
        f = f + "\\x3c";
      } else {
        if (">" == h) {
          f = f + "\\x3e";
        } else {
          if (h in va) {
            h = va[h];
          } else {
            if (h in ua) {
              h = va[h] = ua[h];
            } else {
              var m = h, v = h.charCodeAt(0);
              if (31 < v && 127 > v) {
                m = h;
              } else {
                if (256 > v) {
                  if (m = "\\x", 16 > v || 256 < v) {
                    m += "0";
                  }
                } else {
                  m = "\\u", 4096 > v && (m += "0");
                }
                m += v.toString(16).toUpperCase();
              }
              h = va[h] = m;
            }
          }
          f += h;
        }
      }
    }
    d += '<script>document.domain="' + f + '"\x3c/script>';
  }
  c = zb(d + "</body></html>");
  a.G.open();
  a.G.write(yb(c));
  a.G.close();
  a.G.parentWindow.m = q(a.Cb, a);
  a.G.parentWindow.d = q(a.ob, a, !0);
  a.G.parentWindow.rpcClose = q(a.ob, a, !1);
  c = a.G.createElement("DIV");
  a.G.parentWindow.document.body.appendChild(c);
  d = a.w.toString();
  d instanceof E || (d = d.hb ? d.$a() : String(d), vb.test(d) || (d = "about:invalid#zClosurez"), k = new E, k.a = d, d = k);
  d instanceof E && d.constructor === E && d.b === ub ? d = d.a : (za("expected object of type SafeUrl, got '" + d + "'"), d = "type_error:SafeUrl");
  ta.test(d) && (-1 != d.indexOf("&") && (d = d.replace(na, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(oa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(pa, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(qa, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(ra, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(sa, "&#0;")));
  d = zb('<iframe src="' + d + '"></iframe>');
  c.innerHTML = yb(d);
  M(a.a, "TRIDENT REQ (" + a.c + ") [ attempt " + a.f + "]: GET\n" + a.w);
  a.b.F(wd);
}
g.Cb = function(a) {
  X(q(this.Bb, this, a), 0);
};
g.Bb = function(a) {
  if (!this.R) {
    var b = this.a;
    M(b, "TRIDENT TEXT (" + this.c + "): " + ac(b, a));
    zd(this);
    Cd(this, a);
    vd(this);
  }
};
g.ob = function(a) {
  X(q(this.Ab, this, a), 0);
};
g.Ab = function(a) {
  this.R || (M(this.a, "TRIDENT TEXT (" + this.c + "): " + a ? "success" : "failure"), Ad(this), this.B = a, this.b.ka(this), this.b.F(Gd));
};
function Hd(a) {
  a.R = !0;
  Ad(a);
}
function vd(a) {
  a.Sa = r() + a.i;
  Id(a, a.i);
}
function Id(a, b) {
  if (null != a.ca) {
    throw Error("WatchDog timer not null");
  }
  a.ca = X(q(a.Db, a), b);
}
function zd(a) {
  a.ca && (l.clearTimeout(a.ca), a.ca = null);
}
g.Db = function() {
  this.ca = null;
  var a = r();
  if (0 <= a - this.Sa) {
    this.B && K(this.a.a, "Received watchdog timeout even though request loaded successfully"), M(this.a, "TIMEOUT: " + this.w), 2 != this.aa && this.b.F(xd), Ad(this), this.P = 2, W(), Dd(this);
  } else {
    var b = this.a.a;
    b && Vb(b, "WatchDog timer called too early");
    Id(this, this.Sa - a);
  }
};
function Dd(a) {
  a.b.ib() || a.R || a.b.ka(a);
}
function Ad(a) {
  zd(a);
  var b = a.ya;
  b && "function" == typeof b.Ja && b.Ja();
  a.ya = null;
  Jc(a.l);
  jd(a.h);
  a.o && (b = a.o, a.o = null, ad(b), b.Ja());
  a.G && (a.G = null);
}
g.Za = function() {
  return this.g;
};
function Cd(a, b) {
  try {
    a.b.lb(a, b), a.b.F(Gd);
  } catch (c) {
    N(a.a, c, "Error in httprequest callback");
  }
}
;function Jd(a, b, c, e, d) {
  bc(new Zb, "TestLoadImageWithRetries: " + d);
  if (0 == e) {
    c(!1);
  } else {
    var f = d || 0;
    e--;
    Kd(a, b, function(d) {
      d ? c(!0) : l.setTimeout(function() {
        Jd(a, b, c, e, f);
      }, f);
    });
  }
}
function Kd(a, b, c) {
  var e = new Zb;
  M(e, "TestLoadImage: loading " + a);
  var d = new Image;
  d.onload = function() {
    try {
      M(e, "TestLoadImage: loaded"), Ld(d), c(!0);
    } catch (a) {
      N(e, a);
    }
  };
  d.onerror = function() {
    try {
      M(e, "TestLoadImage: error"), Ld(d), c(!1);
    } catch (a) {
      N(e, a);
    }
  };
  d.onabort = function() {
    try {
      M(e, "TestLoadImage: abort"), Ld(d), c(!1);
    } catch (a) {
      N(e, a);
    }
  };
  d.ontimeout = function() {
    try {
      M(e, "TestLoadImage: timeout"), Ld(d), c(!1);
    } catch (a) {
      N(e, a);
    }
  };
  l.setTimeout(function() {
    if (d.ontimeout) {
      d.ontimeout();
    }
  }, b);
  d.src = a;
}
function Ld(a) {
  a.onload = null;
  a.onerror = null;
  a.onabort = null;
  a.ontimeout = null;
}
;function Md(a, b) {
  this.a = a;
  this.b = b;
  this.c = new dc(0, !0);
}
g = Md.prototype;
g.Ma = null;
g.A = null;
g.za = !1;
g.rb = null;
g.sa = null;
g.Pa = null;
g.Na = null;
g.v = null;
g.V = -1;
g.ga = null;
g.da = null;
g.connect = function(a) {
  this.Na = a;
  a = Nd(this.a, this.Na);
  W();
  this.rb = r();
  var b = this.a.Ya;
  null != b ? (this.ga = b[0], (this.da = b[1]) ? (this.v = 1, Od(this)) : (this.v = 2, Pd(this))) : (gb(a, "MODE", "init"), this.A = new V(this, this.b, void 0, void 0, void 0), this.A.W = this.Ma, ud(this.A, a, !1, null, !0), this.v = 0);
};
function Od(a) {
  var b = Qd(a.a, a.da, "/mail/images/cleardot.gif");
  C(b);
  Jd(b.toString(), 5E3, q(a.vb, a), 3, 2E3);
  a.F(wd);
}
g.vb = function(a) {
  if (a) {
    this.v = 2, Pd(this);
  } else {
    W();
    var b = this.a;
    M(b.a, "Test Connection Blocked");
    b.O = b.K.V;
    Y(b, 9);
  }
  a && this.F(yd);
};
function Pd(a) {
  M(a.b, "TestConnection: starting stage 2");
  var b = a.a.I;
  if (null != b) {
    M(a.b, "TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), W(), b ? (W(), Rd(a.a, a, !1)) : (W(), Rd(a.a, a, !0));
  } else {
    if (a.A = new V(a, a.b, void 0, void 0, void 0), a.A.W = a.Ma, b = Sd(a.a, a.ga, a.Na), W(), !G || 10 <= J) {
      gb(b, "TYPE", "xmlhttp"), ud(a.A, b, !1, a.ga, !1);
    } else {
      gb(b, "TYPE", "html");
      var c = a.A;
      a = Boolean(a.ga);
      c.aa = 3;
      c.J = C(b.clone());
      Fd(c, a);
    }
  }
}
g.qa = function(a) {
  return this.a.qa(a);
};
g.ib = function() {
  return !1;
};
g.lb = function(a, b) {
  this.V = a.ha;
  if (0 == this.v) {
    if (M(this.b, "TestConnection: Got data for stage 1"), b) {
      try {
        var c = this.c.parse(b);
      } catch (e) {
        N(this.b, e);
        Td(this.a, this);
        return;
      }
      this.ga = c[0];
      this.da = c[1];
    } else {
      M(this.b, "TestConnection: Null responseText"), Td(this.a, this);
    }
  } else {
    if (2 == this.v) {
      if (this.za) {
        W(), this.Pa = r();
      } else {
        if ("11111" == b) {
          if (W(), this.za = !0, this.sa = r(), c = this.sa - this.rb, !G || 10 <= J || 500 > c) {
            this.V = 200, Hd(this.A), M(this.b, "Test connection succeeded; using streaming connection"), W(), Rd(this.a, this, !0);
          }
        } else {
          W(), this.sa = this.Pa = r(), this.za = !1;
        }
      }
    }
  }
};
g.ka = function() {
  this.V = this.A.ha;
  if (!this.A.B) {
    M(this.b, "TestConnection: request failed, in state " + this.v), 0 == this.v ? W() : 2 == this.v && W(), Td(this.a, this);
  } else {
    if (0 == this.v) {
      M(this.b, "TestConnection: request complete for initial check"), this.da ? (this.v = 1, Od(this)) : (this.v = 2, Pd(this));
    } else {
      if (2 == this.v) {
        M(this.b, "TestConnection: request complete for stage 2");
        var a = !1;
        (a = !G || 10 <= J ? this.za : 200 > this.Pa - this.sa ? !1 : !0) ? (M(this.b, "Test connection succeeded; using streaming connection"), W(), Rd(this.a, this, !0)) : (M(this.b, "Test connection failed; not using streaming"), W(), Rd(this.a, this, !1));
      }
    }
  }
};
g.Ba = function() {
  return this.a.Ba();
};
g.F = function(a) {
  this.a.F(a);
};
function Ud(a, b, c) {
  this.i = a || null;
  this.b = Vd;
  this.c = [];
  this.f = [];
  this.a = new Zb;
  this.l = new dc(0, !0);
  this.Ya = b || null;
  this.I = null != c ? c : null;
}
function Wd(a, b) {
  this.a = a;
  this.map = b;
}
g = Ud.prototype;
g.fa = null;
g.ea = null;
g.s = null;
g.j = null;
g.La = null;
g.ta = null;
g.Wa = null;
g.ua = null;
g.ja = 0;
g.xb = 0;
g.ra = !1;
g.u = null;
g.D = null;
g.H = null;
g.T = null;
g.K = null;
g.Ra = null;
g.ia = -1;
g.jb = -1;
g.O = -1;
g.U = 0;
g.X = 0;
g.Ca = !1;
g.S = 8;
var Vd = 1, Xd = new Q;
function Yd(a) {
  P.call(this, "statevent", a);
}
t(Yd, P);
function Zd(a) {
  P.call(this, "timingevent", a);
}
t(Zd, P);
var wd = 1, yd = 2, xd = 3, Gd = 4;
function $d(a) {
  P.call(this, "serverreachability", a);
}
t($d, P);
var cc = "y2f%";
g = Ud.prototype;
g.connect = function(a, b, c, e, d) {
  M(this.a, "connect()");
  W();
  this.La = b;
  this.ea = c || {};
  e && void 0 !== d && (this.ea.OSID = e, this.ea.OAID = d);
  M(this.a, "connectTest_()");
  this.K = new Md(this, this.a);
  this.K.Ma = this.fa;
  this.K.c = this.l;
  this.K.connect(a);
};
g.disconnect = function() {
  M(this.a, "disconnect()");
  ae(this);
  if (3 == this.b) {
    var a = this.ja++, b = this.ta.clone();
    A(b, "SID", this.g);
    A(b, "RID", a);
    A(b, "TYPE", "terminate");
    be(this, b);
    a = new V(this, this.a, this.g, a, void 0);
    a.aa = 2;
    a.J = C(b.clone());
    (new Image).src = a.J;
    a.la = r();
    vd(a);
  }
  ce(this);
};
g.Za = function() {
  return this.g;
};
function ae(a) {
  if (a.K) {
    var b = a.K;
    b.A && (Hd(b.A), b.A = null);
    b.V = -1;
    a.K = null;
  }
  a.j && (Hd(a.j), a.j = null);
  a.H && (l.clearTimeout(a.H), a.H = null);
  de(a);
  a.s && (Hd(a.s), a.s = null);
  a.D && (l.clearTimeout(a.D), a.D = null);
}
g.ib = function() {
  return 0 == this.b;
};
function ee(a) {
  a.s || a.D || (a.D = X(q(a.nb, a), 0), a.U = 0);
}
g.nb = function(a) {
  this.D = null;
  M(this.a, "startForwardChannel_");
  if (this.b == Vd) {
    if (a) {
      K(this.a.a, "Not supposed to retry the open");
    } else {
      M(this.a, "open_()");
      this.ja = Math.floor(1E5 * Math.random());
      a = this.ja++;
      var b = new V(this, this.a, "", a, void 0);
      b.W = this.fa;
      var c = fe(this), e = this.ta.clone();
      A(e, "RID", a);
      this.i && A(e, "CVER", this.i);
      be(this, e);
      sd(b, e, c);
      this.s = b;
      this.b = 2;
    }
  } else {
    3 == this.b && (a ? ge(this, a) : 0 == this.c.length ? M(this.a, "startForwardChannel_ returned: nothing to send") : this.s ? K(this.a.a, "startForwardChannel_ returned: connection already in progress") : (ge(this), M(this.a, "startForwardChannel_ finished, sent request")));
  }
};
function ge(a, b) {
  var c, e;
  b ? 6 < a.S ? (a.c = a.f.concat(a.c), a.f.length = 0, c = a.ja - 1, e = fe(a)) : (c = b.c, e = b.Y) : (c = a.ja++, e = fe(a));
  var d = a.ta.clone();
  A(d, "SID", a.g);
  A(d, "RID", c);
  A(d, "AID", a.ia);
  be(a, d);
  c = new V(a, a.a, a.g, c, a.U + 1);
  c.W = a.fa;
  c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
  a.s = c;
  sd(c, d, e);
}
function be(a, b) {
  a.u && Ca({}, function(a, e) {
    A(b, e, a);
  });
}
function fe(a) {
  var b = Math.min(a.c.length, 1E3), c = ["count=" + b], e;
  6 < a.S && 0 < b ? (e = a.c[0].a, c.push("ofs=" + e)) : e = 0;
  for (var d = 0;d < b;d++) {
    var f = a.c[d].a, k = a.c[d].map, f = 6 >= a.S ? d : f - e;
    try {
      Ra(k, function(a, b) {
        c.push("req" + f + "_" + b + "=" + encodeURIComponent(a));
      });
    } catch (h) {
      c.push("req" + f + "_type=" + encodeURIComponent("_badmap"));
    }
  }
  a.f = a.f.concat(a.c.splice(0, b));
  return c.join("&");
}
function he(a) {
  a.j || a.H || (a.h = 1, a.H = X(q(a.mb, a), 0), a.X = 0);
}
function ie(a) {
  if (a.j || a.H) {
    return K(a.a.a, "Request already in progress"), !1;
  }
  if (3 <= a.X) {
    return !1;
  }
  M(a.a, "Going to retry GET");
  a.h++;
  a.H = X(q(a.mb, a), je(a, a.X));
  a.X++;
  return !0;
}
g.mb = function() {
  this.H = null;
  M(this.a, "Creating new HttpRequest");
  this.j = new V(this, this.a, this.g, "rpc", this.h);
  this.j.W = this.fa;
  this.j.Oa = 0;
  var a = this.Wa.clone();
  A(a, "RID", "rpc");
  A(a, "SID", this.g);
  A(a, "CI", this.Ra ? "0" : "1");
  A(a, "AID", this.ia);
  be(this, a);
  if (!G || 10 <= J) {
    A(a, "TYPE", "xmlhttp"), ud(this.j, a, !0, this.ua, !1);
  } else {
    A(a, "TYPE", "html");
    var b = this.j, c = Boolean(this.ua);
    b.aa = 3;
    b.J = C(a.clone());
    Fd(b, c);
  }
  M(this.a, "New Request created");
};
function Rd(a, b, c) {
  M(a.a, "Test Connection Finished");
  a.Ra = c;
  a.O = b.V;
  M(a.a, "connectChannel_()");
  a.wb(Vd, 0);
  a.ta = Nd(a, a.La);
  ee(a);
}
function Td(a, b) {
  M(a.a, "Test Connection Failed");
  a.O = b.V;
  Y(a, 2);
}
g.lb = function(a, b) {
  if (0 != this.b && (this.j == a || this.s == a)) {
    if (this.O = a.ha, this.s == a && 3 == this.b) {
      if (7 < this.S) {
        var c;
        try {
          c = this.l.parse(b);
        } catch (e) {
          c = null;
        }
        if (n(c) && 3 == c.length) {
          var d = c;
          if (0 == d[0]) {
            a: {
              if (M(this.a, "Server claims our backchannel is missing."), this.H) {
                M(this.a, "But we are currently starting the request.");
              } else {
                if (this.j) {
                  if (this.j.la + 3E3 < this.s.la) {
                    de(this), Hd(this.j), this.j = null;
                  } else {
                    break a;
                  }
                } else {
                  (c = this.a.a) && Vb(c, "We do not have a BackChannel established");
                }
                ie(this);
                W();
              }
            }
          } else {
            this.jb = d[1], c = this.jb - this.ia, 0 < c && (d = d[2], M(this.a, d + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > d && this.Ra && 0 == this.X && !this.T && (this.T = X(q(this.yb, this), 6E3)));
          }
        } else {
          M(this.a, "Bad POST response data returned"), Y(this, 11);
        }
      } else {
        b != cc && (M(this.a, "Bad data returned - missing/invald magic cookie"), Y(this, 11));
      }
    } else {
      if (this.j == a && de(this), !/^[\s\xa0]*$/.test(b)) {
        for (c = this.l.parse(b), d = 0;d < c.length;d++) {
          var f = c[d];
          this.ia = f[0];
          f = f[1];
          2 == this.b ? "c" == f[0] ? (this.g = f[1], this.ua = f[2], f = f[3], null != f ? this.S = f : this.S = 6, this.b = 3, this.u && this.u.eb(this), this.Wa = Sd(this, this.ua, this.La), he(this)) : "stop" == f[0] && Y(this, 7) : 3 == this.b && ("stop" == f[0] ? Y(this, 7) : "noop" != f[0] && this.u && this.u.cb(this, f), this.X = 0);
        }
      }
    }
  }
};
g.yb = function() {
  null != this.T && (this.T = null, Hd(this.j), this.j = null, ie(this), W());
};
function de(a) {
  null != a.T && (l.clearTimeout(a.T), a.T = null);
}
g.ka = function(a) {
  M(this.a, "Request complete");
  var b;
  if (this.j == a) {
    de(this), this.j = null, b = 2;
  } else {
    if (this.s == a) {
      this.s = null, b = 1;
    } else {
      return;
    }
  }
  this.O = a.ha;
  if (0 != this.b) {
    if (a.B) {
      1 == b ? (r(), R(Xd, new Zd(Xd)), ee(this), this.f.length = 0) : he(this);
    } else {
      var c = a.P;
      if (3 == c || 7 == c || 0 == c && 0 < this.O) {
        M(this.a, "Not retrying due to error type");
      } else {
        M(this.a, "Maybe retrying, last error: " + pd(c, this.O));
        var e;
        if (e = 1 == b) {
          this.s || this.D ? (K(this.a.a, "Request already in progress"), e = !1) : this.b == Vd || this.U >= (this.ra ? 0 : 2) ? e = !1 : (M(this.a, "Going to retry POST"), this.D = X(q(this.nb, this, a), je(this, this.U)), this.U++, e = !0);
        }
        if (e || 2 == b && ie(this)) {
          return;
        }
        M(this.a, "Exceeded max number of retries");
      }
      M(this.a, "Error: HTTP request failed");
      switch(c) {
        case 1:
          Y(this, 5);
          break;
        case 4:
          Y(this, 10);
          break;
        case 3:
          Y(this, 6);
          break;
        case 7:
          Y(this, 12);
          break;
        default:
          Y(this, 2);
      }
    }
  }
};
function je(a, b) {
  var c = 5E3 + Math.floor(1E4 * Math.random());
  a.u || (M(a.a, "Inactive channel"), c *= 2);
  return c * b;
}
g.wb = function(a) {
  if (!(0 <= Ha(arguments, this.b))) {
    throw Error("Unexpected channel state: " + this.b);
  }
};
function Y(a, b) {
  M(a.a, "Error code " + b);
  if (2 == b || 9 == b) {
    var c = null;
    a.u && (c = a.u.fb(a));
    var e = q(a.Hb, a);
    c || (c = new z("//www.google.com/images/cleardot.gif"), C(c));
    Kd(c.toString(), 1E4, e);
  } else {
    W();
  }
  ke(a, b);
}
g.Hb = function(a) {
  a ? (M(this.a, "Successfully pinged google.com"), W()) : (M(this.a, "Failed to ping google.com"), W(), ke(this, 8));
};
function ke(a, b) {
  M(a.a, "HttpChannel: error - " + b);
  a.b = 0;
  a.u && a.u.bb(a, b);
  ce(a);
  ae(a);
}
function ce(a) {
  a.b = 0;
  a.O = -1;
  if (a.u) {
    if (0 == a.f.length && 0 == a.c.length) {
      a.u.Ka(a);
    } else {
      M(a.a, "Number of undelivered maps, pending: " + a.f.length + ", outgoing: " + a.c.length);
      var b = Ma(a.f), c = Ma(a.c);
      a.f.length = 0;
      a.c.length = 0;
      a.u.Ka(a, b, c);
    }
  }
}
function Nd(a, b) {
  var c = Qd(a, null, b);
  M(a.a, "GetForwardChannelUri: " + c);
  return c;
}
function Sd(a, b, c) {
  b = Qd(a, a.Ba() ? b : null, c);
  M(a.a, "GetBackChannelUri: " + b);
  return b;
}
function Qd(a, b, c) {
  var e = ib(c);
  if ("" != e.c) {
    b && Ta(e, b + "." + e.c), Ua(e, e.l);
  } else {
    var d = window.location, e = jb(d.protocol, b ? b + "." + d.hostname : d.hostname, d.port, c)
  }
  a.ea && Ca(a.ea, function(a, b) {
    A(e, b, a);
  });
  A(e, "VER", a.S);
  be(a, e);
  return e;
}
g.qa = function(a) {
  if (a && !this.Ca) {
    throw Error("Can't create secondary domain capable XhrIo object.");
  }
  a = new Tc;
  a.Va = this.Ca;
  return a;
};
function X(a, b) {
  if (!fa(a)) {
    throw Error("Fn must not be null and must be a function");
  }
  return l.setTimeout(function() {
    a();
  }, b);
}
g.F = function() {
  R(Xd, new $d(Xd));
};
function W() {
  R(Xd, new Yd(Xd));
}
g.Ba = function() {
  return this.Ca || !(!G || 10 <= J);
};
function le() {
}
g = le.prototype;
g.eb = function() {
};
g.cb = function() {
};
g.bb = function() {
};
g.Ka = function() {
};
g.fb = function() {
  return null;
};
var Z, me;
me = {0:"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
Z = function(a, b) {
  var c, e, d, f, k, h, m, v, w, I, D, ea, od;
  if (!(this instanceof Z)) {
    return new Z(a, b);
  }
  w = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  n(b || "string" === typeof b) && (b = {});
  m = b.reconnectTime || 3E3;
  c = b.extraParams || null;
  null !== b.affinity && (c || (c = {}), b.affinityParam || (b.affinityParam = "a"), this.affinity = b.affinity || wa(), c[b.affinityParam] = this.affinity);
  ea = function(a) {
    w.readyState = w.readyState = a;
  };
  ea(this.CLOSED);
  D = null;
  k = null != (od = b.prev) ? od.Gb : void 0;
  e = function(a, b, c, d, e) {
    try {
      return "function" === typeof w[a] ? w[a](c, d, e) : void 0;
    } catch (f) {
      throw "undefined" !== typeof console && null !== console && console.error(f.stack), f;
    }
  };
  d = new le;
  d.eb = function() {
    k = D;
    ea(Z.OPEN);
    return e("onopen");
  };
  f = null;
  d.bb = function(a, b) {
    var c;
    c = me[b];
    f = b;
    w.readyState !== Z.CLOSED && ea(Z.CLOSING);
    return e("onerror", 0, c, b);
  };
  d.fb = function() {
    return b.testImageUri;
  };
  v = null;
  d.Ka = function(a, c, d) {
    var k;
    if (w.readyState !== Z.CLOSED) {
      return D = null, a = f ? me[f] : "Closed", ea(Z.CLOSED), b.reconnect && 7 !== f && 0 !== f && (k = 6 === f ? 0 : m, clearTimeout(v), v = setTimeout(h, k)), e("onclose", 0, a, c, d), f = null;
    }
  };
  d.cb = function(a, b) {
    return e("onmessage", 0, {type:"message", data:b});
  };
  h = function() {
    if (D) {
      throw Error("Reconnect() called from invalid state");
    }
    ea(Z.CONNECTING);
    e("onconnecting");
    clearTimeout(v);
    w.Gb = D = new Ud(b.appVersion, null != k ? k.Ya : void 0);
    b.crossDomainXhr && (D.Ca = !0);
    D.u = d;
    b.extraHeaders && (D.fa = b.extraHeaders);
    f = null;
    if (b.failFast) {
      var h = D;
      h.ra = !0;
      M(h.a, "setFailFast: true");
      (h.s || h.D) && h.U > (h.ra ? 0 : 2) && (M(h.a, "Retry count " + h.U + " > new maxRetries " + (h.ra ? 0 : 2) + ". Fail immediately!"), h.s ? (Hd(h.s), h.ka(h.s)) : (l.clearTimeout(h.D), h.D = null, Y(h, 2)));
    }
    return D.connect("" + a + "/test", "" + a + "/bind", c, null != k ? k.Za() : void 0, null != k ? k.ia : void 0);
  };
  this.open = function(a) {
    if (w.readyState !== w.CLOSED) {
      throw Error("Already open");
    }
    a && (b = a);
    return h();
  };
  this.close = function() {
    clearTimeout(v);
    f = 0;
    k = null;
    if (w.readyState !== Z.CLOSED) {
      return ea(Z.CLOSING), D.disconnect();
    }
  };
  this.sendMap = I = function(a) {
    var b;
    if ((b = w.readyState) !== Z.CLOSING && b !== Z.CLOSED) {
      b = D;
      if (0 == b.b) {
        throw Error("Invalid operation: sending map when state is closed");
      }
      if (1E3 == b.c.length) {
        var c = "Already have 1000 queued maps upon queueing " + ob(a);
        K(b.a.a, c);
      }
      b.c.push(new Wd(b.xb++, a));
      2 != b.b && 3 != b.b || ee(b);
    }
  };
  this.send = function(a) {
    return "string" === typeof a ? I({_S:a}) : I({JSON:ob(a)});
  };
  h();
};
Z.prototype.canSendWhileConnecting = Z.canSendWhileConnecting = !0;
Z.prototype.canSendJSON = Z.canSendJSON = !0;
Z.prototype.CONNECTING = Z.CONNECTING = Z.CONNECTING = 0;
Z.prototype.OPEN = Z.OPEN = Z.OPEN = 1;
Z.prototype.CLOSING = Z.CLOSING = Z.CLOSING = 2;
Z.prototype.CLOSED = Z.CLOSED = Z.CLOSED = 3;
("undefined" !== typeof exports && null !== exports ? exports : window).BCSocket = Z;
var Image, XMLHttpRequest, ne, oe, window;
ne = require("request");
Image = function() {
  this.__defineSetter__("src", function(a) {
    return function(b) {
      b = b.toString();
      b.match(/^\/\//) && (b = "http:" + b);
      return ne(b, function(b) {
        return null != b ? "function" === typeof a.onerror ? a.onerror() : void 0 : "function" === typeof a.onload ? a.onload() : void 0;
      });
    };
  }(this));
  return this;
};
XMLHttpRequest = require("../XMLHttpRequest").XMLHttpRequest;
Ud.prototype.qa = function() {
  var a;
  a = new Tc;
  a.Xa = function() {
    return new XMLHttpRequest;
  };
  return a;
};
l = window = {setTimeout:setTimeout, clearTimeout:clearTimeout, setInterval:setInterval, clearInterval:clearInterval, console:console, location:null, navigator:{userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1"}};
oe = require("url");
exports.setDefaultLocation = function(a) {
  "string" === typeof a && (a = oe.parse(a));
  return window.location = a;
};

})();
