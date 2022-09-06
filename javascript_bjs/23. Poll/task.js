const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
xhr.responseType = 'json';
xhr.send(); 

// console.log(xhr);

xhr.addEventListener('load', getPoll);

function getPoll() {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        pollTitle.innerText = xhr.response.data.title;

        let answers = xhr.response.data.answers;

        answers.forEach((answer) => {
            pollAnswers.insertAdjacentHTML('afterBegin', `<button class="poll__answer">${answer}</button>`);
        });

        let buttons = Array.from(document.getElementsByClassName('poll__answer'));

        buttons.forEach((button) => {
            button.addEventListener('click', refreshPage);
        });
        
    }
}

function refreshPage(){
    alert('Спасибо, ваш голос засчитан!');
    window.location.reload();
}