var flag = true
function test() {
    element = document.getElementById("button");
    if (flag) {
        element.style.color = 'blue';
        flag = false;
    }
    else{
        element.style.color = 'black';
        flag = true;
    }
}