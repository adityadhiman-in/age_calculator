let userInput = document.getElementById("birthDate");
userInput.max = new Date().toISOString().split("T")[0];

let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
    try {
        let birthDateValue = userInput.value;
        if (birthDateValue) {
            let birthDate = new Date(birthDateValue);
            let today = new Date();

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if (days < 0) {
                months--;
                let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                days += prevMonth;
            }

            if (months < 0) {
                years--;
                months += 12;
            }
            document.getElementById("age").style.display = "block"
            document.getElementById("age").innerText = `Your Age is: ${years} years, ${months} months, and ${days} days.`;
        } else {
            alert("Please enter your birth date.");
        }
    } catch (err) {
        console.error("Error calculating age:", err);
        alert("An error occurred while calculating your age. Please try again.");
    }
});
