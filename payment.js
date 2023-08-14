document.addEventListener("DOMContentLoaded", function () {
    // Function to validate form inputs
    function validateForm() {
      const cardNumber = document.getElementById("cardNumber").value.trim();
      const expiryDate = document.getElementById("expiryDate").value.trim();
      const cvc = document.getElementById("cvc").value.trim();
      const nameOnCard = document.getElementById("nameOnCard").value.trim();
  
      const payButton = document.getElementById("payButton");
  
      if (cardNumber !== "" && expiryDate !== "" && cvc !== "" && nameOnCard !== "") {
        payButton.disabled = false;
      } else {
        payButton.disabled = true;
      }
    }
  
    // Add input event listeners for form validation
    document.getElementById("cardNumber").addEventListener("input", validateForm);
    document.getElementById("expiryDate").addEventListener("input", validateForm);
    document.getElementById("cvc").addEventListener("input", validateForm);
    document.getElementById("nameOnCard").addEventListener("input", validateForm);
  
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
  
    // Enable or disable the "Pay" button based on form validation
    validateForm();
  
    // Set the pay amount from total payable
    const totalPayable = parseFloat(storedSummaryTotal.replace("$", ""));
    document.getElementById("payAmount").textContent = `$${totalPayable.toFixed(2)}`;
    
    // Store payment details in local storage
  const paymentDetails = {
    cardNumber: document.getElementById("cardNumber").value,
    expiryDate: document.getElementById("expiryDate").value,
    cvc: document.getElementById("cvc").value,
    nameOnCard: document.getElementById("nameOnCard").value
  };
  localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));

  
    // Redirect to the Confirmation page when the "Pay" button is clicked
    document.getElementById("payButton").addEventListener("click", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Redirect to the Confirmation page
      window.location.href = "confirmation.html"; // Change to the actual Confirmation page URL
    });
  });
  