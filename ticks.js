document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate the total payable based on user inputs
    function calculateTotalPayable() {
      // Retrieve the number of tickets selected for each category
      const slAdultTickets = parseInt(document.getElementById("AdultSL").value) || 0;
      const slChildTickets = parseInt(document.getElementById("ChildSL").value) || 0;
      const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdults").value) || 0;
      const foreignerChildTickets = parseInt(document.getElementById("foreignerChilds").value) || 0;
      const infantTickets = parseInt(document.getElementById("infants").value) || 0;
  
      // Retrieve the selected time slot
      const selectedTimeSlot = document.getElementById("timeSlot").value;
      const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06";
  
      // Retrieve the pricing details for each ticket type
      const slAdultNormalCharge = 4;
      const slAdultPeakCharge = 6;
      const slChildNormalCharge = 2;
      const slChildPeakCharge = 3;
      const foreignerAdultNormalCharge = 10;
      const foreignerAdultPeakCharge = 13;
      const foreignerChildNormalCharge = 5;
      const foreignerChildPeakCharge = 8;
  
      // Calculate the total payable amount
      const totalPayable =
        slAdultTickets * (isPeakHour ? slAdultPeakCharge : slAdultNormalCharge) +
        slChildTickets * (isPeakHour ? slChildPeakCharge : slChildNormalCharge) +
        foreignerAdultTickets * (isPeakHour ? foreignerAdultPeakCharge : foreignerAdultNormalCharge) +
        foreignerChildTickets * (isPeakHour ? foreignerChildPeakCharge : foreignerChildNormalCharge);
  
      return totalPayable;
    }
  
    // Function to update the summary table based on user inputs
    function updateSummary() {
      const visitDate = document.getElementById("visitDate").value;
      const selectedTimeSlot = document.getElementById("timeSlot").value;
      const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06";
  
      const summaryDateCell = document.getElementById("summaryDate");
      const summaryTimeCell = document.getElementById("summaryTime");
      const summaryDurationCell = document.getElementById("summaryDuration");
      const summaryTicketsCell = document.getElementById("summaryTickets");
      const summaryTotalCell = document.getElementById("summaryTotal");
  
      summaryDateCell.textContent = visitDate;
      summaryTimeCell.textContent = selectedTimeSlot;
      summaryDurationCell.textContent = `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`;
  
      const slAdultTickets = parseInt(document.getElementById("AdultSL").value) || 0;
      const slChildTickets = parseInt(document.getElementById("ChildSL").value) || 0;
      const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdults").value) || 0;
      const foreignerChildTickets = parseInt(document.getElementById("foreignerChilds").value) || 0;
      const infantTickets = parseInt(document.getElementById("infants").value) || 0;
  
      summaryTicketsCell.innerHTML = `
        ${slAdultTickets} SL Adult $${slAdultTickets * (isPeakHour ? 6 : 4)}<br>
        ${slChildTickets} SL Child $${slChildTickets * (isPeakHour ? 3 : 2)}<br>
        ${foreignerAdultTickets} Foreigner Adult $${foreignerAdultTickets * (isPeakHour ? 13 : 10)}<br>
        ${foreignerChildTickets} Foreigner Child $${foreignerChildTickets * (isPeakHour ? 8 : 5)}<br>
        ${infantTickets} Infant Free
      `;
  
      const totalPayable = calculateTotalPayable();
      summaryTotalCell.textContent = `$${totalPayable}`;
  
      // Store the summary table values in the browser's local storage
      localStorage.setItem("summaryDate", visitDate);
      localStorage.setItem("summaryTime", selectedTimeSlot);
      localStorage.setItem("summaryDuration", `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`);
      localStorage.setItem("summaryTickets", summaryTicketsCell.innerHTML);
      localStorage.setItem("summaryTotal", `$${totalPayable}`);
  
      // Enable or disable the "Continue with purchase" button based on user inputs
      const continueButton = document.getElementById("continueButton");
      continueButton.disabled = totalPayable <= 0;
    }
  
    // Retrieve data from local storage and update the summary table
    const storedSummaryDate = localStorage.getItem("summaryDate");
    const storedSummaryTime = localStorage.getItem("summaryTime");
    const storedSummaryDuration = localStorage.getItem("summaryDuration");
    const storedSummaryTickets = localStorage.getItem("summaryTickets");
    const storedSummaryTotal = localStorage.getItem("summaryTotal");
  
    if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
      document.getElementById("summaryDate").textContent = storedSummaryDate;
      document.getElementById("summaryTime").textContent = storedSummaryTime;
      document.getElementById("summaryDuration").textContent = storedSummaryDuration;
      document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
      document.getElementById("summaryTotal").textContent = storedSummaryTotal;
    }
  
    // Add event listeners to the input elements
    document.getElementById("visitDate").addEventListener("change", updateSummary);
    document.getElementById("timeSlot").addEventListener("change", updateSummary);
    document.getElementById("AdultSL").addEventListener("input", updateSummary);
    document.getElementById("ChildSL").addEventListener("input", updateSummary);
    document.getElementById("foreignerAdults").addEventListener("input", updateSummary);
    document.getElementById("foreignerChilds").addEventListener("input", updateSummary);
    document.getElementById("infants").addEventListener("input", updateSummary);
  
    // Add event listeners to increment and decrement buttons
    const incrementButtons = document.querySelectorAll(".increment");
    const decrementButtons = document.querySelectorAll(".decrement");
  
    function handleIncrement(event) {
      const inputElement = event.target.parentElement.querySelector("input");
      inputElement.value = parseInt(inputElement.value) + 1;
      updateSummary();
    }
  
    function handleDecrement(event) {
      const inputElement = event.target.parentElement.querySelector("input");
      const currentValue = parseInt(inputElement.value);
      inputElement.value = currentValue > 0 ? currentValue - 1 : 0;
      updateSummary();
    }
  
    incrementButtons.forEach((button) => {
      button.addEventListener("click", handleIncrement);
    });
  
    decrementButtons.forEach((button) => {
      button.addEventListener("click", handleDecrement);
    });
  
    // Initial update of the summary table on page load
    updateSummary();
  });
  document.getElementById("continueButton").addEventListener("click", function () {
    // Redirect to the details.html page
    window.location.href = "details.html";
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Function to validate form inputs
    function validateForm() {
      const fullName = document.getElementById("fullName").value.trim();
      const mobileNumber = document.getElementById("mobileNumber").value.trim();
      const email = document.getElementById("email").value.trim();
      const confirmEmail = document.getElementById("confirmEmail").value.trim();
  
      const continueButton = document.getElementById("continueButton");
  
      if (fullName !== "" && mobileNumber !== "" && email !== "" && confirmEmail !== "" && email === confirmEmail) {
        continueButton.disabled = false;
      } else {
        continueButton.disabled = true;
      }
    }
  
    // Add input event listeners for form validation
    document.getElementById("fullName").addEventListener("input", validateForm);
    document.getElementById("mobileNumber").addEventListener("input", validateForm);
    document.getElementById("email").addEventListener("input", validateForm);
    document.getElementById("confirmEmail").addEventListener("input", validateForm);
  
    // Retrieve data from local storage and update the summary table (if available)
    const storedSummaryDate = localStorage.getItem("summaryDate");
    const storedSummaryTime = localStorage.getItem("summaryTime");
    const storedSummaryDuration = localStorage.getItem("summaryDuration");
    const storedSummaryTickets = localStorage.getItem("summaryTickets");
    const storedSummaryTotal = localStorage.getItem("summaryTotal");
  
    if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
      document.getElementById("summaryDate").textContent = storedSummaryDate;
      document.getElementById("summaryTime").textContent = storedSummaryTime;
      document.getElementById("summaryDuration").textContent = storedSummaryDuration;
      document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
      document.getElementById("summaryTotal").textContent = storedSummaryTotal;
    }
  
    // Enable or disable the "Continue with purchase" button based on form validation
    validateForm();
  
    // Redirect to the Payment page when the "Continue with purchase" button is clicked
    document.getElementById("continueButton").addEventListener("click", function() {
      window.location.href = "payment.html"; // Change to the actual Payment page URL
    });
  });
  