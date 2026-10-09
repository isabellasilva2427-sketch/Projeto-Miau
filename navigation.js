export function iniciarNavegacao(paginas) {

    const conteudo = document.getElementById("conteudo");

    function navegar(pagina) {
        conteudo.innerHTML = paginas[pagina];
    }

    document.querySelectorAll(".menu > li > a").forEach(link => {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const pagina = this.dataset.pagina;

            navegar(pagina);
        });

    });
}