class Division{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        // divisions.push(division);
        //  for(a=80;a<width;a+=80){
        //     division=new Division(a,height-divisionHeight/2,10,divisionHeight);
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);

    }
};