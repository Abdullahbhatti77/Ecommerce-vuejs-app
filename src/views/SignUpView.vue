<template>
    <div id="signupForm" class="p-5">
        <h2>Sign Up</h2>
        <form id="signup">
            <div class="form-group">
                <label for="Username">User Name</label>
                <input type="text" class="form-control" id="userName" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>

            <div class="d-flex gap-3">
                <router-link to="/">
                    <ButtonCom type="button" class="btn btn-success" text="Back to Login" />
                </router-link>
                <ButtonCom type="submit" class="btn btn-primary" text="Sign Up" />
            </div>

        </form>
    </div>
</template>

<script>
import ButtonCom from '../components/ButtonCom.vue'
export default {
    components: {
        ButtonCom,
    },
//     methods: {
//         fetch('https://dummyjson.com/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({

//                 username: 'kminchelle',
//                 password: '0lelplR',
//             })
//     })
// .then(res => res.json())
//         .then(console.log);

// }
};
document.addEventListener("DOMContentLoaded", function () {
    const signupFormSubmit = document.getElementById("signup");

    signupFormSubmit.addEventListener("submit", function (event) {
        event.preventDefault();
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        // For local storage
        localStorage.setItem("userName", userName);
        localStorage.setItem("password", password);
    });
});
</script>

<style>
#signupForm {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

#signupForm h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

/* Style the file input */
.form-control-file {
    overflow: hidden;
    position: relative;
}

.form-control-file input[type="file"] {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
</style>