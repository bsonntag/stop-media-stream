# stop-media-stream

Stops and removes all tracks in a MediaStream.

This will release the camera, if the MediaStream was obtained with
[getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

```
npm install stop-media-stream
```

## Usage

```js
var stopMediaStream = require('stop-media-stream')

// get a media stream somehow

stopMediaStream(mediaStream)
```

## License

MIT
