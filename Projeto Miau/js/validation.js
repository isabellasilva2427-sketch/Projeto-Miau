export function iniciarValidacao() {

    document.addEventListener("submit", function(event) {

        const formulario = event.target;

        if (!formulario.checkValidity()) {

            event.preventDefault();

            formulario.reportValidity();
        }

    });
}