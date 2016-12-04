(function() {

    function $(txt) {
        return document.querySelectorAll(txt);
    }

    window.LOADING = {
        init(el) {
            var pa = document.createElement('div'),
                tmp;
            pa.classList.add('loading');

            for (let i = 0; i < 12; i++) {
                tmp = document.createElement('div');
                tmp.classList.add('item');
                pa.append(tmp);
            }
            if (el) {
                el.append(pa);
                return;
            }
            document.body.append(pa);
        },
        open() {
            if ($('.loading').length == 0) {
                this.init();
            }
            $('.loading')[0].classList.add('active');
        },
        close() {
            $('.loading')[0].classList.remove('active');
        }
    }
})();