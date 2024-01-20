$(document).ready(function () {
  // Form submission handling
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    // Basic form validation
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name && email && message) {
      // Your form submission logic goes here
      // For now, let's just log a success message
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  });
});
