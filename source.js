let element = document.getElementById("btn");
element.addEventListener("click", calculateDifference);

function calculateDifference() {
    const givenDate = document.getElementsByClassName("user")[0].value;
    const currentDate = new Date();
    const pastDate = new Date(givenDate);
    
    let years = currentDate.getFullYear() - pastDate.getFullYear();
    let months = currentDate.getMonth() - pastDate.getMonth();
    let days = currentDate.getDate() - pastDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    let result = {
        years: years,
        months: months,
        days: days
    };

    // Display the result in the paragraph element
    let outputElement = document.getElementsByClassName("result")[0];
    outputElement.textContent = `Years: ${result.years} Months: ${result.months} Days: ${result.days}`;
}
