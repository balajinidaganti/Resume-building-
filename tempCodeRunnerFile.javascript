class shape {
    constructor(length,breadth,height){
        this.length=length;
        this.breadth=breadth;
        this.height=height;
       }
  set value1(length){
    this.length;
  }
  set value2(breadth){
    this.breadth;
  }
  set value3(height){
    this.height;
  }
  get area(){
    return this.length * this.breadth * this.height;
  }
}
let rectangle=new shape(20,10,30);
console.log(rectangle);
console.log(rectangle.area);
