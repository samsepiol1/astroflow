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

  