export default function createHeader() {
  const header = document.getElementById("cabecalho");
  header.innerHTML = `<div class="container-cabecalho">
        <div class="logo"><img src="/assets/icons/logo.svg" alt="logo" /></div>
        <nav class="navegacao">
          <ul>
            <li><a href="../index.html">Início</a></li>
            <li><a href="/pages/catalogo.html">Catálogo</a></li>
            <li><a href="/pages/cadastro.html">Cadastro</a></li>
            <li>
              <button
                type="button"
                class="btn-icone"
                aria-label="Carrinho de compras"
              >
                <img
                  src="/assets/icons/carrinho.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </li>
            <li>
              <button type="button" class="btn-icone" aria-label="Pesquisar">
                <img src="/assets/icons/lupa.svg" alt="" aria-hidden="true" />
              </button>
            </li>
          </ul>
        </nav>
      </div>`;
}
