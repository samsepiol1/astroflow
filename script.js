  // Contador para verificar quantos iframes foram carregados
  var iframeCount = 0;

  // Função para verificar se todos os iframes foram carregados
  function checkAllIframesLoaded() {
    iframeCount++;

    // Se todos os iframes tiverem carregado, mostrar o conteúdo principal
    if (iframeCount === $("iframe").length) {
      $("#loading-spinner").hide();
      $(".planeta").show();
    }
  }
$(document).ready(function () {
    // Ocultar a página de loading
    $("#loading-spinner").hide();

    // Controlar o carregamento dos iframes
    $("iframe").on("load", function () {
      // Verificar se todos os iframes estão carregados
      var allIframesLoaded = true;
      $("iframe").each(function () {
        if (!this.contentWindow || !this.contentWindow.document) {
          allIframesLoaded = false;
          return false; // Sair do loop
        }
      });

      // Se todos os iframes estiverem carregados, mostrar o conteúdo principal
      if (allIframesLoaded) {
        $(".planeta").show();
      }
    });
  });

  // Verificação WebGL
  function verificaSuporteWebGL() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl && gl instanceof WebGLRenderingContext) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

// Verifique o suporte e exiba uma mensagem ao usuário
if (verificaSuporteWebGL()) {
    console.log('O seu dispositivo suporta WebGL. Você pode visualizar objetos 3D.');
} else {
    console.log('O seu dispositivo não suporta WebGL. Recomendamos um navegador ou dispositivo com suporte a WebGL para visualizar objetos 3D.');
}