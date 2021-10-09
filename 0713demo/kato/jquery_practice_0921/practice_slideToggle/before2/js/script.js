$(function () {


//  ***** ページ全体のhtmlの場所を取得して、変数にする共通設定 *****

    const top = $('#toTop');
    // aタグ、クラスtoTopを取得
    
    // トップに戻るボタンを、最初は隠しておく cssで、display:none

    const hb = $('html,body');
    // topをクリックしたときに、bodyそのものがアニメーションするのを取得
    // ブラウザによっては、htmlがアニメーションとして動くのでグループとして両方を記述

    const nav = $('nav');
    // スマホのさいに、ナビゲーションの出し入れさせるnavの場所を取得

    // const btn = $('.bars');
    // スマホのさいに表示させる、ハンバーガーメニューの場所を取得
 



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
    // btn - > FontAwesomeを囲むPタグのクラス    
    // btn_i - > FontAwesomeのiタグ    
    // btn.on('click', function () {   
    // クリック（click）でもいいが、touchstartのほうがスマホの場合レスポンシブが良いとされている
    // btn_iにある、クラス存在を確認し、あればクラスを削除し、あらたに別のクラスを追加
    // 逆の場合は、追加したクラスを削除し、当初のクラスを追加    
    
    const btn = $('.bars');
    // スマホのさいに表示させる、ハンバーガーメニューの場所を取得
const btn_i=$('.bars i');

    btn.on('click', function () {
        nav.slideToggle();

        if(btn_i.hasClass('fas fa-bars')){
        btn_i.removeClass('fas fa-bars');
        btn_i.addClass('fas fa-times');
        }else{
        btn_i.removeClass('fas fa-times');
        btn_i.addClass('fas fa-bars');
        }


    });


});