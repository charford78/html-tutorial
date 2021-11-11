class User {
    id;
    username;
    password;
    firstname;
    lastname;
    phone;
    email;
    isReviewer;
    isAdmin;

    constructor (id, username, password, firstname, lastname, phone, email, isReviewer, isAdmin) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
    }
    toTableRow() {
        let tr = "<tr>";
        tr += `<td>${this.id}</td>`;
        tr += `<td>${this.username}</td>`;
        tr += `<td>${this.password}</td>`;
        tr += `<td>${this.firstname}</td>`;
        tr += `<td>${this.lastname}</td>`;
        tr += `<td>${this.phone}</td>`;
        tr += `<td>${this.email}</td>`;
        tr += `<td>${this.isReviewer}</td>`;
        tr += `<td>${this.isAdmin}</td>`;
        tr += "</tr>";
        return tr;
    }
}


let dbusers = [
    {id: 1, username: "cford", firstname: "Charles", lastname: "Ford", phone: null, email: null, isReviewer: true, isAdmin: true},
    {id: 2, username: "bross", firstname: "Bob", lastname: "Ross", phone: null, email: null, isReviewer: true, isAdmin: false},
    {id: 3, username: "asandler", firstname: "Adam",  lastname: "Sandler", phone: null, email: null, isReviewer: false, isAdmin: false}
]

const loaded = () => {
    var tbody = document.getElementById("tbody");
    for(let user of dbusers) {
        let tr = "<tr>";
        tr +=  `<td>${user.id}</td>`;
        tr +=  `<td>${user.username}</td>`;
        tr +=  `<td>${user.firstname} ${user.lastname}</td>`;
        tr +=  `<td>${user.phone}</td>`;
        tr +=  `<td>${user.email}</td>`;
        tr +=  `<td>${displayBoolean(user.isReviewer)}</td>`;
        tr +=  `<td>${displayBoolean(user.isAdmin)}</td>`;
        tr +=  `<td><a href="user-detail.html?id=${user.id}">Detail</a> | <a href="user-edit.html?id=${user.id}">Edit</a></td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}
