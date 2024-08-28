function showAllCustomer() {
//     lay du lieu tu phia backend
//     Tu khoa $.ajax
    $.ajax({
        // method
        type: "GET",
        // url
        url: "http://localhost:8080/api/customers",
        // xu ly khi thanh cong
        success: function (dulieu){
        //     ve bang
            showCustomers(dulieu);
        }
    })
}
function findCustomer(name) {
//     lay du lieu tu phia backend
//     Tu khoa $.ajax
    $.ajax({
        // method
        type: "GET",
        // url
        url: "http://localhost:8080/api/customers/search?name="+name,
        // xu ly khi thanh cong
        success: function (dulieu){
        //     ve bang
            showCustomers(dulieu);
        }
    })
}

function getCustomerByName() {
//     lay du lieu
    let name = document.getElementById("search").value;
//     goi ham logic
    findCustomer(name);

}

function showCustomers(dulieu) {
    let content="";
    for (let i = 0; i < dulieu.length; i++) {
        content+=` <tr>
            <td>${dulieu[i].id}</td>
            <td>${dulieu[i].firstName}</td>
            <td>${dulieu[i].lastName}</td>
            <td>${dulieu[i].province.name}</td>
            <td><a onclick="deleteById(${dulieu[i].id})">Delete</a></td>
        </tr>`

    }
    //     in lai bang vao trong id la content
    document.getElementById("content").innerHTML = content;
}

showAllCustomer();


function createNewCustomer() {
//     lay du lieu
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let province = +document.getElementById("province").value;
//     chuyen du lieu sang doi tuong
    let customer = {
        "firstName": firstName,
        "lastName": lastName,
        "province": {
            "id": province
        }
    }
//     goi AJAX
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/customers",
        data: JSON.stringify(customer),
//     ve lai bang
        success: function (data){
            showAllCustomer();
        }
    })

}

function deleteById(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/customers/" + id,
        success: function (data){
            showAllCustomer();
        }
    })
    
}
