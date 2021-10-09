$(function () {


//  ***** ページ全体のhtmlの場所を取得して、変数にする共通設定 *****

    const top = $('#toTop');
    // aタグ、id toTopを取得
    
    // トップに戻るボタンを、最初は隠しておく cssで、display:none

    const hb = $('html,body');
    // topをクリックしたときに、bodyそのものがアニメーションするのを取得
    // ブラウザによっては、htmlがアニメーションとして動くのでグループとして両方を記述



//  ***** トップに戻るアニメーション設定 ***** 
    top.on('click', function () {
 
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

  

});