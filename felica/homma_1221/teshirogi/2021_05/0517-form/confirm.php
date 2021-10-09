<?php
// セッション開始
 session_start();

// このページのプレビューをしようとすると、
// input.phpに強制遷移させる
if (!isset($_POST['your_name'])){
 header('Location:index.php');
 exit(); // 終了
}

// チェック項目・コメントアウト
//var_dump($_POST['your_name']);
//var_dump($_POST['your_mail']);
//var_dump($_POST['your_message']);

 $name = $_POST['your_name'];
 $mail = $_POST['your_mail'];
 $message = $_POST['your_message'];

// 変数の値をセッションデータとして書き込む
$_SESSION['your_name'] = $name;
$_SESSION['your_mail'] = $mail;
$_SESSION['your_message'] = $message;

// 入力された値が「空」だった場合
if(
 (empty($_POST['your_name']) === true) ||
 (empty($_POST['your_mail']) === true) ||
 (empty($_POST['your_message']) === true)
){
 echo '<p>未入力の項目があります。</p>';
 echo '<p><a href="index.php">入力画面に戻る</a></p>';
 exit();
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
<form action="submit.php" method="post">

<dl>
<dt>お名前</dt>
<dd class="field-c"><?php echo $name ?></dd>
<dt>メールアドレス</dt>
<dd class="field-c"><?php echo $mail ?></dd>
<dt>お問い合わせ内容</dt>
<dd class="field-ca"><?php echo $message ?></dd>
</dl>

<p class="btn"><button type="submit">送信</button></p>

</body>
</html>