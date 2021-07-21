import stopMediaStream from '../dist/index';

describe('stopMediaStream(mediaStream)', () => {
  let mediaStream;

  beforeEach(() => {
    const canvas = document.createElement('canvas');

    mediaStream = canvas.captureStream();

    expect(mediaStream.active).toBe(true);
    expect(mediaStream.getTracks()).not.toHaveLength(0);
  });

  it('deactivates the mediaStream', () => {
    console.log(stopMediaStream);
    stopMediaStream(mediaStream);
    expect(mediaStream.active).toBe(false);
  });

  it('removes all tracks from the media stream', () => {
    stopMediaStream(mediaStream);
    expect(mediaStream.getTracks()).toHaveLength(0);
  });
});
