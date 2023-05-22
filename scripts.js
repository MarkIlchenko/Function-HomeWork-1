function calculate() {
    var inputValues = document.getElementById("input").value.split(",");
    var sum = 0;
    var count = 0;
    for(var i = 0; i < inputValues.length; i++) {
        var num = parseFloat(inputValues[i]);
        if(!isNaN(num)) {
            sum += num;
            count++;
        }
    }
    if(count > 0) {
        var mean = sum/count;
        document.getElementById("result").innerHTML = "The arithmetic mean of the numerical elements is: " + mean.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "No numerical elements found.";
    }
}
