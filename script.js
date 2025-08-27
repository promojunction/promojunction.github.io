// Add interactive animation to cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".promo-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `scale(1.05) rotateX(${
        -(y - rect.height / 2) / 18
      }deg) rotateY(${(x - rect.width / 2) / 18}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});
