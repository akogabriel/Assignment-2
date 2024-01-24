$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name && email && message) {
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  });
});
