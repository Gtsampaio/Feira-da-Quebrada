export const btnCompartilhar = document.getElementById("btnCompartilhar");

if (btnCompartilhar) {
  btnCompartilhar.addEventListener("click", async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Feira da Quebrada | Valorize o comércio local",
          text: "Conheça a Feira da Quebrada! Uma vitrine digital para descobrir produtos e serviços de empreendedores da nossa comunidade. Explore, encontre novidades e fortaleça o comércio local!",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Erro ao compartilhar:", err);
      }
    } else {
      alert("Seu navegador não suporta a função de compartilhamento nativa.");
    }
  });
}
