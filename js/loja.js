import { empreendedores, produtos } from "./dados.js";

const parametros = new URLSearchParams(window.location.search);
const idEmpreendedor = Number(parametros.get("id"));
const empreendedor = empreendedores.find((item) => item.id === idEmpreendedor);
const fotoEmpreendedor = document.querySelector("#foto-empreendedor");
const nomeLoja = document.querySelector("#nome-loja");
const descricaoLoja = document.querySelector("#descricao-loja");
const mensagemLoja = document.querySelector("#mensagem-loja");
const listaProdutos = document.querySelector("#lista-produtos-loja");
const semProdutos = document.querySelector("#sem-produtos");
const botaoContato = document.querySelector("#botao-contato");
const botaoWhatsapp = document.querySelector("#botao-whatsapp");

if (!empreendedor) {
  document.querySelector(".pagina-loja").innerHTML = `
        <div class="loja-nao-encontrada">
            <h1>Loja não encontrada!</h1>
            <p>Não foi possível localizar este empreendedor.</p>
            <a href="catalogo.html">Voltar ao catálogo</a>
        </div>
    `;
} else {
  function carregarEmpreendedor() {
    document.title = `${empreendedor.nomeLoja} | Feira da Quebrada`;
    fotoEmpreendedor.src = empreendedor.foto;
    fotoEmpreendedor.alt = `Foto de ${empreendedor.nome}`;
    nomeLoja.textContent = empreendedor.nomeLoja;
    descricaoLoja.textContent = empreendedor.descricao;
    mensagemLoja.textContent = empreendedor.mensagem;

    const produtosDoEmpreendedor = produtos.filter(
      (produto) => produto.empreendedorId === empreendedor.id,
    );

    document.querySelector("#total-produtos").innerHTML =
      `<img src="../assets/icons/loja-cadastro.svg" alt="" > Produtos: ${produtosDoEmpreendedor.length}`;
    document.querySelector("#total-pedidos").innerHTML =
      `<img src="../assets/icons/caminhao.svg" alt="" > Pedidos entregues: ${empreendedor.pedidosEntregues}`;
    document.querySelector("#total-seguidores").innerHTML =
      `<img src="../assets/icons/seguidor.svg" alt="" > Seguidores: ${empreendedor.seguidores}`;
    document.querySelector("#total-seguindo").innerHTML =
      `<img src="../assets/icons/coracao-branco.svg" alt="" > Seguindo: ${empreendedor.seguindo}`;
    document.querySelector("#avaliacao-loja").innerHTML =
      `<img src="../assets/icons/estrela.svg" alt="" > Avaliação Geral: ${empreendedor.avaliacao} (${empreendedor.quantidadeAvaliacoes} notas)`;
    document.querySelector("#tempo-loja").innerHTML =
      `<img src="../assets/icons/conosco.svg" alt="" > Conosco desde: ${empreendedor.tempoNaPlataforma}`;
    document.querySelector("#cartao-perfil").style.backgroundImage =
      `url("${empreendedor.banner}")`;
  }

  function carregarProdutos() {
    const produtosDoEmpreendedor = produtos.filter(
      (produto) => produto.empreendedorId === empreendedor.id,
    );
    listaProdutos.innerHTML = "";
    semProdutos.style.display =
      produtosDoEmpreendedor.length === 0 ? "block" : "none";
    produtosDoEmpreendedor.forEach((produto) => {
      const card = document.createElement("article");
      card.classList.add("card-produto-loja");
      card.innerHTML = `
                <img
                    src="${produto.imagens[0]}"
                    alt="${produto.nome}"
                >
                <div class="informacoes-produto">
                    <h3>${produto.nome}</h3>
                    <p>${produto.categoria}</p>
                    <strong>
                        ${produto.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                    </strong>
                    <a href="detalhes.html?id=${produto.id}">
                        Ver detalhes
                    </a>
                </div>
            `;
      listaProdutos.appendChild(card);
    });
  }

  function abrirWhatsApp() {
    const telefone = empreendedor.contato.replace(/\D/g, "");
    const mensagem = encodeURIComponent(
      `Olá! Conheci sua loja ${empreendedor.nomeLoja} pela Feira da Quebrada e gostaria de saber mais sobre seus produtos.`,
    );
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  }

  botaoContato.addEventListener("click", abrirWhatsApp);
  botaoWhatsapp.addEventListener("click", abrirWhatsApp);

  carregarEmpreendedor();
  carregarProdutos();
}
