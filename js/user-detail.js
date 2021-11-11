let user = {
    id: 1, 
    username: "cford", 
    firstname: "Charles", 
    lastname: "Ford", 
    phone: "411", 
    email: "barf@barf.com", 
    isReviewer: true, 
    isAdmin: true
}

const remove = () => {
    console.log("Delete user ...");
}

const loaded = () => {
    var url = getUrlId();
    
    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xfirstname").value = user.firstname;
    document.getElementById("xlastname").value = user.lastname;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xreviewer").value = user.isReviewer ? "Yes" : "No";
    document.getElementById("xadmin").value = user.isAdmin ? "Yes" : "No";

}
