class Boy{
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
    this.image = loadImage("boy.png");
    World.add(world, this.body);
    
    }
    display()
    {
       var kand =this.body.position
        imageMode(CENTER);
        image(this.image, kand.x,kand.y, this.width, this.height);
    
    }
    
    
    }