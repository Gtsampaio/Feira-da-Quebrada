const formulario = document.querySelector("#formulario-apoio");

const apoioCartao = document.querySelector("#apoio-cartao");
const apoioPix = document.querySelector("#apoio-pix");

const botaoPix = document.querySelector("#botao-pix");
const botaoCartao = document.querySelector("#botao-cartao");

const camposCartao = apoioCartao.querySelectorAll("input, select");
const valorDoacao = document.querySelector("#valor-doacao");

const botaoCopiarPix = document.querySelector("#copiar-pix");
const mensagemPix = document.querySelector("#mensagem-pix");

const botaoCopiarBoleto = document.querySelector("#copiar-boleto");
const mensagemBoleto = document.querySelector("#mensagem-boleto");


function definirObrigatoriedade(campos, obrigatorio) {
    campos.forEach((campo) => {
        campo = obrigatorio;
    });
}

botaoCartao.addEventListener("click", mostrarCartao);

function mostrarCartao() {
    apoioPix.classList.add("oculto");
    apoioCartao.classList.remove("oculto");
    
    definirObrigatoriedade(camposCartao, true);
    valorDoacao = false;
}

botaoPix.addEventListener("click", mostrarPix);

function mostrarPix() {
    apoioCartao.classList.add("oculto");
    apoioPix.classList.remove("oculto");
}

aplicarMascaraMoeda(document.querySelector("#valor"));
aplicarMascaraMoeda(document.querySelector("#valor-doacao"));

function aplicarMascaraMoeda(campo) {
    campo.addEventListener("input", () => {
        let valor = campo.value.replace(/\D/g, "");

        valor = (Number(valor) / 100).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        campo.value = "R$ " + valor;
    });
}

botaoCopiarPix.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(
            "https://github.com/Gtsampaio/Feira-da-Quebrada"
        );

        mensagemPix.textContent = "Código copiado!";
    } catch (erro) {
        mensagemPix.textContent = "Não foi possível copiar o código.";
    }
});

botaoCopiarBoleto.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("https://github.com/Gtsampaio/Feira-da-Quebrada");

        mensagemBoleto.textContent = "Código copiado!";
    } catch (erro) {
        mensagemBoleto.textContent = "Não foi possível copiar o código.";
    }
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    alert("Esta é uma demonstração acadêmica. O pagamento não está habilitado.");
});
