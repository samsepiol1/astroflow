// Array com informações sobre os planetas
const planetas = [
    { nome: 'Mercúrio', url: 'https://solarsystem.nasa.gov/gltf_embed/2369&#39', qrCodeUrl: './QrCodes/mercury_qr.png'},
    { nome: 'Vênus', url: 'https://solarsystem.nasa.gov/gltf_embed/2343&#39', qrCodeUrl: './QrCodes/venus_qr.png'},
    { nome: 'Terra', url: 'https://solarsystem.nasa.gov/gltf_embed/2393&#39', qrCodeUrl: './QrCodes/earth.png'},
    { nome: 'Marte', url: 'https://solarsystem.nasa.gov/gltf_embed/2372&#39' , qrCodeUrl: './QrCodes/mars_qr.png' },
    { nome: 'Júpiter', url: 'https://solarsystem.nasa.gov/gltf_embed/2375&#39' , qrCodeUrl: './QrCodes/'},
    { nome: 'Saturno', url: 'https://solarsystem.nasa.gov/gltf_embed/2355&#39' , qrCodeUrl: './QrCodes/saturn_qr.png'},
    { nome: 'Urano', url: 'https://solarsystem.nasa.gov/gltf_embed/2344&#39' , qrCodeUrl: './QrCodes/uran_qr.png'},
    { nome: 'Netuno', url: 'https://solarsystem.nasa.gov/gltf_embed/2364&#39' , qrCodeUrl: './QrCodes/netun_qrcode.png'}


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

      const img = document.createElement('img')
      img.style.position = 'center'
      img.style.height = '100px'
      img.style.width = '100px'
      img.src = planeta.qrCodeUrl
      




      divPlaneta.appendChild(divIframeContainer);
      divPlaneta.appendChild(document.createElement('center'));
      divPlaneta.appendChild(p);
      divPlaneta.appendChild(img)

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