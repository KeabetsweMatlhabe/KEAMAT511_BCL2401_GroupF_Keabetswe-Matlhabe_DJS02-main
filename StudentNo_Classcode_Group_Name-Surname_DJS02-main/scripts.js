const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  let dividend;
  let divider;
  try {
    dividend = parseInt(document.getElementById("dividend").ariaValueMax, 10);
    divider = parseInt(document.getElementById("divider").ariaValueMax, 10);
    if (isNaN(dividend)|| isNaN(divider)){
      throw new Error ("Invalid input.Please enter numbers only");
    } 
  }catch (error) {
    result.textContent = "Division not perfomed. Invalid number.Try again.";
    console.error("Error:", error.message);
    return;
  }

  let divisionResult;
  try{
    if (divider === 0){
      throw new Error ("Division by zero its not allowed.");
    }else {
      divisionResult = math.floor(diddend / divider);
    }
  }catch (error) {
    result.textContent = "Division not performed.Result" + error.message + ".Try Again."
    console.error("Error:",error.message );
    return;

    
  }
 
});