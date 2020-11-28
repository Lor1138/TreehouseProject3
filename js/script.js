//variable to store element of other job in Job Section
const jobTitle = document.getElementById("title");
const otherJob = document.querySelector("#other-title");
//variables for TShirt Selection section
const shirtColor = document.querySelector("#color");
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
const inputName = document.getElementById("name"); 
const emailInput = document.getElementById("mail");
//form validation for payment section
const paymentMenu = document.getElementById('payment');
const payPalOpt = document.getElementById('paypal');
const bitcoinOpt = document.getElementById('bitcoin');
const creditCardOpt = document.getElementById('credit-card');
//Subit button
const submitButton = document.getElementById('button');

    //This function autofocuses the name input when the browser loads.
    function nameFocus() {
        document.getElementById("name").focus();
    }
        nameFocus(name);

        //displays only if JavaScript is not enabled and other is selected
        otherJob.style.display = 'none';
        jobTitle.addEventListener("change", e =>{
            if(jobTitle.value === "other"){
                otherJob.style.display = 'block';
                } else {
                    otherJob.style.display = 'none';
                }
           });
        
        //unless a shirt theme is selected, the color menu will remain hidden
        shirtColor.style.display = 'none';
        shirtTheme.addEventListener("change", e =>{
            if(shirtTheme.value === "heart js" || shirtTheme.value === "js puns"){
                shirtColor.style.display = 'block';
            } else {
                shirtColor.style.display = 'none';
            }
        })

        //if "js puns" or "I heart JS" is selected use change handler to make the "colors" menu update
           shirtTheme.addEventListener('change', (event) => {
                let target = event.target.value;
                     if (target === "heart js") {
                        jsPunsCol.hidden = true;
                        heartJSCol.hidden = false;
                        tomato.selected = true;
                    } if (target === "js puns") {
                        heartJSCol.hidden = true;
                        jsPunsCol.hidden = false;
                        cornflowerblue.selected = true;
                    } 
               });
        //Event listener for activity section
       const checkActivity = () =>{
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
                    const checkboxLabel = activityInput.parentNode;
                    
                    if(currentActivity === activityDayTime && activityChoice !== activityInput[i]){
                        if(activityChoice.checked === true){
                            activityInput[i].disabled = true;
                        } else {
                            activityInput[i].disabled = false;
                            
                        }
                    } 
                }  
            });
        
        }
        console.log(activityInput);
        //Make sure at least one activity is selected before submitting form
        const checkActivityValid = () => {
            for(let i = 0; i < activityInput.length; i++){
                if(activityInput[i].checked = false){
                    if(activityInput[i].checked = true){
                        return true;
                    } else {
                        activitySection.appendChild('div').innerHTML = "Please select at least one activity";
                        return false;
                    }
                  }
                }
            
        }

        // Form validation section

        //shows and error if name is left empty

        const checkName= () => { 
        inputName.addEventListener('keyup', (event)=> {        
            if(inputName.value.length > 0 ){
                inputName.style.borderColor = "green";
                errorName.innerHTML = " ";
               return true;
            } else {
                inputName.style.borderColor = "red";
                errorName.innerHTML = "<span style ='color: red;'>" +"Please enter a name</span>";
                return false;
            }
        });
    }
        //shows and error if empty or not a valid email format
        const checkEmail = () => {
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
                return true;

            }
        });
    }
        //payment selection
        bitcoinOpt.style.display = 'none';
        payPalOpt.style.display = 'none';

        //hides payment options until one is selected. Credit is displayed by default
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

        //credit card validation
        let creditCardNum = document.getElementById("cc-num");
        let creditCardZip = document.getElementById("zip");
        let creditCardCvv = document.getElementById("cvv");
        
        const checkCardNum = () => {
        creditCardNum.addEventListener("keyup", (event)=>{
            if(creditCardNum.value.length === 0){
                errorCardNum.innerHTML = "<span style ='color: red;'>" +"Please enter a valid card number</span>"
                creditCardNum.style.borderColor = "red";
                return false;
            } else if(/^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/.test(creditCardNum.value) !== true){
                errorCardNum.innerHTML = "<span style ='color: red;'>" +"Please enter a valid card number</span>"
                creditCardNum.style.borderColor = "red";
                return false;
            } else {
                creditCardNum.style.borderColor = "green";
                errorCardNum.innerHTML = " ";
               return true;
            }
        });
    }
        const checkZip = () => {
        creditCardZip.addEventListener("keyup", (event)=>{
            if(creditCardZip.value.length === 0){
                errorZip.innerHTML = "<span style ='color: red;'>" +"Please enter a zipcode</span>"
                creditCardZip.style.borderColor = "red";
                return false;
            }else if(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(creditCardZip.value) !== true){
                    errorZip.innerHTML = "<span style ='color: red;'>" +"Please enter a valid zip code</span>"
                    creditCardZip.style.borderColor = "red";
                    return false;
            } else {
                creditCardZip.style.borderColor = "green";
                errorZip.innerHTML = " ";
              return true;
            }
        });
    }
        const checkCvv = () => {
        creditCardCvv.addEventListener("keyup", (event)=>{
            if(creditCardCvv.value.length === 0){
                errorCvv.innerHTML = "<span style ='color: red;'>" +"Please enter a CVV</span>"
                creditCardCvv.style.borderColor = "red";
                return false;
            } else if(/(^\d{3}$)/.test(creditCardCvv.value) !== true){
                errorCvv.innerHTML = "<span style ='color: red;'>" +"Please enter a valid CVV</span>"
                creditCardCvv.style.borderColor = "red";
                return false;
            } else {
                creditCardCvv.style.borderColor = "green";
                errorCvv.innerHTML = " ";
               return true;
            }
        });
    }

    checkActivity();
    checkActivityValid();
      
     submitButton.addEventListener('click', (e) => {

         let isUserNameValid = checkName(),
         isEmailValid = checkEmail(), 
         isActivityValid = checkActivityValid(),
         isCardValid = checkCardNum(),
         isZipValid = checkZip(),
         isCvvValid = checkCvv();

         let isFormValid = isUserNameValid &&
         isEmailValid && isActivityValid && isCardValid
         && isZipValid && isCvvValid;
         console.log("clicked")

         if (isFormValid === true){
             return true;
         } else {
             return e.preventDefault();
         }
         

     });      

        
        
        



 

        



    

        
    
