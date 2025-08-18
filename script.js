document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todas as matérias
    const subjectCards = document.querySelectorAll('.subject-card');
    
  
  
    
    // Navegação inferior
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Aqui você pode adicionar a lógica para trocar de página
            const page = this.querySelector('span:last-child').textContent;
            console.log(`Navegar para: ${page}`);
        });
    });
});

// Verifica se está em uma página de matéria
if (document.querySelector('.questions-section')) {
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // Respostas corretas (índice baseado em 0)
    const correctAnswers = {
        'arithmetic': [0, 0, 0, 0, 0], // Todas as respostas são a primeira opção
        'algebra': [1, 2, 0, 3, 1], // Padrão de exemplo para álgebra
        // Adicione padrões para outras matérias
    };
    
    // Obtém a matéria atual do URL
    const currentSubject = window.location.pathname.split('.')[0];
    
    optionButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const questionCard = this.closest('.question-card');
            const questionIndex = Array.from(questionCard.parentElement.children).indexOf(questionCard);
            
            // Verifica se a resposta está correta (simplificado)
            const isCorrect = index % 4 === correctAnswers[currentSubject][questionIndex];
            
            if (isCorrect) {
                this.style.backgroundColor = '#4CAF50'; // Verde para correto
                setTimeout(() => {
                    questionCard.style.opacity = '0.5';
                    questionCard.style.pointerEvents = 'none';
                }, 500);
            } else {
                this.style.backgroundColor = '#F44336'; // Vermelho para incorreto
            }
            
            // Desabilita todos os botões desta questão
            const allOptions = this.parentElement.querySelectorAll('.option-btn');
            allOptions.forEach(btn => {
                btn.style.pointerEvents = 'none';
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Navegação inferior
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Navegação simples
            const page = this.querySelector('span:last-child').textContent;
            if (page === "Matérias") {
                window.scrollTo({
                    top: document.querySelector('.subjects-section').offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


