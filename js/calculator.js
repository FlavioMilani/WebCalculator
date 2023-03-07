var docTitle = document.title;
window.addEventListener('blur', () => {
document.title = 'Volte :D! FJS' ;
})
window.addEventListener('focus', () => {
    document.title = docTitle;
})


function insert(num) {
        var number = document.getElementById('results').innerHTML;
        saveNum = document.getElementById('results').innerHTML = number + num;
}

function clean() {
    document.getElementById('results').innerHTML = "";
}

function cleanLastNum() {
    var results = document.getElementById('results').innerHTML;
    saveNum = document.getElementById('results').innerHTML = results.substring(0, results.length -1);
}


function teste(sig) {
	signal = sig;
	number1 = saveNum;
	saveNum;
	clean();
    console.log(number1);
    console.log(signal);
    return signal;
}

function equals() {
	number2 = saveNum;
    console.log(number2)
	clean();

    if (signal == "√") {
        result = Math.sqrt(number1);
        console.log(result)
        return saveNum = document.getElementById('results').innerHTML = result;
    }

    if (signal == "÷") {
        result = (number1 / number2);
        console.log(result)
        return saveNum = document.getElementById('results').innerHTML = result;
    }

    if (signal == "x") {
        result = parseFloat(number1 * number2);
        console.log(result)
        return saveNum = document.getElementById('results').innerHTML = result;
    }

    if (signal == "+") {
        result = parseFloat(number1) + parseFloat(number2);
        console.log(result)
        return saveNum = document.getElementById('results').innerHTML = result;
    }

    if (signal == "-") {
        result = (number1 - number2);
        console.log(result)
        return  saveNum = document.getElementById('results').innerHTML = result;
    }

    
}
