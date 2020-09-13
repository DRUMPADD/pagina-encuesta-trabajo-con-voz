$(document).ready(function() {
    console.log('Working');
    $('#insert-form').submit(function(e) {
        const datas = {
            userN: $('#username').val(),
            name: $('#name').val(),
            middleName: $('#middleName').val(),
            lastName: $('#lastName').val()
        };

        e.preventDefault();

        $.post('app-insert.php', datas, function(response) {
            console.log(response);
            $('#insert-form').toggle('reset');
        });
    });
});