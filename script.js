const formulario = document.querySelector('.formcontato__form');

formulario.addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
   
    event.preventDefault();

    if (!nome || !email || !assunto || !mensagem) {
        alert('Todos os campos devem ser preenchidos.');
        return;
    } 

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert = ('Por favor, insira um endereço de email válido.');
        return;
    }

    alert('Formulário enviado com sucesso!');
});

formulario.addEventListener('input', function() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const submitBtn = document.querySelector('.formcontato__botao');   

    if (nome.length > 50 || assunto.length > 50 || mensagem.length > 300){
        alert('Você ultrapassou a quantidade de caracteres permitida!'); 
    }
    
    if (nome && email && assunto && mensagem) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'true');
    }
})


