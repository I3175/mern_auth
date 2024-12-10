async function handleRegister() {
  // 1. Lấy value trên form
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  //2. Gửi value from client to server
  // Send a POST request

  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      username: username,
      email: email,
      password: password,
    })
    if (response.status == 200) {
      window.location.href = "/login.html";
    }
  } catch (error) {
    console.log('error', error);
  }
}