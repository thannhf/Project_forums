<?php
	// include 'posts_connect.php';
	require_once '..\..\../Controller/connect.php';
	if(isset($_REQUEST['id']) and $_REQUEST['id']!=""){
		$id=$_GET['id'];
		$sql = "DELETE FROM contentmembers WHERE id='$id'";
		if ($conn->query($sql) === TRUE) {
			echo "Xoá thành công!";
		} else {
			echo "Error updating record: " . $conn->error;
		}
		$conn->close();
	}
	header("Location: posts_add.php");
?>