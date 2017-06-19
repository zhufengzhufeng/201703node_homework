//增删改查逻辑
let $oUl = $('.list-group');
function bind(data) {
    let str = ``;
    data.forEach((item, index) => {

        str += `<li class="list-group-item">
                        用户名: ${item.username} 密码: ${item.password}
                        <button class="btn btn-danger pull-right btn-xs" id="${item.id}">删除</button>
                        <button class="btn btn-warning pull-right btn-xs" id="${item.id}" name="${item.username}" password="${item.password}">修改</button>
                    </li>`;
    });
    $oUl.html(str)
}

$.ajax({
    url: '/user',
    dataType: 'json',
    method: 'get'
}).then(bind);


let $btn = $('#btn'),
    $username = $('#username'),
    $password = $('#password');

$btn.on('click', function () {
    let val = $username.val();
    if (!val || !$password.val()) {
        alert('请输入账号或密码!');
        return
    }
    if (!/^(\w+|\w*@\w*)$/g.test(val) || !/^\w+$/g.test($password.val())) {
        alert("输入不规范!");
        return
    }
    $.ajax({
        url: '/user',
        dataType: 'json',
        method: 'post',
        data: {username: $username.val(), password: $password.val()}
    }).then(function (data) {
        bind(data)
    });
});
$oUl.on('click', function (e) {
    let tar = e.target;
    if (tar.innerHTML === '删除') {
        let id = $(tar).attr('id');
        $.ajax({
            url: '/user?id=' + id,
            dataType: 'json',
            method: 'delete',
            cache: false
        }).then(function (data) {
            bind(data)
        })
    } else if (tar.innerHTML === '修改') {
        let id = $(tar).attr('id'),
            curName = $(tar).attr('name'),
            curPw = $(tar).attr('password'),
            name = prompt('请输入账号', curName),
            pw = prompt('请输入密码', curPw);
        if (!name || !pw) {
            alert("账号或密码为空!");
            return
        }
        $.ajax({
            url: '/user',
            dataType: 'json',
            method: 'put',
            data: {username: name, password: pw, id: id},
        }).then(function (data) {
            bind(data)
        })
    }
});