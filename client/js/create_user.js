async function handleSubmitAddUser() {
    
    try {
        //get data input from client 
        // 1. Lấy value trên form
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
        //2. Gửi value from client to server
        // Send a POST request
        const response = await axios.post('auth/admin/user/create', {
        username: username,
        email: email,
        password: password,
        role: role,
        })
        if (response.status === 200) {
            window.location.href = './admin_page.html';
        }
    } catch (error) {
        console.log('error', error);
    }
    //call api to server
}