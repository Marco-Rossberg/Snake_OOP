export default class Apple
{
    constructor(SQ)
    {
        this.x = (Math.floor(Math.random()* 40)* SQ);
        this.y = (Math.floor(Math.random()* 40)* SQ);
    }

    update(SQ)
    {
        this.x = (Math.floor(Math.random()* 40)* SQ);
        this.y = (Math.floor(Math.random()* 40)* SQ);
    }

    draw(ctx, SQ)
    {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, SQ, SQ);
        ctx.strokeRect(this.x, this.y, SQ, SQ);
    }
}