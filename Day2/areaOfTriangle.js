console.log("Katelyn is awesome")

let sides = new Array(3);
function areaOfTriangle(sides){
    let s = (sides[0] + sides[1] + sides[2])/2
    let area = Math.sqrt(s * (s -sides[0]) + s * (s -sides[1]) +s * (s - sides[2]))
    return area
}
sides = [3, 4, 5];
console.log(areaOfTriangle(sides));

