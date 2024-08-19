<<<<<<< HEAD
<?php
	include('../conn.php');
	session_start();
	if(isset($_POST['msg'])){		
		$msg=$_POST['msg'];
		$id=$_POST['id'];
		mysqli_query($conn,"insert into `chat` (chatroomid, message, userid, chat_date) values ('$id', '$msg' , '".$_SESSION['id']."', NOW())") or die(mysqli_error());
	}
=======
<?php
	include('../conn.php');
	session_start();
	if(isset($_POST['msg'])){		
		$msg=$_POST['msg'];
		$id=$_POST['id'];
		mysqli_query($conn,"insert into `chat` (chatroomid, message, userid, chat_date) values ('$id', '$msg' , '".$_SESSION['id']."', NOW())") or die(mysqli_error());
	}
>>>>>>> 65cc91a7 (update code)
?>