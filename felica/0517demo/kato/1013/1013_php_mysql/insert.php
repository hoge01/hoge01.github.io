<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>DB Conect</title>
</head>
<body>

<?php

$name = $_GET['name'];
$tel = $_GET['tel'];
$address = $_GET['address'];

// formからのget　method　で送られたデータを変数に格納



$dsn = 'mysql:dbname=katoh_php;host=localhost;charset=utf8';
 $user = 'katoh_php';
 $password = '4649';

 try{

     $pdo = new PDO($dsn, $user, $password); 

     echo '接続に成功しました。<br>';



     $st = $pdo->prepare("INSERT INTO list VALUES(?, ?, ?)");
    //  「?」はフィールドに挿入するデータで、データは後ほど設定するため、『仮のデータ』（プレースホルダといい）になる
     $st->execute(array($name, $tel, $address));
    //  executeメソッドでSQL文を発行します。MySQLに挿入するデータは配列形式で格納

    $result = $pdo->prepare('SELECT * FROM list');
    // 格納された、各フィールドのデータをすべて抽出させるためのSQL文
    $result->execute();
    // SQL文の実行

 }catch (PDOException $e){
      echo('Error:'.$e->getMessage());
      echo "失敗";
     die('データベースの接続に失敗しました。');
 }

 header('location:show.php');
// データ挿入ページに留まると更新されるたびにデータが挿入されてしまうので、header('location')、別ページにとばす
?>
    

    
</body>
</html>