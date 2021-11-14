<?php
// Template Name:子テーマのトップページ
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<link rel="stylesheet" href="http://test.local/wp-content/themes/twentytwentyone/twentytwentyone-child/style.css">
</head>
<body>

<h1>子テーマのトップページ</h1>

<code>echo get_template_directory_uri();</code>
<p><?php echo get_template_directory_uri(); ?></p>
<code>echo get_stylesheet_uri();</code>
<p><?php echo get_stylesheet_uri(); ?></p>

</body>
</html>