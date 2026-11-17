export default function createHeader() {
  const header = document.getElementById("cabecalho");
  const isSubpage = window.location.pathname.includes("/pages/");
  const root = isSubpage ? ".." : ".";
  header.innerHTML = `<div class="container-cabecalho">
        <div class="logo">
          <a href="${root}/index.html">
            <img src="${root}/assets/icons/logo.svg" alt="logo" />
          </a>
        </div>
        <nav class="navegacao">
          <ul>
            <li><a href="${root}/index.html">Início</a></li>
            <li><a href="${root}/pages/catalogo.html">Catálogo</a></li>
            <li><a href="${root}/pages/cadastro.html">Cadastro</a></li>
            <li><a href="${root}/pages/parceiros.html">Parceiros</a></li>
            <li>
              <button
                type="button"
                class="btn-icone"
                aria-label="Carrinho de compras"
              >
                <img
                  src="${root}/assets/icons/carrinho.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </li>
            <li>
              <button type="button" class="btn-icone" aria-label="Pesquisar">
                <img src="${root}/assets/icons/lupa.svg" alt="" aria-hidden="true" />
              </button>
            </li>
          </ul>
        </nav>
      </div>`;
}
