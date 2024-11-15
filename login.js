function handleLogin(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
        document.cookie = `email=${email}; max-age=604800; path=/`; 
        document.cookie = `password=${password}; max-age=604800; path=/`; 
    } else {
        document.cookie = `email=; max-age=0; path=/`;
        document.cookie = `password=; max-age=0; path=/`;
    }

    alert("Successfully logged in to the device");
}

window.onload = function() {
    const cookies = document.cookie.split("; ");
    let email = "", password = "";

    cookies.forEach(cookie => {
        const [name, value] = cookie.split("=");
        if (name === "email") email = value;
        if (name === "password") password = value;
    });

    if (email && password) {
        document.getElementById("email").value = email;
        document.getElementById("password").value = password;
        document.getElementById("rememberMe").checked = true;
    }
};
