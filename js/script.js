        const otherJob = document.querySelector('#other-title');
        const shirtColor = document.querySelector('#color');
        const shirtTheme = document.querySelector('#design')
        const pickTheme = document.createElement("option");





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

                //if "js puns" or "I heart JS" is selected use change handler to make the "colors" menu update
                shirtTheme.addEventListener('change', () =>{
                    if (shirtTheme.option.value === "js puns"){
                        

                    } if (shirtTheme.option.value === "heart js"){

                    } else {
                        shirtColor.setAttribute("disabled", false);
                    }

                });



        

