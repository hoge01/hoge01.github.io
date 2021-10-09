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



//  ***** jQueryで、画像を差し替えるさせる設定 *****   
    // イベントの発生する場所が複数ある場合、$(this)はその複数のイベントの個々のイベントを指す

    // 差し替えられるimgの場所を取得
    const photo_img = $('.photo > img');
    // クリックイベントの場所の取得
    const photo_a = $('.photo_img a');

    photo_a.on('click', function () {
        // クリックしたさいの自身の属性hrefの属性値を取得
        const photo = $(this).attr('href');
        // 取得した属性値を、差し替えるimgの属性値と差し替える
        photo_img.attr('src', photo);

    // aタグのクリックしたときの本来の動き（リンクする）を無効にするため        
        return false;
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


// Java scriptの記述

//今日の日付の値を取得して表示
const today = new Date();
// Dateオブジェクトのインスタンス作成

const year = today.getFullYear();
// 年の取得

const month = today.getMonth() + 1;
// 月の取得　ただし、0から取得するので、+ 1 にして実行

const date = today.getDate();
// 日にちの取得

const day = today.getDay();
// 曜日の取得　ただし、日曜日から始まる曜日は、0から6まで取得できる

const week = ['日', '月', '火', '水', '木', '金', '土'];
// 上記の値をもとに、例えばdayが0を取得している場合、week[day]は、日を表示する

const this_day = document.getElementById('today')
// id todayの場所取得

this_day.textContent = `今日は、${year}年 ${month}月 ${date}日 ${week[day]}曜日`;
// id todayの場所取得した変数、this_dayに、テキストを代入するが、テンプレートリテラルを使用し、連結演算子を使用しないで代入している




// おみくじの結果をランダムに表示
const fortune =['大吉','中吉','小吉','吉','凶'];
// 小数点 に配列変数の数を掛けて、少雨点以下を切り捨てる記述
const luck =Math.floor(Math.random()*fortune.length);
// console logで値が整数かどうか確かめる為の記述
console.log(luck);
//（※） getELementByIdには別の名前をご用意（左側に注目　2にした）
const today_fortune = document.getElementById('fortune');
today_fortune.textContent= fortune[luck];