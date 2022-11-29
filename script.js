// Selecting elements
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
// Functions
    function Default(){
        var date = new Date();
        var hour = date.getHours();
        if (hour >= 0 && hour < 12) {
            document.body.style.background = '#e2cd9f';
            msg.innerText = `Agora são ${hour} horas. Bom dia!`;
            img.src = 'img/fotomanha.jpg';
        } else if (hour >= 12 && hour < 18) {
            document.body.style.background = '#b9846f';
            msg.innerText = `Agora são ${hour} horas. Boa tarde!`;
            img.src = 'img/fototarde.jpg';
        } else {
            document.body.style.background = '#515154';
            msg.innerText = `Agora são ${hour} horas. Boa noite!`;
            img.src = 'img/fotonoite.jpg';
        };
    };
    function secret(){
        document.body.style.background = 'red';
        img.src = 'img/army.jpg';
        msg.innerHTML = 'Я поддерживаю Россию';
        document.title = 'Я поддерживаю Россию';
        document.getElementsByTagName('header')[0].childNodes[1].innerHTML = '<strong>Я поддерживаю Россию</strong>';
        msg.style.color = 'red';
        document.getElementsByTagName('footer')[0].childNodes[1].innerHTML = '<strong>Я поддерживаю Россию</strong>';
        alert('Im justing kidding ok?');
    };
// Code
Default();