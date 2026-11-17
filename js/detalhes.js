import { produtos } from "./dados.js";

const parametrosURL = new URLSearchParams(window.location.search);
const idProduto = Number(parametrosURL.get("id"));
const produto = produtos.find((item) => item.id === idProduto);
const paginaDetalhes = document.querySelector(".pagina-detalhes");
const nomeProduto = document.getElementById("nome-produto");
const categoriaProduto = document.getElementById("categoria-produto");
const precoProduto = document.getElementById("preco-produto");
const descricaoProduto = document.getElementById("descricao-produto");
const empreendedorProduto = document.getElementById("empreendedor-produto");
const contatoProduto = document.getElementById("contato-produto");
const entregaProduto = document.getElementById("entrega-produto");
const imagemPrincipal = document.getElementById("imagem-principal");
const miniaturas = document.getElementById("miniaturas");
const botaoEditar = document.getElementById("botao-editar");
const botaoExcluir = document.getElementById("botao-excluir");
const lojaEmpreendedor = document.getElementById("empreendedor-produto");

if (!produto) {
  paginaDetalhes.innerHTML = `
        <div class="produto-nao-encontrado">
            <h1>Produto não encontrado</h1>

            <p>
                Não foi possível localizar esse produto.
            </p>

            <a href="catalogo.html">
                Voltar para o catálogo
            </a>
        </div>
    `;
} else {
  nomeProduto.textContent = produto.nome;
  categoriaProduto.textContent = produto.categoria;
  precoProduto.textContent = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  descricaoProduto.textContent = produto.descricao;
  empreendedorProduto.textContent = produto.empreendedor;
  contatoProduto.textContent = produto.contato;
  entregaProduto.textContent = produto.entrega;
  document.title = `${produto.nome} | Feira da Quebrada`;

  const imagens = produto.imagens || [];

  if (imagens.length !== 4) {
    console.error(
      `O produto "${produto.nome}" precisa ter exatamente 4 imagens.`,
    );
  }

  imagemPrincipal.src = imagens[0] || "";
  imagemPrincipal.alt = produto.nome;
  imagens.slice(1, 4).forEach((imagem, indice) => {
    const miniatura = document.createElement("img");
    miniatura.src = imagem;
    miniatura.alt = `${produto.nome} - imagem ${indice + 2}`;
    miniatura.classList.add("miniatura");
    miniatura.addEventListener("click", () => {
      imagemPrincipal.src = imagem;
      imagemPrincipal.alt = miniatura.alt;
      document.querySelectorAll(".miniatura").forEach((item) => {
        item.classList.remove("ativa");
      });
      miniatura.classList.add("ativa");
    });
    miniaturas.appendChild(miniatura);
  });
  lojaEmpreendedor.href = `loja.html?id=${produto.empreendedorId}`
  botaoEditar.href = `cadastro.html?id=${produto.id}`;
  botaoExcluir.addEventListener("click", () => {
    const confirmar = confirm(
      `Tem certeza que deseja excluir "${produto.nome}"?`,
    );

    if (confirmar) {
      alert(
        "A exclusão ainda precisa ser conectada ao armazenamento dos produtos.",
      );
    }
  });
}
