
function checkValue() {

    var value = document.getElementById ("color_input").value;

    if ( (value.length == 6 || value.length == 3) && 
    (value.includes("a") || value.includes("b") || value.includes("c")
    || value.includes("d") || value.includes("e") || value.includes("f")
    || value.includes("1") || value.includes("2") || value.includes("3") 
    || value.includes("4") || value.includes("5") || value.includes("6")
    || value.includes("7") || value.includes("8") || value.includes("9")
    || value.includes("0")) ) {
        document.getElementById ("color_preview").style.backgroundColor = '#'+ value;
    } else if (value == "") {
        document.getElementById ("color_preview").style.backgroundColor = '#fff';
    } else {
        document.getElementById ("color_preview").style.backgroundColor = '#000';
    } 
    
}
