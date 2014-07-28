<html>
<head>
<title>Trigonometry Portfolio</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link type="text/css" rel="stylesheet" href="css/style.css">

<!-- Google Web Fonts -->
<link href='http://fonts.googleapis.com/css?family=Jura' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Mako' rel='stylesheet' type='text/css'>

<script type="text/javascript" src="js/jquery-1.6.1.min.js"></script>
<script type="text/javascript" src="js/jquery.history.js"></script>
<script type="text/javascript" src="js/jquery.scrollTo-1.4.2-min.js"></script>

<script type="text/javascript" src="js/main.js"></script>

<script type="text/javascript" src="js/preload.js"></script>
</head>
<body>
<div id="border"></div>
<div id="splash">
    <span id="splashText" class="hideSlide"><span class="accent">Trig</span>onometry Portfolio <span id="splashSubText">[Zachary Liu / <span class="accent">2011</span>]</span></span>
</div>
<div id="toc">
    <ul>
<?php
$basedir = 'content/';
$listing = scandir('./' . $basedir);
foreach ($listing as $item) {
    if ($item != "." && $item != "..") {
        echo '<li class="hideSlide"><a href="' . $basedir . $item . '">' . substr($item, 0, -5) . '</a></li>';
    }
}
?>
</ul>
</div>
<div id="content"></div>
</body>
</html>