function stopAndRemoveTrack(mediaStream) {
  return function(track) {
    track.stop();
    mediaStream.removeTrack(track);
  };
}

function stopMediaStream(mediaStream) {
  if (!mediaStream) {
    return;
  }

  mediaStream.getTracks()
    .forEach(stopAndRemoveTrack(mediaStream));
}

module.exports = stopMediaStream;
