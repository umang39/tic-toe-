let context = document.getElementById('canva')
let ctx = context.getContext('2d')

class box {
    constructor(size,color){
        this.size = size
        this.color = color
        this.x = 0
        this.y = 0
    }
}
class player extends box{
    constructor(){
        super(30,'blue')
        this.x = 0
        this.y = 233
        this.speed =0 
    }
    move(){
        this.x +=this.speed
        if(this.x + this.size>=500){
            this.speed = 0
            window.alert('you win')
        }
        else{
            this.speed = Math.random()*20            
        }
    }
}
class enemy extends box {
    constructor(speed){
        super(50,'red')
        this.speed = speed
        this.y =0
    }
    move(){
        this.y += this.speed
        if(this.y + this.size>= 500){
            this.speed = -(Math.abs(this.speed))
        }
        if(this.y <=0){
            this.speed = (Math.abs(this.speed))
        }
    }
}
let p = new player()
let e1 = new enemy(20)
let e2 = new enemy(30)
let e3 = new enemy(12)
e1.x =120
e2.x = 260
e3.x = 390
function drawbox(box){
    ctx.fillStyle = box.color
    ctx.fillRect(box.x,box.y,box.size,box.size)
}
context.addEventListener('mouseup',()=>{
    p.move()
})
context.addEventListener('mousedown',()=>{
    p.move()
})
setInterval(()=>{
    if(((e1.x+e1.size)>=p.x&&e1.x<p.x)&&(p.y>=e1.y&&((p.y+p.size) <= (e1.y+e1.size)))){
        window.alert('game over')
    }
       if(((e2.x+e2.size)>=p.x&&e2.x<p.x)&&(p.y>=e2.y&&((p.y+p.size) <= (e2.y+e2.size)))){
        window.alert('game over')
    } 
      if(((e3.x+e3.size)>=p.x&&e3.x<p.x)&&(p.y>=e3.y&&((p.y+p.size) <= (e3.y+e3.size)))){
        window.alert('game over')
    }
    drawbox(p)
    ctx.clearRect(0,0,500,500)
    e1.move()
    e2.move()
    e3.move()
    // p.move()
    drawbox(e1)
    drawbox(e2)
    drawbox(p)
    drawbox(e3)
},100)
