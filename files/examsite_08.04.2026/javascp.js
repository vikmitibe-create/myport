const scrollh = document.getElementById('scrollh');
const zag = document.getElementById('zag');
if(scrollh){
    scrollh.addEventListener('mouseover', () => {
        alert('Вы можете попасть на домашнюю страницу');
    });
}

const emaill = document.getElementById('emaill');
emaill.addEventListener('onclick', function(event) {
    event.preventDefault();
});