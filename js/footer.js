export default function createFooter() {
  const footer = document.getElementById("rodape");
  footer.innerHTML = `<div class="rodape">
        <div class="logo-rodape">
          <img src="/assets/icons/logo.svg" alt="Logo Feira da Quebrada" />
        </div>
        <div class="dados">
          <p class="ajuda">Precisa de ajuda? Contate-nos</p>
          <div class="contato">
            <p>Tel: <a href="tel:11999999999">11 9999-9999</a></p>
            <p>
              Email:
              <a href="mailto:feiradaquebradaturma11@gmail.com"
                >feiradaquebradaturma11@gmail.com</a
              >
            </p>
          </div>
        </div>
        <div class="redes-sociais-e-direitos">
          <nav class="icons" aria-label="Redes sociais">
            <a
              href="https://instagram.com"
              class="btn-icon-rodape"
              aria-label="Ir para o Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/instagram.svg" alt="" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              class="btn-icon-rodape"
              aria-label="Ir para o Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/twitter.svg" alt="" aria-hidden="true" />
            </a>
            <a
              href="https://tiktok.com"
              class="btn-icon-rodape"
              aria-label="Ir para o TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/tiktok.svg" alt="" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me"
              class="btn-icon-rodape"
              aria-label="Conversar no WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/whatsapp.svg" alt="" aria-hidden="true" />
            </a>
          </nav>
          <div class="direitos-autorais">
            <p>&copy; 2026 Feira da Quebrada. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
`;
}
