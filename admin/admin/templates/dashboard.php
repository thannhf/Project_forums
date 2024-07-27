<!-- Dashboard bài viết -->
<h3>Bài viết</h3>
<div class="row">
  <?php

  if ($data_user['position'] == '1') {
    // Lấy tổng số bài viết
    $sql_get_count_post = "SELECT id_post FROM posts";   
    $label = 'tổng bài viết';
  } else {
    // Lấy số bài viết của tác giả
    $sql_get_count_post = "SELECT id_post FROM posts WHERE author_id = '$data_user[id_acc]'";
    $label = 'bài viết';
  }

  $count_post = $db->num_rows($sql_get_count_post);

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-info">
        <h1>' . $count_post . '</h1>
        <p>' . $label . '</p>
      </div>
    </div>
  ';

  ?>

  <?php

  if ($data_user['position'] == '1') {
    // Lấy tổng bài viết xuất bản
    $sql_get_count_post_public = "SELECT id_post FROM posts WHERE status = '1'";
    $label = 'tổng bài viết xuất bản';   
  } else {
    // Lấy các bài viết xuất bản của tài khoản đó 
    $sql_get_count_post_public = "SELECT id_post FROM posts WHERE status = '1' AND author_id = '$data_user[id_acc]'";
    $label = 'bài viết xuất bản';
  }

  $count_post_public = $db->num_rows($sql_get_count_post_public);

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-success">
        <h1>' . $count_post_public . '</h1>
        <p>' . $label . '</p>
      </div>
    </div>
  ';

  ?>
  
  <?php

  if ($data_user['position'] == '1') {
    // Lấy tổng bài viết ẩn
    $sql_get_count_post_hide = "SELECT id_post FROM posts WHERE status = '0'";
    $label = 'tổng bài viết ẩn';   
  } else {
    // Lấy các bài viết ẩn của tài khoản đó 
    $sql_get_count_post_hide = "SELECT id_post FROM posts WHERE status = '0' AND author_id = '$data_user[id_acc]'";
    $label = 'bài viết ẩn';
  }

  $count_post_hide = $db->num_rows($sql_get_count_post_hide);

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-warning">
        <h1>' . $count_post_hide . '</h1>
        <p>' . $label . '</p>
      </div>
    </div>
  ';

  ?>
</div>

<!-- Dashboard hình ảnh -->
<h3>Hình ảnh</h3>
<div class="row">
  <?php

  if ($data_user['position'] == '1') {
    // Lấy tổng số hình ảnh
    $sql_get_count_img = "SELECT id_img FROM images";
    $label = 'tổng hình ảnh';
  } else {
    // Lấy số hình ảnh của tác giả
    $sql_get_count_img = "SELECT id_img FROM images WHERE uploader_id = '$data_user[id_acc]'";
    $label = 'hình ảnh';
  }

  $count_img = $db->num_rows($sql_get_count_img);

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-info">
        <h1>' . $count_img . '</h1>
        <p>' . $label . '</p>
      </div>
    </div>
  ';

  ?>
  
  <?php

  if ($data_user['position'] == '1') {
    // Lấy tổng dung lượng ảnh
    $sql_get_size_img = "SELECT size FROM images";
    $label = 'tổng dung lượng ảnh';
  } else {
    // Lấy số dung lượng ảnh của tác giả
    $sql_get_size_img = "SELECT size FROM images WHERE uploader_id = '$data_user[id_acc]'";
    $label = 'dung lượng ảnh';
  }

  // Tính dung lượng hình ảnh
  if ($db->num_rows($sql_get_size_img)) {
    $count_size_img = 0;
    foreach ($db->fetch_assoc($sql_get_size_img, 0) as $data_img) {
      $count_size_img = $count_size_img + $data_img['size'];
    }
  } else {
    $count_size_img = 0 . ' B';
  }

  // Gán đơn vị cho dung lượng
  if ($count_size_img < 1024) {
    $count_size_img = $count_size_img . ' B';
  } else if ($count_size_img < 1048576) {
    $count_size_img = round($count_size_img / 1024) . ' KB';
  } else if ($count_size_img < 1073741824) {
    $count_size_img = round($count_size_img / 1024 / 1024) . ' MB';
  } else if ($count_size_img < 1099511627776) {
    $count_size_img = round($count_size_img / 1024 / 1024 / 1024) . ' GB';
  }

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-success">
        <h1>' . $count_size_img . '</h1>
        <p>' . $label . '</p>
      </div>
    </div>
  ';

  ?>

  <?php

  if ($data_user['position'] == '1') {
    // Lấy tổng số hình ảnh
    $sql_get_count_img = "SELECT url FROM images";
    $label = 'tổng hình ảnh lỗi';
  } else {
    // Lấy số bài viết của tác giả
    $sql_get_count_img = "SELECT url FROM images WHERE uploader_id = '$data_user[id_acc]'";
    $label = 'hình ảnh lỗi';
  }

  // Kiểm tra danh sách hình ảnh
  if ($db->num_rows($sql_get_count_img)) {
    $count_img_error = 0;
    foreach ($db->fetch_assoc($sql_get_count_img, 0) as $data_img) {
      if (!file_exists('../' . $data_img['url'])) {
        $count_img_error++;
      }
    }
  }

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-danger">
        <h1>' . $count_img_error . '</h1>
        <p>' . $label . '</p>
      </div>
    </div>
  ';

  ?>
</div>

<?php

if ($data_user['position'] == '1') {

?>

<!-- Dashboard chuyên mục -->
<h3>Chuyên mục</h3>
<div class="row">
  <?php

  // Lấy tổng chuyên mục
  $sql_get_count_cate = "SELECT id_cate FROM categories";   
  $count_cate = $db->num_rows($sql_get_count_cate);

  echo 
  '
    <div class="col-md-3">
      <div class="alert alert-info">
        <h1>' . $count_cate . '</h1>
        <p>tổng chuyên mục</p>
      </div>
    </div>
  ';

  ?>

  <?php

  // Lấy số chuyên mục lớn
  $sql_get_count_cate_1 = "SELECT id_cate FROM categories WHERE type = '1'";   
  $count_cate_1 = $db->num_rows($sql_get_count_cate_1);

  echo 
  '
    <div class="col-md-3">
      <div class="alert alert-success">
        <h1>' . $count_cate_1 . '</h1>
        <p>chuyên mục lớn</p>
      </div>
    </div>
  ';

  ?>

  <?php

  // Lấy số chuyên mục vừa
  $sql_get_count_cate_2 = "SELECT id_cate FROM categories WHERE type = '2'";   
  $count_cate_2 = $db->num_rows($sql_get_count_cate_2);

  echo 
  '
    <div class="col-md-3">
      <div class="alert alert-warning">
        <h1>' . $count_cate_2 . '</h1>
        <p>chuyên mục vừa</p>
      </div>
    </div>
  ';

  ?>

  <?php

  // Lấy số chuyên mục nhỏ
  $sql_get_count_cate_3 = "SELECT id_cate FROM categories WHERE type = '3'";   
  $count_cate_3 = $db->num_rows($sql_get_count_cate_3);

  echo 
  '
    <div class="col-md-3">
      <div class="alert alert-danger">
        <h1>' . $count_cate_3 . '</h1>
        <p>chuyên mục nhỏ</p>
      </div>
    </div>
  ';

  ?>
</div>

<!-- Dashboard tài khoản -->
<h3>Tài khoản</h3>
<div class="row">
  <?php

  // Lấy tổng tài khoản
  $sql_get_count_acc = "SELECT id_acc FROM accounts WHERE position = '0'";   
  $count_acc = $db->num_rows($sql_get_count_acc);

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-info">
        <h1>' . $count_acc . '</h1>
        <p>tổng tài khoản</p>
      </div>
    </div>
  ';

  ?>

  <?php

  // Lấy số tài khoản hoạt động
  $sql_get_count_acc_active = "SELECT id_acc FROM accounts WHERE status = '0' AND position = '0'";   
  $count_acc_active = $db->num_rows($sql_get_count_acc_active);

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-success">
        <h1>' . $count_acc_active . '</h1>
        <p>tài khoản hoạt động</p>
      </div>
    </div>
  ';

  ?>

  <?php

  // Lấy số tài khoản bị khoá
  $sql_get_count_acc_locked = "SELECT id_acc FROM accounts WHERE status = '1' AND position = '0'";   
  $count_acc_locked = $db->num_rows($sql_get_count_acc_locked);

  echo 
  '
    <div class="col-md-4">
      <div class="alert alert-warning">
        <h1>' . $count_acc_locked . '</h1>
        <p>tài khoản bị khoá</p>
      </div>
    </div>
  ';

  ?>
</div>

<?php

}

?>