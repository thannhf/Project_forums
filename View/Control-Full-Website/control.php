<?php
    $output = shell_exec('python backend.py 2>&1');
    echo $output;
?>

