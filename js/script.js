
const otherJob = document.querySelector('#other-title');
const shirtColor = document.querySelector('#color');
const pickTheme = document.createElement("option");
const jsPuns = document.querySelector("#jsPuns");
const heartJS = document.querySelector("#heartJS");
const shirtTheme = document.querySelector("#design");
const jsPunsCol = document.querySelector("#js-puns");
const heartJSCol = document.querySelector("#heart-js");



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
        pickTheme.selected = true;
        shirtColor.add(pickTheme);
        shirtColor.setAttribute("disabled", false);

    function showSel(){
        console.log(shirtTheme.value);
          let current_value = shirtTheme.value;
            if (current_value === "js puns"){
                heartJSCol.hidden = true;
                jsPunsCol.hidden = false;
                jsPunsCol.selected = true;
                pickTheme.remove();
                pickTheme.selected = false;
                shirtColor.removeAttribute("disabled", true);
            } else if (current_value === 'heart js'){
                jsPunsCol.hidden = true;
                heartJSCol.hidden = false;
                heartJSCol.selected = true;
                pickTheme.remove();
                pickTheme.selected = false;
                shirtColor.removeAttribute("disabled", true);
            } else if(current_value === "Select Theme") {
                shirtColor.setAttribute("disabled", false);
                shirtColor.add(pickTheme);
                pickTheme.selected = true;

            }
        
    }

        //if "js puns" or "I heart JS" is selected use change handler to make the "colors" menu update
        shirtTheme.addEventListener('change', () => {
               showSel();

        });

        
    


