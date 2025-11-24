// Crear corazones flotantes
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Posición aleatoria
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.animationDelay = `${delay}s`;
        
        container.appendChild(heart);
    }
}

// Actualizar contador de tiempo juntos
function updateCounter() {
    // Cambia esta fecha por la fecha real de tu aniversario
    const anniversaryDate = new Date('2018-06-15');
    const now = new Date();
    
    // Calcular diferencia en años, días, horas y minutos
    const diffTime = Math.abs(now - anniversaryDate);
    const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    
    // Actualizar elementos del DOM
    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// Mostrar mensaje de amor
function showLove() {
    alert('¡Yo también te amo! ❤️\nGracias por estos 6 años maravillosos.');
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    createHearts();
    updateCounter();
    // Actualizar contador cada minuto
    setInterval(updateCounter, 60000);
});