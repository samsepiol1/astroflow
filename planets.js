// Array com informações sobre os planetas
const planetas = [
    { nome: 'Mercúrio', url: 'https://solarsystem.nasa.gov/gltf_embed/2369&#39' },
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

      const btnQrCode = document.createElement('a');
      btnQrCode.className = 'btn btn-primary';
      btnQrCode.href = './baby.html'; // 
      btnQrCode.target = '_blank';

      const i = document.createElement('i');
      i.className = 'fa-solid fa-qrcode';
      i.style.position = 'center'

      btnQrCode.appendChild(i);
      p.appendChild(document.createElement('br'));
      p.appendChild(btnQrCode);

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