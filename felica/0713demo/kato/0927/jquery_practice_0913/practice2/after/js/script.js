$(function () {
    const top = $('#toTop');
    // aタグ、クラスtoTopを取得
    const hb = $('html,body');
    // topをクリックしたときに、bodyそのものがアニメーションするのを取得
    // ブラウザによっては、htmlがアニメーションとして動くのでグループとして両方を記述


    top.on('click', function () {
        hb.animate({ scrollTop: 0 }, 500);
        // scrollTopは、Elementオブジェクトのプロパティで、Elementの一番上からのスクロール量をピクセル単位で設定や取得

        return false;
        // aタグのクリックしたときの本来の動き（リンクする）を無効にするため
    });



});