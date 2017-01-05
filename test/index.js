const chai = require('chai')
const stopMediaStream = require('../index')

const expect = chai.expect

describe('stopMediaStream(mediaStream)', () => {
  let mediaStream

  beforeEach(() => {
    let canvas = document.createElement('canvas')
    mediaStream = canvas.captureStream()

    expect(mediaStream.active).to.be.true
    expect(mediaStream.getTracks()).to.not.have.length(0)
  })

  it('deactivates the mediaStream', () => {
    stopMediaStream(mediaStream)
    expect(mediaStream.active).to.be.false
  })

  it('removes all tracks from the media stream', () => {
    stopMediaStream(mediaStream)
    expect(mediaStream.getTracks()).to.have.length(0)
  })
})
