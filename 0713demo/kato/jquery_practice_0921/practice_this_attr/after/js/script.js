$(function () {


//  ***** ページ全体のhtmlの場所を取得して、変数にする共通設定 *****

    const top = $('#toTop');
    // aタグ、クラスtoTopを取得
    
    // トップに戻るボタンを、最初は隠しておく cssで、display:none

    const hb = $('html,body');
    // topをクリックしたときに、bodyそのものがアニメーションするのを取得
    // ブラウザによっては、htmlがアニメーションとして動くのでグループとして両方を記述


    // スマホのさいに、ナビゲーションの出し入れさせるnavの場所を取得 -> 変数名navに設定


    // スマホのさいに表示させる、ハンバーガーメニューの場所を取得 -> 変数名btnに設定
    
    // 画像をクリックで差し替える、クラス .photo_img a の場所を取得 -> 変数名phaに設定
    const pha = $('.photo_img a');


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




//  ***** jQueryで、画像を差し替えるさせる設定 *****   
        // イベントの発生する場所が複数あり場合、$(this)はその複数のイベント場所の個々のイベントを指す
        // jQueryの関数の引数にパラメータが入る場合には、データの挿入、空白の場合は対象のデータを取得
        // aタグのクリックしたときの本来の動き（リンクする）を無効にするため

        pha.on('touchstart click',function(){
            const photo = $(this).attr('href');
            console.log(photo);
            $('.photo img').attr('src', photo);
            
            return false;

        });   

});