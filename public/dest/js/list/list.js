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

var list = {
    init() {
        this.initEvent();
    },
    initEvent() {
        let that= this;
        $('body').on('click', '.J-search', function () {
            var appname = $('[name=appname]').val();
            var pagename = $('[name=pagename]').val();
            var apiname = $('[name=apiname]').val();
            if (pagename == "" && apiname == "" && appname == "") {
                Mt.alert({
                    title: '呃。。。！',
                    type: 'error',
                    msg: '输入内容不能为空啊'
                });
                return;
            }
            var para = {
                apiname: apiname,
                pagename: pagename,
                appname: appname
            }
            that.fetchData(para);
        });
        $('body').on('click', '.J-reset', function () {
            $('[name=pagename]').val('');
            $('[name=apiname]').val('');
            var para = {
                apiname: '',
                pagename: ''
            }
            that.fetchData(para);
        });

        $('body').on('click', '.J-delete', function () {
            var para = $(this).closest('.item').data('para');
            para = eval('(' + para + ')');
            Mt.alert({
                title: '注意！',
                type: 'warning',
                msg: '确定要删除吗？删除后就找不回来了！',
                cancelBtnMsg: '再想一下',
                isLoading: true,
                cb: function () {
                    that.deleteRecord(para);
                }
            });
        });
    },
    //异步拉取远程数据
    fetchData(para) {
        ajax.json('/option/getlist', para, this.views);
    },
    //渲染数据
    views(data) {
        $('.J-list').html(list.render(data));
    },
    //生成dom结构
    render(data) {
        var html = "";
        for (let i = 0; i < data.data.length; i++) {
            let tmp = data.data[i];

            html += `<li data-para="{appname:'${tmp.pagename}',pagename:'${tmp.pagename}',apiname:'${tmp.apiname}'}" class="item">
                <span class="span1">${tmp.appname || ""}</span><span class="span1">${tmp.pagename}</span><span class="span1">
                    <a href="/detail?page=${tmp.pagename}&amp;api=${tmp.apiname}">${tmp.apiname}</a></span>
                <span class="span3">${tmp.description ? tmp.description.replace(/[\n,\r]/gi,'<br>') : tmp.description}</span><span class="span3">
                    <a target="_blank" href="/nodeapi/${tmp.pagename}/${tmp.apiname}" class="url local">/nodeapi/${tmp.pagename}/${tmp.apiname}</a>
                    <br>
                    <a target="_blank" href="${tmp.onlineurl}" class="url online">${tmp.onlineurl}</a>
                </span><span class="span1"><a class="btn btn-delete J-delete">删除</a></span></li>`;
        }
        return html;
    },
    //删除记录
    deleteRecord(para) {
        para.flag = 'delete';
        ajax.post('/option/update', para, this.checkstatus);
    },
    checkstatus(data) {
        if (data && data.statuscode == 1) {
            Mt.alert({
                title: '恭喜！',
                type: 'success',
                msg: '数据成功删除, 2s后我就关闭了!',
                timer: 2000
            });
            var para = {
                apiname: '',
                pagename: ''
            }
            list.fetchData(para);
        } else {
            Mt.alert({
                title: '呃。。。！',
                type: 'error',
                msg: data.statusmsg
            });
        }
        console.log(data);
    }
}

list.init();