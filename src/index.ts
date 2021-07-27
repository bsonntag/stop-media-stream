/** Stops and removes all tracks from a given media stream. */
const stopAndRemoveTrack = (mediaStream: MediaStream) => {
  return function(track: MediaStreamTrack) {
    track.stop();
    mediaStream.removeTrack(track);
  };
};

/** Stops a media stream while making sure all tracks are removed. */
export const stopMediaStream = (mediaStream: MediaStream | undefined): void => {
  if (!mediaStream) {
    return;
  }

  mediaStream.getTracks().forEach(stopAndRemoveTrack(mediaStream));
};

export default stopMediaStream;
