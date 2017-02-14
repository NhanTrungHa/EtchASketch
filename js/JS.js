//grid creator
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            var unit = $("<div class = units></div>")
            $("#container").append(unit);
        }
    }
    $(".units").width(892 / x);
    $(".units").height(892 / x);
}
//clears current grid
function gridClear() {
    $(".units").remove();
}
//creates new grid
function newGrid() {
    var z = prompt("How many rows and columns?");
    gridClear();
    createGrid(z);
    hoverColor();
}
//basic brush
function hoverColor() {
    $("div").hover(function () {
        $(this).css('background-color', 'black');
    }, function () {
        $(this).css('background-color', 'black');
    });
}

$(document).ready(function () {
    createGrid(16);
    $("#gridButton").click(function () {
        newGrid();
    });
    hoverColor();
    $("#gridClearButton").click(function(){
        $(".units").css('background', 'lightgray');
    });
});
