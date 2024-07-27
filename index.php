<?php
    require_once 'core/init.php';
    if($data_web['status'] == 0) {
        require_once 'templates/shutdown.php';
        exit;
    }
    require_once 'include/header.php';
    require_once 'templates/content.php';
    require_once 'includes/footer.php';
?>
