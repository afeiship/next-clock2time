(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.clock2time 00:00:03,776 srt standard', function () {
      expect(nx.clock2time('00:00:03,776')).toBe(3776);
    });
    test('nx.clock2time 00:12.120 lrc standard', function () {
      expect(nx.clock2time('00:12.120')).toBe(12120);
    });
  });
})();
