let dbusers = [];

const getAllUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:54800/api/users", true);
    xhr.onload = () => {
        dbusers = xhr.response;
        loaded(dbusers);
    }
    xhr.send();
}

const loaded = (dbusers) => {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
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
