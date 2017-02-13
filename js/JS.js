function createGrid(x) {
    for(var rows = 0; rows < x; rows++) {
        for(var columns = 0; columns < x; columns++) {
        var unit = $("<div class = units></div>")
        $("#container").append(unit);
        }
    }
    $(".units").width(892/x);
    $(".units").height(892/x);
}

function gridClear() {
    $(".units").remove();
}

function newGrid() {
    var z = prompt("How many rows and columns?");
    gridClear();
    createGrid(z);
}

$(document).ready(function(){
   createGrid(16); 
        
    $("#gridButton").click(function(){
        newGrid();                     
     });   
});
