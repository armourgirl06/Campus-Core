document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("facultyUser"));

    if (!savedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (savedUser.email === loginEmail && savedUser.password === loginPassword) {
      alert("Login successful!");
      // Redirect or proceed to dashboard
    } else {
      alert("Invalid email or password.");
    }
  });