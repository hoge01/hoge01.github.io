$(function () {


//  ***** ページ全体のhtmlの場所を取得して、変数にする共通設定 *****

    const toTop = $('#toTop');
    // aタグ、id toTopを取得
    
    // トップに戻るボタンを、最初は隠しておく cssで、display:none

    const hb = $('html,body');
    // toTopをクリックしたときに、bodyそのものがアニメーションするのを取得
    // ブラウザによっては、htmlがアニメーションとして動くのでグループとして両方を記述


//  ***** トップに戻るアニメーション設定 ***** 
    toTop.on('click', function () {
 
        hb.animate({ scrollTop: 0 }, 500);
        // scrollTopは、Elementオブジェクトのプロパティで、Elementの一番上からのスクロール量をピクセル単位で設定や取得
        return false;
        // aタグのクリックしたときの本来の動き（リンクする）を無効にするため
    });


//  ***** スクロール量を取得し、トップに戻るボタンを出し入れする　設定 ***** 
    $(window).on('scroll', function () {
        // windowのイベント機能のスクロールがされたとき

        let scl = $(this).scrollTop();
        // $(this)、つまりwindowがスクロールしているイベント本体のスクロール量を可変的に取得
        // もし、スクロール量がある特定に値を超えた場合には、トップに戻るボタンをフェードイン
        // それ以外は、フェードアウトのif文の条件式
            if(scl > 200){
                toTop.fadeIn();
            }else{
                toTop.fadeOut();
            }
    });

//  ***** スムーズスクロールの -- offset().top --  設定 *****  
    // navタグのaタグの場所を取得
    const nav_menu = $('nav a');

    nav_menu.on('touchstart click', function () {
        // nav_menuをクリックしたとき、個々のaタグの属性、hrefの属性値を取得
        const href = $(this).attr('href');
        // 取得した属性値の表示されたトップの位置をピクセル単位で取得
        let target = $(href).offset().top;
        // 取得した値を、コンソールで確認
        // nav_menuをクリックしたとき、windowの幅を取得
        const wh = $(window).width();
        // 取得した幅により、PCとスマホのときのスムーズスクロールの止める位置を調整する
        if (wh >= 768) {
            target = target - 50;
        }else{
            target = target + 10;

            nav.slideToggle();

            if (btn_i.hasClass('fas fa-bars')){
                btn_i.removeClass('fas fa-bars');
                btn_i.addClass('fas fa-times');
            } else {
                btn_i.removeClass('fas fa-times');
                btn_i.addClass('fas fa-bars');        
            }

        }


        // html、またはbodyのスクロールトップから、取得した値までアニメーションする
        hb.animate({ scrollTop: target }, 700, 'swing');

        // aタグのクリックしたときの本来の動き（リンクする）を無効にするため  

        return false;
        
    });

//  ***** アコーディオンメニューをクリックするたびに、隠れているコンテンツをスライドさせる設定 *****  
    // アコーディオンメニューの場所取得 -> 変数名dtに設定
    const dt = $('.acordion dt');
    // アコーディオンメニューコンテンツ（<dd></dd>）の場所取得 -> 変数名ddに設定
    const dd = $('.acordion dd');
    //すべてのddを、いったん非表示    --> dd.hide();   
    dd.hide();

    //アコーディオンメニューがクリックしたそのもののnext() -> ddを表示、非表示（スライドダウン　または、スライドアップ）させる
    // --> $(this).next().slideToggle();
    // 表示されているdd以外 -> not($(this).next()) はスライドアップ
 
    dt.on('click', function () {
        $(this).next().slideToggle();
        dd.not($(this).next()).slideUp();
        
        // クラスの場合も同じ設定 
        $(this).toggleClass('current');
        dt.not($(this)).removeClass('current');

    });

//  ***** タブメニューをクリックするたびに、隠れているコンテンツを表示させる設定 ***** 
    // タブメニュー .tab_menu a の場所取得 -> 変数名tab_m に設定
    const tab_m = $('.tab_menu a');

    // タブのコンテンツ .tab div の場所取得 -> 変数名tab_c に設定
    const tab_c = $('.tab > div');

    // タブのコンテンツの、.current_tab　以外を非表示
    tab_c.not($('.current_tab')).hide();

    tab_m.on('click', function () {
        
    // すべてのタブメニュー から current_tab_memu 削除する
        tab_m.removeClass('current_tab_memu');
    // クリックしたタブメニュー -> $(this) に current_tab_memu を追加する
        $(this).addClass('current_tab_memu');

    // いったん、タブコンテンツのすべて非表示、および、current_tab を削除する
        tab_c.hide().removeClass('current_tab');
    // クリックしたタブメニューの a タグの属性 href の属性値を取得        
        const tab_id = $(this).attr('href');
    // 取得した属性値のタブコンテンツだけ表示し、current_tab を追加する        
        $(tab_id).show().addClass('current_tab');

    // aタグのクリックしたときの本来の動き（リンクする）を無効にするため        
        return false;

    });

  

});