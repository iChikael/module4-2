

$('#btnUpdate').on('click', () => {
    let fullName = $('#fullNameUp').val();
    let email = $('#emailUp').val();
    let phone = $('#phoneUp').val();
    let address = $('#addressUp').val();
    let deleted = false;
    if (!fullName || !email || !phone) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all required fields !!!'
        });
        return;
    }
    let customer = {
        fullName,
        email,
        phone,
        address,
        deleted,
        id: currentCustomerId
    }

    handleUpdateCustomer(customer).then((data) => {
        let str = renderCustomer(data);
        console.log(currentCustomerId)
        $('#tr_' + currentCustomerId).replaceWith(str);

        $('#mdUpdate').modal('hide');
    })
        .catch((error) => {
            console.log(error);
        })
    getAllCustomers();
})


function handleUpdateCustomer(obj) {
    return $.ajax({
        type: 'PATCH',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        url: 'http://localhost:3300/customers/' + obj.id,
        data: JSON.stringify(obj)
    })
}



