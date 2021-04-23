class Form{
 constructor(){
     
 }
 display(){
     var  title= createElement('h2');
     title.html("Car racing game");
     title.position(130,0);
 
     var input= createInput("Type your Name")
     var button= createButton("Play");
     input.position(300,160);
     button.position(300,200);
     button.mousePressed(function(){
     input.hide();
     button.hide();
     var name= input.value();
     var greeting= createElement('h3');
     greeting.html("Hi "+name);
     greeting.position(130,60);



 })
}
}
