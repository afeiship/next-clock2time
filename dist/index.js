/*!
 * name: @jswork/next-clock2time
 * description: Clock(lrc/srt) to time for next.
 * homepage: https://github.com/afeiship/next-clock2time
 * version: 1.0.0
 * date: 2020-11-25 13:48:16
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var SPLIT_RE = /[.:,]/;

  nx.clock2time = function (inString) {
    var res = inString.split(SPLIT_RE);
    var hour, minute, second, micro;
    var length = res.length;

    if (length === 3) {
      hour = 0;
      minute = parseInt(res[0]);
      second = parseInt(res[1]);
      micro = parseInt(res[2]);
    }

    if (length === 4) {
      hour = parseInt(res[0]);
      minute = parseInt(res[1]);
      second = parseInt(res[2]);
      micro = parseInt(res[3]);
    }

    return length > 2 ? 36 * 1e5 * minute + 6 * 1e4 * minute + 1e3 * second + micro : null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.clock2time;
  }
})();
