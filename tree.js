class Tree{
constructor(x,y,width,height)
{
 var options={
'restitution':0.8,
'friction':1.0,
'density':1.0,
isStatic:true,
    }

this.body =Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("tree.png");


}
display()
{
   var kandi =this.body.position
    imageMode(CENTER);
    image(this.image, kandi.x,kandi.y, this.width, this.height);

}


}