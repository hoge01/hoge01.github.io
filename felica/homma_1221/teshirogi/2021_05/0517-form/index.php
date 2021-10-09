<?php
// セッション開始
session_start();

// 変数の初期化
$name = '';
$mail = '';
$message = '';

// チェック項目・コメントアウト
//var_dump($_SESSION['your_name']);
//var_dump($_SESSION['your_mail']);
//var_dump($_SESSION['your_message']);

// セッションデータが存在していた場合
if(isset($_SESSION['your_name']) === true){
 $name = $_SESSION['your_name'];
}
if(isset($_SESSION['your_mail']) === true){
 $mail = $_SESSION['your_mail'];
}
if(isset($_SESSION['your_message']) === true){
 $message = $_SESSION['your_message'];
}

$name = htmlspecialchars($name,ENT_QUOTES,'UTF-8');
$mail = htmlspecialchars($mail,ENT_QUOTES,'UTF-8');
$message = htmlspecialchars($message,ENT_QUOTES,'UTF-8');

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>入力画面 ｜ お問い合わせフォーム</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="content">
<form action="confirm.php" method="post">

<dl>
<dt>お名前</dt>
<dd><input type="text" name="your_name" class="field" placeholder="山田太郎" required value="<?php echo $name ?>"></dd>
<dt>メールアドレス</dt>
<dd><input type="email" name="your_mail" class="field" placeholder="yamada@sample.com" value="<?php echo $mail ?>"></dd>
<dt>お問い合わせ内容</dt>
<dd><textarea name="your_message" rows="4" class="field" placeholder="ここにお問い合わせ内容を入力してください。"><?php echo nl2br($message) ?></textarea></dd>
</dl>

<p class="btn"><button type="submit">確認</button></p>

</div>
    
</body>
</html>