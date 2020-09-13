class Paper
{
    constructor(x,y,r)
    {
        var options = 
        {
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 0.5

        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("Project 25 Paper.png");


        World.add(world, this.body);

        
    }

    display()
   {
    
    push()
    translate(this.body.position.x,this.body.position.y);

    imageMode(CENTER);
    image(this.image,0,0,this.r * 2,this.r * 2);


    pop()
    
   }
}