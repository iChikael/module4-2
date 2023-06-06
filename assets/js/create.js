$('#btnCreate').on('click', function () {
    $('#mdCreate').modal('show');
});

let currentId;


$('#btSave').on('click', function () {
    let id = currentId
    let fullName = $('#fullNameCre').val();
    let email = $('#emailCre').val();
    let phone = $('#phoneCre').val();
    let address = $('#addressCre').val();
    let balance = 0
    let deleted = false;
    let customer = {
        fullName,
        email,
        phone,
        address,
        balance,
        deleted,
        id
    }
    currentId++;
    $.ajax({
        url: 'http://localhost:3300/customers',
        type: 'POST',
        data: JSON.stringify(customer),
        contentType: 'application/json',
        success: function (response) {
            let str = renderCustomer(customer);
            $('#tbCustomer tbody').prepend(str);

            $('#mdCreate').modal('hide');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Customer have been save successful',
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
});
