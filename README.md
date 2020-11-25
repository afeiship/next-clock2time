# next-clock2time
> Clock(lrc/srt) to time for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-clock2time
```

## usage
```js
import '@jswork/next-clock2time';

// srt clock:
nx.clock2time('00:00:03,776')   //3776

// lrc clock:
nx.clock2time('00:12.120')      //12120
```

## resources
- https://en.wikipedia.org/wiki/LRC_(file_format)

## license
Code released under [the MIT license](https://github.com/afeiship/next-clock2time/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-clock2time
[version-url]: https://npmjs.org/package/@jswork/next-clock2time

[license-image]: https://img.shields.io/npm/l/@jswork/next-clock2time
[license-url]: https://github.com/afeiship/next-clock2time/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-clock2time
[size-url]: https://github.com/afeiship/next-clock2time/blob/master/dist/next-clock2time.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-clock2time
[download-url]: https://www.npmjs.com/package/@jswork/next-clock2time
