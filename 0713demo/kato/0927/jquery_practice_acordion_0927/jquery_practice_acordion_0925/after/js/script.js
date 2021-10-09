$(function () {


//  ***** ページ全体のhtmlの場所を取得して、変数にする共通設定 *****

    const toTop = $('#toTop');
    // aタグ、クラスtoTopを取得
    
    // トップに戻るボタンを、最初は隠しておく cssで、display:none

    const hb = $('html,body');
    // toTopをクリックしたときに、bodyそのものがアニメーションするのを取得
    // ブラウザによっては、htmlがアニメーションとして動くのでグループとして両方を記述


//  ***** トップに戻るアニメーション設定 ***** 
    toTop.on('click', function () {
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
                toTop.fadeIn();
            }else{
                toTop.fadeOut();
            }
    });


//  ***** スマホのさいにバーガーメニューをクリックするたびに、ナビゲーションの出し入れを、スライドトグルさせる設定 *****  


    // スマホのさいに、ナビゲーションの出し入れさせるnavの場所を取得 -> 変数名navに設定


    // スマホのさいに表示させる、ハンバーガーメニューの場所を取得 -> 変数名btnに設定    
    
    

//  ***** アコーディオンメニューをクリックするたびに、隠れているコンテンツをスライドさせる設定 ***** 
    
 
    // アコーディオンメニューの場所取得 -> 変数名acdに設定
    const acd = $('.main dt');
    // アコーディオンメニューコンテンツ（<dd></dd>）の場所取得 -> 変数名ddに設定
    const dd = $('.main dd');
    
    //すべてのddを、いったん非表示
    // --> dd.hide();
    //アコーディオンメニューがクリックしたそのもののnext() -> ddを表示、非表示（スライドダウン　または、スライドアップ）させる
    // --> $(this).next().slideToggle();
    // 表示されているdd以外 -> not($(this).next()) はスライドアップ
 
    // クラスの場合も同じ設定

    dd.hide();
    acd.on('click', function () {
        $(this).next().slideToggle();
        dd.not($(this).next()).slideUp();

        $(this).toggleClass('current');
        acd.not($(this)).removeClass('current');
    });


});