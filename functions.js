
function switchStyle(){
    var style1 = document.getElementById("mainStyleSheet1");
    var style2 = document.getElementById("mainStyleSheet2");

    if (style1.disabled) { // style1 is disabled
        style1.disabled = false; 
        style2.disabled = true;
        localStorage.setItem("activeStyle", "style2");
    }
    else if (style2.disabled) { // style2 is disabled
        style1.disabled = true;
        style2.disabled = false;
        localStorage.setItem("activeStyle", "style1");
    }
}

window.onload = function(){
    var activeStyleStored = localStorage.getItem("activeStyle");
    var style1 = document.getElementById("mainStyleSheet1");
    var style2 = document.getElementById("mainStyleSheet2");
    if (activeStyleStored === "style1") {
        style1.disabled = true; 
        style2.disabled = false;
    }
    else if (activeStyleStored === "style2") {
        style1.disabled = false; 
        style2.disabled = true; 
    }
}

function copyFunction(text) {
    navigator.clipboard.writeText(text);
    alert("Copied Email to Clipboard");
}