# stop-media-stream

[![npm](https://img.shields.io/npm/v/stop-media-stream.svg)](https://www.npmjs.com/package/stop-media-stream)
[![build status](https://img.shields.io/circleci/project/github/bsonntag/stop-media-stream/master.svg)](https://circleci.com/gh/bsonntag/stop-media-stream)
[![downloads](https://img.shields.io/npm/dt/stop-media-stream.svg)](https://www.npmjs.com/package/stop-media-stream)

Stops and removes all tracks in a MediaStream.

This will release the camera, if the MediaStream was obtained with
[getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

## Installation

Install with:

```sh
$ npm install stop-media-stream
```

Or:

```sh
$ yarn add stop-media-stream
```

## Usage

```js
import stopMediaStream from 'stop-media-stream';

// get a media stream somehow
navigator.mediaDevices.getUserMedia(constraints)
  .then(mediaStream => {
    // Use your media stream and when you're done with it:
    stopMediaStream(mediaStream);
  });
```

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
