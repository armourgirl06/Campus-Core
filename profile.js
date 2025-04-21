window.onload = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      window.location.href = 'login.html';
      return;
    }
  
    document.getElementById('fullName').textContent = user.name || 'No Name';
    document.getElementById('dept').textContent = user.dept || '—';
    document.getElementById('studentId').textContent = user.studentId || '—';
    document.getElementById('email').textContent = user.email;
    document.getElementById('year').textContent = user.year || '—';
    document.getElementById('bio').textContent = user.bio || '—';
    document.getElementById('coursesList').innerHTML = user.courses.map(c => `<li>${c}</li>`).join('');
    document.getElementById('profilePic').src = user.profilePic || 'https://via.placeholder.com/120';
  };
  
  document.getElementById('editBtn').onclick = () => {
    document.getElementById('editModal').style.display = 'block';
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('inputName').value = user.name || '';
    document.getElementById('inputDept').value = user.dept || '';
    document.getElementById('inputId').value = user.studentId || '';
    document.getElementById('inputEmail').value = user.email;
    document.getElementById('inputYear').value = user.year || '';
    document.getElementById('inputBio').value = user.bio || '';
    document.getElementById('inputCourses').value = user.courses.join(', ');
  };
  
  document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('user'));
    user.name = document.getElementById('inputName').value;
    user.dept = document.getElementById('inputDept').value;
    user.studentId = document.getElementById('inputId').value;
    user.email = document.getElementById('inputEmail').value;
    user.year = document.getElementById('inputYear').value;
    user.bio = document.getElementById('inputBio').value;
    user.courses = document.getElementById('inputCourses').value.split(',').map(c => c.trim());
  
    localStorage.setItem('user', JSON.stringify(user));
    location.reload();
  });
  
  document.getElementById('closeModal').onclick = () => {
    document.getElementById('editModal').style.display = 'none';
  };
  
  