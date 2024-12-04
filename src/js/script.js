document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true";

      // Fechar todas as outras perguntas
      faqQuestions.forEach((q) => {
        if (q !== question) {
          q.setAttribute("aria-expanded", "false");
        }
      });

      // Alternar o estado da pergunta clicada
      question.setAttribute("aria-expanded", !isExpanded);
    });
  });
});
