function switchSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  
  function sendMessage() {
    const username = document.getElementById('username').value.trim();
    const message = document.getElementById('message').value.trim();
    const chatBox = document.getElementById('chatBox');
  
    if (username && message) {
      const msg = document.createElement('div');
      msg.textContent = ${username}: ${message};
      chatBox.appendChild(msg);
      chatBox.scrollTop = chatBox.scrollHeight;
      document.getElementById('message').value = '';
    }
  }
  
  function handleKey(e) {
    if (e.key === 'Enter') sendMessage();
  }