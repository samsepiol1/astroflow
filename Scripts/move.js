  // Lógica de movimentação pelo espaço completo do site
  const modelViewer = document.querySelector('#myModel');
  const modelContainer = document.querySelector('#modelContainer');

  let isDragging = false;
  let offsetX, offsetY;

  modelContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - modelContainer.getBoundingClientRect().left;
      offsetY = e.clientY - modelContainer.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      modelViewer.style.left = x + 'px';
      modelViewer.style.top = y + 'px';
  });

  document.addEventListener('mouseup', () => {
      isDragging = false;
  // Quando o usuário soltar o mouse, defina a nova posição como posição inicial
      offsetX = modelX;
      offsetY = modelY;
  });