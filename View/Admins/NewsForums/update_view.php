<?php
	require_once '..\..\../Controller/connect.php';
	if(isset($_REQUEST['id']) and $_REQUEST['id']!=""){
		$id=$_GET['id'];
		// $sql = "DELETE FROM contentmembers WHERE id='$id'";
        $sql = "UPDATE contentmembers SET view_count = view_count + 1 WHERE id = '$id'";
		if ($conn->query($sql) === TRUE) {
			echo "update thành công!";
		} else {
			echo "Error updating record: " . $conn->error;
		}
		$conn->close();
	}
	header("Location: posts_add.php?id='$id'");
?>