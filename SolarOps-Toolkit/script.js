
function calculatePR() {

    // Step 1: Get values entered by the user

    const capacity = Number(
        document.getElementById("capacity").value
    );

    const generation = Number(
        document.getElementById("generation").value
    );

    const irradiation = Number(
        document.getElementById("irradiation").value
    );


    // Step 2: Find the result display area

    const result = document.getElementById("result");


    // Step 3: Check whether the inputs are valid

    if (
        !Number.isFinite(capacity) ||
        !Number.isFinite(generation) ||
        !Number.isFinite(irradiation) ||
        capacity <= 0 ||
        generation < 0 ||
        irradiation <= 0
    ) {

        result.innerHTML =
            "<p>Please enter valid positive capacity and irradiation values, and a non-negative generation value.</p>";

        return;
    }


    // Step 4: Calculate Final Yield

    const finalYield = generation / capacity;


    // Step 5: Calculate Reference Yield

    const referenceYield = irradiation;


    // Step 6: Calculate Performance Ratio

    const pr = (finalYield / referenceYield) * 100;


    // Step 7: Display the result

    result.innerHTML = `
        <h4>Solar Plant Performance Ratio</h4>

        <div class="pr-value">
            ${pr.toFixed(2)}%
        </div>

        <p>Final Yield: ${finalYield.toFixed(2)} kWh/kWp</p>

        <p>Reference Yield: ${referenceYield.toFixed(2)} kWh/kWp</p>
    `;

}
function calculateCUF() {

    // Step 1: Get input values

    const capacityInput =
        document.getElementById("cuf-capacity").value.trim();

    const generationInput =
        document.getElementById("cuf-generation").value.trim();

    const daysInput =
        document.getElementById("cuf-days").value.trim();

    const capacity = Number(capacityInput);
    const generation = Number(generationInput);
    const days = Number(daysInput);

    // Step 2: Select the result area

    const result = document.getElementById("cuf-result");

    // Step 3: Validate inputs

    if (
        capacityInput === "" ||
        generationInput === "" ||
        daysInput === "" ||
        !Number.isFinite(capacity) ||
        !Number.isFinite(generation) ||
        !Number.isFinite(days) ||
        capacity <= 0 ||
        generation < 0 ||
        days <= 0 ||
        !Number.isInteger(days)
    ) {

        result.innerHTML =
            "<p>Please enter a valid capacity, generation and whole number of days.</p>";

        return;
    }

    // Step 4: Calculate total hours

    const totalHours = days * 24;

    // Step 5: Calculate maximum possible energy

    const possibleGeneration = capacity * totalHours;

    // Step 6: Calculate CUF

    const cuf = (generation / possibleGeneration) * 100;

    // Step 7: Display result

    result.innerHTML = `
        <h4>Solar Plant Capacity Utilisation Factor</h4>

        <div class="pr-value">
            ${cuf.toFixed(2)}%
        </div>

        <p>Total Hours: ${totalHours}</p>

        <p>Possible Generation: 
        ${possibleGeneration.toFixed(2)} kWh</p>

        <p>Actual Generation: 
        ${generation.toFixed(2)} kWh</p>
    `;
}
function calculateDCAC() {

    // Step 1: Get input values

    const dcInput =
        document.getElementById("dc-capacity").value.trim();

    const acInput =
        document.getElementById("ac-capacity").value.trim();

    const dcCapacity = Number(dcInput);
    const acCapacity = Number(acInput);

    // Step 2: Find result area

    const result = document.getElementById("dcac-result");

    // Step 3: Validate inputs

    if (
        dcInput === "" ||
        acInput === "" ||
        !Number.isFinite(dcCapacity) ||
        !Number.isFinite(acCapacity) ||
        dcCapacity <= 0 ||
        acCapacity <= 0
    ) {

        result.innerHTML =
            "<p>Please enter valid positive DC and AC capacities.</p>";

        return;
    }

    // Step 4: Calculate DC/AC ratio

    const ratio = dcCapacity / acCapacity;

    // Step 5: Calculate DC oversizing percentage

    const oversizing = (ratio - 1) * 100;

    // Step 6: Display result

    result.innerHTML = `
        <h4>Solar DC/AC Ratio</h4>

        <div class="pr-value">
            ${ratio.toFixed(2)}
        </div>

        <p>DC Capacity: ${dcCapacity.toFixed(2)} kWp</p>

        <p>AC Capacity: ${acCapacity.toFixed(2)} kW</p>

        <p>DC Oversizing: ${oversizing.toFixed(2)}%</p>
    `;
}