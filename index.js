async function initialiseCamera(video, front = false) {
  video.srcObject = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: front ? 'user' : 'environment',
      width: { ideal: 7680 },
      height: { ideal: 4320 },
    },
  })

  video.onloadedmetadata = () => {
    video.width = video.videoWidth
    video.height = video.videoHeight
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const video = document.getElementById('webcam')
  await initialiseCamera(video)
  let front = false

  video.onclick = async () => {
    front = !front
    await initialiseCamera(video, front)
  }
})
