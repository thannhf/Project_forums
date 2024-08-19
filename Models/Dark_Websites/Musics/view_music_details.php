<<<<<<< HEAD
<?php
    require_once ('./config.php');
    if(isset($_GET['id']) && $_GET['id'] > 0) {
        $qry = $conn->query("SELECT * FROM `music_list` where id='{$_GET['id']}' and delete_flag = 0");
        if($qry->num_rows > 0) {
            foreach($qry->fetch_assoc() as $k = $v) {
                $$k = $v;
            }
        } else {
            echo '<script>alert("music id is not valid."); location.replace("./?page=musics")</script>';
        }
    } else {
        echo '<script>alert("music id is required."); location.replace("./?page=musics")</script>';
    }
?>
<?php if($_settings->chk_flashdata('success')): ?>
<script>
    alert_toast("<?php echo $_settings->flashdata('success') ?>", 'success')
</script>
<?php endif; ?>
<style>
    
=======
<?php
    require_once ('./config.php');
    if(isset($_GET['id']) && $_GET['id'] > 0) {
        $qry = $conn->query("SELECT * FROM `music_list` where id='{$_GET['id']}' and delete_flag = 0");
        if($qry->num_rows > 0) {
            foreach($qry->fetch_assoc() as $k = $v) {
                $$k = $v;
            }
        } else {
            echo '<script>alert("music id is not valid."); location.replace("./?page=musics")</script>';
        }
    } else {
        echo '<script>alert("music id is required."); location.replace("./?page=musics")</script>';
    }
?>
<?php if($_settings->chk_flashdata('success')): ?>
<script>
    alert_toast("<?php echo $_settings->flashdata('success') ?>", 'success')
</script>
<?php endif; ?>
<style>
    
>>>>>>> 65cc91a7 (update code)
</style>