let color_picker = document.getElementById("color_pick");
let undo_button = document.getElementById("undo");
let colors = ["#de597b", "#38d157", "#4f86e0"];
let index = 0;

function colorChange(){
}

function newColor(){
}

function sortList(){
}

function lowerCase(){
}

//Fun complex function on strings and arrays alike.
//So much math it would take a solid third our classtime to explain
//It converts an rbg() format color into hexidecimal format
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
      }
    return '#' + parts.join('').toLowerCase();
}

function removeColor(){
}