// 1. call api get list user
async function getListUser() {
    try {
        const response = await axios.get('auth/admin/user')
        showListUser(response.data);
        // show name user login
        const accessToken = localStorage.getItem('access_token');
        const payloadDecoded = jwtJsDecode.jwtDecode(accessToken).payload;
        document.querySelector('.username').innerText = payloadDecoded.username;


    } catch (error) {
        //solution 1
        if(error.response.status === 401){
            window.location.href = './login.html';
        }
        
    }
}
// 2. show list user
function showListUser(users) {
    let htmlUser = `<table class="table table-hover text-nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>`;
    users.forEach(function(user, index) {
        htmlUser+= `<tr>
                        <td>${index+1}</td>
                        <td>${user.username}</td>
                        <td>${user.role}</td>
                        <td>${user.email}</td>
                        <td>
                            <button id="${user._id}" type="button" class="btn btn-danger" onclick="handleDeleteUser(this.id)">Delete</button>
                        </td>
                    </tr>`
    });
        htmlUser+=     `</tbody>                                    
                    </table>`;
    document.querySelector('.list_user').innerHTML = htmlUser;
}

async function handleDeleteUser(userId){
    try {
        const response = await axios.delete(`auth/admin/user/delete/${userId}`)
        if(response.status === 200) {
            window.location.reload();
        }
    } catch (error) {
        //solution 1
        if(error.response.status === 401){
            window.location.href = './login.html';
        }
    }
}

function handleAddUser() {
    window.location.href = '/create_user.html';
}

function handleLogoutUser() {
    localStorage.removeItem('access_token');
    window.location.href = './login.html';
}

getListUser();


                            
                                        