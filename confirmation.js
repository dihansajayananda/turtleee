document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user details and ticket information from local storage
  const fullName = localStorage.getItem("fullName");
  const mobileNumber = localStorage.getItem("mobileNumber");
  const email = localStorage.getItem("email");
  const gender = localStorage.getItem("gender");
  
  // Update the summary table with user details
  document.getElementById("summaryFullName").textContent = fullName;
  document.getElementById("summaryMobileNumber").textContent = mobileNumber;
  document.getElementById("summaryEmail").textContent = email;
  document.getElementById("summaryGender").textContent = gender;

  const storedSummaryDate = localStorage.getItem("summaryDate");
  const storedSummaryTime = localStorage.getItem("summaryTime");
  const storedSummaryDuration = localStorage.getItem("summaryDuration");
  const storedSummaryTickets = localStorage.getItem("summaryTickets");
  const storedSummaryTotal = localStorage.getItem("summaryTotal");

  // Update the summary table with user details and ticket information
  document.getElementById("summaryFullName").textContent = fullName;
  document.getElementById("summaryDate").textContent = storedSummaryDate;
  document.getElementById("summaryTime").textContent = storedSummaryTime;
  document.getElementById("summaryDuration").textContent = storedSummaryDuration;
  document.getElementById("summaryMobileNumber").textContent = mobileNumber;
  document.getElementById("summaryEmail").textContent = email;
  document.getElementById("summaryGender").textContent = gender;
  document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
  document.getElementById("summaryTotal").textContent = storedSummaryTotal;
});
