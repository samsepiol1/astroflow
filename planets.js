// Array com informações sobre os planetas
const planetas = [
    { nome: 'Mercúrio', url: 'https://solarsystem.nasa.gov/gltf_embed/2369&#39', qrCodeUrl: 'https://qe25e.zappar.io/8386314047137618792/v3/'},
    { nome: 'Vênus', url: 'https://solarsystem.nasa.gov/gltf_embed/2343&#39' },
    { nome: 'Terra', url: 'https://solarsystem.nasa.gov/gltf_embed/2393&#39' },
    { nome: 'Marte', url: 'https://solarsystem.nasa.gov/gltf_embed/2372&#39' },
    { nome: 'Júpiter', url: 'https://solarsystem.nasa.gov/gltf_embed/2375&#39' },
    { nome: 'Saturno', url: 'https://solarsystem.nasa.gov/gltf_embed/2355&#39'},
    { nome: 'Urano', url: 'https://solarsystem.nasa.gov/gltf_embed/2344&#39' },
    { nome: 'Netuno', url: 'https://solarsystem.nasa.gov/gltf_embed/2364&#39' }


    // Adicione informações para os outros planetas aqui
  ];

  // Função para criar os elementos HTML para cada planeta
  function criarPlanetas() {
    const planetasContainer = document.getElementById('planetas-container');

    planetas.forEach(planeta => {
      const divPlaneta = document.createElement('div');
      divPlaneta.className = 'planeta';

      const divIframeContainer = document.createElement('div');
      divIframeContainer.className = 'iframe-container';

      const iframe = document.createElement('iframe');
      iframe.src = planeta.url;
      iframe.width = '100%';
      iframe.height = '450px';
      iframe.frameBorder = '0';
      iframe.loading = 'lazy';

      divIframeContainer.appendChild(iframe);

      const p = document.createElement('p');
      p.style.color = 'white';
      p.textContent = planeta.nome;
      p.style.position = 'center';

      // Criar uma imagem do código QR
      const qrCodeImage = document.createElement('img');
      qrCodeImage.alt = 'Código QR';
      qrCodeImage.style.width = '100px'; // Tamanho personalizado
      qrCodeImage.style.height = '100px'; // Tamanho personalizado

      // Usar a biblioteca "qrious" para gerar o QR code
      const qr = new QRious({
          value: planeta.qrCodeUrl,
          size: 100 // Tamanho personalizado
      });

      qrCodeImage.src = qr.toDataURL();

      p.appendChild(document.createElement('br'));
      p.appendChild(qrCodeImage);




      divPlaneta.appendChild(divIframeContainer);
      divPlaneta.appendChild(document.createElement('center'));
      divPlaneta.appendChild(p);

      planetasContainer.appendChild(divPlaneta);
    });
  }

  // Função para carregar os iframes preguiçosamente quando ficarem visíveis na tela
  function lazyLoadIframes() {
      const iframes = document.querySelectorAll('iframe[data-src]');
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const iframe = entry.target;
                  iframe.src = iframe.getAttribute('data-src');
                  iframe.removeAttribute('data-src');
                  observer.unobserve(iframe);
              }
          });
      });

      iframes.forEach(iframe => {
          observer.observe(iframe);
      });
  }

  criarPlanetas(); // Chamar a função para criar os planetas
  lazyLoadIframes(); // Chame a função para carregar os iframes preguiçosamente