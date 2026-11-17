export default function createHeader() {
  const header = document.getElementById("cabecalho");
  header.innerHTML = `<div class="container-cabecalho">
        <div class="logo">
          <a href="./index.html">
            <img src="./assets/icons/logo.svg" alt="logo" />
          </a>
        </div>
        <nav class="navegacao">
          <ul>
            <li><a href="../index.html">Início</a></li>
            <li><a href="./pages/catalogo.html">Catálogo</a></li>
            <li><a href="./pages/cadastro.html">Cadastro</a></li>
            <li><a href="./pages/parceiros.html">Parceiros</a></li>
            <li>
              <button
                type="button"
                class="btn-icone"
                aria-label="Carrinho de compras"
              >
                <img
                  src="./assets/icons/carrinho.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </li>
            <li>
              <button type="button" class="btn-icone" aria-label="Pesquisar">
                <img src="./assets/icons/lupa.svg" alt="" aria-hidden="true" />
              </button>
            </li>
          </ul>
        </nav>
      </div>`;
}
