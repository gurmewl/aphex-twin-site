// ... (particle code unchanged)
function createVisualizer(audioElementId, canvasContainerId) {
  const audio = document.getElementById(audioElementId);
  const container = document.getElementById(canvasContainerId);
  const canvasViz = document.createElement('canvas');
  container.appendChild(canvasViz);

  // Responsive resizing with debounce
  function resizeCanvas() {
    canvasViz.width = container.clientWidth;
    canvasViz.height = container.clientHeight;
  }
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 150);
  });
  resizeCanvas();

  // ... (rest of the code)
}