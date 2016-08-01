function stopMediaStream(mediaStream) {
  if(!mediaStream) return

  mediaStream.getTracks()
    .forEach(stopAndRemoveTrack.bind(null, mediaStream))
}

function stopAndRemoveTrack(mediaStream, track) {
  track.stop();
  mediaStream.removeTrack(track);
}

module.exports = stopMediaStream
