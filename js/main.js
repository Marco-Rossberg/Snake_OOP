import Snake from "./Snake.js";
import Apple from "./Apple.js";
import Player from "./Player.js";

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const SQ = 10;
const player = new Player();
const snake = new Snake();
const apple = new Apple(SQ);

let gameHasStarted = false;
let dir = 'Down';

function main()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameHasStarted) 
    {
        apple.draw(ctx, SQ);
        snake.draw(ctx, SQ);
        snake.move(dir, SQ);
    } 
    else
    {
        let text = 'Press Enter to Start the Game';
        ctx.fillStyle = 'black';
        ctx.font = '20px Verdana';
        ctx.fillText(text, 50, canvas.height/2);
    }

    if (snake.eatApple(apple)) 
    {
        apple.update(SQ);
        player.update(snake);
        snake.update(dir, SQ);
    }

    if (snake.collide(canvas))
    {
        alert("Game Over");
        location.reload();
    }

    document.addEventListener('keydown', (event) =>
    {
        if (event.keyCode === 37 && dir !== 'Right') 
        {
            dir = 'Left';
        } 
        else if (event.keyCode === 38 && dir !== 'Down') 
        {
            dir = 'Up';
        } 
        else if (event.keyCode == 39 && dir !== 'Left') 
        {
            dir = 'Right';
        } 
        else if (event.keyCode === 40 && dir !== 'Up') 
        {
            dir = 'Down';
        } 
        else if (event.keyCode === 13) 
        {
            gameHasStarted = true;
        }
    });
    
    document.getElementById('score').innerText = player.score;
}

setInterval(main, 1000/5);