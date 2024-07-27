<?php

// Require các thư viện PHP
require_once 'admin/classes/DB.php';
require_once 'admin/classes/Session.php';
require_once 'admin/classes/Functions.php';

// Kết nối database
$db = new DB();
$db->connect();
$db->set_char('utf8');

$_DOMAIN = 'http://localhost/newspage/';
// Lấy thông tin website
$sql_get_data_web = "SELECT * FROM website";
if ($db->num_rows($sql_get_data_web)) {
	$data_web = $db->fetch_assoc($sql_get_data_web, 1);
}

?>