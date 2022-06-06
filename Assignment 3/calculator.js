let gInfo = [["x", "op", "y", "result"]];
let resultArr = [];
function calculate() {
    let nInfo = [];
    let result = 0;
    let x = prompt("Enter value of x:", "0");
    let operation = prompt("Enter operation (+, -, *, / or %):", "+");
    let y = prompt("Enter value of y:", "0");
    let con = confirm("Continue?");
    if (operation == "+") {
        result = parseInt(x) + parseInt(y);
    } else if (operation == "-") {
        result = parseInt(x) - parseInt(y);
    } else if (operation == "*") {
        result = parseInt(x) * parseInt(y);
    } else if (operation == "/") {
        result = parseInt(x) - parseInt(y);
    } else if (operation == "%") {
        result = parseInt(x) % parseInt(y);
    } else {
        operation = "Not an operation";
        result = "Computational error";
    }
    nInfo.push(x);
    nInfo.push(operation);
    nInfo.push(y);
    nInfo.push(result);
    resultArr.push(result);
    gInfo.push(nInfo);
    if (con == true) {
        calculate();
    } else {
        let min = getResMin(resultArr);
        let max = getResMax(resultArr);
        let avg = getResAvg(resultArr);
        let total = getResTotal(resultArr);
        document.write("<table>");
        for (let i = 0; i < gInfo.length; i++) {
            document.write("<tr>");
            for (let j = 0; j < 4; j++) {
                if (i == 0) {
                    document.write("<th style='background: orange; border: 4px solid black; width: 100px' >" + gInfo[i][j] + "</th>");
                } else {
                    document.write("<td style='text-align: center; border: 4px solid black; width 100px'>" + gInfo[i][j] + "</td>");
                }
            }
            document.write("</tr>");
        }
        document.write("<tr>");
        document.write("<th style='background: orange; border: 4px solid black; width: 100px'>Min</th>");
        document.write("<th style='background: orange; border: 4px solid black; width: 100px'>Max</th>");
        document.write("<th style='background: orange; border: 4px solid black; width: 100px'>Avg</th>");
        document.write("<th style='background: orange; border: 4px solid black; width: 100px'>Total</th>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td style='text-align: center; border: 4px solid black; width 100px'>'" + min + "</td>");
        document.write("<td style='text-align: center; border: 4px solid black; width 100px'>" + max + "</td>");
        document.write("<td style='text-align: center; border: 4px solid black; width 100px'>" + avg + "</td>");
        document.write("<td style='text-align: center; border: 4px solid black; width 100px'>" + total + "</td>");
        document.write("</tr>");
        document.write("</table>");
    }
}

function getResMin(array){
    let minRes = array[0]
    for(let i = 1; i < array.length; i++){
        if(minRes > array[i]){
            minRes = array[i];
        }
    }
    return minRes;
}

function getResMax(array){
    let maxRes = array[0];
    for(let i = 0; i < array.length; i++){
        if(maxRes < array[i]){
            maxRes = array[i];
        }
    }
    return maxRes;
}

function getResTotal(array){
    let resTotal = 0;
    for(let i = 0; i < array.length; i++){
        resTotal = resTotal + array[i];
    }
    return resTotal;
}

function getResAvg(array){
    let resTotal = getResTotal(array);
    let resAvg = resTotal / array.length;
    return resAvg;
}


