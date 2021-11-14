<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>DB Conect</title>
</head>
<body>
<h1>登録</h1>
<form action="insert.php" method="get">
    <!-- データを挿入するPHPファイルへactionする　methodは、今回はオーソドックスのget -->

mame<input type="text" name="name"><br>
tel <input type="text" name="tel"><br>
address<input type="text" name="address"><br>

<button type="submit" name="submit">登録</button>

</form>
<p><a href="show.php">一覧</a></p>
    
</body>
</html>