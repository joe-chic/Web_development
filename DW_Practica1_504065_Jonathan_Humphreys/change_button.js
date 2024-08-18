
function changeColor(delay) 
{ 
    const button = document.getElementById('multi-button');
    const colors = ["green","white","red"];
    let index = 0;

    setInterval(() => {
        button.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, delay);
};

function changeText(delay)
{
    const text = document.getElementById('tasty-text');
    const phrases = ["Carne jugosa","Tortilla perfecta","Auténticos","Irresistibles","Sabor explosivo"];
    let index = 0;

    setInterval(() => {
        text.textContent = phrases[index];
        index = (index + 1) % phrases.length;
    }, delay);
};

window.onload = function() {
    changeColor(200);
    changeText(2000);
};