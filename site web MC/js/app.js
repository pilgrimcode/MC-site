const btn = document.querySelectorAll('.header_button');
const actus = document.querySelectorAll('.actualites_section');
const Nserveur = document.querySelectorAll('.nom_serveur');
const ActuTitre = document.querySelectorAll('.actu_titre');
const logo = document.querySelectorAll('.logo_serveur');
const x = logo.clientX
const y = actus.clientY

window.addEventListener('load', () =>  {

    const TL = gsap.timeline({paused: true})

    TL
    .staggerFrom(btn, 1.2, { top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(logo, 0.8, { x: -50, opacity: 0, ease: "power1.out"}, 0.3, '-=1')
    .staggerFrom(Nserveur, 0.8, { opacity: 0, ease: "power1.out"}, 0.3, '-=1')
    .staggerFrom(ActuTitre, 1, { opacity: 0, ease: "power1.out"}, 0.3, '-=1')
    .staggerFrom(actus, 1.2, { y: -70, opacity: 0, ease: "power1.out"}, 0, '-=1')

    TL.play();

})

const buttons = document.querySelectorAll('.header_button');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {

        let x = e.clientX  -  e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
    setTimeout(() => {
        ripples.remove()
    },600);
    })
})

const ActuBTN = document.querySelector('#Actu');

ActuBTN.addEventListener('click', () => {

    window.scrollTo({
        top: ActuBTN.clientHeight,
        left: ActuBTN.clientWidth
    })

})