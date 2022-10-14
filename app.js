const numbers = [];

function generateNumber() {
    const number = Math.floor(Math.random() * 75) + 1;


    if (numbers.includes(number)) {
        return generateNumber();
    }
    else {
        numbers.push(number);
        return number;
    }
}


function init() {
    for (let i = 0; i < 25; i++) {
        const button = document.createElement('button');

        if (i == 12) {
            button.innerText = "HIT";
            button.classList.add('locked');
        } else {
            button.innerText = generateNumber();

            button.addEventListener('click', function () {
                if (button.classList == 'locked') {
                    button.classList.remove('locked');
                } else {
                    button.classList.add('locked');
                }
            });
        }

        document.querySelector("#bottom").appendChild(button);
    }
}

init();