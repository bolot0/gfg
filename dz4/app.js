const som = document.querySelector("#som")
const usd = document.querySelector("#usd")

const convert = (elem, target,target2) => {
    elem.addEventListener("input", () => { 
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");    
    request.setRequestHeader("Content-type", "application/json");
    request.send(); 
    request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            // elem ===som?
            // (target.value = (elem.value / response.usd).toFixed(2))
            // :(target.value = (elem.value* response.usd).toFixed(2));
            // ? (target.value (elem.value / response.usd).toFixed(2))
            // :(target.value (elem.value* response.usd).toFixed(2)); 
           if(elem===som){
            target.value = (elem.value / response.usd).toFixed(2)
            target2.value = (elem.value * response.won).toFixed(2)
           }else if(elem ===usd){
            target.value = (elem.value* response.usd).toFixed(2)
            target2.value = ((elem.value* response.usd)* response.won).toFixed(2)
           }else if(elem ===won){
            target2.value = (elem.value / response.won).toFixed(2)
            target.value = ((elem.value / response.won)/ response.usd).toFixed(2)
           }
           elem.value==='' && (target.value='')
           elem.value==='' && (target2.value='')
           
    });
    });
}
convert (som, usd,won);
convert (usd, som,won);
convert(won,usd,som)