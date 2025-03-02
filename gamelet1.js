const ball = document.getElementById('ball');
document.addEventListener('keydown', handelKeyPress);
let position = 0;

function handelKeyPress(e){
    if (e.code === 'ArrowUp') {
        position = position -10;
}
if (e.code === 'ArrowDown') {
position = position +10;
}
if (position < 0){
    position = 0;
}
refresh();
}
function refresh() {
    ball.style.top = position + 'px';
}