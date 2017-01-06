# stop-media-stream

Stops and removes all tracks in a MediaStream.

This will release the camera, if the MediaStream was obtained with
[getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

Install with:

```
npm install stop-media-stream --save
```

Or:

```
yarn add stop-media-stream
```

## Usage

```js
var stopMediaStream = require('stop-media-stream')

// get a media stream somehow
navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    // Use your media stream and when you're done with it:
    stopMediaStream(mediaStream)
  })
```

## License

MIT
