var Init = {

    csrfSetup: function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    },

    tooltipSetup: function () {
        $('[data-toggle="tooltip"]').tooltip();
    },

    init: function ($parent) {
        this.$parent = $parent;
        this.csrfSetup();
        this.tooltipSetup();
    }

};
var Search = {

    search: function () {
        var word = Search.$form.find('.word').val();
        word = word.replace(/\//g, ' ');
        word = $.trim(word);
        if (word !== '') {
            location.href = '/search/' + encodeURIComponent(word);
        }
    },

    searchByKeyboard: function (event) {
        if (event.which === 13) {
            Search.search();
        }
    },

    inputFocus: function () {
        $(this).parent().addClass('-active');
    },

    inputBlur: function () {
        $(this).parent().removeClass('-active');
    },

    init: function ($parent) {
        this.$parent = $parent;
        this.$form = $parent;
        this.$form.on('focus', 'input', this.inputFocus);
        this.$form.on('blur', 'input', this.inputBlur);
        this.$form.on('click', '.btn-submit', this.search);
        this.$form.on('keydown', '.word', this.searchByKeyboard);
    }

};
var NotFound = {

    handle: function () {
        if (NotFound.$parent.length > 0 && (location.search === '' || location.search === '?utm_source=bookmarklet')) {
            var word = NotFound.$parent.data('word');
            var $redirect = NotFound.$parent.find('.redirect');
            var countDown = function(seconds) {
                if (seconds === 0) {
                    location.href = '/search/' + encodeURIComponent(word) + '?filter_search=range';
                    return;
                }
                $redirect.text(seconds + ' 秒后跳转到模糊搜索模式 ...');
                seconds--;
                setTimeout(function() {
                    countDown(seconds);
                }, 1000);
            };
            countDown(1);
        }
    },

    init: function($parent) {
        this.$parent = $parent;
        this.handle();
    }

};
var ContentDocument = {

    format: function () {
        ContentDocument.$main.find('.title.-clickable').each(function (index, element) {
            var $title = $(element);
            var $content = $title.parent().find('.content');
            if ($content.length > 0) {
                $title.append('<span class="expand-tip">[展开]</span>');
            }
            if (!$title.hasClass('-clickable')) {
                $content.show();
            }
        });
    },

    expandOrShrinkContent: function () {
        var $title = $(this);
        var $content = $title.parent().find('.content');
        if ($content.css('display') === 'none') {
            $title.find('.expand-tip').text('[收起]');
            $content.slideDown();
        } else {
            $title.find('.expand-tip').text('[展开]');
            $content.slideUp();
        }
    },

    init: function($parent) {
        this.$parent = $parent;
        this.$main = this.$parent.find('.main');
        this.format();
        this.$parent.on('click', '.-clickable', this.expandOrShrinkContent);
    }

};
var PageHomeIndex = {

    autoFocus: function () {
        PageHomeIndex.$parent.find('.search-form .word').focus();
    },

    init: function($parent) {
        this.$parent = $parent;
        this.autoFocus();
    }

};
var PageHomeSearch = {

    jqueryInject: function () {
        /**
         * $.parseParams - parse query string parameters into an object.
         */
        (function($) {
            var re = /([^&=]+)=?([^&]*)/g;
            var decodeRE = /\+/g;  // Regex for replacing addition symbol with a space
            var decode = function (str) {return decodeURIComponent( str.replace(decodeRE, " ") );};
            $.parseParams = function(query) {
                var params = {}, e;
                while ( e = re.exec(query) ) {
                    var k = decode( e[1] ), v = decode( e[2] );
                    if (k.substring(k.length - 2) === '[]') {
                        k = k.substring(0, k.length - 2);
                        (params[k] || (params[k] = [])).push(v);
                    }
                    else params[k] = v;
                }
                return params;
            };
        })(jQuery);
    },

    initSearchParameter: function () {
        if (location.search !== '') {
            var filters = $.parseParams(location.search.substr(1));
            var filtersObjectCount = 0;
            for (var key in filters) {
                if (!filters.hasOwnProperty(key)) {
                    continue;
                }
                filtersObjectCount += 1;
                PageHomeSearch.$searchFilter.find('.btn-group[data-name="' + key + '"] > button > span').text(PageHomeSearch.$searchFilter.find('.btn-group[data-name="' + key + '"] ul > li > a[data-value="' + filters[key] + '"]').text());
                PageHomeSearch.$searchFilter.find('.btn-group[data-name="' + key + '"]').data('value', filters[key]);
            }
            var $btnRemove = PageHomeSearch.$searchFilter.find('.btn-remove');
            if (filtersObjectCount > 0) {
                $btnRemove.show();
            } else {
                $btnRemove.hide();
            }
        }
    },

    initSubnodes: function () {
        // Subnodes 下显示的条目数量限制，当超出这个限制时，多余的条目会隐藏并显示展开按钮
        var ITEM_SHOWN_LIMIT = 5;

        PageHomeSearch.$searchList.find('.subnodes').each(function () {
            var $subnode = $(this);
            var $items = $subnode.find('p');
            var index = 0;
            $items.each(function () {
                index += 1;
                if (index > ITEM_SHOWN_LIMIT) {
                    return false;
                }
                $(this).removeClass('-hidden');
            });
            if ($items.length > ITEM_SHOWN_LIMIT) {
                $subnode.append('<p class="btn-unroll" title="展开">...</p>');
            }
        });
    },

    handleFilter: function (name, value) {
        var filters = {};
        PageHomeSearch.$searchFilter.find('> .btn-group').each(function () {
            if (name === $(this).data('name')) {
                if (typeof(value) === 'undefined') {
                    return true;
                }
                filters[name] = value;
            } else {
                if (typeof($(this).data('value')) === 'undefined') {
                    return true;
                }
                filters[$(this).data('name')] = $(this).data('value');
            }
        });

        var query = jQuery.param(filters);
        location.href = location.pathname + ((query === '') ? '' : '?' + query);
    },

    clearFilter: function () {
        location.href = location.pathname;
    },

    filter: function() {
        var name = $(this).parents('.btn-group').data('name');
        var value = $(this).data('value');
        PageHomeSearch.handleFilter(name, value);
    },

    prevPage: function() {
        var $btn = $(this);
        var word = $btn.data('word');
        var page = $btn.data('page');
        var query = $btn.data('query');
        query = query.replace('page=' + page, '');
        page -= 1;

        location.href = '/search/' + encodeURIComponent(word) + '?' + query + '&page=' + page;
    },

    nextPage: function() {
        var $btn = $(this);
        var word = $btn.data('word');
        var page = $btn.data('page');
        var query = $btn.data('query');
        query = query.replace('page=' + page, '');
        page += 1;

        location.href = '/search/' + encodeURIComponent(word) + '?' + query + '&page=' + page;
    },

    /**
     * 包装通过 Ajax 请求回来的翻页结果
     *
     * @param hits array
     * @return string
     */
    repackHits: function(hits) {
        var repacked = '';
        for (var i in hits) {
            if (!hits.hasOwnProperty(i)) {
                continue;
            }
            var hit = hits[i];
            repacked += '<div class="item">';
            repacked += '   <div class="wrapper">';
            repacked += '       <div class="name">';
            repacked += '           <a class="name" href="/redirect?url=' + encodeURIComponent('https://pan.baidu.com/s/1' + hit['_source']['pid']) + '" target="_blank">';
            if (typeof(hit['highlight']['name']) !== 'undefined') {
                repacked += hit['highlight']['name'][0];
            } else {
                repacked += hit['_source']['name'];
            }
            repacked += '           </a>';
            repacked += '       </div>';
            repacked += '       <div class="referrer">';
            repacked += '           <a href="/redirect?url=' + encodeURIComponent(hit['_source']['referrer_url']) + '" target="_blank">';
            if (typeof(hit['highlight']['referrer_title']) !== 'undefined') {
                repacked += hit['highlight']['referrer_title'][0];
            } else {
                repacked += hit['_source']['referrer_title'];
            }
            repacked += '           </a>';
            repacked += '       </div>';
            repacked += '       <div class="info">';
            repacked += '           <span class="size">' + hit['_source']['size_formatted'] + '</span>';
            if (typeof(hit['_source']['access_code']) !== 'undefined' && hit['_source']['access_code'] !== null) {
                repacked += '       <span class="access-code">' + hit['_source']['access_code'] + '</span>';
            }
            repacked += '       </div>';
            repacked += '   </div>';
            repacked += '   <div class="clearfix"></div>';
            repacked += '</div>';
        }

        return repacked;
    },

    unroll: function () {
        var $btn = $(this);
        var $subnodes = $btn.parents('.subnodes');
        $subnodes.find('p').each(function () {
            $(this).removeClass('-hidden');
        });
        $btn.hide();
    },

    buyFromWeb: function () {
        var $btn = $(this);
        var id = $btn.parents('.item').data('id');
        var $price = $btn.parents('.item').find('.price');
        var $autoRefund = $btn.parents('.item').find('.auto-refund');
        var price = $price.text();
        var word = Search.$form.find('.word').val();
        if (typeof (id) === 'undefined') {
            humane.log('错误：未获取到相关资源编号，请反馈给网站管理员');
            return;
        }

        $btn.text('支付中');
        $.ajax('/resources/' + id + '/buy',
            {
                'type': 'POST',
                'data': {
                    'past_price': price,
                    'word': word
                },
                'dataType': 'json',
                'success': function(response) {
                    $btn.removeClass('btn-buy').addClass('btn-open');
                    $btn.text('打开');
                    $autoRefund.addClass('-shown');
                    $autoRefund.data('transaction-id', response.transaction_id);
                    var urlEncoded = response.url_encoded;
                    var url = 'https://noreferrer.meek.com.cn/redirect/' + urlEncoded;
                    $btn.data('url', url);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    if (xhr.status === 401) {
                        $('.user-register-dialog').modal();
                    } else if (xhr.status === 409) {
                        humane.log(response.message, { 'timeout': 5000 });
                        setTimeout(function () {
                            $('.user-renew-dialog').modal();
                        }, 2000);
                    } else if (xhr.status === 410) {
                        humane.log('分享人已将售价更改为：' + response.price + '云豆，本次购买不成功，请再次尝试', { 'timeout': 5000 });
                        $price.text(response.price);
                    } else {
                        humane.log(response.message);
                    }
                    $btn.text('购买');
                }
            }
        );
    },

    buyFromMobile: function () {
        var $btn = $(this);
        var id = $btn.parents('.item').data('id');
        var $price = $btn.parents('.item').find('.price');
        var $autoRefund = $btn.parents('.item').find('.auto-refund');
        var price = $price.text();
        var word = Search.$form.find('.word').val();
        if (typeof (id) === 'undefined') {
            humane.log('错误：未获取到相关资源编号，请反馈给网站管理员');
            return;
        }

        $btn.text('支付中');
        $.ajax('/resources/' + id + '/buy',
            {
                'type': 'POST',
                'data': {
                    'past_price': price,
                    'word': word
                },
                'dataType': 'json',
                'success': function(response) {
                    $btn.removeClass('btn-buy').addClass('btn-open');
                    $btn.text('打开');
                    $autoRefund.addClass('-shown');
                    $autoRefund.data('transaction-id', response.transaction_id);
                    var urlEncoded = response.url_encoded;
                    var url = 'https://noreferrer.meek.com.cn/redirect/' + urlEncoded;
                    $btn.data('url', url);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    if (xhr.status === 401) {
                        humane.log('未登录，请先 登录 或 注册');
                    } else if (xhr.status === 410) {
                        humane.log('分享人已将售价更改为：' + response.price + '云豆，本次购买不成功，请再次尝试', { 'timeout': 5000 });
                        $price.text(response.price);
                    } else {
                        humane.log(response.message);
                    }
                    $btn.text('购买');
                }
            }
        );
    },

    open: function () {
        var $btn = $(this);
        var url = $btn.data('url');
        window.open(url);
    },

    autoRefund: function () {
        var $btn = $(this);
        var id = $btn.data('transaction-id');
        if (typeof (id) === 'undefined') {
            return;
        }
        var $text = $btn.find('.text');

        // 这里要禁用，不可点击
        if ($btn.hasClass('-checked')) {
            humane.log('该资源已完成退豆，无需重复尝试', { timeout: 5000 });
        } else {
            $text.text('资源检测中');
            $.ajax('/transactions/' + id + '/auto-refund',
                {
                    'type': 'POST',
                    'data': {
                    },
                    'dataType': 'json',
                    'success': function(response) {
                        humane.log('退豆已完成', { timeout: 3000 });
                        $text.text('退豆完成');
                        $btn.addClass('-checked');
                    },
                    'error': function(xhr) {
                        var response = JSON.parse(xhr.responseText);
                        if (xhr.status === 401) {
                            humane.log('用户未登录');
                        } else {
                            humane.log(response.message, { timeout: 3000 });
                            if (typeof(response.status) !== 'undefined' && response.status === 'OK') {
                                /* 当资源状态正常时，接受无理由退豆 */
                                setTimeout(function() {
                                    $('.groundless-refund-dialog').modal({}, {id: id});
                                }, 3000);
                            }
                        }
                        $text.text('申请退豆');
                    }
                }
            );
        }
    },

    init: function($parent) {
        this.$parent = $parent;
        this.$searchFilter = $parent.find('.search-filter');
        this.$pagenation = $parent.find('.pagination-block');
        this.$searchList = $parent.find('.search-list');
        this.jqueryInject();
        this.initSearchParameter();
        this.initSubnodes();
        this.$searchFilter.on('click', '> .btn-group > ul > li > a', this.filter);
        this.$searchFilter.on('click', '> .btn-remove', this.clearFilter);
        this.$pagenation.on('click', '> .btn-prev', this.prevPage);
        this.$pagenation.on('click', '> .btn-next', this.nextPage);
        this.$searchList.on('click', '.btn-unroll', this.unroll);
        this.$searchList.on('click', '.btn-buy.-web', this.buyFromWeb);
        this.$searchList.on('click', '.btn-buy.-mobile', this.buyFromMobile);
        this.$searchList.on('click', '.btn-open', this.open);
        this.$searchList.on('click', '.low-quality', this.lowQuality);
        this.$searchList.on('click', '.auto-refund', this.autoRefund);
    }

};
var PageResourceShow = {

    buyFromWeb: function () {
        var $btn = $(this);
        var id = $btn.parents('.item').data('id');
        var $price = $btn.parents('.item').find('.price');
        var $autoRefund = $btn.parents('.item').find('.btn-auto-refund');
        var price = $price.text();
        if (typeof (id) === 'undefined') {
            humane.log('错误：未获取到相关资源编号，请反馈给网站管理员');
            return;
        }

        $btn.text('支付中');
        $.ajax('/resources/' + id + '/buy',
            {
                'type': 'POST',
                'data': {
                    'past_price': price
                },
                'dataType': 'json',
                'success': function(response) {
                    $btn.removeClass('btn-buy').addClass('btn-open');
                    $btn.text('打开');
                    $autoRefund.addClass('-shown');
                    $autoRefund.data('transaction-id', response.transaction_id);
                    var urlEncoded = response.url_encoded;
                    var url = 'https://noreferrer.meek.com.cn/redirect/' + urlEncoded;
                    $btn.data('url', url);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    if (xhr.status === 401) {
                        $('.user-register-dialog').modal();
                    } else if (xhr.status === 409) {
                        humane.log(response.message, { 'timeout': 5000 });
                        setTimeout(function () {
                            $('.user-renew-dialog').modal();
                        }, 2000);
                    } else if (xhr.status === 410) {
                        humane.log('分享人已将售价更改为：' + response.price + '云豆，本次购买不成功，请再次尝试', { 'timeout': 5000 });
                        $price.text(response.price);
                    } else {
                        humane.log(response.message);
                    }
                    $btn.text('购买');
                }
            }
        );
    },

    buyFromMobile: function () {
        var $btn = $(this);
        var id = $btn.parents('.item').data('id');
        var $price = $btn.parents('.item').find('.price');
        var $autoRefund = $btn.parents('.item').find('.btn-auto-refund');
        var price = $price.text();
        if (typeof (id) === 'undefined') {
            humane.log('错误：未获取到相关资源编号，请反馈给网站管理员');
            return;
        }

        $btn.text('支付中');
        $.ajax('/resources/' + id + '/buy',
            {
                'type': 'POST',
                'data': {
                    'past_price': price
                },
                'dataType': 'json',
                'success': function(response) {
                    $btn.removeClass('btn-buy').addClass('btn-open');
                    $btn.text('打开');
                    $autoRefund.addClass('-shown');
                    $autoRefund.data('transaction-id', response.transaction_id);
                    var urlEncoded = response.url_encoded;
                    var url = 'https://noreferrer.meek.com.cn/redirect/' + urlEncoded;
                    $btn.data('url', url);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    if (xhr.status === 401) {
                        humane.log('未登录，请先 登录 或 注册');
                    } else if (xhr.status === 410) {
                        humane.log('分享人已将售价更改为：' + response.price + '云豆，本次购买不成功，请再次尝试', { 'timeout': 5000 });
                        $price.text(response.price);
                    } else {
                        humane.log(response.message);
                    }
                    $btn.text('购买');
                }
            }
        );
    },

    open: function () {
        var $btn = $(this);
        var url = $btn.data('url');
        window.open(url);
    },

    autoRefund: function () {
        var $btn = $(this);
        var id = $btn.data('transaction-id');
        if (typeof (id) === 'undefined') {
            return;
        }

        // 这里要禁用，不可点击
        if ($btn.hasClass('-checked')) {
            humane.log('该资源已完成退豆，无需重复尝试', { timeout: 5000 });
        } else {
            $btn.text('资源检测中');
            $.ajax('/transactions/' + id + '/auto-refund',
                {
                    'type': 'POST',
                    'data': {
                    },
                    'dataType': 'json',
                    'success': function(response) {
                        humane.log('退豆已完成', { timeout: 3000 });
                        $btn.text('退豆完成');
                        $btn.addClass('-checked');
                    },
                    'error': function(xhr) {
                        var response = JSON.parse(xhr.responseText);
                        if (xhr.status === 401) {
                            humane.log('用户未登录');
                        } else {
                            humane.log(response.message, { timeout: 3000 });
                            if (typeof(response.status) !== 'undefined' && response.status === 'OK') {
                                /* 当资源状态正常时，接受无理由退豆 */
                                setTimeout(function () {
                                    $('.groundless-refund-dialog').modal({}, {id: id});
                                }, 3000);
                            }
                        }
                        $btn.text('申请退豆');
                    }
                }
            );
        }
    },

    init: function($parent) {
        this.$parent = $parent;
        this.$basic = this.$parent.find('.basic');
        this.$basic.on('click', '.btn-buy.-web', this.buyFromWeb);
        this.$basic.on('click', '.btn-buy.-mobile', this.buyFromMobile);
        this.$basic.on('click', '.btn-open', this.open);
        this.$basic.on('click', '.btn-auto-refund', this.autoRefund);
    }

};
var PageUserLogin = {

    login: function () {
        var email = PageUserLogin.$form.find('.email').val();
        var password = PageUserLogin.$form.find('.password').val();
        var remember = PageUserLogin.$form.find('.remember').is(':checked');
        var $alert = PageUserLogin.$form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $btn.val('登录中...');
        $.ajax('/user/login',
            {
                'type': 'POST',
                'data': {
                    'email': email,
                    'password': password,
                    'remember': remember
                },
                'dataType': 'json',
                'success': function() {
                    if (typeof(window.backUrl) !== 'undefined' && window.backUrl !== '') {
                        location.href = window.backUrl;
                    } else {
                        location.href = '/user/dashboard';
                    }
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).addClass('alert-danger').show();
                    $btn.removeAttr('disabled').val('登录');
                }
            }
        );
    },

    init: function ($parent) {
        this.$parent = $parent;
        this.$form = $parent.find('.form');
        this.$form.on('click', '.btn-login', this.login);
    }

};
var PageUserRegister = {

    register: function () {
        var email = PageUserRegister.$form.find('.email').val();
        var name = PageUserRegister.$form.find('.name').val();
        var password = PageUserRegister.$form.find('.password').val();
        var $alert = PageUserRegister.$form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $btn.val('注册中...');
        $.ajax('/user/register',
            {
                'type': 'POST',
                'data': {
                    'email': email,
                    'name': name,
                    'password': password
                },
                'dataType': 'json',
                'success': function() {
                    humane.log('恭喜您，注册成功');
                    setTimeout(function () {
                        location.href = '/user/dashboard';
                    }, 2000);
                    gtag('event', 'REGISTERED', {
                        'event_category' : 'USER'
                    });
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    if (xhr.status === 400) {
                        $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    }

                    $btn.removeAttr('disabled');
                    $btn.val('现在注册');
                }
            }
        );
    },

    init: function ($parent) {
        this.$parent = $parent;
        this.$form = $parent.find('.form');
        this.$form.on('click', '.btn-register', this.register);
    }

};
var PageUserForgetPassword = {

    submit: function () {
        var email = PageUserForgetPassword.$form.find('.email').val();
        var $alert = PageUserForgetPassword.$form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $btn.val('正在处理');
        $.ajax('/user/forget-password',
            {
                'type': 'POST',
                'data': {
                    'email': email
                },
                'dataType': 'json',
                'success': function(response) {
                    $alert.text(response.message).removeClass('alert-danger').addClass('alert-success').show();
                    $btn.hide();
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).addClass('alert-danger').show();
                    $btn.removeAttr('disabled').val('下一步');
                }
            }
        );
    },

    init: function ($parent) {
        this.$parent = $parent;
        this.$form = $parent.find('.form');
        this.$form.on('click', '.btn-submit', this.submit);
    }

};
var PageUserResetPassword = {

    submit: function () {
        var token = PageUserResetPassword.$form.find('.token').val();
        var email = PageUserResetPassword.$form.find('.email').val();
        var password = PageUserResetPassword.$form.find('.password').val();
        var passwordConfirmation = PageUserResetPassword.$form.find('.password-confirmation').val();
        var $alert = PageUserResetPassword.$form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/user/reset-password',
            {
                'type': 'POST',
                'data': {
                    'email': email,
                    'token': token,
                    'password': password,
                    'password_confirmation': passwordConfirmation
                },
                'dataType': 'json',
                'success': function(response) {
                    $alert.text(response.message).removeClass('alert-danger').addClass('alert-success').show();
                    setTimeout(function() {
                        location.href = '/user/login';
                    }, 3000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.$parent = $parent;
        this.$form = $parent.find('.form');
        this.$form.on('click', '.btn-submit', this.submit);
    }

};
var PageUserState = {

    sendVerifyEmail: function () {
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $btn.text('邮件发送中');
        $.ajax('/user/send-verify-email',
            {
                'type': 'POST',
                'data': {
                },
                'dataType': 'json',
                'success': function(response) {
                    $btn.text('已发送');
                    humane.log(response.message, { timeout: 5000 });
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    humane.log(response.message, { timeout: 5000 });
                    $btn.text('验证');
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.$dialog = $parent;
        this.$dialog.on('click', '.btn-send-verify-email', this.sendVerifyEmail);
    }

};
var PageUserPeaTransfer = {

    transfer: function () {
        var $form = PageUserPeaTransfer.$form;
        var $to = $form.find('.to');
        var $amount = $form.find('.amount');
        var to = $to.val();
        var amount = $amount.val();
        var $alert = $form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $btn.text('处理中');
        $.ajax('/user/transfer',
            {
                'type': 'POST',
                'data': {
                    'to': to,
                    'amount': amount
                },
                'dataType': 'json',
                'success': function(response) {
                    $alert.text(response.message).removeClass('alert-danger').addClass('alert-success').show();
                    $btn.text('转赠');
                    $btn.removeAttr('disabled');
                    $to.val('');
                    $amount.val('');
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.text('转赠');
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.$dialog = $parent;
        this.$form = $parent.find('.form');
        this.$form.on('click', '.btn-transfer', this.transfer);
    }

};
var PageUserSharedResource = {

    init: function ($parent) {
        this.$dialog = $parent;
    }

};
var UserRegisterDialog = {

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.email').val('');
        $dialog.find('.name').val('');
        $dialog.find('.password').val('');
        $dialog.find('.btn-register').removeAttr('disabled');
        $dialog.find('.btn-register').val('现在注册');
        $dialog.find('.alert').hide();
    },

    register: function () {
        var email = UserRegisterDialog.$form.find('.email').val();
        var name = UserRegisterDialog.$form.find('.name').val();
        var password = UserRegisterDialog.$form.find('.password').val();
        var $alert = UserRegisterDialog.$form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $btn.val('注册中...');
        $.ajax('/user/register',
            {
                'type': 'POST',
                'data': {
                    'email': email,
                    'name': name,
                    'password': password
                },
                'dataType': 'json',
                'success': function() {
                    $('.user-register-dialog').modal('hide');
                    humane.log('恭喜您，注册成功');
                    setTimeout(function () {
                        $('.user-renew-dialog').modal();
                    }, 3000);
                    gtag('event', 'REGISTERED', {
                        'event_category' : 'USER'
                    });
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    if (xhr.status === 400) {
                        $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    }

                    $btn.removeAttr('disabled');
                    $btn.val('现在注册');
                }
            }
        );
    },

    login: function () {
        location.href = '/user/login?back_url=' + encodeURIComponent(location.href);
    },

    init: function ($parent) {
        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-register', this.register);
        this.$form.on('click', '.btn-login', this.login);
    }

};
var UserChangeNameDialog = {

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.name').val('');
        $dialog.find('.btn-save').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    save: function () {
        var $form = UserChangeNameDialog.$form;
        var name = $form.find('.name').val();
        var $alert = $form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/user/change-name',
            {
                'type': 'POST',
                'data': {
                    'name': name
                },
                'dataType': 'json',
                'success': function() {
                    $alert.text('恭喜您，昵称修改成功').removeClass('alert-danger').addClass('alert-success').show();
                    setTimeout(function(){
                        location.reload();
                    }, 2000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-save', this.save);
    }

};
var UserChangePasswordDialog = {

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.old-password').val('');
        $dialog.find('.new-password').val('');
        $dialog.find('.password-confirmation').val('');
        $dialog.find('.btn-save').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    save: function () {
        var $dialog = UserChangePasswordDialog.$dialog;
        var $form = UserChangePasswordDialog.$form;
        var oldPassword = $form.find('.old-password').val();
        var newPassword = $form.find('.new-password').val();
        var passwordConfirmation = $form.find('.password-confirmation').val();
        var $alert = $form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/user/change-password',
            {
                'type': 'POST',
                'data': {
                    'old_password': oldPassword,
                    'new_password': newPassword,
                    'password_confirmation': passwordConfirmation
                },
                'dataType': 'json',
                'success': function() {
                    $alert.text('恭喜您，密码修改成功').removeClass('alert-danger').addClass('alert-success').show();
                    setTimeout(function(){
                        $dialog.modal('hide');
                    }, 2000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-save', this.save);
    }

};
var UserRenewDialog = {

    shown: function () {
        var $dialog = UserRenewDialog.$dialog;
        var $pea = $dialog.find('.pea');

        $.ajax('/user',
            {
                'type': 'GET',
                'data': {
                },
                'dataType': 'json',
                'success': function(response) {
                    var pea = response.pea.toLocaleString('en-US', {
                        'style': 'decimal',
                        'maximumFractionDigits': 2
                    });
                    $pea.text(pea);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                }
            }
        );
    },

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.name').val('');
        $dialog.find('.password').val('');
        $dialog.find('.btn-renew').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    renew: function () {
        var $form = UserRenewDialog.$form;
        var name = $form.find('.name').val();
        var password = $form.find('.password').val();
        var $alert = $form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/user/renew',
            {
                'type': 'POST',
                'data': {
                    'name': name,
                    'password': password
                },
                'dataType': 'json',
                'success': function(response) {
                    $alert.text('恭喜您，成功充值 ' + response.deposited_pea + ' 颗云豆').removeClass('alert-danger').addClass('alert-success').show();
                    setTimeout(function(){
                        $('.user-renew-dialog').modal('hide');
                    }, 4000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        this.$dialog.on('shown.bs.modal', this.shown);
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-renew', this.renew);
    }

};


var ReportDialog = {

    shown: function (event) {
        var $form = ReportDialog.$form;
        var resourceId = $(event.relatedTarget).data('id');
        ReportDialog.resourceId = resourceId;
        var $resourceName = $form.find('.resource-name');
        var $email = $form.find('.email');
        var $alert = $('.alert');

        $.ajax('/resources/' + resourceId,
            {
                'type': 'GET',
                'data': {
                },
                'dataType': 'json',
                'success': function(response) {
                    $resourceName.text(response.name);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                }
            }
        );

        $.ajax('/user',
            {
                'type': 'GET',
                'data': {
                },
                'dataType': 'json',
                'success': function(response) {
                    $email.val(response.email);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                }
            }
        );
    },

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.resource-name').text('');
        $dialog.find('input:radio[name="type"]').attr('checked', false);
        $dialog.find('.content').val('');
        $dialog.find('.email').val('');
        $dialog.find('.btn-submit').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    submit: function () {
        var $dialog = ReportDialog.$dialog;
        var $form = ReportDialog.$form;
        var resourceId = ReportDialog.resourceId;
        var type = $form.find('input:radio[name="type"]:checked').val();
        var content = $form.find('.content').val();
        var email = $form.find('.email').val();
        var $alert = $form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/reports',
            {
                'type': 'POST',
                'data': {
                    'resource_id': resourceId,
                    'type': type,
                    'content': content,
                    'email': email
                },
                'dataType': 'json',
                'success': function() {
                    $alert.text('举报成功').removeClass('alert-danger').addClass('alert-success').show();
                    setTimeout(function(){
                        $dialog.modal('hide');
                    }, 2000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.resourceId = null;

        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        if (this.$dialog.length === 0 || this.$form.length === 0) {
            return;
        }
        this.$dialog.on('shown.bs.modal', this.shown);
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-submit', this.submit);
    }

};
var GroundlessRefundDialog = {

    shown: function (event) {
        GroundlessRefundDialog.id = event.relatedTarget.id;
    },

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('input:radio[name="refund-reason"]').attr('checked', false);
        $dialog.find('.refund-wrapper').hide();
        $dialog.find('.refund-content').val('');
        $dialog.find('.btn-submit').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    refundReasonChange() {
        var $form = GroundlessRefundDialog.$form;
        var $refundWrapper = $form.find('.refund-wrapper');
        var refundReason = $form.find('input:radio[name="refund-reason"]:checked').val();

        if (refundReason === '其他') {
            $refundWrapper.show();
        } else {
            $refundWrapper.hide();
        }
    },

    submit: function () {
        var $dialog = GroundlessRefundDialog.$dialog;
        var $form = GroundlessRefundDialog.$form;
        var id = GroundlessRefundDialog.id;
        var refundReason = $form.find('input:radio[name="refund-reason"]:checked').val();
        var refundContent = $form.find('.refund-content').val();
        var $alert = $form.find('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/transactions/' + id + '/groundless-refund',
            {
                'type': 'POST',
                'data': {
                    'refund_reason': refundReason,
                    'refund_content': refundContent
                },
                'dataType': 'json',
                'success': function() {
                    $alert.text('退豆成功').removeClass('alert-danger').addClass('alert-success').show();
                    setTimeout(function(){
                        $dialog.modal('hide');
                    }, 2000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.id = null;

        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        if (this.$dialog.length === 0 || this.$form.length === 0) {
            return;
        }
        this.$dialog.on('shown.bs.modal', this.shown);
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', 'input:radio[name="refund-reason"]', this.refundReasonChange);
        this.$form.on('click', '.btn-submit', this.submit);
    }

};
var EditResourceDialog = {

    shown: function (event) {
        var $form = EditResourceDialog.$form;
        var id = $(event.relatedTarget).data('id');
        EditResourceDialog.id = id;
        var $name = $form.find('.name');
        var $accessCode = $form.find('.access-code');
        var $price = $form.find('.price');
        var $description = $form.find('.description');
        var $alert = $('.alert');

        $.ajax('/resources/' + id,
            {
                'type': 'GET',
                'data': {
                },
                'dataType': 'json',
                'success': function(response) {
                    $name.text(response.name);
                    $accessCode.val(response.access_code);
                    $price.val(response.price);
                    $description.val(response.description);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                }
            }
        );
    },

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.name').text('');
        $dialog.find('.access-code').val('');
        $dialog.find('.price').val('');
        $dialog.find('.description').val('');
        $dialog.find('.btn-submit').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    submit: function () {
        var $form = EditResourceDialog.$form;
        var id = EditResourceDialog.id;
        var accessCode = $form.find('.access-code').val();
        var price = $form.find('.price').val();
        var description = $form.find('.description').val();
        var $alert = $('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/resources/' + id,
            {
                'type': 'POST',
                'data': {
                    'access_code': accessCode,
                    'price': price,
                    'description': description
                },
                'dataType': 'json',
                'success': function() {
                    $alert.text('更新成功').removeClass('alert-danger').addClass('alert-success').show();
                    setTimeout(function(){
                        location.reload();
                    }, 1000);
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.id = null;
        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        this.$dialog.on('shown.bs.modal', this.shown);
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-submit', this.submit);
    }

};
var DeleteResourceDialog = {

    shown: function (event) {
        EditResourceDialog.id = $(event.relatedTarget).data('id');
    },

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.btn-submit').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    submit: function () {
        var id = EditResourceDialog.id;
        var $alert = $('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/resources/' + id,
            {
                'type': 'DELETE',
                'data': {
                },
                'dataType': 'json',
                'success': function() {
                    location.reload();
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.id = null;
        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        this.$dialog.on('shown.bs.modal', this.shown);
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-submit', this.submit);
    }

};
var ClearResourceDialog = {

    shown: function (event) {
        ClearResourceDialog.id = $(event.relatedTarget).data('id');
    },

    hidden: function () {
        var $dialog = $(this);

        $dialog.find('.btn-submit').removeAttr('disabled');
        $dialog.find('.alert').hide();
    },

    submit: function () {
        var id = ClearResourceDialog.id;
        var $alert = $('.alert');
        var $btn = $(this);

        $btn.attr('disabled', 'disabled');
        $.ajax('/resources/' + id + '/clear',
            {
                'type': 'post',
                'data': {
                },
                'dataType': 'json',
                'success': function() {
                    location.reload();
                },
                'error': function(xhr) {
                    var response = JSON.parse(xhr.responseText);
                    $alert.text(response.message).removeClass('alert-success').addClass('alert-danger').show();
                    $btn.removeAttr('disabled');
                }
            }
        );
    },

    init: function ($parent) {
        this.id = null;
        this.$dialog = $parent;
        this.$form = this.$dialog.find('.form');
        this.$dialog.on('shown.bs.modal', this.shown);
        this.$dialog.on('hidden.bs.modal', this.hidden);
        this.$form.on('click', '.btn-submit', this.submit);
    }

};
$(document).ready(function () {
    Init.init($(document));

    Search.init($('.search-form'));
    NotFound.init($('.search-not-found'));
    ContentDocument.init($('.content-document'));

    PageHomeIndex.init($('.page-home-index'));
    PageHomeSearch.init($('.page-home-search'));
    PageResourceShow.init($('.page-resource-show'));
    PageUserLogin.init($('.page-user-login'));
    PageUserRegister.init($('.page-user-register'));
    PageUserForgetPassword.init($('.page-user-forget-password'));
    PageUserResetPassword.init($('.page-user-reset-password'));
    PageUserState.init($('.page-user-state'));
    PageUserPeaTransfer.init($('.page-user-pea-transfer'));
    PageUserSharedResource.init($('.page-user-shared-resource'));

    UserRegisterDialog.init($('.user-register-dialog'));
    UserChangeNameDialog.init($('.user-change-name-dialog'));
    UserChangePasswordDialog.init($('.user-change-password-dialog'));
    UserRenewDialog.init($('.user-renew-dialog'));
    ReportDialog.init($('.report-dialog'));
    GroundlessRefundDialog.init($('.groundless-refund-dialog'));
    EditResourceDialog.init($('.edit-resource-dialog'));
    DeleteResourceDialog.init($('.delete-resource-dialog'));
    ClearResourceDialog.init($('.clear-resource-dialog'));
});