function gerarSenha(tamanho=12) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }
    document.getElementById('senha').innerText = senha;
}
