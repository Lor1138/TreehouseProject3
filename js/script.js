//variable to store element of other job in Job Section
const otherJob = document.querySelector("#other-title");
//variables for TShirt Selection section
const shirtColor = document.querySelector("#color");
const pickTheme = document.createElement("option");
const shirtTheme = document.querySelector("#design");
const jsPunsCol = document.querySelector("#js-puns");
const heartJSCol = document.querySelector("#heart-js");
const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
const tomato = document.querySelector('option[value="tomato"]');
//variables for Activity section
const activitySection = document.querySelector(".activities");
const activityTotalDiv = document.createElement('div');
const activityInput = document.querySelectorAll('.activities input');
//This changes, so used let instead of const
let activityCost = 0;
//form validation for name and email section 
const inputName = document.querySelector("#name"); 
const emailInput = document.querySelector("#mail");
//form validation for payment section
const paymentMenu = document.getElementById('payment');
const payPalOpt = document.getElementById('paypal');
const bitcoinOpt = document.getElementById('bitcoin');
const creditCardOpt = document.getElementById('credit-card');



    //This function autofocuses the name input when the browser loads.
    function nameFocus() {
        document.getElementById("name").focus();
    }
        nameFocus(name);

        //displays only if JavaScript is not enabled.
        otherJob.style.display = 'none';

        //disables color menu for tshirt until a theme is chosen
        pickTheme.value = "pick-theme";
        pickTheme.text = "Please select a T-shirt theme"
        shirtColor.add(pickTheme);
        pickTheme.selected = true;
        pickTheme.hidden = true; 
        shirtColor.setAttribute("disabled", false);

        //if "js puns" or "I heart JS" is selected use change handler to make the "colors" menu update
        shirtTheme.addEventListener('change', (event) => {
                let target = event.target.value;
                     if (target === "heart js") {
                        jsPunsCol.hidden = true;
                        heartJSCol.hidden = false;
                        tomato.selected = true;
                        shirtColor.removeAttribute("disabled", true);
                    } else if (target === "js puns") {
                        heartJSCol.hidden = true;
                        jsPunsCol.hidden = false;
                        cornflowerblue.selected = true;
                        shirtColor.removeAttribute("disabled", true);
                    } else if(target === "select-theme") {
                        pickTheme.value = "pick-theme";
                        pickTheme.text = "Please select a T-shirt theme"
                        shirtColor.add(pickTheme);
                        pickTheme.selected = true;
                        pickTheme.hidden = true;
                        shirtColor.setAttribute("disabled", false);
                    }

        });

        //Event listener for activity section
        activitySection.addEventListener('change', (e) => {
            let activityChoice = e.target;
            const activityValue = activityChoice.getAttribute('data-cost');
            
                if(activityChoice.checked === true){
                    activityCost += +activityValue;
                    activitySection.appendChild(activityTotalDiv).innerText = `Total: $${activityCost}`;
                } else if (activityChoice.checked === false){
                    activityCost -= +activityValue;
                    activitySection.appendChild(activityTotalDiv).innerText = `Total: $${activityCost}`;
                } else {
                    activityTotalDiv.style.display = 'hidden';
                }
              for(let i = 0; i < activityInput.length; i++){
                    const activityDayTime = activityInput[i].getAttribute('data-day-and-time');
                    const currentActivity = activityChoice.getAttribute('data-day-and-time');
                    const checkboxLbl = activitySection.getElementsByTagName('label');                    
                    
                    if(currentActivity === activityDayTime && activityChoice !== activityInput[i]){
                        if(activityChoice.checked === true){
                            activityInput[i].disabled = true;
                        } else {
                            activityInput[i].disabled = false;
                        }
                    } 
                }  
            
              
        });


        // Form validation section

        inputName.addEventListener('keyup', (event)=> {        
            if(inputName.value.length > 0 ){
                inputName.style.borderColor = "green";
                errorName.innerHTML = " ";
;               return true;
            } else {
                inputName.style.borderColor = "red";
                errorName.innerHTML = "<span style ='color: red;'>" +"Please enter a name</span>";
                return false;

            }
    
        });

        emailInput.addEventListener("keyup", (event)=>{
            if(emailInput.value.length === 0){
                errorMail.innerHTML = "<span style ='color: red;'>" +"Please enter an email address</span>"
                emailInput.style.borderColor = "red";
                return false;
            } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) !== true){
                errorMail.innerHTML = "<span style ='color: red;'>" +"Email must contain (.) and (@)</span>"
                emailInput.style.borderColor = "red";
                return false;
            } else {
                emailInput.style.borderColor = "green";
                errorMail.innerHTML = " ";
;               return true;

            }
        });

        bitcoinOpt.style.display = 'none';
        payPalOpt.style.display = 'none';


        paymentMenu.addEventListener('change', e => {
            if(paymentMenu.value === "paypal" ){
                creditCardOpt.style.display = 'none';
                bitcoinOpt.style.display = 'none';
                payPalOpt.style.display = 'block';
            }else if(paymentMenu.value === "bitcoin"){
                creditCardOpt.style.display = 'none';
                bitcoinOpt.style.display = 'block';
                payPalOpt.style.display = 'none';
            } else {
                creditCardOpt.style.display = 'block';
                bitcoinOpt.style.display = 'none';
                payPalOpt.style.display = 'none';
            }
            
        });






      


        

        
        
        



 

        



    

        
    
