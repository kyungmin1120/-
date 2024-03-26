var canvas = document.getElementById('canvas')
var ctx = canvas.getcontext('2d');

canvas.width = window.innerwidth - 100;
canvas.height = window.innerHeight - 100;


var user = {
    x:10,
    y:10,
    width:100,
    height:100,
    
    draw(){
       ctx.fillsty1e ='green'
       ctx.fillRect(this,x,this.y,this.width,this.height);
    }
}
user.draw()


class Bomb{ //장애물
constructor(){
    this.x=300
    this.y=10;
    this.width=20;
    this.height=20;
}
draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x,this.y,this.width,this.height);
}
}
var bomb = new Bomb();
bomb.draw()   








    