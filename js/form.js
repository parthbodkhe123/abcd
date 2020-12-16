class Form{
constructor(){
}
display(){
var tittle=createElement('h2')
tittle.html("ONLINE racing")
tittle.position(130,20)

var input=createInput("Name")
var button=createButton("Play")
input.position(130,160)
button.position(250,200)

var greeting=createElement('h3')

button.mousePressed(function (){
input.hide();   
button.hide();

var name=input.value();

playerCount+=1;
player.update(name);
player.updateCount(playerCount);
greeting.html("welcome to online car racing hope you enjoy");
greeting.position(130,160);
});


}

}