var canvas=new fabric.Canvas("myCanvas");
block_image_height=30;
block_image_width=30;
player_x=10;
player_y=10;
var player_object="";
function player_update()
{
fabric.Image.fromURL("player.png" ,function(Img){

    player_object=img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x,
    })
    canvas.add(player_object);   

});
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{

keyPressed= e.keyCode;
console.log(keyPressed)

if(e.shiftKey== true &&  keyPressed=="80"){
console.log("p and shift key are pressed together");
block_image_height=block_image_height +10;
block_image_width=block_image_width +10;

document.getElementById("current_height").innerHTML=block_image_height;
document.getElementById("current_width").innerHTML=block_image_width;
}

if(e.shiftKey== true &&  keyPressed=="77"){
    console.log("m and shift key are pressed together");
    block_image_height=block_image_height -10;
    block_image_width=block_image_width -10;
    
    document.getElementById("current_height").innerHTML=block_image_height;
    document.getElementById("current_width").innerHTML=block_image_width;
    }
}

