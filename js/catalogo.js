const produtos = [
  {
    id: 1,
    nome: "Bolo de morango",
    categoria: "Alimentos e bebidas",
    preco: 35,
    imagem: "../assets/img/bolo-morango.jpg",
  },
  {
    id: 2,
    nome: "Camiseta personalizada",
    categoria: "Moda e acessórios",
    preco: 45,
    imagem: "../assets/img/camiseta.jpg",
  },
  {
    id: 3,
    nome: "Kit de skin care",
    categoria: "Beleza e cuidados",
    preco: 60,
    imagem: "../assets/img/skin-care.jpg",
  },
  {
    id: 4,
    nome: "Brincos artesanais",
    categoria: "Artesanato e decoração",
    preco: 25,
    imagem: "../assets/img/brincos.jpg",
  },
  {
    id: 5,
    nome: "Hambúrguer artesanal",
    categoria: "Alimentos e bebidas",
    preco: 28,
    imagem: "../assets/img/hamburguer.jpg",
  },
  {
    id: 6,
    nome: "Manicure e pedicure",
    categoria: "Serviços",
    preco: 50,
    imagem: "../assets/img/manicure.jpg",
  },
  {
    id: 7,
    nome: "Sabonete artesanal",
    categoria: "Beleza e cuidados",
    preco: 18,
    imagem: "../assets/img/sabonete.jpg",
  },
  {
    id: 8,
    nome: "Exame de rotina",
    categoria: "Pets",
    preco: 35,
    imagem: "../assets/img/cachorro.jpg",
  },
  {
    id: 9,
    nome: "Aulas de inglês básico",
    categoria: "Serviços",
    preco: 80,
    imagem: "../assets/img/aula-ingles.jpg",
  },
  {
    id: 10,
    nome: "Maquiagem importada",
    categoria: "Beleza e cuidados",
    preco: 65,
    imagem: "../assets/img/maquiagem-importada.jpg",
  },
  {
    id: 11,
    nome: "Frutas frescas (por kg)",
    categoria: "Alimentos e bebidas",
    preco: 10,
    imagem: "../assets/img/frutas-frescas.jpg",
  },
  {
    id: 12,
    nome: "Revisão preventiva",
    categoria: "Serviços",
    preco: 200,
    imagem: "../assets/img/revisao-preventiva.jpg",
  },
  {
    id: 13,
    nome: "Bolsas personalizadas",
    categoria: "Artesanato e decoração",
    preco: 35,
    imagem: "../assets/img/bolsas-personalizadas.jpg",
  },
  {
    id: 14,
    nome: "Velas aromatizadas",
    categoria: "Artesanato e decoração",
    preco: 23,
    imagem: "../assets/img/velas-aromatizadas.jpg",
  },
  {
    id: 15,
    nome: "Café da manhã",
    categoria: "Alimentos e bebidas",
    preco: 12,
    imagem: "../assets/img/cafe-manha.jpg",
  },
  {
    id: 16,
    nome: "Banho e tosa",
    categoria: "Pets",
    preco: 40,
    imagem: "../assets/img/banho-tosa.jpg",
  },
  {
    id: 17,
    nome: "Ensaio fotográfico",
    categoria: "Serviços",
    preco: 120,
    imagem: "../assets/img/ensaio-fotografico.jpg",
  },
  {
    id: 18,
    nome: "Tênis da moda",
    categoria: "Moda e acessórios",
    preco: 185,
    imagem: "../assets/img/tenis-moda.jpg",
  },
  {
    id: 19,
    nome: "Pizza caseira",
    categoria: "Alimentos e bebidas",
    preco: 60,
    imagem: "../assets/img/pizza-caseira.jpg",
  },
  {
    id: 20,
    nome: "Camisas de verão",
    categoria: "Moda e acessórios",
    preco: 25,
    imagem: "../assets/img/camisas-verao.jpg",
  },
];

const produtosPorPagina = 8;

const grade = document.querySelector("#produtos-grid");
const busca = document.querySelector("#buscar-produtos");
const formularioBusca = document.querySelector("#form-busca");
const filtros = document.querySelectorAll(".filtro");
const paginacao = document.querySelector("#paginacao");
const numerosPaginas = document.querySelector("#paginas-numeros");
const anterior = document.querySelector("#pagina-anterior");
const proxima = document.querySelector("#pagina-proxima");
const mensagemVazia = document.querySelector("#mensagem-vazia");

let categoriaAtual = "Todas";
let termoBusca = "";
let paginaAtual = 1;

const parametrosURL = new URLSearchParams(window.location.search);
const categoriaURL = parametrosURL.get("categoria");

if (categoriaURL) {
  categoriaAtual = categoriaURL;
}

function obterProdutosFiltrados() {
  return produtos.filter((produto) => {
    const correspondeCategoria =
      categoriaAtual === "Todas" || produto.categoria === categoriaAtual;

    const termo = termoBusca.toLocaleLowerCase("pt-BR");

    const correspondeBusca =
      produto.nome.toLocaleLowerCase("pt-BR").includes(termo) ||
      produto.categoria.toLocaleLowerCase("pt-BR").includes(termo);

    return correspondeCategoria && correspondeBusca;
  });
}

function formatarPreco(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function renderizarProdutos() {
  const gradeProdutos = document.getElementById("produtos-grid");
  gradeProdutos.classList.remove("animando");

  void gradeProdutos.offsetWidth;

  gradeProdutos.classList.add("animando");

  const filtrados = obterProdutosFiltrados();
  const totalPaginas = Math.ceil(filtrados.length / produtosPorPagina);

  if (paginaAtual > totalPaginas) {
    paginaAtual = Math.max(1, totalPaginas);
  }

  const inicio = (paginaAtual - 1) * produtosPorPagina;
  const produtosPagina = filtrados.slice(inicio, inicio + produtosPorPagina);

  grade.innerHTML = produtosPagina
    .map(
      (produto) => `
        <article class="produto-card">
            <a
                href="detalhes.html?id=${produto.id}"
                class="produto-imagem"
                aria-label="Ver detalhes de ${produto.nome}"
            >
                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >
            </a>

            <div class="produto-info">
                <h2>${produto.nome}</h2>
                <p class="produto-categoria">${produto.categoria}</p>
                <p class="produto-preco">${formatarPreco(produto.preco)}</p>

                <a
                    href="detalhes.html?id=${produto.id}"
                    class="produto-detalhes"
                >
                    Ver detalhes
                </a>
            </div>
        </article>
    `,
    )
    .join("");

  mensagemVazia.hidden = filtrados.length > 0;
  paginacao.hidden = filtrados.length === 0;

  renderizarPaginacao(totalPaginas);
}

function renderizarPaginacao(totalPaginas) {
  numerosPaginas.innerHTML = "";

  for (let pagina = 1; pagina <= totalPaginas; pagina++) {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "pagina-numero";
    botao.textContent = pagina;
    botao.setAttribute("aria-label", `Página ${pagina}`);

    if (pagina === paginaAtual) {
      botao.classList.add("ativo");
      botao.setAttribute("aria-current", "page");
    }

    botao.addEventListener("click", () => {
      paginaAtual = pagina;
      renderizarProdutos();
    });

    numerosPaginas.appendChild(botao);
  }

  anterior.disabled = paginaAtual <= 1;
  proxima.disabled = paginaAtual >= totalPaginas;
}

formularioBusca.addEventListener("submit", (evento) => {
  evento.preventDefault();
  termoBusca = busca.value.trim();
  paginaAtual = 1;
  renderizarProdutos();
});

busca.addEventListener("input", () => {
  termoBusca = busca.value.trim();
  paginaAtual = 1;
  renderizarProdutos();
});

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    categoriaAtual = filtro.dataset.categoria;
    paginaAtual = 1;

    filtros.forEach((item) => {
      item.classList.remove("ativo");
    });

    filtro.classList.add("ativo");
    renderizarProdutos();
  });
});

anterior.addEventListener("click", () => {
  if (paginaAtual > 1) {
    paginaAtual--;
    renderizarProdutos();
  }
});

proxima.addEventListener("click", () => {
  const totalPaginas = Math.ceil(
    obterProdutosFiltrados().length / produtosPorPagina,
  );

  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    renderizarProdutos();
  }
});

filtros.forEach((filtro) => {
  filtro.classList.toggle("ativo", filtro.dataset.categoria === categoriaAtual);
});

renderizarProdutos();
