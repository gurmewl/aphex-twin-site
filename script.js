// Частицы на фоне
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({length: 80}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.5,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(111, 255, 233, 0.2)';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Визуализатор аудио
function createVisualizer(audioElementId, canvasContainerId) {
  const audio = document.getElementById(audioElementId);
  const container = document.getElementById(canvasContainerId);
  const canvasViz = document.createElement('canvas');
  container.appendChild(canvasViz);
  const ctxViz = canvasViz.getContext('2d');
  canvasViz.width = container.clientWidth;
  canvasViz.height = container.clientHeight;

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioCtx.createAnalyser();
  const source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    ctxViz.clearRect(0, 0, canvasViz.width, canvasViz.height);
    analyser.getByteFrequencyData(dataArray);

    const barWidth = (canvasViz.width / bufferLength) * 2.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i] / 2;
      ctxViz.fillStyle = 'rgba(111, 255, 233, 0.7)';
      ctxViz.fillRect(x, canvasViz.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
    requestAnimationFrame(draw);
  }

  audio.addEventListener('play', () => {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    draw();
  });

  window.addEventListener('resize', () => {
    canvasViz.width = container.clientWidth;
    canvasViz.height = container.clientHeight;
  });
}

// Инициализация визуализаторов
createVisualizer('audio-xtal', 'visualizer-xtal');
createVisualizer('audio-alberto', 'visualizer-alberto');
