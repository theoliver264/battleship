function setup(){
    createCanvas(400,400)
    background(000)
    noFill()
    stroke(255)
    let x
    let y
    for(let i = 0; i < 10; i++){
        x = 0;
        y = 0
        for(let j = 0; j < 10; i++){
            rect(x,y,40)
            x *= 40
        }
        y += 40
    }
}

function draw(){
}