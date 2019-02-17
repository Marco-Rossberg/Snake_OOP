export default class Player
{
    constructor()
    {
        this.score = 0;
    }

    update(snake)
    {
        this.score += 2 * snake.snake.length;
    }
}