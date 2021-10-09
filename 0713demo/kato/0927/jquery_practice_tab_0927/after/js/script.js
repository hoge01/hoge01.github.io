$(function () {


//  ***** ページ全体のhtmlの場所を取得して、変数にする共通設定 *****

    const top = $('#toTop');
    // aタグ、クラスtoTopを取得
    
    // トップに戻るボタンを、最初は隠しておく cssで、display:none

    const hb = $('html,body');
    // topをクリックしたときに、bodyそのものがアニメーションするのを取得
    // ブラウザによっては、htmlがアニメーションとして動くのでグループとして両方を記述


//  ***** トップに戻るアニメーション設定 ***** 
    top.on('click', function () {
        //スマホとPC、両方に使用されるイベントなので、併記しておく
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
        console.log(scl);
        // console.log()で、スクロール量の可変値を確認
        // もし、スクロール量がある特定に値を超えた場合には、トップに戻るボタンをフェードイン
        // それ以外は、フェードアウトのif文の条件式
            if(scl > 200){
                top.fadeIn();
            }else{
                top.fadeOut();
            }
    });


//  ***** スマホのさいにバーガーメニューをクリックするたびに、ナビゲーションの出し入れを、スライドトグルさせる設定 *****  

    // スマホのさいに、ナビゲーションの出し入れさせるnavの場所を取得 -> 変数名navに設定

    // スマホのさいに表示させる、ハンバーガーメニューの場所を取得 -> 変数名btnに設定
    
    
    

//  ***** アコーディオンメニューをクリックするたびに、隠れているコンテンツをスライドさせる設定 ***** 
    
    // アコーディオンメニューの場所取得 -> 変数名acdに設定

    // アコーディオンメニューコンテンツ（<dd></dd>）の場所取得 -> 変数名ddに設定

    
    
    

//  ***** タブメニューをクリックするたびに、隠れているコンテンツを表示させる設定 ***** 
    // タブメニュー .tab_menu a の場所取得 -> 変数名tab_m に設定
    const tab_m = $('.tab_menu a');

    // タブのコンテンツ .tab div の場所取得 -> 変数名tab_c に設定
    const tab_c = $('.tab div');
    
    // タブのコンテンツの、.current_tab　以外を非表示
    // タブメニューをクリックしたら、クリック前に定義した、current_tab_memuを削除し
    // 今回のクリックしたタブメニュー -> $(this) に current_tab_memu を追加する
    // クリックしたタブメニューの a タグの属性 href の属性値を取得
    // いったん、タブコンテンツのすべて非表示、および、current_tab を削除する
    // 取得した属性値のタブコンテンツだけ表示し、current_tab を追加する
    
    
    tab_c.not('.current_tab').hide();

    tab_m.on('touchstart click', function () {

        tab_m.removeClass('current_tab_memu');
        $(this).addClass('current_tab_memu');
        
        const tab_id = $(this).attr('href');

        tab_c.hide().removeClass('current_tab');

        // $(tab_id).show().addClass('current_tab');
        $(tab_id).fadeIn().addClass('current_tab');

        return false;
    });
    



});