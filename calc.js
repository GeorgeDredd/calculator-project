let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".btn");


buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        let x = e.target.innerText;
        // let output = result.innerText;
        switch(x) {
            case "AC":
                result.innerText = "";
                break;
            case "=":
                result.innerText = parseFloat(eval(result.innerText));
                break;
            default:
                result.innerText += e.target.innerText;   
        }
        // e.target.classList.add("hover");            
    })   
})

