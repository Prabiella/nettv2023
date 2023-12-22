$(document).ready(function() {
    var $videoSrc;

    $(".video-btn").click(function() {
      // Obtén el data-src específico del botón clicado
      $videoSrc = $(this).attr("data-src");
      console.log("Botón clicado: " + $videoSrc);
    });

    $("#video1").on("shown.bs.modal", function(e) {
      console.log("Modal abierto: " + $videoSrc);

      // Configura la fuente del video para reproducir automáticamente sin mostrar videos relacionados
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
      );
    });

    $("#video1").on("hide.bs.modal", function(e) {
      // Detén la reproducción del video cuando se cierra el modal
      $("#video").attr("src", "");
    });
  });

  (function() {
    const headings = document.querySelectorAll('h2')
    
    Array.prototype.forEach.call(headings, heading => {
      let btn = heading.querySelector('button')
      let target = heading.nextElementSibling


      if (btn) {
      btn.onclick = () => {
        let expanded = btn.getAttribute('aria-expanded') === 'true' || false
        
        btn.setAttribute('aria-expanded', !expanded)
        target.hidden = expanded    
      }
    }
    })
  })()