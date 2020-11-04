const otherJob = document.querySelector("#other-title");
const shirtColor = document.querySelector("#color");
const pickTheme = document.createElement("option");
const shirtTheme = document.querySelector("#design");
const jsPunsCol = document.querySelector("#js-puns");
const heartJSCol = document.querySelector("#heart-js");
const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
const tomato = document.querySelector('option[value="tomato"]');



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
                    } else {
                        pickTheme.value = "pick-theme";
                        pickTheme.text = "Please select a T-shirt theme"
                        shirtColor.add(pickTheme);
                        pickTheme.selected = true;
                        pickTheme.hidden = true;
                        shirtColor.setAttribute("disabled", false);
                    }

         
        });

        
    
/*
let current_value = shirtTheme.value;
            if (current_value === "js puns"){
                heartJSCol.hidden = true;
                jsPunsCol.hidden = false;
                shirtColor.removeAttribute("disabled", true);
            } else if (current_value === 'heart js'){
                jsPunsCol.hidden = true;
                heartJSCol.hidden = false;
                shirtColor.removeAttribute("disabled", true);
            } else if(current_value === "Select Theme") {
                shirtColor.setAttribute("disabled", false);
                shirtColor.add(pickTheme);
                pickTheme.selected = true;

            }
        
*/