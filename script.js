 // Get form elements
 const form = document.getElementById("surveyForm");
 const resetButton = document.getElementById("resetButton");
 const submitButton = document.getElementById("submitButton");
 const popup = document.getElementById("popup");
 const popupContent = document.getElementById("popupContent");
 const closePopup = document.getElementById("closePopup");

 // Reset form function
 function resetForm() {
     form.reset();
 }

 // Display pop-up with form data
 function displayPopup() {
     const firstName = document.getElementById("firstName").value;
     const lastName = document.getElementById("lastName").value;
     const dob = document.getElementById("dob").value;
     const country = document.getElementById("country").value;
     const gender = document.querySelectorAll('input[name="gender"]:checked');
     const profession = document.getElementById("profession").value;
     const email = document.getElementById("email").value;
     const mobile = document.getElementById("mobile").value;

     let genderValues = [];
     gender.forEach((g) => {
         genderValues.push(g.value);
     });

     popupContent.innerHTML = `
 <strong>First Name:</strong> ${firstName}<br>
 <strong>Last Name:</strong> ${lastName}<br>
 <strong>Date of Birth:</strong> ${dob}<br>
 <strong>Country:</strong> ${country}<br>
 <strong>Gender:</strong> ${genderValues.join(', ')}<br>
 <strong>Profession:</strong> ${profession}<br>
 <strong>Email:</strong> ${email}<br>
 <strong>Mobile Number:</strong> ${mobile}
`;

     popup.style.display = "block";
 }

 // Close the pop-up
 closePopup.addEventListener("click", function() {
     popup.style.display = "none";
     resetForm();
 });

 // Submit button click event
 submitButton.addEventListener("click", function() {
     if (form.checkValidity()) {
         displayPopup();
     } else {
         alert("Please fill out all the required fields.");
     }
 });

 // Reset button click event
 resetButton.addEventListener("click", resetForm);