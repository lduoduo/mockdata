
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

$('.J-clean').on('click', function () {
    Mt.alert({
        title: 'are you sure clean all data?',
        cb: function () {
            ajax.post('/updatelog', { flag: 'clean' }, checkStatus);
        }
    });
});

function checkStatus(data) {
    Mt.alert({
        type: data.statuscode == 1 ? 'success' : 'error',
        title: data.statusmsg || '好了'
    })
    if (data.statuscode == 1) {
        window.location.reload();
    }
}