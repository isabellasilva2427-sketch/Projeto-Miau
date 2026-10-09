export const paginas = {

    inicio: `
        <section class="intro">

            <h2>Bem-vindo ao Projeto Miau!</h2>

            <p>
                O Projeto Miau é uma ONG que resgata gatinhos que precisam
                da sua ajuda para que continuem bem alimentados e aquecidos
                nos dias de frio.
            </p>

            <img src="../imagens/projetomiau.jpg"
                alt="Gatinhos acolhidos pelo Projeto Miau">

        </section>

        <section class="feedback">

            <div class="badges">
                <span class="badge badge-primary">Projeto ativo</span>
                <span class="badge badge-success">Disponível</span>
                <span class="badge badge-warning">Em andamento</span>
            </div>

            <div class="alert alert-success">
                <strong>Sucesso!</strong>
                Sua contribuição foi registrada.
            </div>

            <div class="alert alert-warning">
                <strong>Atenção!</strong>
                Verifique as informações antes de continuar.
            </div>

            <div class="alert alert-error">
                <strong>Erro!</strong>
                Não foi possível concluir a ação.
            </div>

        </section>
    `,

    projetos: `
        <section class="intro">

            <h2>Nossos Projetos</h2>

            <p>
                Conheça as ações desenvolvidas pelo Projeto Miau
                para ajudar os gatos resgatados.
            </p>

        </section>
    `,

    cadastro: `
        <section class="intro">

            <h2>Cadastro de Voluntários</h2>

            <p>
                Preencha o formulário abaixo para demonstrar seu interesse
                em colaborar com o Projeto Miau.
            </p>

        </section>

        <form>

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <br><br>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <br><br>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>

                <br><br>

                <label for="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    pattern="[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}-?[0-9]{2}"
                    placeholder="000.000.000-00"
                    required
                >

                <br><br>

                <label for="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    pattern="\\(?[0-9]{2}\\)?\\s?[0-9]{4,5}-?[0-9]{4}"
                    placeholder="(11) 99999-9999"
                    required
                >

            </fieldset>

            <br>

            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    pattern="[0-9]{5}-?[0-9]{3}"
                    placeholder="00000-000"
                    required
                >

                <br><br>

                <label for="endereco">Endereço:</label>
                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                >

                <br><br>

                <label for="cidade">Cidade:</label>
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                >

                <br><br>

                <label for="estado">Estado:</label>
                <input
                    type="text"
                    id="estado"
                    name="estado"
                    required
                >

            </fieldset>

            <br>

            <button type="submit">Enviar cadastro</button>

        </form>
    `
};