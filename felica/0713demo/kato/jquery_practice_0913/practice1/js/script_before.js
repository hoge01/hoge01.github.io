    // jQueryを実行するための基本の形が下記で、その範囲で処理を実行 
    $(function(){


   //  jQueryの、Javascriptのdocument.getElemetnById()などと違って、HTMLの場所指定が、$('セレクター')で取得することができる        
   //  jQueryは、Javascriptと違って、HTMLの場所指定が簡単なので、変数にしなくても良いように思えるが
   //  同じものを何度か使うと、実行速度が遅くなる、または整理がしやすいようなどの理由で変数にして定義するクセをつけたほうが良いと思う 


	//  イベント（クリックなど、プログラムを動かすきっかけとなる動作）の記述方法
    //   対象オブジェクト.on('click',function(){
    //     イベントが発生したときの処理
    //   });

	//  イベント（クリックなど、プログラムを動かすきっかけとなる動作）そのものを、動作範囲内で
   	//　あらわすとき、$(this)を使う事が多い
	//　あるメソッド（関数）、.（ドット）続けて、複数の命令をつなげる事ができる
	//　今回は、CSSメソッドで、対象の背景色を変える		




    });