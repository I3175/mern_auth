const { jwtDecode } = "./jwt-js-decode.umd";

async function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('api/auth/login', { email, password });
        if (response.status === 200) {
            const accessToken = response.data.accessToken;

            // Sử dụng jwtDecode từ đối tượng toàn cục
            const payloadDecoded = jwtJsDecode.jwtDecode(accessToken).payload;
            
            // redirect đến trang admin hoặc home
            if(payloadDecoded.role === 'regular') {
                window.location.href = '/home_page.html';
            }else if(payloadDecoded.role === 'admin'){
                window.location.href = '/admin_page.html'
            }

            // save access token to client
            localStorage.setItem('access_token', accessToken);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Đăng ký hàm trong phạm vi toàn cục
window.handleLogin = handleLogin;
