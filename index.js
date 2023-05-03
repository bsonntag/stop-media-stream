/** Stops and removes all tracks from a given media stream. */
function stopAndRemoveTrack(mediaStream) {
  return function(track) {
    track.stop();
    mediaStream.removeTrack(track);
  };
}

/** Stops a media stream while making sure all tracks are removed. */
function stopMediaStream(mediaStream) {
  if (!mediaStream) {
    return;
  }

  mediaStream.getTracks().forEach(stopAndRemoveTrack(mediaStream));
}

module.exports = stopMediaStream;
