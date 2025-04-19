document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const collegeName = document.getElementById("collegeName").value;
    const collegeCode = document.getElementById("collegeCode").value;
    const universityName = document.getElementById("universityName").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("faculty administration")) || [];
    const alreadyExists = existingUsers.find(u => u.email === email);
    if (alreadyExists) {
        alert("Email already registered.");
        return;
      }
  
      existingUsers.push({ email, password });
      localStorage.setItem("faculty administration", JSON.stringify(existingUsers));
  
      alert("Sign up successful!");
      window.location.href = "title2.html";
    });