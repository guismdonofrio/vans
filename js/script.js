document.getElementById("formulario").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formsubmit.co/guilhermina1610@gmail.com", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    const msgDiv = document.getElementById("mensagem-envio");
    if (response.ok) {
        form.reset();
        msgDiv.innerHTML = `<div class="alert alert-success">Mensagem enviada com sucesso!</div>`;
    } else {
        msgDiv.innerHTML = `<div class="alert alert-danger">Erro ao enviar. Tente novamente.</div>`;
    }
});
