document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let nome = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefone = document.getElementById("phone").value.replace(/\D/g, "");
        let assunto = document.getElementById("subject").value.trim();
        let mensagem = document.getElementById("message").value.trim();

        if (telefone.length < 10 || telefone.length > 11) {
            alert("Digite um número válido com DDD!");
            return;
        }

        let numeroDono = "5521964137367";

        let texto = `Novo contato - Oficina Nascimento

👤 Nome: ${nome}
📧 Email: ${email}
📱 Telefone: ${telefone}
📌 Assunto: ${assunto}

💬 Mensagem:
${mensagem}`;

        let url = `https://wa.me/${numeroDono}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
    });

});