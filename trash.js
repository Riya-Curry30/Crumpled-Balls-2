class Trash
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);

        //this.image = loadImage("Project 25 Trash.png");
        World.add(world,this.body);

    }

    display()
    {
       var pos = this.body.position
       
       //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
    }
}

