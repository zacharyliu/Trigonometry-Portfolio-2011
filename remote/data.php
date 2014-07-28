<?php

$filename = "data.txt";
//sleep(1);

/*while (filesize($filename) == 0) {
    sleep(1);
}*/


if ($_GET['command'] == 'delete') {
    $handle = fopen($filename, 'w');
    fclose($handle);
} elseif ($_GET['command'] == 'write') {
    $handle = fopen($filename, 'w');
    fwrite($handle, $_GET['content']);
    fclose($handle);
} else {
    /*if (filesize($filename)>0) {
        $handle = fopen($filename, 'r');
        $content = fread($handle, filesize($filename));
        fclose($handle);
    }*/
    echo "No command specified.";
}
    
echo $content;

?>