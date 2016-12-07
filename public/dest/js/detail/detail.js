
var dataJson = {};
var dataNote = {}; //数据的注释
var tmpNote = {}; //临时的注释池
var dataString = ""; //输入的内容
var tick = false; //引入状态锁，目的是keyup在进行粘贴的时候，会触发三次keyup，需要合并
var requestFrame = function (callback) {
    window.setTimeout(callback, 1000);
};

var oldData = {
    pagename: null,
    apiname: null,
    data: null
}; //原始数据
var editFlag = false; // 是否是update页面，用于区分create和update页面
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

var detail = {
    init() {
        var that=this;
        this.initScroll();
        this.initEvent();
        setTimeout(function() {
            $('[name=editor]').scrollTop(0);
            that.initStatus();
        }, 1000);
        LOADING.init($('.right'));
    },
    //初始化文本框左边的计数滚动条
    initScroll(){
        $('[name=editor]').linedtextarea();
        var h = $('[name=editor]')[0].scrollHeight;
        $('[name=editor]').scrollTop(h);
        // $('[name=editor]').scrollTop(0);
    },
    initStatus() {
        editFlag = !!$('.J-editor').data('flag');
        if (editFlag) {
            editFlag = true;
            oldData.appname = $('[name=appname]').val();
            oldData.pagename = $('[name=pagename]').val();
            oldData.apiname = $('[name=apiname]').val();
            oldData.data = $('.J-editor').val();
            dataNote = $('.J-editor').data('note');
            dataNote = !dataNote || dataNote == "undefined" ? {} : dataNote;
        }
        this.update($('.J-editor').val(), true);
    },
    initEvent() {
        var that = this;
        $('.J-editor').on('keyup', function () {
            var el = this;
            if (!tick) {
                requestFrame(function () {
                    console.log('keyup');
                    that.update($(el).val());
                    tick = false;
                });
                tick = true;
            }
        });

        $('.J-submit').on('click', function () {
            that.save();
        });

        $('.J-btn-option').on('click', function () {
            $(this).toggleClass('collapsed');
            if ($(this).hasClass('collapsed')) {
                $('.collapsible').addClass('collapsed');
            } else {
                $('.collapsible').removeClass('collapsed');
            }

        });

        $('.J-note-btn').on('click', function () {
            $('.J-note').toggleClass('active');
        });

        $('.J-note').on('change', '.input', function () {
            that.updateNote(this);
        });

        $('.preview')
            .on('click', '.collapser', function () {
                $(this).parent().toggleClass('collapsed');
            })
            .on('click', '.hoverable', function () {
                $('.selected').removeClass('selected');
                $(this).addClass('selected');
            });

        $('body').on('mouseenter','li.hoverable', function () {
            $('li.hoverable').removeClass('hovered');
            $(this).addClass('hovered');
        });
        $('body').on('mouseleave','li.hoverable', function () {
            $(this).removeClass('hovered');
        });
        // $(".hoverable").hover(
        //     function(){
        //         $(this).addClass('hovered');
        //     },
        //     function(){
        //         $( this ).removeClass('hovered');
        //     }
        // );
    },
    //更新外显数据
    // update(data, isInit) {

    //     var html = "";
    //     try {
    //         dataJson = jsonlint.parse(data);
    //         // dataJson = eval('(' + data + ')');

    //         console.log(dataJson);
    //         $('.preview').removeClass('error');
    //         dataString = data;
    //         html = this.render(dataJson);
    //         $('.J-preview').html(html);
    //         this.generatorNote(data, isInit);
    //     } catch (e) {
    //         dataJson = {};
    //         $('.preview').addClass('error');
    //         $('.preview').html(e);
    //     }
    // },
    update(data, isInit) {
        console.log('update');
        var html = "";
        $('.lineno').removeClass('error');
        var lint = JSONLint(data, { comments: true });
        if (lint.error) {
            dataJson = {};
            html = `error: 第${lint.line}行解析出错, 出错原因可能在上一行:<br><code>${lint._evidence[lint.line - 1]}</code><br>${lint.error}`;
            $('.preview').addClass('error');
            $('.preview').html(html);
            $('.lineno[data-id="' + lint.line + '"]').addClass('error');

            //导航到错误的行数！
            var h = $('[name=editor]').height() / 2;
            var v = $('.lineno[data-id="1"]').height();
            v = v * lint.line;
            console.log('line:' + lint.line + ' h:' + h + ' v:' + v);
            setTimeout(function () {
                $('[name=editor]').scrollTop(v - h);
            }, 500);

            return;
        }
        try {
            dataJson = eval('(' + data + ')');
        } catch (e) {
            dataJson = {};
            $('.preview').addClass('error');
            $('.preview').html(e.stack);
        }
        LOADING.open();
        console.log(dataJson);
        $('.preview').removeClass('error');
        dataString = data;
        html = this.render(dataJson);
        LOADING.close();
        
        $('.J-preview').html(html);
        this.generatorNote(data, isInit);
    },
    //更新注释对象
    updateNote(el) {
        var parents = $(el).parents('li');
        var key = "", tmp = dataNote;
        for (let i = parents.length - 1; i >= 0; i--) {
            key = parents.eq(i).data('op');
            if (i >= 1) {
                tmp = tmp[key];
            }
        }
        tmp[key] = $(el).val();
    },
    //递归生成预览dom
    render(data) {
        var isParentArray = data instanceof Array;
        if (!data || typeof data != "object") {
            data = data || "null";
            return `<span class="obj-value">${data}</span>`;
        }
        let keys = Object.keys(data);
        let innerHtml = "", key = "", keylb = "", collapser = "";
        for (let i = 0; i < keys.length; i++) {
            let className = "hoverable ";
            key = keys[i]; collapser = "";
            if (typeof data[key] == "object" && data[key] != null) {
                collapser = `<div class=collapser></div>`;
                className += "collapsible";
            }
            keylb = isParentArray ? "" : key;
            innerHtml += `<li class='${className}'>${collapser}<span class="obj-property">${isParentArray ? "" : key}</span>${isParentArray ? "" : ": "}${detail.render(data[key])},</li>`;
        }
        var html = `{\n<ul class='obj'>${innerHtml}</ul>}`;
        if (isParentArray) {
            html = `[\n<ul class='obj'>${innerHtml}</ul>]`;
        }

        return html;
    },
    //合成注释对象
    generatorNote(data, isInit) {
        if (isInit) { delete dataNote.test; }
        var reg = /\/\/.+\n.+?:/g;
        var noteArr = data.match(reg);
        if (noteArr && noteArr.length > 0) {
            for (let [index, elem] of noteArr.entries()) {
                elem = elem.replace(/\/\//g, "").replace(/:/g, "").split("\n");
                let key = elem[1].replace(/\s/g, "").replace(/'/g, "").replace(/\"/g, ""), val = elem[0];
                tmpNote[key] = val;
            }
        }
        dataNote = extend(true, dataJson, dataNote);
        $('.J-note').html(this.renderNote(dataNote));
    },
    //递归生成注释的dom
    renderNote(data) {
        var isParentArray = data instanceof Array;
        if (isParentArray) {
            data.length = 1;
            // data = [data[0]];
        }
        if (!data || typeof data != "object") {
            data = data || "";
            return `<span class="obj-value"><input class="input note" value='${data}'/></span>`;
        }
        let keys = Object.keys(data);
        let innerHtml = "", key = "", keylb = "", collapser = "";
        for (let i = 0; i < keys.length; i++) {
            let className = "hoverable ";
            key = keys[i]; collapser = "";
            if (typeof data[key] == "object" && data[key] != null) {
                collapser = `<div class=collapser></div>`;
                className += "collapsible";
            } else {
                data[key] = data[key] || tmpNote[key];
            }
            keylb = isParentArray ? "" : key;

            innerHtml += `<li class='${className}' data-op=${key}>${collapser}<span class="obj-property">${isParentArray ? "" : key}</span>${isParentArray ? "" : ": "}${detail.renderNote(data[key])},</li>`;
        }
        var html = `{\n<ul class='obj'>${innerHtml}</ul>}`;
        if (isParentArray) {
            html = `[\n<ul class='obj'>${innerHtml}</ul>]`;
        }

        return html;
    },
    //更新数据后的回调
    checkstatus(data) {
        if (data && data.statuscode == 1) {
            Mt.alert({
                title: '恭喜！',
                type: 'success',
                msg: '接口保存成功拉,2s后自动跳转首页哦!',
                timer: 2000,
                cb: function () {
                    window.location.href = '/';
                }
            });
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
        var appname = $('[name=appname]').val();
        var pagename = $('[name=pagename]').val();
        var apiname = $('[name=apiname]').val();
        if (appname =="" || pagename == "" || apiname == "" || dataJson == null) {
            Mt.alert({
                title: '呃。。。！',
                type: 'error',
                msg: '页面名字和接口名字不能为空, 并且json数据结构不能为空！'
            });
            return;
        }
        if (JSON.stringify(dataJson) == oldData.data && pagename == oldData.pagename && apiname == oldData.apiname) {
            Mt.alert({
                title: '呃。。。！',
                type: 'error',
                msg: '你没有做任何更改呀！'
            });
            return;
        }
        var para = {
            appname: appname,
            apiname: apiname,
            pagename: pagename,
            description: $('[name=description]').val(),
            dataNote: JSON.stringify(dataNote),
            dataString: JSON.stringify(dataString),
            flag: editFlag ? 'update' : 'create'
        }
        if (oldData.pagename) {
            para.oldData = {
                appname: oldData.appname,
                pagename: oldData.pagename,
                apiname: oldData.apiname
            }
        }
        ajax.post('/option/update', para, this.checkstatus);
    }
}

function extend(isDeep, src, dest) {
    for (let item in src) {
        if (isDeep && typeof src[item] == 'object') {
            src[item] = extend(isDeep, src[item], dest[item] || dest);
        } else {
            src[item] = dest[item] || "";
        }
    }
    return src;
}
detail.init();