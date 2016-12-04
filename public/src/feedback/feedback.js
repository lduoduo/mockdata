// var Majax = require('./ajax.js');
var Mt = {
    alert: (option) => {
        //type, title, msg, btnMsg, cb, isLoading
        swal({
            title: option.title,
            text: option.msg,
            type: option.type,
            showCancelButton: !!option.cancelBtnMsg,
            cancelButtonText: option.cancelBtnMsg || "在犹豫一下",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: option.btnMsg || "好哒",
            showLoaderOnConfirm: option.isLoading,
            timer: option.timer,
            closeOnConfirm: false
        }, option.cb);
    }
};

var fd = {
    init() {
        this.initEvent();
    },
    initEvent() {
        let that = this;
        $('body').on('click', '.J-send', function() {
            that.save();
        });
        // 发送消息
        $('.J-create-msg').keydown(function(e) {
            if (e.which === 13) {
                e.preventDefault();
                that.save();
            }
        });
        $('body').on('click', '.J-delete', function() {
            var para = $(this).closest('.item').data('para');
            para = eval('(' + para + ')');
            Mt.alert({
                title: '注意！',
                type: 'warning',
                msg: '确定要删除吗？删除后就找不回来了！',
                cancelBtnMsg: '再想一下',
                isLoading: true,
                cb: function() {
                    that.deleteRecord(para);
                }
            });
        });
        // 完成
        $('body').on('click', '.J-complete', function() {
            var para = $(this).closest('.item').data('para');
            para = eval('(' + para + ')');
            para.isDone = true;
            para.flag = 'update';
            ajax.post('/updateFeedback', para, that.checkstatus);
        });
    },
    //异步拉取远程数据
    fetchData(para) {
        ajax.json('/option/getlist', para, this.views);
    },
    //渲染数据
    views(data) {
        $('.J-list').html(fd.render(data));
    },
    //生成dom结构
    render(data) {
        var html = "";
        for (let i = 0; i < data.data.length; i++) {
            let tmp = data.data[i];
            html += `<li class=item data-para="{pagename:'${tmp.pagename}',apiname:'${tmp.apiname}'}"><span>${tmp.pagename}</span><span><a href='/detail?page=${tmp.pagename}&api=${tmp.apiname}'>${tmp.apiname}</a></span><span><a class="btn btn-delete J-delete">删除</a></span></li>`
        }
        return html;
    },
    //删除记录
    deleteRecord(para) {
        para.flag = 'delete';
        ajax.post('/updateFeedback', para, this.checkstatus);
    },
    //
    checkstatus(data) {
        if (data && data.statuscode == 1) {
            Mt.alert({
                title: '恭喜！',
                type: 'success',
                msg: '数据成功删除, 3s后我就关闭了!',
                timer: 3000
            });
            window.location.reload();
        } else {
            Mt.alert({
                title: '呃。。。！',
                type: 'error',
                msg: data.statusmsg
            });
        }
        console.log(data);
    },
    //保存数据，提交
    save() {
        var msg = $('[name=msg]').val();
        if (msg == "") {
            Mt.alert({
                title: '呃。。。！',
                type: 'error',
                msg: '输入内容不能为空啊'
            });
            return;
        }
        var para = {
            msg: msg,
            flag: 'create'
        }
        ajax.post('/updateFeedback', para, this.checkstatus);
    }
}

fd.init();