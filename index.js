
function dates() {
    //Contruct date variables
    const todaysDate = new Date().toLocaleDateString();
    const plus30 = new Date((new Date()).getTime() + 30*24*60*60*1000).toLocaleDateString();
    const plus15 = new Date((new Date()).getTime() + 15*24*60*60*1000).toLocaleDateString();
    const plus7 = new Date((new Date()).getTime() + 7*24*60*60*1000).toLocaleDateString();
    const plus3 = new Date((new Date()).getTime() + 3*24*60*60*1000).toLocaleDateString();
    
    //Add date values to html
    document.getElementById("todaysDate").innerHTML = todaysDate;
    document.getElementById("plus30").innerHTML = plus30;
    document.getElementById("plus15").innerHTML = plus15;
    document.getElementById("plus7").innerHTML = plus7;
    document.getElementById("plus3").innerHTML = plus3;
}

dates();



