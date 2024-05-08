let display = document.getElementById('displays');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == 'x'){
            string += '*';
            display.value = string;
        }
        else if (e.target.innerHTML == '÷'){
            string += '/';
            display.value = string;
        }
        else if (e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else{
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})

// For Clear and Del button
// else if (e.target.innerHTML == 'AC'){
        //     string = "";
        //     display.value = string;
        // }
        // else if (e.target.innerHTML == 'DEL'){
        //     string = string.substring(9, string.length-1);
        //     display.value = string;
        // }