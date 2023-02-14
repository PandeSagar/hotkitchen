var bill = document.getElementById("billOutput").value;
var billUnit = document.getElementById("billInput").value = this.value;
function Bill() {
  if ((billUnit >= 0) && (billUnit <= 100)) {     
    bill= 0;               
    } else if ((billUnit >= 101) && (billUnit <= 200)) {                               
      bill = billUnit * 7;
    } else if ((billUnit >= 201) && (billUnit <= 300)) {                               
      bill = billUnit * 10;
    } else {
      bill = billUnit * 15;
    }
}

function keyup () {
  
}

btn.addEventListener('click', (ev)=>{
  console.log(bill);
});
Bill();
console.log(bill);
