const temasTags = {
    gold:   { bg: "#FFF5D6", text: "#B8860B" },
    blue:   { bg: "#E3F2FD", text: "#1976D2" },
    purple: { bg: "#F3E5F5", text: "#7B1FA2" },
    green:  { bg: "#E8F5E9", text: "#2E7D32" },
    red:    { bg: "#FFEBEE", text: "#C62828" }
};
const cardsData = [
    { 
        tag: "Comportamento", 
        tema: "gold", 
        title: "A Dança das Abelhas", 
        text: "Elas realizam uma dança em forma de '8' para comunicar às companheiras a distância e direção das flores.", 
        fileName: "bee-dance.jpg" 
    },
    { 
        tag: "Engenharia", 
        tema: "blue", 
        title: "Arquitetas Perfeitas", 
        text: "Os favos são hexágonos perfeitos, o formato mais eficiente para armazenar mel com o mínimo de cera.", 
        fileName: "honeycomb.jpg" 
    },
    { 
        tag: "Sociedade", 
        tema: "purple", 
        title: "A Rainha Suprema", 
        text: "Uma colmeia possui apenas uma rainha. Ela pode viver até 5 anos e põe cerca de 2.000 ovos por dia.", 
        fileName: "queen-bee.jpg" 
    }
];
const grid = document.getElementById('cards-grid');
cardsData.forEach(card => {
    const cores = temasTags[card.tema] || temasTags.gold;
    grid.innerHTML += `
        <div class="card">
            <div class="card-img-wrapper">
                <img src="assets/${card.fileName}" alt="${card.title}">
            </div>
            <div class="card-content">
                <div class="tag" style="background: ${cores.bg}; color: ${cores.text};">${card.tag}</div>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
        </div>
    `;
});
const beeCursor = document.getElementById('bee-cursor');
const cursorToggle = document.getElementById('cursor-toggle');
let beeActive = false;
document.addEventListener('mousemove', (e) => {
    if (beeActive) {
        beeCursor.style.left = (e.clientX - 15) + 'px';
        beeCursor.style.top = (e.clientY - 15) + 'px';
        createPollen(e.clientX, e.clientY);
    }
});
function createPollen(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('pollen-particle');
    particle.style.left = (x + (Math.random() * 10 - 5)) + 'px';
    particle.style.top = (y + (Math.random() * 10 - 5)) + 'px';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}
cursorToggle.addEventListener('change', () => {
    beeActive = cursorToggle.checked;
    if (beeActive) {
        beeCursor.style.display = 'block';
        document.body.style.cursor = 'none';
    } else {
        beeCursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }
});
const parallaxBg = document.getElementById('parallax-bg');
window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${offset * 0.4}px)`;
});
const fatos = [
    "As abelhas batem as asas cerca de 200 vezes por segundo.",
    "O mel é o único alimento que nunca estraga.",
    "Abelhas podem reconhecer rostos humanos.",
    "Uma abelha produz 1/12 de colher de chá de mel na vida."
];
let i = 0;
const textElement = document.getElementById('curiosity-text');
setInterval(() => {
    textElement.classList.add('fade-out');
    setTimeout(() => {
        i = (i + 1) % fatos.length;
        textElement.innerText = fatos[i];
        textElement.classList.remove('fade-out');
    }, 600);
}, 4000);