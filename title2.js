document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("faculty administration"))

   
    if (savedUser.email === loginEmail && savedUser.password === loginPassword) {
      alert("Login successful!");
  
    } else {
      alert("Invalid email or password.");
    }
  });