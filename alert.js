const rectangle={
    width:a,
    length:b,
    Area:width*length,
    calculateArea: function (){
        console.log(this.Area);
    }
}
console.log(rectangle.Area)

const rectangle1 = new rectangle(10, 5);
console.log(rectangle1);