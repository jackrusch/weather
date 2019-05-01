var acceleration = 0;
var bgcolor=("#737373");
var weather="rainy"

function setup() {
    createCanvas(600,600);
}

function draw() {
    stroke("#ffff00");
    strokeWeight(8);
    line(x,y,x+20,y+20);
    line(x+20,y+20,x+20,y+60);
    line(x+20,y+60,x+60,y+100);
    line(x+60,y+100,x+60,y+140);
    if (weather=="rainy"){
        //rainy background
        bgcolor=("#737373");
        background(bgcolor);
        //rainy ground
        fill("#4d2600")
        noStroke();
        rect(0,500,width,100);
        //mouse prompt
        fill("#ffffff");
        triangle(10,530,25,545,9,555);
        stroke("#ffffff");
        strokeWeight(3);
        line(17,550,21.8,561);
        noStroke();
        textSize(20);
        textFont("Georgia");
        text('Sunny',35,553);
        //lightning
        if (acceleration % 70 === 0){
            for(var i = 0; i<1; i++){
                var x = (Math.random()*width);
                var y = (0);
                stroke("#ffff00");
                strokeWeight(8);
                line(x,y,x+20,y+20);
                line(x+20,y+20,x,y+60);
                line(x,y+60,x+20,y+100);
                line(x+20,y+100,x,y+140);
                line(x,y+140,x+20,y+180);
                line(x+20,y+180,x,y+220);
                line(x,y+220,x+20,y+260);
                line(x+20,y+260,x,y+300);
                line(x,y+300,x+20,y+340);
                line(x+20,y+340,x,y+380);
            }
        }
        //rain
        if (acceleration % 2 === 0){
            for(var i = 0; i<100; i++){
                var x = (Math.random()*width);
                var y = (Math.random()*height);
                stroke("#24478f");
                strokeWeight(3);
                line(x,y,x+5,y+20);
            }
        }
    acceleration++;
            }else{
        //sunny background
        bgcolor="#33ccff"
        background(bgcolor);
        //cloud1
        noStroke();
        fill("#ffffff")
        ellipse(0,250,150,90);
        //cloud2
        ellipse(100,100,150,90);
        ellipse(200,100,150,90);
        ellipse(130,120,120,80);
        ellipse(170,80,120,80);
        //cloud3
        ellipse(300,250,140,80);
        ellipse(400,250,140,80);
        ellipse(330,220,110,90);
        ellipse(370,270,110,90);
        //cloud4
        ellipse(500,100,150,90);
        ellipse(600,100,150,90);
        ellipse(530,120,120,80);
        ellipse(570,80,120,80);
        //rainbow
        noFill();
        stroke("#e60000")
        strokeWeight(5);
        ellipse(width/2,600,600,600);
        stroke("#ff6600");
        ellipse(width/2,600.5,590,590);
        stroke("#ffcc00");
        ellipse(width/2,601,580,580);
        stroke("#00b300");
        ellipse(width/2,601.5,570,570);
        stroke("#004d99");
        ellipse(width/2,602,560,560);
        stroke("#6600cc");
        ellipse(width/2,602.5,550,550);
        //sunny ground
        fill("#267326")
        noStroke();
        rect(0,500,width,100);
        //sun
        fill("#ffe680");
        ellipse(width-10,height-570,200,200);
        //mouse prompt
        fill("#ffffff");
        triangle(10,530,25,545,9,555);
        stroke("#ffffff");
        strokeWeight(3);
        line(17,550,21.8,561);
        noStroke();
        textSize(20);
        textFont("Georgia");
        text('Rainy',35,553);
        }
}
function mousePressed(){
     if (weather=="rainy"){
         weather="sunny"
     }else{
         weather="rainy"
     }
}