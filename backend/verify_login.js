const axios = require('axios');

async function testLogin() {
    try {
        console.log("Attempting to login with correct credentials...");
        const response = await axios.post('http://localhost:5000/api/admin/login', {
            email: 'gal@gmail.com',
            password: '123'
        });
        console.log("Login Success:", response.data);
    } catch (error) {
        console.error("Login Failed:", error.response ? error.response.data : error.message);
    }
}

testLogin();
