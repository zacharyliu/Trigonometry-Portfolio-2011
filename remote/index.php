<html>
<head>
    <title>Remote</title>
    <script type="text/javascript" src="../js/jquery-1.6.1.min.js"></script>
    <script type="text/javascript" src="remote.js"></script>
    <script type="text/javascript">
    $(function() {
        var remoteServer = new RemoteServer();
        remoteServer.main();
    });
    </script>
    <style>
    a {
        display: inline-block;
        border: 1px solid black;
        padding: 12px;
        margin: 5px;
        font-size: 20pt;
    }
    </style>
</head>
<body>
    <p id="commands">
    <a id="pgup" href="#">Page Up</a><br />
    <a id="pgdown" href="#">Page Down</a>
    </p>
    
    <ul>
    <?php
    $basedir = '../content/';
    $listing = scandir('./' . $basedir);
    foreach ($listing as $item) {
        if ($item != "." && $item != "..") {
            echo '<li><a href="#">' . substr($item, 0, -5) . '</a></li>';
        }
    }
    ?>
    </ul>
    
    <!--<p>
    <a id="stop" href="#">Stop Remote Client</a>
    </p>-->
</body>
</html>