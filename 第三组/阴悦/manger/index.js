function bindHtml(data) {
    let str = ``;
    data.forEach(item => {
        str += `<li class="list-group-item">
                用户名：${item.username} 密码：${item.password}
                <button class="btn btn-danger pull-right btn-xs" data-id="${item.id}">删除</button>
                <button class="btn btn-warning pull-right btn-xs" data-id="${item.id}">修改</button>
            </li>`
    })
    $('.list-group').html(str);
}
$("#upd").hide();

$.ajax({
    url: '/user',
    dataType: 'json',
    method: 'get'
}).then(function (data) {
    bindHtml(data);
});
$("#ulId").on('click', function (e) {
    e = e || e.event;
    let tar = e.target || e.srcElement;
    if (tar.tagName.toUpperCase() === 'BUTTON' && tar.innerHTML === '删除') {
        let  $cusId = $(tar).attr('data-id');
        $.ajax({
            method: 'delete',
            url: '/user',
            dataType: 'json',
            data: {
                id:$cusId
            }
        }).then(function (data) {
            bindHtml(data);
        });
    }else if(tar.tagName.toUpperCase()==='BUTTON'&&tar.innerHTML ==='修改'){

        let  $cusId = $(tar).attr('data-id');
        $.ajax({
            method: 'put',
            url: '/user',
            dataType: 'json',
            data: {
                id:$cusId
            }
        }).then(function (data) {
            console.log(data);
             $("#username").val(data.username);
             $("#password").val(data.password);
             $("form").attr('data-id',data.id);
             $("#upd").show();
             $("#add").hide();
        });
    }
})
$("#upd").on('click',function(){
    let  $cusId = $("form").attr('data-id');
    $.ajax({
        method: 'post',
        url: '/user',
        dataType: 'json',
        data: {
            username: $('#username').val(),
            password: $("#password").val(),
            id:$cusId
        }
    }).then(function (data) {
        bindHtml(data);
        $("#upd").hide();
        $("#add").show();
        $('#username').val(null)
        $("#password").val(null)
    })
})
$("#add").on('click', function () {
    $.ajax({
        method: 'post',
        url: '/user',
        dataType: 'json',
        data: {
            username: $('#username').val(),
            password: $("#password").val()
        }
    }).then(function (data) {
        bindHtml(data);
        $('#username').val(null)
        $("#password").val(null)
    })
})

/*
 fetch('/user').then((res)=>{
 return res.json();
 }).then((data)=>{
 console.log(data);
 }) 代替ajax不兼容低版本
 */
