// assets/scripts/audioVisualizer.js
let audioContext, analyser, dataArray, audioElement, renderId;
export function playAndVisualize(url) {
  if (audioElement) {
    audioElement.pause();
    audioElement.remove();
    cancelAnimationFrame(renderId);
  }
  audioElement = new Audio();
  audioElement.src = url;
  audioElement.crossOrigin = "anonymous";
  audioElement.load();
  audioElement.play();

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const sourceNode = audioContext.createMediaElementSource(audioElement);
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  sourceNode.connect(analyser);
  analyser.connect(audioContext.destination);

  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  const canvas = document.getElementById('visualizer-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = 300;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
  });

  function renderFrame() {
    renderId = requestAnimationFrame(renderFrame);
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i];
      ctx.fillStyle = `rgb(${barHeight+100},50,${255-barHeight})`;
      ctx.fillRect(x, canvas.height - barHeight/2, barWidth, barHeight/2);
      x += barWidth + 1;
    }
  }
  renderFrame();
}