var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var contentParag = document.getElementById("contentParag");
var x = 0, y = 0, z = 0;

red.addEventListener("change", function () {
    x = red.value
    console.log(x);
    color()

});

green.addEventListener("change", function () {
    y = green.value
    console.log(y);
    color()

});

blue.addEventListener("change", function () {
    z = blue.value
    console.log(z);
    color()

});

function color() {
    contentParag.style.color = `RGB(${x} ${y} ${z})`
    contentParag.style.borderColor = `RGB(${x} ${y} ${z})`

    console.log(`x:${x} y:${y} z:${z}`);
}
