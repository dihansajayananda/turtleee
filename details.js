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

  // Store form value in local storage
  document.getElementById("detailsForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Store form values in local storage
    const fullName = document.getElementById("fullName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("mobileNumber", mobileNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);

    // Navigate to the next page
    window.location.href ="payment.html"; // Change to the actual payment page URL
  });

  // Add input event listeners for form validation
  document.getElementById("fullName").addEventListener("input", validateForm);
  document.getElementById("mobileNumber").addEventListener("input", validateForm);
  document.getElementById("email").addEventListener("input", validateForm);
  document.getElementById("confirmEmail").addEventListener("input", validateForm);
  document.getElementById("gender").addEventListener("change", validateForm);

  // Enable or disable the "Continue with purchase" button based on form validation
  validateForm();

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
  });