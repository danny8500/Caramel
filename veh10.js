// Our data from an Excel sheet
const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, "Other"]; // Example years
const makes = ["Audi", "Bentley", "BMW", "Cadillac", "Chevrolet", "Chrysler", "Fiat", "Ford", "Honda", "Hyundai", "Jeep", "Kia", "Lexus", "Lincoln", "Lucid", "Mercedes Benz", "MINI", "Mitsubishi", "Nissan", "Polestar", "Porsche", "Rivian", "smart USA", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo", "Other"]; // Example makes
const models = {
    Audi: ["Model","A3 e-tron", "A3 e-tron ultra", "A7 TFSI e Quattro", "A8 L 60 TFSI e Quattro", "A8L PHEV", "e-tron", "e-tron Sportback", "Q5 PHEV", "Q5 TFSI e Quattro", "Other"],
    Bentley: ["Model", "Bentayga Hybrid SUV", "Other"],
    BMW: ["Model", "330e", "330e xDrive", "530e", "530e xDrive", "740e", "740e xDrive", "745e xDrive", "i3 (60 Ah) Sedan", "i3 Sedan", "i3 Sedan with Range Extender", "i3s Sedan", "i3s Sedan with Range Extender", "i4 Gran Coupe", "i8", "i8 Coupe", "i8 Roadster", "X3 xDrive30e", "X5 xDrive40e", "X5 xDrive45e", "Other"],
    Cadillac: ["Model", "ELR", "Other"],
    Chevrolet: ["Model", "Bolt", "Bolt EV", "Bolt EV EUV", "Spark EV", "Volt", "Other"],
    Chrysler: ["Model", "Pacifica PHEV", "Other"],
    Fiat: ["Model", "500e", "Other"],
    Ford: ["Model", "Escape Plug-in Hybrid", "Focus Electric", "C-Max Energi", "Fusion Energi", "Mustang Mach-E", "Other"],
    Honda: ["Model", "Clarity Plug-in Hybrid", "Other"],
    Hyundai: ["Model", "Ioniq Electric Battery Vehicle", "Ioniq Plug-In Hybrid Electric Vehicle", "Kona Electric Vehicle", "Nexo Blue Fuel Cell Vehicle", "Nexo Fuel Cell Vehicle", "Sonata Plug-In Hybrid Vehicle", "Other"],
    Jeep: ["Model", "Wrangler 4xe", "Other"],
    Kia: ["Model", "Niro EV", "Niro PHEV", "Optima PHEV", "Soul EV", "Other"],
    Lexus: ["Model", "NX Plug-In Hybrid"],
    Lincoln: ["Model", "Aviator Grand Touring", "Corsair Grand Touring", "Other"],
    Lucid: ["Model", "Air (All Models)", "Other"],
    "Mercedes Benz": ["Model", "B-Class EV (B250e)", "EQB SUV (All Models)", "EQS Sedan (All Models)", "GLC350e 4matic", "GLC350e 4matic EQ", "GLE550e 4matic PHEV", "S550e PHEV", "S560e EQ PHEV", "Other"],
    MINI: ["Model", "Cooper S E Countryman ALL4", "Cooper S E Hardtop", "Other"],
    Mitsubishi: ["Model", "i-MiEV", "Outlander PHEV", "Other"],
    Nissan: ["Model", "Leaf (All Models)", "Other"],
    Polestar: ["Model", "Polestar 1", "Polestar 2", "Other"],
    Porsche: ["Model", "Cayenne E-Hybrid (All models)", "Cayenne E-Hybrid (All Models)", "Panamera E-Hybrid (All models)", "Panamera E-Hybrid (All Models)", "Taycan (All EV Models)", "Taycan (All Models)", "Other"],
    Rivian: ["Model", "EDV 700", "R1S", "R1T", "Other"],
    "smart USA": ["Model", "Cabrio EV", "Coupe EV", "EQ Fortwo Cabrio", "EQ Fortwo Coupe", "Other"],
    Subaru: ["Model", "Crosstrek Hybrid", "Crosstrek Plug-In Hybrid", "Other"],
    Tesla: ["Model", "Model 3", "Model S", "Model X", "Model Y", "Roadster", "Other"],
    Toyota: ["Model", "Mirai", "Prius Prime Plug-In Hybrid", "RAV4 EV", "RAV4 Prime Plug-In Hybrid", "Other"],
    Volkswagen: ["Model", "e-Golf", "ID.4 (All Models)", "Other"],
    Volvo: ["Model", "C40 Recharge", "S60", "S90", "V60", "XC40 Recharge", "XC60", "XC90", "Other"],
  Other: ["Model"],
  Other: ["Other"],
}; 

// Populate the year dropdown
const yearDropdown = document.getElementById("year");
years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.text = year;
    yearDropdown.add(option);
});

// Populate the make dropdown
const makeDropdown = document.getElementById("make");
makes.forEach(make => {
    const option = document.createElement("option");
    option.value = make;
    option.text = make;
    makeDropdown.add(option);
});

// Populate the model dropdown based on the selected make
makeDropdown.addEventListener("change", () => {
    const selectedMake = makeDropdown.value;
    const modelDropdown = document.getElementById("model");
    modelDropdown.innerHTML = ""; // Clear previous options

    models[selectedMake].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.text = model;
        modelDropdown.add(option);
    });
});




// Add an event listener for when the user selects a model
const modelDropdown = document.getElementById("model");
modelDropdown.addEventListener("change", checkQualification);

// Function to check qualification and update the badge
function checkQualification() {
    const selectedYear = document.getElementById("year").value;
    const selectedMake = document.getElementById("make").value;
    const selectedModel = document.getElementById("model").value;

    // Use your logic to check qualification based on the selected year, make, and model
    const isQualified = checkQualificationInExcel(selectedYear, selectedMake, selectedModel);

    // Update the badge
    const qualificationBadge = document.getElementById("qualification-badge");
    qualificationBadge.textContent = isQualified ? "You Appear to Qualify" : "You Don't Appear to Qualify";
    qualificationBadge.style.backgroundColor = isQualified ? "#86bf8b" : "#db0e02";
}




function checkQualificationInExcel(year, make, model) {
    // Implement your logic to check qualification based on Excel sheet data
    // For example, you might have an array of valid combinations
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
  { year: 2022, make: "Mercedes Benz", model: "Model" },
  { year: 2022, make: "Mercedes Benz", model: "EQB SUV (All Models)" },
  { year: 2022, make: "Mercedes Benz", model: "EQS Sedan (All Models)" },
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
  { year: 2020, make: "Mercedes Benz", model: "Model" },
  { year: 2020, make: "Mercedes Benz", model: "GLC350e 4matic EQ" },
  { year: 2020, make: "Mercedes Benz", model: "S560e EQ PHEV" },
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
  { year: 2019, make: "Mercedes Benz", model: "Model" },
  { year: 2019, make: "Mercedes Benz", model: "GLC350e 4matic" },
  { year: 2019, make: "Mitsubishi", model: "Model" },
  { year: 2019, make: "Mitsubishi", model: "Outlander PHEV" },
  { year: 2019, make: "MINI", model: "Model" },
  { year: 2019, make: "MINI", model: "Cooper S E Countryman ALL4" },
  { year: 2019, make: "Nissan", model: "Model" },
  { year: 2019, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2019, make: "Porsche", model: "Model" },
  { year: 2019, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2019, make: "Porsche", model: "Panamera E-Hybrid (All models)" },	
  { year: 2019, make: "smart USA", model: "Model" },
  { year: 2019, make: "smart USA", model: "EQ Fortwo Cabrio" },
  { year: 2019, make: "smart USA", model: "EQ Fortwo Coupe" },
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
  { year: 2018, make: "Mercedes Benz", model: "Model" },
  { year: 2018, make: "Mercedes Benz", model: "GLC350e 4matic" },
  { year: 2018, make: "Mercedes Benz", model: "GLE550e 4matic PHEV" },
  { year: 2018, make: "MINI", model: "Model" },
  { year: 2018, make: "MINI", model: "Cooper S E Countryman ALL4" },
  { year: 2018, make: "Mitsubishi", model: "Model" },
  { year: 2018, make: "Mitsubishi", model: "Outlander PHEV" },
  { year: 2018, make: "Nissan", model: "Model" },
  { year: 2018, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2018, make: "Porsche", model: "Model" },
  { year: 2018, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2018, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2018, make: "smart USA", model: "Model" },
  { year: 2018, make: "smart USA", model: "Coupe EV" },
  { year: 2018, make: "smart USA", model: "Cabrio EV" },
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
  { year: 2017, make: "Mercedes Benz", model: "Model" },
  { year: 2017, make: "Mercedes Benz", model: "B-Class EV (B250e)" },
  { year: 2017, make: "Mercedes Benz", model: "GLE550e 4matic PHEV" },
  { year: 2017, make: "Mercedes Benz", model: "S550e PHEV" },
  { year: 2017, make: "Mitsubishi", model: "Model" },
  { year: 2017, make: "Mitsubishi", model: "i-MiEV" },
  { year: 2017, make: "Nissan", model: "Model" },
  { year: 2017, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2017, make: "Porsche", model: "Model" },
  { year: 2017, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2017, make: "smart USA", model: "Model" },
  { year: 2017, make: "smart USA", model: "Coupe EV" },
  { year: 2017, make: "smart USA", model: "Cabrio EV" },
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
  { year: 2016, make: "Mercedes Benz", model: "Model" },
  { year: 2016, make: "Mercedes Benz", model: "GLE550e 4matic PHEV" },
  { year: 2016, make: "Mercedes Benz", model: "B-Class EV (B250e)" },
  { year: 2016, make: "Mercedes Benz", model: "S550e PHEV" },
  { year: 2016, make: "Mitsubishi", model: "Model" },
  { year: 2016, make: "Mitsubishi", model: "i-MiEV" },
  { year: 2016, make: "Nissan", model: "Model" },
  { year: 2016, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2016, make: "Porsche", model: "Model" },
  { year: 2016, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2016, make: "smart USA", model: "Model" },
  { year: 2016, make: "smart USA", model: "Coupe EV" },
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
  { year: 2015, make: "Mercedes Benz", model: "Model" },
  { year: 2015, make: "Mercedes Benz", model: "S550e PHEV" },
  { year: 2015, make: "Mercedes Benz", model: "B-Class EV (B250e)" },
  { year: 2015, make: "Nissan", model: "Model" },
  { year: 2015, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2015, make: "Porsche", model: "Model" },
  { year: 2015, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
  { year: 2015, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2015, make: "smart USA", model: "Model" },
  { year: 2015, make: "smart USA", model: "Cabrio EV" },
  { year: 2015, make: "smart USA", model: "Coupe EV" },	
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
  { year: 2014, make: "Mercedes Benz", model: "Model" }, 
  { year: 2014, make: "Mercedes Benz", model: "B-Class EV (B250e)" },  
  { year: 2014, make: "Porsche", model: "Model" },
  { year: 2014, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
  { year: 2014, make: "Mitsubishi", model: "Model" },
  { year: 2014, make: "Mitsubishi", model: "i-MiEV" },
  { year: 2014, make: "Nissan", model: "Model" },
  { year: 2014, make: "Nissan", model: "Leaf (All Models)" },
  { year: 2014, make: "smart USA", model: "Model" },
  { year: 2014, make: "smart USA", model: "Cabrio EV" },
  { year: 2014, make: "smart USA", model: "Coupe EV" },
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
  { year: 2013, make: "smart USA", model: "Model" },
  { year: 2013, make: "smart USA", model: "Cabrio EV" },
  { year: 2013, make: "smart USA", model: "Coupe EV" },
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
        // Add more valid combinations as needed
    ];

    // Check if the selected combination is in the valid combinations array
    return validCombinations.some(combination => 
        combination.year == year && combination.make == make && combination.model == model
    );
}
