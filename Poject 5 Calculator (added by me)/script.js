 // Select all operation and number divs
 let numberAll = document.querySelectorAll(".numberAndoperation div");
 let inputElement = document.getElementById("num");
 let placeholder = document.querySelector("input::placeholder")

 // Event listener for each button
 numberAll.forEach((ele) => {
     ele.addEventListener("click", (event) => {
         let addNum = event.target.id;

         switch (addNum) {
             case "add":
                 inputElement.value += "+";
                 break;

             case "sub":
                 inputElement.value += "-";
                 break;

             case "mul":
                 inputElement.value += "*";
                 break;

             case "div":
                 inputElement.value += "/";
                 break;

             case "clr":
                 inputElement.value = "";
                 break;

             case "del":
                 // Remove the last character
                 let newVal = String(inputElement.value)
                 inputElement.value = newVal.slice(0, -1);
                 break;

             case "bracket-close":
                 inputElement.value += ")";
                 break;

             case "bracket-open":
                 inputElement.value += "(";
                 break;

             case "equal":
                 try {
                     // Evaluate the expression and handle errors
                     inputElement.value = eval(inputElement.value);
                 } 
                 catch (error) {
                     console.error("Error evaluating expression:", error);
                    //  inputElement.placeholder = "error, Refresh the page";
                     inputElement.value = "error, Refresh the page";
                 }
                 break;

             default:
                 // Append the character if it's not a known operation
                 inputElement.value += event.target.id || addNum;
                 break;
         }
     });
 });