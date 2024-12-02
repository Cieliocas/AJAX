document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

        xhttp.open('GET', endpoint);
        xhttp.send();
        // https://viacep.com.br/ws/123123123/json/
    })
});