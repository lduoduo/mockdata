/**
 * 异步请求数据方法
 * Created By zh25745@ly.com
 * 使用方法：
 * 普通ajax: ajax.ajaxJson(url, para, callback)
 * 跨域ajax: ajax.ajaxJsonp(url, para, callback)
 * 推送ajax: ajax.ajaxPost(url, para, callback)
 * 更新日志:
 * 2016--11-03 created by zh25745
 * 注意!!很重要!!: 所有跨域接口的返回包裹方法名最好统一一下: handler
 */

(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.ajax = factory();
    }
}(this, function() {

    var option = {
        cache: false,
        jsonpCallback: "handler",
    }

    function Ajax(type) {
        var tmp = {
            type: type == 'ajaxPost' ? 'post' : 'get',
            dataType: type == 'ajaxJsonp' ? 'jsonp' : 'json'
        };
        return function(url, para, callback) {
            $.extend(option, tmp, {
                success: function(res) {
                    callback(res, para);
                },
                error: function(err) {
                    console.log(err);
                }
            });
            option.url = url;
            option.data = para ? para : '';
            $.ajax(option);
        }
    }

    return {
        json       : new Ajax('ajaxJson'),
        jsonp      : new Ajax('ajaxJsonp'),
        post       : new Ajax('ajaxPost')
    };
}));