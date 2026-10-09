export function iniciarStorage() {

    document.addEventListener("submit", function(event) {

        const formulario = event.target;

        if (!formulario.checkValidity()) {
            return;
        }

        const dados = new FormData(formulario);

        const voluntario = {
            nome: dados.get("nome"),
            email: dados.get("email"),
            nascimento: dados.get("nascimento"),
            cpf: dados.get("cpf"),
            telefone: dados.get("telefone"),
            cep: dados.get("cep"),
            endereco: dados.get("endereco"),
            cidade: dados.get("cidade"),
            estado: dados.get("estado")
        };

        localStorage.setItem(
            "voluntario",
            JSON.stringify(voluntario)
        );

    });

}