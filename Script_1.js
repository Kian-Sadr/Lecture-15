let color_picker = document.getElementById("color_pick");
let undo_button = document.getElementById("undo");
let colors = ["#de597b", "#38d157", "#4f86e0"];
let index = 0;

function colorChange(){
    document.body.style.background=colors[index];
    index = (index + 1) % colors.length;
}

function newColor(){
    let new_color = color_picker.value.toLowerCase();
    //index at which to splice, number of elements to remove, elements to add (any number of parameters)
    colors.splice(colors.length, 0, new_color);
    // same result as colors.push(new_color)
    if(color.indexOf(new_color) != color.lastIndexOf(new_color)){
        colors.pop();
    }
}

function sortList(){
    colors.sort();
}

function lowerCase(){
    colors.forEach(toLowerCase());
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
    let target_color = document.body.style.background;
    let target_index = colors.indexOf(hexc(target_color));
    if(target_index > -1){
        colors.splice(target_index, 1);
        colorChange();
        index = colors.indexOf(hexc(document.body.style.background));
    }
    
}


// example object
color_sample = {
    rgb: "rgb(245, 164, 216)",
    hex: hexc("rgb(245, 164, 216)"),
    list_sample: [1, 4, 3, "apple"]
};
