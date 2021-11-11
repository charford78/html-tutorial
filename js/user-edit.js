let user = {
    id: 1, 
    username: "cford",
    password: "blah78", 
    firstname: "Charles", 
    lastname: "Ford", 
    phone: "411", 
    email: "barf@barf.com", 
    isReviewer: true, 
    isAdmin: true
}

const chkPassword = () => {
    let password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(password !== password2) {
        alert("Passwords don't match!");
    }
}

const loaded = () => {
    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xpassword").value = user.password;
    document.getElementById("xpassword2").value = user.password;
    document.getElementById("xfirstname").value = user.firstname;
    document.getElementById("xlastname").value = user.lastname;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xreviewer").checked = user.isReviewer;
    document.getElementById("xadmin").checked = user.isAdmin;

}

const save = () => {
    let user = {};
    user.id = +document.getElementById("xid").value;
    user.username = document.getElementById("xusername").value;
    user.password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(user.password !== password2){
        return;
    }
    user.firstname = document.getElementById("xfirstname").value;
    user.lastname = document.getElementById("xlastname").value;
    user.phone = document.getElementById("xphone").value;
    user.email = document.getElementById("xemail").value;
    user.isReviewer = document.getElementById("xreviewer").checked;
    user.isAdmin = document.getElementById("xadmin").checked;
    console.log(user);
    
    window.location.href = "user-list.html"
}