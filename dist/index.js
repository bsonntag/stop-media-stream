'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.stopMediaStream = void 0;

/** Stops and removes all tracks from a given media stream. */
var stopAndRemoveTrack = function stopAndRemoveTrack(mediaStream) {
  return function(track) {
    track.stop();
    mediaStream.removeTrack(track);
  };
};
/** Stops a media stream while making sure all tracks are removed. */

var stopMediaStream = function stopMediaStream(mediaStream) {
  if (!mediaStream) {
    return;
  }

  mediaStream.getTracks().forEach(stopAndRemoveTrack(mediaStream));
};

exports.stopMediaStream = stopMediaStream;
var _default = stopMediaStream;
exports['default'] = _default;
