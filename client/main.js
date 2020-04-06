page();
$('#formLogin').submit((e)=>{
    e.preventDefault();
    console.log('masuk login klik');
    let email = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        url: 'http://localhost:3000/login',
        method: "POST",
        data: {
            email,
            password
        }
    })
    .done((result) => {
        localStorage.setItem('access_token', result.access_token);
        $('#email').val('');
        $('#password').val('');
        page();
    })
    .catch((err) => {
        M.toast({html: JSON.stringify(err)})
    })
    // M.toast({html: password})
})


$(document).ready(() => {
    $('#menuLogout').click(()=>{
        localStorage.removeItem('access_token');
        page();
    })
    $('select').formSelect();

    $('#addFormFood').click(()=> {
        if ($('#formFood').is(':visible')) {
            $('#formFood').hide();
        } else {
            $('#formFood').show();
        }
    })

    $('#formFood').submit((e) => {
        e.preventDefault();
        let title = $('#title').val();
        let price = $('#price').val();
        let ingredients = $('#ingredients').val();
        let tag = $('#tag').val();
        let access_token = localStorage.getItem('access_token');
        $.ajax({
            url: 'http://localhost:3000/foods',
            method: 'POST',
            headers: {
                access_token
            },
            data: {
                title,
                price,
                ingredients,
                tag
            }
        })
        .done((result) => {
            console.log(result)
            $('#title').val('');
            $('#price').val('');
            $('#ingredients').val('');
            $('#tag').val('');
            $('#isiFood').append(`
                <tr>
                    <td>${result.title}</td>
                    <td>${result.price}</td>
                    <td>${result.ingredients}</td>
                    <td>${result.tag}</td>
                    <td><button class="btn" data-id="${result.id}" id="btndelete">delete</button></td>
                </tr>
            `);
        })
        .catch((err) => {
            M.toast({html: JSON.stringify(err)})
        })
    })

    $()
})

function page () {
    if (!localStorage.getItem("access_token")) {
        $('#menuLogin').show();
        $('#menuLogout').hide();
        $('#formLogin').show();
        $('#contentFood').hide();
    } else {
        $('#menuLogin').hide();
        $('#menuLogout').show();
        $('#formLogin').hide();
        $('#contentFood').show();
        getAll();
    }
}

function getAll () {
    $.ajax({
        url: "http://localhost:3000/foods",
        method: 'GET',
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    })
    .done((result) => {
        result.forEach(i => {
            $('#isiFood').append(`
            <tr>
                <td>${i.title}</td>
                <td>${i.price}</td>
                <td>${i.ingredients}</td>
                <td>${i.tag}</td>
                <td><button class="btn" data-id="${i.id}">delete</button></td>
            </tr>
            `);
        })
    })
    .catch((err) => {
        M.toast({html: JSON.stringify(err)})
    })
}