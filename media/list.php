<?php
$listing = scandir('./');
$output = array();
foreach ($listing as $item) {
    if ($item != "." && $item != ".." && $item != "pong.swf" && $item != "list.php") {
        //echo "'" . $item . "', ";
        $output[] = $item;
    }
}
$output = json_encode($output);
echo $output;
?>