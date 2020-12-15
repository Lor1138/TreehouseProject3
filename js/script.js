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
const chooseCredit = document.querySelector('option[value="credit card"]');
//Submit button
const checkboxMsg = document.createElement('div');
const submitButton = document.getElementById('button');

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
const checkActivity = () => {
  activitySection.addEventListener('change', (e) => {
    let activityChoice = e.target;
    const activityValue = activityChoice.getAttribute('data-cost');

    if(activityChoice.checked === true){
      activityCost += +activityValue;
      activitySection.appendChild(activityTotalDiv).innerText = `Total: $${activityCost}`;
      activitySection.appendChild(checkboxMsg).innerHTML = " ";
    } else if (activityChoice.checked === false){
      activityCost -= +activityValue;
      activitySection.appendChild(activityTotalDiv).innerText = `Total: $${activityCost}`;
      activitySection.appendChild(checkboxMsg).innerHTML = "Please select at least one activity";
    } else {
      activityTotalDiv.style.display = 'hidden';
    }
    for(let i = 0; i < activityInput.length; i++){
      const activityDayTime = activityInput[i].getAttribute('data-day-and-time');
      const currentActivity = activityChoice.getAttribute('data-day-and-time');

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
checkActivity();

//Make sure at least one activity is selected before submitting form
const checkActivityValid = () => {
  let checkbox = document.querySelector('input[type="checkbox"]:checked');
  if(checkbox !== null){
    return true;
  } else {
    activitySection.appendChild(checkboxMsg).innerHTML = "Please select at least one activity";
    return false;
  } 

}

console.log(checkActivityValid());
// Form validation section

//shows an error if name is left empty

const checkName = () => {
  let target = inputName;
  let errorElement = document.querySelector(target.dataset.invalidElement);
  let invalidMessage = target.dataset.invalidMessage;

  if(target.value.length > 0 ){
    target.style.borderColor = "green";
    errorElement.innerHTML = " ";
    return true;
  } else {
    target.style.borderColor = "red";
    errorElement.innerHTML = `<span style ='color: red;'>${invalidMessage}</span>`;
    return false;
  }
}

const validateName = (event) => {
  event.preventDefault();
  checkName();
}

inputName.addEventListener('blur', validateName);
inputName.addEventListener('keyup', validateName);
console.log(checkName());

//shows an error if empty or not a valid email format
const checkEmail = () => {
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
}

const validateEmail = (event) => {
  event.preventDefault();
  checkEmail();
}
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('keyup', validateEmail);
console.log(checkEmail());

//payment selection
bitcoinOpt.style.display = 'none';
payPalOpt.style.display = 'none';
chooseCredit.selected = true;

//hides payment options until one is selected. Credit is displayed by default
paymentMenu.addEventListener('change', e => {
  payPalOpt.style.display = 'none';
  creditCardOpt.style.display = 'none';
  bitcoinOpt.style.display = 'none';

  if(paymentMenu.value === "paypal" ){
    payPalOpt.style.display = 'block';
  }else if(paymentMenu.value === "bitcoin"){
    bitcoinOpt.style.display = 'block';
  } else {
    creditCardOpt.style.display = 'block';
  }
});

//credit card validation
let creditCardNum = document.getElementById("cc-num");
let creditCardZip = document.getElementById("zip");
let creditCardCvv = document.getElementById("cvv");

const checkCardNum = () => {
  creditCardNum.style.borderColor = "green";
  errorCardNum.innerHTML = " ";

  if( paymentMenu.value !== "credit card" ) {
    return true;
  }

  if(creditCardNum.value.length === 0){
    errorCardNum.innerHTML = "<span style ='color: red;'>" +"Please enter a valid card number</span>"
    creditCardNum.style.borderColor = "red";
    return false;
  } else if(/^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/.test(creditCardNum.value) !== true){
    errorCardNum.innerHTML = "<span style ='color: red;'>" +"Please enter a valid card number</span>"
    creditCardNum.style.borderColor = "red";
    return false;
  } else {
    return true;
  }
}

const validateCardNum = (event) => {
  event.preventDefault();
  checkCardNum();
}
creditCardNum.addEventListener('keyup', validateCardNum);
console.log(checkCardNum());

const checkZip = () => {
    creditCardZip.style.borderColor = "green";
    errorZip.innerHTML = " ";

    if( paymentMenu.value !== "credit card" ) {
        return true;
      }

    if(creditCardZip.value.length === 0){
      errorZip.innerHTML = "<span style ='color: red;'>" +"Please enter a zipcode</span>"
      creditCardZip.style.borderColor = "red";
      return false;
    }else if(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(creditCardZip.value) !== true){
      errorZip.innerHTML = "<span style ='color: red;'>" +"Please enter a valid zip code</span>"
      creditCardZip.style.borderColor = "red";
      return false;
    } else {
      return true;
    }
}
const validateZip = (event) => {
    event.preventDefault();
    checkZip();
}
creditCardZip.addEventListener('keyup', validateZip);
console.log(checkZip());

const checkCvv = () => {

    creditCardCvv.style.borderColor = "green";
    errorCvv.innerHTML = " ";

    if( paymentMenu.value !== "credit card" ) {
        return true;
      }
 
    if(creditCardCvv.value.length === 0){
      errorCvv.innerHTML = "<span style ='color: red;'>" +"Please enter a CVV</span>"
      creditCardCvv.style.borderColor = "red";
      return false;
    } else if(/(^\d{3}$)/.test(creditCardCvv.value) !== true){
      errorCvv.innerHTML = "<span style ='color: red;'>" +"Please enter a valid CVV</span>"
      creditCardCvv.style.borderColor = "red";
      return false;
    } else {
      return true;
    }
}

const validateCvv = (event) =>{
    event.preventDefault();
    checkCvv();
}
creditCardCvv.addEventListener('keyup', validateCvv);
console.log(checkCvv());


//Form validation submit handler
const form = document.getElementById('form');
const isFormValid = () => {
  let isUserNameValid = checkName(),
    isEmailValid = checkEmail(), 
    isActivityValid = checkActivityValid(),
    isCardValid = checkCardNum(),
    isZipValid = checkZip(),
    isCvvValid = checkCvv();

  if(isUserNameValid && isEmailValid && isActivityValid && isCardValid
    && isZipValid && isCvvValid) {
    return true;
  } else {
      return false;
  }
}
console.log(isFormValid())
submitButton.addEventListener('click', (e) => {
    if (isFormValid()){
        return true
    } else{
        e.preventDefault();
    }
});



























