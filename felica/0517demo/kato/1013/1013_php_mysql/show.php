<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">

    <title>DB Conect</title>
</head>
<body>

<?php

$dsn = 'mysql:dbname=katoh_php;host=localhost;charset=utf8';
 $user = 'katoh_php';
 $password = '4649';

 try{

     $pdo = new PDO($dsn, $user, $password); 
 
  $result = $pdo->prepare('SELECT * FROM list');
  $result->execute();


 }catch (PDOException $e){
      echo('Error:'.$e->getMessage());
      echo "失敗";
     die('データベースの接続に失敗しました。');
 }


?>
<ul>
 <?php  //while($row = $result->fetch(PDO::FETCH_ASSOC)): ?>
 <?php  foreach ($result as $row): ?>

        <li><?php echo $row['name'] ;?></li>
        <li><?php echo $row['tel'] ;?></li>
        <li><?php echo $row['address'] ;?></li>

<?php
 endforeach;
// endwhile;

// foreach または、while どちらでもデータを表示できます
    $pdo = null;
?>
</ul>
    <p><a href="index.php">再入力</a></p>
</body>
</html>

