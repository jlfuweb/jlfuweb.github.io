//https://tinyurl.com/gabiscrochet
//use paypal: https://smallbusiness.chron.com/make-payment-button-set-price-paypal-49583.html
var globalItems = [];
localStorage.setItem("array", JSON.stringify(globalItems))

window.localStorage.setItem("test", "this is a test")
function checkForItems(){   
    sessionStorage.setItem("test", "test again")
    if(document.getElementById("bandana-color").value != null){
        var bandana = {type: "bandana", color1: document.getElementById("bandana-color").value, color2: null, size: null};
        items = JSON.parse(localStorage.getItem("array"))
        items.push(bandana)
        localStorage.setItem("array", JSON.stringify(items))
    }   
    console.log("here" )
    window.localStorage.setItem("test", "test 2")
}
function printItems(items){
    console.log(items.length)
    for(i = 0; i < items.length; i++){
        console.log(items[i].type + ", " + items[i].color1)
    }
}