console.log('mostra o document', document);

console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');

const modal = document.querySelector('.modal');

function alternarModal() {
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', linkDoVideo);
})

const botaoFecharModal = document.querySelector('.fechar-modal');

botaoFecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', '');
});

const video = document.getElementById('video');

const linkDoVideo = video.src;




