// Function to update the qualification status based on button clicks
function updateQualificationStatus() {
  // Get the elements representing the Yes buttons
  var yesButton1 = document.getElementById("yesButton1");
  var yesButton2 = document.getElementById("yesButton2");

  // Get the elements representing the No buttons
  var noButton1 = document.getElementById("noButton1");
  var noButton2 = document.getElementById("noButton2");

  // Get the qualification badge element
  var qualificationBadge = document.getElementById("qualification-badge1");

  // Add click event listeners to the Yes buttons
  yesButton1.addEventListener("click", function (event) {
    handleButtonClick(event, yesButton1, noButton1);
  });

  yesButton2.addEventListener("click", function (event) {
    handleButtonClick(event, yesButton2, noButton2);
  });

  // Add click event listeners to the No buttons
  noButton1.addEventListener("click", function (event) {
    handleButtonClick(event, noButton1, yesButton1);
  });

  noButton2.addEventListener("click", function (event) {
    handleButtonClick(event, noButton2, yesButton2);
  });

  // Function to handle button clicks
  function handleButtonClick(event, clickedButton, otherButton) {
    // Remove the "clicked" class from the other button in the pair
    otherButton.classList.remove("clicked");

    // Toggle the "clicked" class for the clicked button
    clickedButton.classList.toggle("clicked");

    // Get the state of Yes buttons
    var isYesButton1Clicked = yesButton1.classList.contains("clicked");
    var isYesButton2Clicked = yesButton2.classList.contains("clicked");

    // Get the state of No buttons
    var isNoButton1Clicked = noButton1.classList.contains("clicked");
    var isNoButton2Clicked = noButton2.classList.contains("clicked");

    // Check conditions and update the qualification status and background color
    if (isYesButton1Clicked && isYesButton2Clicked) {
      qualificationBadge.textContent = "You Appear to Qualify";
      qualificationBadge.style.backgroundColor = "rgb(134, 191, 139)";
    } else if (isNoButton1Clicked || isNoButton2Clicked) {
      qualificationBadge.textContent = "You Don't Appear to Qualify";
      qualificationBadge.style.backgroundColor = "rgb(219, 14, 2)";
    } else {
      // If neither condition is met, reset the qualification status and background color
      qualificationBadge.textContent = "Qualification Pending";
      qualificationBadge.style.backgroundColor = "";
    }
  }
}

// Call the function to set up the event listeners
updateQualificationStatus();

// for second section logic ========================:

var qualificationBadge = document.getElementById("qualification-badge");
var yesButton3 = document.getElementById("yesButton3");
var yesButton4 = document.getElementById("yesButton4");

// on left button
function handleButtonClick(clickedId, otherId) {
  var clickedButton = document.getElementById(clickedId);
  var otherButton = document.getElementById(otherId);

  clickedButton.classList.add("clicked");

  otherButton.classList.remove("clicked");

  return false;
}

// Attach event listeners to the buttons
document.getElementById("yesButton3").addEventListener("click", function () {
  handleButtonClick("yesButton3", "noButton3");
  // qualificationBadgeChanged();
  checkCombination();
});

document.getElementById("noButton3").addEventListener("click", function () {
  handleButtonClick("noButton3", "yesButton3");
  // qualificationBadgeChanged();
  checkCombination();
});

document.getElementById("noButton4").addEventListener("click", function () {
  handleButtonClick("noButton4", "yesButton4");
  // qualificationBadgeChanged();
  checkCombination();
});

document.getElementById("yesButton4").addEventListener("click", function () {
  handleButtonClick("yesButton4", "noButton4");
  // qualificationBadgeChanged();
  checkCombination();
});

const validCombinations = [
  { year: 2022, make: "BMW", model: "Model" },
  { year: 2022, make: "BMW", model: "i4 Gran Coupe" },
  { year: 2022, make: "Chevrolet", model: "Model" },
  { year: 2022, make: "Chevrolet", model: "Bolt EV" },
  { year: 2022, make: "Chevrolet", model: "Bolt EV EUV" },
  { year: 2022, make: "Lexus", model: "Model" },
  { year: 2022, make: "Lexus", model: "NX Plug-In Hybrid" },
  { year: 2022, make: "Lucid", model: "Model" },
  { year: 2022, make: "Lucid", model: "Air (All Models)" },
  { year: 2022, make: "Mercedes_Benz", model: "Model" },
  { year: 2022, make: "Mercedes_Benz", model: "EQB SUV (All Models)" },
  { year: 2022, make: "Mercedes_Benz", model: "EQS Sedan (All Models)" },
  { year: 2022, make: "Porsche", model: "Model" },
  { year: 2022, make: "Porsche", model: "Cayenne E-Hybrid (All Models)" },
  { year: 2022, make: "Porsche", model: "Panamera E-Hybrid (All Models)" },
  { year: 2022, make: "Porsche", model: "Taycan (All Models)" },
  { year: 2022, make: "Rivian", model: "Model" },
  { year: 2022, make: "Rivian", model: "EDV 700" },
  { year: 2022, make: "Rivian", model: "R1S" },
  { year: 2022, make: "Rivian", model: "R1T" },
  { year: 2022, make: "Subaru", model: "Model" },
  { year: 2022, make: "Subaru", model: "Crosstrek Hybrid" },
  { year: 2022, make: "Volvo", model: "Model" },
  { year: 2022, make: "Volvo", model: "C40 Recharge" },
  { year: 2022, make: "Volvo", model: "S90" },
  { year: 2022, make: "Volvo", model: "V60" },
  { year: 2022, make: "Volvo", model: "XC40 Recharge" },
  { year: 2022, make: "Volvo", model: "XC60" },
  { year: 2022, make: "Volvo", model: "XC90" },
  { year: 2022, make: "Audi", model: "Model" },
  { year: 2022, make: "Audi", model: "e-tron" },
  { year: 2022, make: "Audi", model: "e-tron Sportback" },
  { year: 2022, make: "Audi", model: "Q5 TFSI e Quattro" },
  { year: 2022, make: "Mitsubishi", model: "Model" },
  { year: 2022, make: "Mitsubishi", model: "Outlander PHEV" },
  { year: 2022, make: "Nissan", model: "Model" },
  { year: 2022, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2022, make: "Polestar", model: "Model" },
  { year: 2022, make: "Polestar", model: "Polestar 2" },
  { year: 2022, make: "Tesla", model: "Model" },
  { year: 2022, make: "Tesla", model: "Model 3" },
  { year: 2022, make: "Tesla", model: "Model Y" },
  { year: 2022, make: "Toyota", model: "Model" },
  { year: 2022, make: "Toyota", model: "Mirai" },
  { year: 2022, make: "Toyota", model: "Prius Prime Plug-In Hybrid" },
  { year: 2022, make: "Toyota", model: "RAV4 Prime Plug-In Hybrid" },
  { year: 2022, make: "Volkswagen", model: "Model" },
  { year: 2022, make: "Volkswagen", model: "ID.4 (All Models)" },

  { year: 2021, make: "Audi", model: "Model" },
  { year: 2021, make: "Audi", model: "A7 TFSI e Quattro" },
  { year: 2021, make: "Audi", model: "A8 L 60 TFSI e Quattro" },
  { year: 2021, make: "Audi", model: "e-tron" },
  { year: 2021, make: "Audi", model: "e-tron Sportback" },
  { year: 2021, make: "Audi", model: "Q5 TFSI e Quattro" },
  { year: 2021, make: "Bentley", model: "Model" },
  { year: 2021, make: "Bentley", model: "Bentayga Hybrid SUV" },
  { year: 2021, make: "BMW", model: "Model" },
  { year: 2021, make: "BMW", model: "330e" },
  { year: 2021, make: "BMW", model: "330e xDrive" },
  { year: 2021, make: "BMW", model: "530e" },
  { year: 2021, make: "BMW", model: "530e xDrive" },
  { year: 2021, make: "BMW", model: "745e xDrive" },
  { year: 2021, make: "BMW", model: "i3 Sedan" },
  { year: 2021, make: "BMW", model: "i3 Sedan with Range Extender" },
  { year: 2021, make: "BMW", model: "i3s Sedan" },
  { year: 2021, make: "BMW", model: "i3s Sedan with Range Extender" },
  { year: 2021, make: "BMW", model: "X3 xDrive30e" },
  { year: 2021, make: "BMW", model: "X5 xDrive45e" },
  { year: 2021, make: "Chevrolet", model: "Model" },
  { year: 2021, make: "Chevrolet", model: "Bolt" },
  { year: 2021, make: "Chrysler", model: "Model" },
  { year: 2021, make: "Chrysler", model: "Pacifica PHEV" },
  { year: 2021, make: "MINI", model: "Model" },
  { year: 2021, make: "MINI", model: "Cooper S E Countryman ALL4" },
  { year: 2021, make: "MINI", model: "Cooper S E Hardtop" },
  { year: 2021, make: "Mitsubishi", model: "Model" },
  { year: 2021, make: "Mitsubishi", model: "Outlander PHEV" },
  { year: 2021, make: "Nissan", model: "Model" },
  { year: 2021, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2021, make: "Ford", model: "Model" },
  { year: 2021, make: "Ford", model: "Mustang Mach-E"},
  { year: 2021, make: "Ford", model: "Escape Plug-in Hybrid"},
  { year: 2021, make: "Honda", model: "Model" },
  { year: 2021, make: "Honda", model: "Clarity Plug-in Hybrid"},
  { year: 2021, make: "Kia", model: "Model" },
  { year: 2021, make: "Kia", model: "Niro EV" },
  { year: 2021, make: "Kia", model: "Niro PHEV" },
  { year: 2021, make: "Hyundai", model: "Model" },
  { year: 2021, make: "Hyundai", model: "Ioniq Electric Battery Vehicle"},
  { year: 2021, make: "Hyundai", model: "Kona Electric Vehicle" },
  { year: 2021, make: "Hyundai", model: "Nexo Blue Fuel Cell Vehicle" },
  { year: 2021, make: "Hyundai", model: "Nexo Fuel Cell Vehicle" },
  { year: 2021, make: "Jeep", model: "Model" },
  { year: 2021, make: "Jeep", model: "Wrangler 4xe" },
  { year: 2021, make: "Lincoln", model: "Model" },
  { year: 2021, make: "Lincoln", model: "Aviator Grand Touring" },
  { year: 2021, make: "Lincoln", model: "Corsair Grand Touring" },
  { year: 2021, make: "Polestar", model: "Model" },
  { year: 2021, make: "Polestar", model: "Polestar 1" },
  { year: 2021, make: "Polestar", model: "Polestar 2" },
  { year: 2021, make: "Porsche", model: "Model" },
  { year: 2021, make: "Porsche", model: "Cayenne E-Hybrid (All Models)" },
  { year: 2021, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2021, make: "Porsche", model: "Taycan (All Models)" },
  { year: 2021, make: "Subaru", model: "Model" },
  { year: 2021, make: "Subaru", model: "Crosstrek Plug-In Hybrid" },
  { year: 2021, make: "Toyota", model: "Model" },
  { year: 2021, make: "Toyota", model: "Prius Prime Plug-In Hybrid" },
  { year: 2021, make: "Toyota", model: "RAV4 Prime Plug-In Hybrid" },
  { year: 2021, make: "Toyota", model: "Mirai" },
  { year: 2021, make: "Tesla", model: "Model" },
  { year: 2021, make: "Tesla", model: "Model 3" },
  { year: 2021, make: "Tesla", model: "Model S" },
  { year: 2021, make: "Tesla", model: "Model X" },
  { year: 2021, make: "Tesla", model: "Model Y" },
  { year: 2021, make: "Volkswagen", model: "Model" },
  { year: 2021, make: "Volkswagen", model: "ID.4 (All Models)" },
  { year: 2021, make: "Volvo", model: "Model" },
  { year: 2021, make: "Volvo", model: "XC40 Recharge" },
  { year: 2021, make: "Volvo", model: "S60" },
  { year: 2021, make: "Volvo", model: "S90" },
  { year: 2021, make: "Volvo", model: "V60" },
  { year: 2021, make: "Volvo", model: "XC60" },
  { year: 2021, make: "Volvo", model: "XC90" },

  { year: 2020, make: "Audi", model: "Model" },
  { year: 2020, make: "Audi", model: "A8L PHEV" },
  { year: 2020, make: "Audi", model: "e-tron Sportback" },
  { year: 2020, make: "Audi", model: "Q5 PHEV" },
  { year: 2020, make: "Bentley", model: "Model" },
  { year: 2020, make: "Bentley", model: "Bentayga Hybrid SUV" },
  { year: 2020, make: "BMW", model: "Model" },
  { year: 2020, make: "BMW", model: "745e xDrive" },
  { year: 2020, make: "BMW", model: "X3 xDrive30e" },
  { year: 2020, make: "BMW", model: "530e" },
  { year: 2020, make: "BMW", model: "530e xDrive" },
  { year: 2020, make: "BMW", model: "i3 Sedan" },
  { year: 2020, make: "BMW", model: "i3 Sedan with Range Extender" },
  { year: 2020, make: "BMW", model: "i3s Sedan" },
  { year: 2020, make: "BMW", model: "i3s Sedan with Range Extender" },
  { year: 2020, make: "BMW", model: "i8 Roadster" },
  { year: 2020, make: "Chevrolet", model: "Model" },
  { year: 2020, make: "Chevrolet", model: "Bolt" },
  { year: 2020, make: "Chrysler", model: "Model" },
  { year: 2020, make: "Chrysler", model: "Pacifica PHEV" },
  { year: 2020, make: "Ford", model: "Model" },
  { year: 2020, make: "Ford", model: "Fusion Energi" },
  { year: 2020, make: "Ford", model: "Escape Plug-in Hybrid" },
  { year: 2020, make: "Honda", model: "Model" },
  { year: 2020, make: "Honda", model: "Clarity Plug-in Hybrid" },
  { year: 2020, make: "Hyundai", model: "Model" },
  { year: 2020, make: "Hyundai", model: "Ioniq Electric Battery Vehicle" },
  { year: 2020, make: "Hyundai", model: "Kona Electric Vehicle" },
  { year: 2020, make: "Hyundai", model: "Nexo Blue Fuel Cell Vehicle" },
  { year: 2020, make: "Hyundai", model: "Nexo Fuel Cell Vehicle" },
  { year: 2020, make: "Kia", model: "Model" },
  { year: 2020, make: "Kia", model: "Niro EV" },
  { year: 2020, make: "Kia", model: "Niro PHEV" },
  { year: 2020, make: "Kia", model: "Optima PHEV" },
  { year: 2020, make: "Kia", model: "Soul EV" },
  { year: 2020, make: "Lincoln", model: "Model" },
  { year: 2020, make: "Lincoln", model: "Aviator Grand Touring" },
  { year: 2020, make: "Mercedes_Benz", model: "Model" },
  { year: 2020, make: "Mercedes_Benz", model: "GLC350e 4matic EQ" },
  { year: 2020, make: "Mercedes_Benz", model: "S560e EQ PHEV" },
  { year: 2020, make: "Mitsubishi", model: "Model" },
  { year: 2020, make: "Mitsubishi", model: "Outlander PHEV" },
  { year: 2020, make: "MINI", model: "Model" },
  { year: 2020, make: "MINI", model: "Cooper S E Hardtop" },
  { year: 2020, make: "MINI", model: "Cooper S E Countryman ALL4" },
  { year: 2020, make: "Nissan", model: "Model" },
  { year: 2020, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2020, make: "Polestar", model: "Model" },
  { year: 2020, make: "Polestar", model: "Polestar 1" },
  { year: 2020, make: "Porsche", model: "Model" },
  { year: 2020, make: "Porsche", model: "Taycan (All EV Models)" },
  { year: 2020, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2020, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2020, make: "Porsche", model: "Taycan (All Models)" },
  { year: 2020, make: "Subaru", model: "Model" },
  { year: 2020, make: "Subaru", model: "Crosstrek Plug-In Hybrid" },
  { year: 2020, make: "Tesla", model: "Model" },
  { year: 2020, make: "Tesla", model: "Model Y" },
  { year: 2020, make: "Tesla", model: "Model 3" },
  { year: 2020, make: "Tesla", model: "Model S" },
  { year: 2020, make: "Tesla", model: "Model X" },
  { year: 2020, make: "Toyota", model: "Model" },
  { year: 2020, make: "Toyota", model: "Mirai" },
  { year: 2020, make: "Toyota", model: "Prius Prime Plug-In Hybrid" },
  { year: 2020, make: "Volvo", model: "Model" },
  { year: 2020, make: "Volvo", model: "V60" },
  { year: 2020, make: "Volvo", model: "S60" },
  { year: 2020, make: "Volvo", model: "S90" },
  { year: 2020, make: "Volvo", model: "XC60" },
  { year: 2020, make: "Volvo", model: "XC90" },

  { year: 2019, make: "Audi", model: "Model" },
  { year: 2019, make: "Audi", model: "e-tron" },
  { year: 2019, make: "BMW", model: "Model" },
  { year: 2019, make: "BMW", model: "530e" },
  { year: 2019, make: "BMW", model: "530e xDrive" },
  { year: 2019, make: "BMW", model: "740e xDrive" },
  { year: 2019, make: "BMW", model: "i3 Sedan" },
  { year: 2019, make: "BMW", model: "i3 Sedan with Range Extender" },
  { year: 2019, make: "BMW", model: "i3s Sedan" },
  { year: 2019, make: "BMW", model: "i3s Sedan with Range Extender" },
  { year: 2019, make: "BMW", model: "i8 Roadster" },
  { year: 2019, make: "Chevrolet", model: "Model" },
  { year: 2019, make: "Chevrolet", model: "Volt" },
  { year: 2019, make: "Chrysler", model: "Model" },
  { year: 2019, make: "Chrysler", model: "Pacifica PHEV" },
  { year: 2019, make: "Fiat", model: "Model" },
  { year: 2019, make: "Fiat", model: "Fusion Energi" },
  { year: 2019, make: "Ford", model: "Model" },
  { year: 2019, make: "Ford", model: "Fusion Energi" },
  { year: 2019, make: "Honda", model: "Model" },
  { year: 2019, make: "Honda", model: "Clarity Plug-in Hybrid" },
  { year: 2019, make: "Hyundai", model: "Model" },
  { year: 2019, make: "Hyundai", model: "Kona Electric Vehicle" },
  { year: 2019, make: "Hyundai", model: "Nexo Blue Fuel Cell Vehicle" },
  { year: 2019, make: "Hyundai", model: "Nexo Fuel Cell Vehicle" },
  { year: 2019, make: "Hyundai", model: "Ioniq Electric Battery Vehicle" },
  { year: 2019, make: "Hyundai", model: "Sonata Plug-In Hybrid Vehicle" },
  { year: 2019, make: "Kia", model: "Model" },
  { year: 2019, make: "Kia", model: "Niro EV" },
  { year: 2019, make: "Kia", model: "Niro PHEV" },
  { year: 2019, make: "Kia", model: "Optima PHEV" },
  { year: 2019, make: "Kia", model: "Soul EV" },
  { year: 2019, make: "Mercedes_Benz", model: "Model" },
  { year: 2019, make: "Mercedes_Benz", model: "GLC350e 4matic" },
  { year: 2019, make: "Mitsubishi", model: "Model" },
  { year: 2019, make: "Mitsubishi", model: "Outlander PHEV" },
  { year: 2019, make: "MINI", model: "Model" },
  { year: 2019, make: "MINI", model: "Cooper S E Countryman ALL4" },
  { year: 2019, make: "Nissan", model: "Model" },
  { year: 2019, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2019, make: "Porsche", model: "Model" },
  { year: 2019, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2019, make: "Porsche", model: "Panamera E-Hybrid (All models)" },	
  { year: 2019, make: "smart_USA", model: "Model" },
  { year: 2019, make: "smart_USA", model: "EQ Fortwo Cabrio" },
  { year: 2019, make: "smart_USA", model: "EQ Fortwo Coupe" },
  { year: 2019, make: "Tesla", model: "Model" },
  { year: 2019, make: "Tesla", model: "Model 3" },
  { year: 2019, make: "Tesla", model: "Model S" },
  { year: 2019, make: "Tesla", model: "Model X" },
  { year: 2019, make: "Toyota", model: "Model" },
  { year: 2019, make: "Toyota", model: "Mirai" },
  { year: 2019, make: "Toyota", model: "Prius Prime Plug-In Hybrid" },
  { year: 2019, make: "Subaru", model: "Model" },
  { year: 2019, make: "Subaru", model: "Crosstrek Plug-In Hybrid" },
  { year: 2019, make: "Volkswagen", model: "Model" },
  { year: 2019, make: "Volkswagen", model: "e-Golf" },
  { year: 2019, make: "Volvo", model: "Model" },
  { year: 2019, make: "Volvo", model: "S60" },
  { year: 2019, make: "Volvo", model: "S90" },
  { year: 2019, make: "Volvo", model: "XC60" },
  { year: 2019, make: "Volvo", model: "XC90" },
  { year: 2018, make: "Audi", model: "Model" },
  { year: 2018, make: "Audi", model: "A3 e-tron" },
  { year: 2018, make: "BMW", model: "Model" },
  { year: 2018, make: "BMW", model: "530e" },
  { year: 2018, make: "BMW", model: "330e" },
  { year: 2018, make: "BMW", model: "530e xDrive" },
  { year: 2018, make: "BMW", model: "740e xDrive" },
  { year: 2018, make: "BMW", model: "i3s Sedan" },
  { year: 2018, make: "BMW", model: "i3s Sedan with Range Extender" },
  { year: 2018, make: "BMW", model: "X5 xDrive40e" },
  { year: 2018, make: "Chevrolet", model: "Model" },
  { year: 2018, make: "Chevrolet", model: "Volt" },
  { year: 2018, make: "Chrysler", model: "Model" },
  { year: 2018, make: "Chrysler", model: "Pacifica PHEV" },
  { year: 2018, make: "Fiat", model: "Model" },
  { year: 2018, make: "Fiat", model: "500e" },
  { year: 2018, make: "Ford", model: "Model" },
  { year: 2018, make: "Ford", model: "Fusion Energi" },
  { year: 2018, make: "Ford", model: "Focus Electric" },
  { year: 2018, make: "Honda", model: "Model" },
  { year: 2018, make: "Honda", model: "Clarity Plug-in Hybrid" },
  { year: 2018, make: "Hyundai", model: "Model" },
  { year: 2018, make: "Hyundai", model: "Ioniq Plug-In Hybrid Electric Vehicle" },
  { year: 2018, make: "Hyundai", model: "Sonata Plug-In Hybrid Vehicle" },
  { year: 2018, make: "Kia", model: "Model" },
  { year: 2018, make: "Kia", model: "Niro PHEV" },
  { year: 2018, make: "Kia", model: "Optima PHEV" },
  { year: 2018, make: "Kia", model: "Soul EV" },
  { year: 2018, make: "Mercedes_Benz", model: "Model" },
  { year: 2018, make: "Mercedes_Benz", model: "GLC350e 4matic" },
  { year: 2018, make: "Mercedes_Benz", model: "GLE550e 4matic PHEV" },
  { year: 2018, make: "MINI", model: "Model" },
  { year: 2018, make: "MINI", model: "Cooper S E Countryman ALL4" },
  { year: 2018, make: "Mitsubishi", model: "Model" },
  { year: 2018, make: "Mitsubishi", model: "Outlander PHEV" },
  { year: 2018, make: "Nissan", model: "Model" },
  { year: 2018, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2018, make: "Porsche", model: "Model" },
  { year: 2018, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2018, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2018, make: "smart_USA", model: "Model" },
  { year: 2018, make: "smart_USA", model: "Coupe EV" },
  { year: 2018, make: "smart_USA", model: "Cabrio EV" },
  { year: 2018, make: "Tesla", model: "Model" },
  { year: 2018, make: "Tesla", model: "Model 3" },
  { year: 2018, make: "Tesla", model: "Model S" },
  { year: 2018, make: "Tesla", model: "Model X" },
  { year: 2018, make: "Toyota", model: "Model" },
  { year: 2018, make: "Toyota", model: "Mirai" },
  { year: 2018, make: "Toyota", model: "Prius Prime Plug-In Hybrid" },
  { year: 2018, make: "Volkswagen", model: "Model" },
  { year: 2018, make: "Volkswagen", model: "e-Golf" },
  { year: 2018, make: "Volvo", model: "Model" },
  { year: 2018, make: "Volvo", model: "S90" },
  { year: 2018, make: "Volvo", model: "XC60" },
  { year: 2018, make: "Volvo", model: "XC90" },
  { year: 2017, make: "Audi", model: "Model" },
  { year: 2017, make: "Audi", model: "A3 e-tron" },	
  { year: 2017, make: "BMW", model: "Model" },
  { year: 2017, make: "BMW", model: "740e" },
  { year: 2017, make: "BMW", model: "330e" },
  { year: 2017, make: "BMW", model: "i3 Sedan" },
  { year: 2017, make: "BMW", model: "i3 Sedan with Range Extender" },
  { year: 2017, make: "BMW", model: "i8" },
  { year: 2017, make: "BMW", model: "i8 Coupe" },
  { year: 2017, make: "BMW", model: "X5 xDrive40e" },
  { year: 2017, make: "BMW", model: "i3 (60 Ah) Sedan" },
  { year: 2017, make: "Chevrolet", model: "Model" },
  { year: 2017, make: "Chevrolet", model: "Volt" },
  { year: 2017, make: "Chrysler", model: "Model" },
  { year: 2017, make: "Chrysler", model: "Pacifica PHEV" },
  { year: 2017, make: "Fiat", model: "Model" },
  { year: 2017, make: "Fiat", model: "500e" },
  { year: 2017, make: "Ford", model: "Model" },
  { year: 2017, make: "Ford", model: "Fusion Energi" },
  { year: 2017, make: "Ford", model: "Focus Electric" },
  { year: 2017, make: "Ford", model: "C-Max Energi" },
  { year: 2017, make: "Hyundai", model: "Model" },
  { year: 2017, make: "Hyundai", model: "Ioniq Electric Battery Vehicle" },
  { year: 2017, make: "Hyundai", model: "Sonata Plug-In Hybrid Vehicle" },
  { year: 2017, make: "Kia", model: "Model" },
  { year: 2017, make: "Kia", model: "Optima PHEV" },
  { year: 2017, make: "Kia", model: "Soul EV" },
  { year: 2017, make: "Mercedes_Benz", model: "Model" },
  { year: 2017, make: "Mercedes_Benz", model: "B-Class EV (B250e)" },
  { year: 2017, make: "Mercedes_Benz", model: "GLE550e 4matic PHEV" },
  { year: 2017, make: "Mercedes_Benz", model: "S550e PHEV" },
  { year: 2017, make: "Mitsubishi", model: "Model" },
  { year: 2017, make: "Mitsubishi", model: "i-MiEV" },
  { year: 2017, make: "Nissan", model: "Model" },
  { year: 2017, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2017, make: "Porsche", model: "Model" },
  { year: 2017, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2017, make: "smart_USA", model: "Model" },
  { year: 2017, make: "smart_USA", model: "Coupe EV" },
  { year: 2017, make: "smart_USA", model: "Cabrio EV" },
  { year: 2017, make: "Tesla", model: "Model" },
  { year: 2017, make: "Tesla", model: "Model 3" },
  { year: 2017, make: "Tesla", model: "Model S" },
  { year: 2017, make: "Tesla", model: "Model X" },
  { year: 2017, make: "Toyota", model: "Model" },
  { year: 2017, make: "Toyota", model: "Prius Prime Plug-In Hybrid" },
  { year: 2017, make: "Toyota", model: "Mirai" },
  { year: 2017, make: "Volkswagen", model: "Model" },
  { year: 2017, make: "Volkswagen", model: "e-Golf" },	
  { year: 2017, make: "Volvo", model: "Model" },
  { year: 2017, make: "Volvo", model: "XC90" },
  { year: 2016, make: "Audi", model: "Model" },
  { year: 2016, make: "Audi", model: "A3 e-tron" },
  { year: 2016, make: "Audi", model: "A3 e-tron ultra" },
  { year: 2016, make: "BMW", model: "Model" },
  { year: 2016, make: "BMW", model: "330e" },
  { year: 2016, make: "BMW", model: "i3 Sedan" },
  { year: 2016, make: "BMW", model: "i3 Sedan with Range Extender" },
  { year: 2016, make: "BMW", model: "i8" },
  { year: 2016, make: "BMW", model: "i8 Coupe" },
  { year: 2016, make: "BMW", model: "X5 xDrive40e" },
  { year: 2016, make: "Cadillac", model: "Model" },
  { year: 2016, make: "Cadillac", model: "ELR" },
  { year: 2016, make: "Chevrolet", model: "Model" },
  { year: 2016, make: "Chevrolet", model: "Volt" },
  { year: 2016, make: "Fiat", model: "Model" },
  { year: 2016, make: "Fiat", model: "500e" },
  { year: 2016, make: "Ford", model: "Model" },
  { year: 2016, make: "Ford", model: "Fusion Energi" },
  { year: 2016, make: "Ford", model: "Focus Electric" },
  { year: 2016, make: "Ford", model: "C-Max Energi" },
  { year: 2016, make: "Hyundai", model: "Model" },
  { year: 2016, make: "Hyundai", model: "Sonata Plug-In Hybrid Vehicle" },
  { year: 2016, make: "Hyundai", model: "Sonata Plug-In Hybrid Vehicle" },
  { year: 2016, make: "Kia", model: "Model" },
  { year: 2016, make: "Kia", model: "Soul EV" },
  { year: 2016, make: "Mercedes_Benz", model: "Model" },
  { year: 2016, make: "Mercedes_Benz", model: "GLE550e 4matic PHEV" },
  { year: 2016, make: "Mercedes_Benz", model: "B-Class EV (B250e)" },
  { year: 2016, make: "Mercedes_Benz", model: "S550e PHEV" },
  { year: 2016, make: "Mitsubishi", model: "Model" },
  { year: 2016, make: "Mitsubishi", model: "i-MiEV" },
  { year: 2016, make: "Nissan", model: "Model" },
  { year: 2016, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2016, make: "Porsche", model: "Model" },
  { year: 2016, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2016, make: "smart_USA", model: "Model" },
  { year: 2016, make: "smart_USA", model: "Coupe EV" },
  { year: 2016, make: "Tesla", model: "Model" },
  { year: 2016, make: "Tesla", model: "Model X" },
  { year: 2016, make: "Tesla", model: "Model S" },
  { year: 2016, make: "Toyota", model: "Model" },
  { year: 2016, make: "Toyota", model: "Mirai" },
  { year: 2016, make: "Volkswagen", model: "Model" },
  { year: 2016, make: "Volkswagen", model: "e-Golf" },
  { year: 2016, make: "Volvo", model: "Model" },
  { year: 2016, make: "Volvo", model: "XC90" },
  { year: 2015, make: "BMW", model: "Model" },
  { year: 2015, make: "BMW", model: "i3 Sedan" },
  { year: 2015, make: "BMW", model: "i3 Sedan with Range Extender" },
  { year: 2015, make: "BMW", model: "i8" },
  { year: 2015, make: "BMW", model: "i8 Coupe" },
  { year: 2015, make: "Cadillac", model: "Model" },
  { year: 2015, make: "Cadillac", model: "ELR" },
  { year: 2015, make: "Chevrolet", model: "Model" },
  { year: 2015, make: "Chevrolet", model: "Volt" },
  { year: 2015, make: "Fiat", model: "Model" },
  { year: 2015, make: "Fiat", model: "500e" },
  { year: 2015, make: "Ford", model: "Model" },
  { year: 2015, make: "Ford", model: "Fusion Energi" },
  { year: 2015, make: "Ford", model: "Focus Electric" },
  { year: 2015, make: "Ford", model: "C-Max Energi" },
  { year: 2015, make: "Kia", model: "Model" },
  { year: 2015, make: "Kia", model: "Soul EV" },
  { year: 2015, make: "Mercedes_Benz", model: "Model" },
  { year: 2015, make: "Mercedes_Benz", model: "S550e PHEV" },
  { year: 2015, make: "Mercedes_Benz", model: "B-Class EV (B250e)" },
  { year: 2015, make: "Nissan", model: "Model" },
  { year: 2015, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2015, make: "Porsche", model: "Model" },
  { year: 2015, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2015, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2015, make: "smart_USA", model: "Model" },
  { year: 2015, make: "smart_USA", model: "Cabrio EV" },
  { year: 2015, make: "smart_USA", model: "Coupe EV" },	
  { year: 2015, make: "Tesla", model: "Model" },
  { year: 2015, make: "Tesla", model: "Model S" },
  { year: 2015, make: "Volkswagen", model: "Model" },
  { year: 2015, make: "Volkswagen", model: "e-Golf" },
  { year: 2014, make: "BMW", model: "Model" },
  { year: 2014, make: "BMW", model: "i3 Sedan" },
  { year: 2014, make: "BMW", model: "i3 Sedan with Range Extender" },
  { year: 2014, make: "BMW", model: "i8" },
  { year: 2014, make: "BMW", model: "i8 Coupe" },
  { year: 2014, make: "Cadillac", model: "Model" },
  { year: 2014, make: "Cadillac", model: "ELR" },
  { year: 2014, make: "Chevrolet", model: "Model" },
  { year: 2014, make: 'Chevrolet', model: 'Volt' },
  { year: 2014, make: "Fiat", model: "Model" },
  { year: 2014, make: "Fiat", model: "500e" },
  { year: 2014, make: "Ford", model: "Model" },
  { year: 2014, make: "Ford", model: "C-Max Energi" },
  { year: 2014, make: "Ford", model: "Focus Electric" },
  { year: 2014, make: "Ford", model: "Fusion Energi" },
  { year: 2014, make: "Mercedes_Benz", model: "Model" }, 
  { year: 2014, make: "Mercedes_Benz", model: "B-Class EV (B250e)" },  
  { year: 2014, make: "Porsche", model: "Model" },
  { year: 2014, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2014, make: "Mitsubishi", model: "Model" },
  { year: 2014, make: "Mitsubishi", model: "i-MiEV" },
  { year: 2014, make: "Nissan", model: "Model" },
  { year: 2014, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2014, make: "smart_USA", model: "Model" },
  { year: 2014, make: "smart_USA", model: "Cabrio EV" },
  { year: 2014, make: "smart_USA", model: "Coupe EV" },
  { year: 2014, make: "Tesla", model: "Model" },
  { year: 2014, make: "Tesla", model: "Model S" },
  { year: 2014, make: "Toyota", model: "Model" },
  { year: 2014, make: "Toyota", model: "RAV4 EV" },
  { year: 2013, make: "Chevrolet", model: "Model" },
  { year: 2013, make: "Chevrolet", model: "Volt" },
  { year: 2013, make: "Fiat", model: "Model" },
  { year: 2013, make: "Fiat", model: "500e" },
  { year: 2013, make: "Ford", model: "Model" },
  { year: 2013, make: "Ford", model: "C-Max Energi" },
  { year: 2013, make: "Ford", model: "Focus Electric" },
  { year: 2013, make: "Ford", model: "Fusion Energi" },
  { year: 2013, make: "Ford", model: "C-Max Energi" },
  { year: 2013, make: "Nissan", model: "Model" },
  { year: 2013, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2013, make: "smart_USA", model: "Model" },
  { year: 2013, make: "smart_USA", model: "Cabrio EV" },
  { year: 2013, make: "smart_USA", model: "Coupe EV" },
  { year: 2013, make: "Tesla", model: "Model" },
  { year: 2013, make: "Tesla", model: "Model S" },
  { year: 2013, make: "Toyota", model: "Model" },
  { year: 2013, make: "Toyota", model: "RAV4 EV" },

  { year: 2012, make: "Chevrolet", model: "Model" },
  { year: 2012, make: "Chevrolet", model: "Volt" },
  { year: 2012, make: "Mitsubishi", model: "Model" },
  { year: 2012, make: "Mitsubishi", model: "i-MiEV" },
  { year: 2012, make: "Nissan", model: "Model" },
  { year: 2012, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2012, make: "Tesla", model: "Model" },
  { year: 2012, make: "Tesla", model: "Model S" },
  { year: 2012, make: "Toyota", model: "Model" },
  { year: 2012, make: "Toyota", model: "RAV4 EV" },

  { year: 2011, make: "Chevrolet", model: "Model" },
  { year: 2011, make: "Chevrolet", model: "Volt" },
  { year: 2011, make: "Nissan", model: "Model" },
  { year: 2011, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2011, make: "Tesla", model: "Model" },
  { year: 2011, make: "Tesla", model: "Roadster" },
  { year: 2010, make: "Tesla", model: "Model" },
  { year: 2010, make: "Tesla", model: "Roadster" },
  { year: 2009, make: "Tesla", model: "Model" },
  { year: 2009, make: "Tesla", model: "Roadster" },
];

// let cominations = 1;

function checkCombination() {
  // if (document.getElementById("model").value) {
  const selectedYear = document.getElementById("year").value;
  const selectedMake = document.getElementById("make").value;
  const selectedModel = document.getElementById("model").value;

  const isCombinationValid = validCombinations.some((combination) => {
    return (
      combination.year == selectedYear &&
      combination.make == selectedMake &&
      combination.model == selectedModel
    );
  });

  // isCombinationValid && selectedModel == "Model"
  //   ? (cominations = 2)
  //   : (cominations = 3);

  var Q1andQ2Combination = document.querySelectorAll(".clicked").length;

  var isCombinationValidButton =
    yesButton3.classList.contains("clicked") &&
    yesButton4.classList.contains("clicked") &&
    isCombinationValid;

  var isCombinationValidOnlyButton =
    yesButton3.classList.contains("clicked") &&
    yesButton4.classList.contains("clicked");

  if ((selectedModel !== "Model" && selectedModel) || Q1andQ2Combination == 2) {
    if (
      (isCombinationValidButton && Q1andQ2Combination == 2) ||
      (isCombinationValidOnlyButton &&
        (selectedModel == "Model" || !selectedModel))
    ) {
      qualificationBadge.textContent = "You Appear to Qualify";
      qualificationBadge.style.backgroundColor = "rgb(134, 191, 139)";
    } else {
      qualificationBadge.textContent = "You Don't Appear to Qualify";
      qualificationBadge.style.backgroundColor = "rgb(219, 14, 2)";
    }
  }
  // }
}

// Add event listener to the button for checking the combination
document.getElementById("model").addEventListener("change", checkCombination);
document.getElementById("make").addEventListener("change", checkCombination);
document.getElementById("year").addEventListener("change", checkCombination);

// for reset button
// Define the function to reload the page
function resetPage() {
  location.reload();
}

// Get all elements with class .reset-btn
const resetButtons = document.querySelectorAll(".reset-btn");

// Attach the click event listener to each reset button
resetButtons.forEach((button) => {
  button.addEventListener("click", resetPage);
});
