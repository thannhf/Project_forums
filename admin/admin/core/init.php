<?php

// Require các thư viện PHP
require_once 'classes/DB.php';
require_once 'classes/Session.php';
require_once 'classes/Functions.php';

// Kết nối database
$db = new DB();
$db->connect();
$db->set_char('utf8');

// Thông tin chung
$_DOMAIN = 'http://localhost/newspage/admin/';

date_default_timezone_set('Asia/Ho_Chi_Minh'); 
$date_current = '';
$date_current = date("Y-m-d H:i:sa");

// Khởi tạo session
$session = new Session();
$session->start();

// Kiểm tra session
if ($session->get() != '')
{
	$user = $session->get();
}
else
{
	$user = '';
}

// Nếu đăng nhập
if ($user)
{
	// Lấy dữ liệu tài khoản
	$sql_get_data_user = "SELECT * FROM accounts WHERE username = '$user'";
	if ($db->num_rows($sql_get_data_user))
	{
		$data_user = $db->fetch_assoc($sql_get_data_user, 1);
	}
}

?>