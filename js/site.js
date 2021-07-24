// Get values from the page
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // attempt parse into Integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // if inputs are integer, continue with the program
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        let results = createResults(fizzValue, buzzValue);
        displayResults(results);
    }
    else{
        alert("A non-number symbol was detected. Please enter a number as value.");
    }
}

//Create an array with all numbers between the start value and end value
function createResults(fizzValue, buzzValue){
    let results = []
    let fizzingValue = 3;
    let buzzingValue = 5;

    for(let i = fizzValue; i <= buzzValue; i++){
       
        // Check if value is a multiple of 3, 5, both or neither
        if(i % fizzingValue == 0 && i % buzzingValue == 0 ){
            
            results.push("FizzBuzz");
        }
        else if(i % fizzingValue == 0){
            
            results.push("Fizz");
        }
        else if (i % buzzingValue == 0){
            
            results.push("Buzz");
        }
        else{
            results.push(i);
        }  
    }
    return results;
}

//Display the results on the screen
function displayResults(results){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fizzbuzzTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let i = 0; i < results.length; i += 5) {
        
        let tableRow = document.importNode(templateRow.content, true)

        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(results[i]);
        rowCols[0].textContent = results[i];
        
        rowCols[1].classList.add(results[i + 1]);
        rowCols[1].textContent = results[i+1];
                
        rowCols[2].classList.add(results[i + 2]);
        rowCols[2].textContent = results[i+2];
        
        rowCols[3].classList.add(results[i + 3]);
        rowCols[3].textContent = results[i+3];
        
        rowCols[4].classList.add(results[i + 4]);
        rowCols[4].textContent = results[i+4];

        tableBody.appendChild(tableRow);
    }
}