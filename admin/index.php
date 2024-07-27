<?php

// Kết nối database 
require 'core/init.php';

// Bảo trì
if ($data_web['status'] == 0) {
	require 'templates/shutdown.php';
	exit;
}

// Header
require 'includes/header.php';

// Content
require 'templates/content.php';

// Footer
require 'includes/footer.php';

?>