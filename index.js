document.addEventListener('DOMContentLoaded', async () => {
  const video = document.getElementById('webcam')

  video.srcObject = await navigator.mediaDevices.getUserMedia({
    facingMode: { ideal: 'user' },
    video: {
      width: { ideal: 7680 },
      height: { ideal: 4320 },
    },
  })

  video.onloadedmetadata = () => {
    video.width = video.videoWidth
    video.height = video.videoHeight
  }
})
