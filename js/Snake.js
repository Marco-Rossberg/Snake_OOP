import Vec2 from './Vec2.js';

export default class Snake
{
    constructor()
    {
        this.snake = [];
        this.snake[0] = new Vec2(50, 100);
    }

    collide(canvas)
    {
        if(this.snake[0].x < 0 || this.snake[0].x > canvas.height - 10 || this.snake[0].y < 0 || this.snake[0].y > canvas.width - 10)
        {
            return true;
        }
        for (let i = 1; i < this.snake.length; i++)
        {
            if (this.snake[0].x === this.snake[i].x && this.snake[0].y === this.snake[i].y)
            {
                return true;
            }
        }
        return false;
    }

    update(dir, SQ)
    {
        let snakeX = this.snake[0].x;
        let snakeY = this.snake[0].y;

        if (dir === 'Left') 
        {
            this.snake.unshift({x: snakeX - SQ, y: snakeY});
        } 
        else if (dir === 'Up') 
        {
            this.snake.unshift({x: snakeX, y: snakeY - SQ});
        } 
        else if (dir === 'Right') 
        {
            this.snake.unshift({x: snakeX + SQ, y: snakeY});
        } 
        else if (dir === 'Down') 
        {
            this.snake.unshift({x: snakeX, y: snakeY + SQ});
        }
    }

    move(dir, SQ)
    {
        let snakeX = this.snake[0].x;
        let snakeY = this.snake[0].y;

        if (dir === 'Left') 
        {
            this.snake.pop();
            this.snake.unshift({x: snakeX - SQ, y: snakeY});
        } 
        else if (dir === 'Up') 
        {
            this.snake.pop();
            this.snake.unshift({x: snakeX, y: snakeY - SQ});
        } 
        else if (dir === 'Right') 
        {
            this.snake.pop();
            this.snake.unshift({x: snakeX + SQ, y: snakeY});
        } 
        else if (dir === 'Down') 
        {
            this.snake.pop();
            this.snake.unshift({x: snakeX, y: snakeY + SQ});
        }

    }

    eatApple(apple)
    {
        if (this.snake[0].x == apple.x && this.snake[0].y == apple.y)
        {
            return true;
        } 
        else 
        {
            return false;
        }
    }

    draw(ctx, SQ)
    {
        for (let i = 0; i < this.snake.length; i++)
        {
            ctx.strokeStyle = 'black';
            ctx.fillStyle = (i == 0) ? 'green': 'white';
            ctx.fillRect(this.snake[i].x, this.snake[i].y, SQ, SQ);
            ctx.strokeRect(this.snake[i].x, this.snake[i].y, SQ, SQ);
        }
    }
}