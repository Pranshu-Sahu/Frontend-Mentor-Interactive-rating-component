const numbers = document.querySelectorAll('.number');
numbers.forEach((number, i) => {
    number.addEventListener('click', (e) => {
        number.classList.add('active');
        myFucntion(i + 1);
    });
})
const container = document.querySelector('.container');
const container_2 = document.querySelector('.container_2');
const btn = document.querySelector('.btn');
let msg = document.querySelector('.container_2 #msg');

function myFucntion(n) {
    btn.addEventListener('click', (e) => {
        console.log('click');
        msg.innerHTML = `You selected ${n} out of 5`;
        container.style.display = "none";
        container_2.style.display = "block";
        e.preventDefault();

    })
}