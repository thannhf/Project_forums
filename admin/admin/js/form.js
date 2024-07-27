$_DOMAIN = 'http://localhost/newspage/admin/';

// Đăng nhập
$('#formSignin button').on('click', function() {
	$this = $('#formSignin button');
	$this.html('Đang tải ...');

	// Gán các giá trị trong các biến
	$user_signin = $('#formSignin #user_signin').val();
	$pass_signin = $('#formSignin #pass_signin').val();

	// Nếu các giá trị rỗng
	if ($user_signin == '' || $pass_signin == '')
	{
		$('#formSignin .alert').removeClass('hidden');
		$('#formSignin .alert').html('Vui lòng điền đầy đủ thông tin.');
		$this.html('Đăng nhập');
	}
	// Ngược lại
	else
	{
		$.ajax({
			url : $_DOMAIN + 'signin.php',
			type : 'POST',
			data : {
				user_signin : $user_signin,
				pass_signin : $pass_signin
			}, success : function(data) {
				$('#formSignin .alert').removeClass('hidden');
				$('#formSignin .alert').html(data);
				$this.html('Đăng nhập');
			}, error : function() {
				$('#formSignin .alert').removeClass('hidden');
				$('#formSignin .alert').html('Không thể đăng nhập vào lúc này, hãy thử lại sau.');
				$this.html('Đăng nhập');
			}
		});
	}
});	

// Tự động tạo slug
function ChangeToSlug()
{
    var title, slug;
    title = $('.title').val();
    slug = title.toLowerCase();
 
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /gi, "-");
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    $('.slug').val(slug);
}

$('.slug').on('click', function() {
	ChangeToSlug();
});

// Tải chuyên mục cha ở chức năng thêm chuyên mục
$('#formAddCate input[type="radio"]').on('click', function() {
	if ($('#formAddCate .type-add-cate-1:checked').prop("checked") == true) 
	{
		$('.parent-add-cate').addClass('hidden');
		$('.parent-add-cate select').html('');
	}
	else if ($('#formAddCate .type-add-cate-2:checked').prop("checked") == true) 
	{
		$type_add_cate = $('#formAddCate .type-add-cate-2').val();

		$.ajax({
			type : 'POST',
			url : $_DOMAIN + 'categories.php',
			data : {
				action : 'load_add_parent_cate',
				type_add_cate : $type_add_cate
			}, success : function(data) {
				$('.parent-add-cate').removeClass('hidden');
				$('.parent-add-cate select').html(data);
			}, error : function() {
				$('.parent-add-cate').removeClass('hidden');
				$('.parent-add-cate').html('Đã có lỗi xảy ra, hãy thử lại sau.');
			}
		});
	} 
	else if ($('#formAddCate .type-add-cate-3:checked').prop("checked") == true) 
	{
		$type_add_cate = $('#formAddCate .type-add-cate-3').val();
		$.ajax({
			type : 'POST',
			url : $_DOMAIN + 'categories.php',
			data : {
				action : 'load_add_parent_cate',
				type_add_cate : $type_add_cate
			}, success : function(data) {
				$('.parent-add-cate').removeClass('hidden');
				$('.parent-add-cate select').html(data);
			}, error : function() {
				$('.parent-add-cate').removeClass('hidden');
				$('.parent-add-cate').html('Đã có lỗi xảy ra, hãy thử lại sau.');
			}
		});
	}
});

// Thêm chuyên mục
$('#formAddCate button').on('click', function() {
	$this = $('#formAddCate button');
	$this.html('Đang tải ...');

	// Gán các giá trị trong các biến
	$label_add_cate = $('#formAddCate #label_add_cate').val();
	$url_add_cate = $('#formAddCate #url_add_cate').val();
	$type_add_cate = $('#formAddCate input[name="type_add_cate"]:radio:checked').val();
	$parent_add_cate = $('#formAddCate #parent_add_cate').val();
	$sort_add_cate = $('#formAddCate #sort_add_cate').val();

	// Nếu các giá trị rỗng
	if ($label_add_cate == '' || $url_add_cate == '' || $type_add_cate == '' || $sort_add_cate == '')
	{
		$('#formAddCate .alert').removeClass('hidden');
		$('#formAddCate .alert').html('Vui lòng điền đầy đủ thông tin.');
		$this.html('Tạo');
	}
	// Ngược lại
	else
	{
		$.ajax({
			url : $_DOMAIN + 'categories.php',
			type : 'POST',
			data : {
				label_add_cate : $label_add_cate,
				url_add_cate : $url_add_cate,
				type_add_cate : $type_add_cate,
				parent_add_cate : $parent_add_cate,
				sort_add_cate : $sort_add_cate,
				action : 'add_cate'
			}, success : function(data) {
				$('#formAddCate .alert').removeClass('hidden');
				$('#formAddCate .alert').html(data);
				$this.html('Tạo');
			}, error : function() {
				$('#formAddCate .alert').removeClass('hidden');
				$('#formAddCate .alert').html('Không thể tạo chuyên mục vào lúc này, hãy thử lại sau.');
				$this.html('Tạo');
			}
		});
	}
});

// Tải chuyên mục cha ở chức năng chỉnh sửa chuyên mục
$('#formEditCate input[type="radio"]').on('click', function() {
	$id_edit_cate = $('#formEditCate').attr('data-id');
	if ($('#formEditCate .type-edit-cate-1:checked').prop("checked") == true) 
	{
		$('.parent-edit-cate').addClass('hidden');
		$('.parent-edit-cate select').html('');
	}
	else if ($('#formEditCate .type-edit-cate-2:checked').prop("checked") == true) 
	{
		$type_edit_cate = $('#formEditCate .type-edit-cate-2').val();

		$.ajax({
			type : 'POST',
			url : $_DOMAIN + 'categories.php',
			data : {
				action : 'load_edit_parent_cate',
				type_edit_cate : $type_edit_cate,
				id_edit_cate : $id_edit_cate
			}, success : function(data) {
				$('.parent-edit-cate').removeClass('hidden');
				$('.parent-edit-cate select').html(data);
			}, error : function() {
				$('.parent-edit-cate').removeClass('hidden');
				$('.parent-edit-cate').html('Đã có lỗi xảy ra, hãy thử lại sau.');
			}
		});
	} 
	else if ($('#formEditCate .type-edit-cate-3:checked').prop("checked") == true) 
	{
		$type_edit_cate = $('#formEditCate .type-edit-cate-3').val();
		$.ajax({
			type : 'POST',
			url : $_DOMAIN + 'categories.php',
			data : {
				action : 'load_edit_parent_cate',
				type_edit_cate : $type_edit_cate,
				id_edit_cate : $id_edit_cate
			}, success : function(data) {
				$('.parent-edit-cate').removeClass('hidden');
				$('.parent-edit-cate select').html(data);
			}, error : function() {
				$('.parent-edit-cate').removeClass('hidden');
				$('.parent-edit-cate').html('Đã có lỗi xảy ra, hãy thử lại sau.');
			}
		});
	}
});

// Chỉnh sửa chuyên mục
$('#formEditCate button').on('click', function() {
	$this = $('#formEditCate button');
	$this.html('Đang tải ...');

	// Gán các giá trị trong các biến
	$label_edit_cate = $('#formEditCate #label_edit_cate').val();
	$url_edit_cate = $('#formEditCate #url_edit_cate').val();
	$type_edit_cate = $('#formEditCate input[name="type_edit_cate"]:radio:checked').val();
	$parent_edit_cate = $('#formEditCate #parent_edit_cate').val();
	$sort_edit_cate = $('#formEditCate #sort_edit_cate').val();
	$id_edit_cate = $('#formEditCate').attr('data-id');

	// Nếu các giá trị rỗng
	if ($label_edit_cate == '' || $url_edit_cate == '' || $type_edit_cate == '' || $sort_edit_cate == '')
	{
		$('#formEditCate .alert').removeClass('hidden');
		$('#formEditCate .alert').html('Vui lòng điền đầy đủ thông tin.');
		$this.html('Lưu thay đổi');
	}
	// Ngược lại
	else
	{
		$.ajax({
			url : $_DOMAIN + 'categories.php',
			type : 'POST',
			data : {
				label_edit_cate : $label_edit_cate,
				url_edit_cate : $url_edit_cate,
				type_edit_cate : $type_edit_cate,
				parent_edit_cate : $parent_edit_cate,
				sort_edit_cate : $sort_edit_cate,
				id_edit_cate : $id_edit_cate,
				action : 'edit_cate'
			}, success : function(data) {
				$('#formEditCate .alert').removeClass('hidden');
				$('#formEditCate .alert').html(data);
				$this.html('Lưu thay đổi');
			}, error : function() {
				$('#formEditCate .alert').removeClass('hidden');
				$('#formEditCate .alert').html('Không thể chỉnh sửa chuyên mục vào lúc này, hãy thử lại sau.');
				$this.html('Lưu thay đổi');
			}
		});
	}
});

// Checkbox all
$('.list input[type="checkbox"]:eq(0)').change(function() {
	$('.list input[type="checkbox"]').prop('checked', $(this).prop("checked"));
});

// Xoá nhiều chuyên mục cùng lúc
$('#del_cate_list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá các chuyên mục đã chọn không?');
	if ($confirm == true)
	{
		$id_cate = [];

		$('#list_cate input[type="checkbox"]:checkbox:checked').each(function(i) {
			$id_cate[i] = $(this).val();
		});

		if ($id_cate.length === 0)
		{
			alert('Vui lòng chọn ít nhất một chuyên mục.');
		}
		else
		{
			$.ajax({
				url : $_DOMAIN + 'categories.php',
				type : 'POST',
				data : {
					id_cate : $id_cate,
					action : 'delete_cate_list'
				},
				success : function(data) {
					location.reload();
				}, error : function() {
					alert('Đã có lỗi xảy ra, hãy thử lại.');
				}
			});
		}
	}
	else
	{
		return false;
	}
});

// Xoá chuyên mục chỉ định trong bảng danh sách
$('.del-cate-list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá chuyên mục này không?');
	if ($confirm == true)
	{
		$id_cate = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'categories.php',
			type : 'POST',
			data : {
				id_cate : $id_cate,
				action : 'delete_cate'
			},
			success : function() {
				location.reload();
			}
		});
	}
	else
	{
		return false;
	}
});

// Xoá chuyên mục chỉ định trong trang chỉnh sửa
$('#del_cate').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá chuyên mục này không?');
	if ($confirm == true)
	{
		$id_cate = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'categories.php',
			type : 'POST',
			data : {
				id_cate : $id_cate,
				action : 'delete_cate'
			},
			success : function() {
				location.href = $_DOMAIN + 'categories/';
			}
		});
	}
	else
	{
		return false;
	}
});

// Xem ảnh trước
function preUpImg() {
	img_up = $('#img_up').val();
	count_img_up = $('#img_up').get(0).files.length;
	$('#formUpImg .box-pre-img').html('<p><strong>Ảnh xem trước</strong></p>');
	$('#formUpImg .box-pre-img').removeClass('hidden');

	// Nếu đã chọn ảnh
	if (img_up != '')
	{
		$('#formUpImg .box-pre-img').html('<p><strong>Ảnh xem trước</strong></p>');
		$('#formUpImg .box-pre-img').removeClass('hidden');
		for (i = 0; i <= count_img_up - 1; i++)
		{
			$('#formUpImg .box-pre-img').append('<img src="' + URL.createObjectURL(event.target.files[i]) + '" style="border: 1px solid #ddd; width: 50px; height: 50px; margin-right: 5px; margin-bottom: 5px;"/>');
		}
	} 
	// Ngược lại chưa chọn ảnh
	else
	{
		$('#formUpImg .box-pre-img').html('');
		$('#formUpImg .box-pre-img').addClass('hidden');
	}
}

// Nút reset form  hình ảnh
$('#formUpImg button[type=reset]').on('click', function() {
	$('#formUpImg .box-pre-img').html('');
	$('#formUpImg .box-pre-img').addClass('hidden');
});

// Upload hình ảnh
$('#formUpImg').submit(function(e) {
	img_up = $('#img_up').val();
	count_img_up = $('#img_up').get(0).files.length;
	error_size_img = 0;
	error_type_img = 0;
	$('#formUpImg button[type=submit]').html('Đang tải ...');

	// Nếu có chọn ảnh
	if (img_up) {
		e.preventDefault();
        
        // Kiểm tra dung lượng ảnh
		for (i = 0; i <= count_img_up - 1; i++)
		{
			size_img_up = $('#img_up')[0].files[i].size;
			if (size_img_up > 5242880) { // 5242880 byte = 5MB 
				error_size_img += 1; // Lỗi
			} else {
				error_size_img += 0; // Không lỗi
			}
		}

		// Kiểm tra định dạng ảnh
		for (i = 0; i <= count_img_up - 1; i++)
		{
			type_img_up = $('#img_up')[0].files[i].type;
			if (type_img_up == 'image/jpeg' || type_img_up == 'image/png' || type_img_up == 'image/gif') {
				error_type_img += 0;
			} else {
				error_type_img += 1;
			}
		}

		// Nếu lỗi về size ảnh
        if (error_size_img >= 1) {
        	$('#formUpImg button[type=submit]').html('Upload');
        	$('#formUpImg .alert').removeClass('hidden');
        	$('#formUpImg .alert').html('Một trong các tệp đã chọn có dung lượng lớn hơn mức cho phép.');
        // Nếu số lượng ảnh vượt quá 20 file
        } else if (count_img_up > 20) {
        	$('#formUpImg button[type=submit]').html('Upload');
        	$('#formUpImg .alert').removeClass('hidden');
        	$('#formUpImg .alert').html('Số file upload cho mỗi lần vượt quá mức cho phép.');
        } else if (error_type_img >= 1) {
        	$('#formUpImg button[type=submit]').html('Upload');
        	$('#formUpImg .alert').removeClass('hidden');
        	$('#formUpImg .alert').html('Một trong những file ảnh không đúng định dạng cho phép.');
        } else {
        	$(this).ajaxSubmit({ 
                beforeSubmit: function() {
                    target:   '#formUpImg .alert', 
                    $("#formUpImg .box-progress-bar").removeClass('hidden');
                    $("#formUpImg .progress-bar").width('0%');
                },
                uploadProgress: function (event, position, total, percentComplete){ 
                    $("#formUpImg .progress-bar").animate({width: percentComplete + '%'});
                    $("#formUpImg .progress-bar").html(percentComplete + '%');
                },
                success: function (data) {     
                	$('#formUpImg button[type=submit]').html('Upload');
                    $('#formUpImg .alert').attr('class', 'alert alert-success'); 
                    $('#formUpImg .alert').html(data);
                },
                error: function() {
                	$('#formUpImg button[type=submit]').html('Upload');
                    $('#formUpImg .alert').removeClass('hidden');  
                    $('#formUpImg .alert').html('Không thể upload hình ảnh vào lúc này, hãy thử lại sau.');
                },
                resetForm: true 
            }); 
            return false;
        }
    // Ngược lại không chọn ảnh
	} else {
		$('#formUpImg button[type=submit]').html('Upload');
		$('#formUpImg .alert').removeClass('hidden');
		$('#formUpImg .alert').html('Vui lòng chọn tệp hình ảnh.');
	}
});

// Xoá nhiều hình ảnh cùng lúc
$('#del_img_list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá các hình ảnh đã chọn không?');
	if ($confirm == true)
	{
		$id_img = [];

		$('#list_img input[type="checkbox"]:checkbox:checked').each(function(i) {
			$id_img[i] = $(this).val();
		});

		if ($id_img.length === 0)
		{
			alert('Vui lòng chọn ít nhất một hình ảnh.');
		}
		else
		{
			$.ajax({
				url : $_DOMAIN + 'photos.php',
				type : 'POST',
				data : {
					id_img : $id_img,
					action : 'delete_img_list'
				},
				success : function(data) {
					location.reload();
				}, error : function() {
					alert('Đã có lỗi xảy ra, hãy thử lại.');
				}
			});
		}
	}
	else
	{
		return false;
	}
});

// Xoá ảnh chỉ định
$('.del-img').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá ảnh này không?');
	if ($confirm == true)
	{
		$id_img = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'photos.php',
			type : 'POST',
			data : {
				id_img : $id_img,
				action : 'delete_img'
			},
			success : function() {
				location.reload();
			}
		});
	}
	else
	{
		return false;
	}
});

// Thêm bài viết
$('#formAddPost button').on('click', function() {
	$title_add_post = $('#title_add_post').val();
	$slug_add_post = $('#slug_add_post').val();

	if ($title_add_post == '' || $slug_add_post == '') {
		$('#formAddPost .alert').removeClass('hidden');
		$('#formAddPost .alert').html('Vui lòng điền đầy đủ thông tin.');
	} else {
		$.ajax({
			url : $_DOMAIN + 'posts.php',
			type : 'POST',
			data : {
				title_add_post : $title_add_post,
				slug_add_post : $slug_add_post,
				action : 'add_post'
			}, success : function(data) {
				$('#formAddPost .alert').html(data);
			}, error : function() {
				$('#formAddPost .alert').removeClass('hidden');
				$('#formAddPost .alert').html('Đã có lỗi xảy ra, hãy thử lại.');
			}
		});
	}
});

// Tìm kiếm bài viết
$('#formSearchPost button').on('click', function() {
	$kw_search_post = $('#kw_search_post').val();

	if ($kw_search_post != '') {
		$.ajax({
			url : $_DOMAIN + 'posts.php',
			type : 'POST',
			data : {
				kw_search_post : $kw_search_post,
				action : 'search_post'
			}, success : function(data) {
				$('#list_post').html(data);
				$('#paging_post').hide();
			}
		});
	}
});

// Tải chuyên mục vừa và nhỏ trong chỉnh sửa bài viết
$('#cate_post_1').on('change', function() {
	$parent_id = $(this).val();

	$.ajax({
		url : $_DOMAIN + 'posts.php',
		type : 'POST',
		data : {
			parent_id : $parent_id,
			action : 'load_cate_2'
		}, success : function(data) {
			$('#cate_post_2').html(data);

			// Sau khi tải xong chuyên mục vừa sẽ tải chuyên mục nhỏ 
			$parent_id = $('#cate_post_2').val();

			$.ajax({
				url : $_DOMAIN + 'posts.php',
				type : 'POST',
				data : {
					parent_id : $parent_id,
					action : 'load_cate_3'
				}, success : function(data) {
					$('#cate_post_3').html(data);
				}
			});
		}
	});
});

// Tải chuyên mục nhỏ trong chỉnh sửa bài viết
$('#cate_post_2').on('change', function() {
	$parent_id = $(this).val();

	$.ajax({
		url : $_DOMAIN + 'posts.php',
		type : 'POST',
		data : {
			parent_id : $parent_id,
			action : 'load_cate_3'
		}, success : function(data) {
			$('#cate_post_3').html(data);
		}
	});
});

// Chỉnh sửa bài viết
$('#formEditPost button').on('click', function() {
	$id_post = $('#formEditPost').attr('data-id');
	$stt_edit_post = $('#formEditPost input[name="stt_edit_post"]:radio:checked').val();
	$title_edit_post = $('#title_edit_post').val();
	$slug_edit_post = $('#slug_edit_post').val();
	$url_thumb_edit_post = $('#url_thumb_edit_post').val();
	$desc_edit_post = $('#desc_edit_post').val();
	$keywords_edit_post = $('#keywords_edit_post').val();
	$cate_1_edit_post = $('#cate_post_1').val();
	$cate_2_edit_post = $('#cate_post_2').val();
	$cate_3_edit_post = $('#cate_post_3').val();
	$body_edit_post = CKEDITOR.instances['body_edit_post'].getData();

	if ($stt_edit_post == '' || $title_edit_post == '' || $slug_edit_post == '' || $cate_1_edit_post == '' || $cate_2_edit_post == '' || $cate_3_edit_post == '' || $body_edit_post == '') 
	{
		$('#formEditPost .alert').removeClass('hidden');
		$('#formEditPost .alert').html('Vui lòng điền đầy đủ thông tin.');
	} 
	else
	{
		$.ajax({
			url : $_DOMAIN + 'posts.php',
			type : 'POST',
			data : {
				id_post : $id_post,
				stt_edit_post : $stt_edit_post,
				title_edit_post : $title_edit_post,
				slug_edit_post : $slug_edit_post,
				url_thumb_edit_post : $url_thumb_edit_post,
				keywords_edit_post : $keywords_edit_post,
				desc_edit_post : $desc_edit_post,
				cate_1_edit_post : $cate_1_edit_post,
				cate_2_edit_post : $cate_2_edit_post,
				cate_3_edit_post : $cate_3_edit_post,
				body_edit_post : $body_edit_post,
				action : 'edit_post'
			}, success : function(data) {
				$('#formEditPost .alert').removeClass('hidden');
				$('#formEditPost .alert').html(data);
			}, error : function() {
				$('#formEditPost .alert').removeClass('hidden');
				$('#formEditPost .alert').html('Đã có lỗi xảy ra, hãy thử lại sau.');
			}
		});
	}
});

// Xoá nhiều bài viết cùng lúc
$('#del_post_list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá các bài viết đã chọn không?');
	if ($confirm == true)
	{
		$id_post = [];

		$('#list_post input[type="checkbox"]:checkbox:checked').each(function(i) {
			$id_post[i] = $(this).val();
		});

		if ($id_post.length === 0)
		{
			alert('Vui lòng chọn ít nhất một bài viết.');
		}
		else
		{
			$.ajax({
				url : $_DOMAIN + 'posts.php',
				type : 'POST',
				data : {
					id_post : $id_post,
					action : 'delete_post_list'
				},
				success : function(data) {
					location.reload();
				}, error : function() {
					alert('Đã có lỗi xảy ra, hãy thử lại.');
				}
			});
		}
	}
	else
	{
		return false;
	}
});

// Xoá bài viết chỉ định trong bảng danh sách
$('.del-post-list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá bài viết này không?');
	if ($confirm == true)
	{
		$id_post = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'posts.php',
			type : 'POST',
			data : {
				id_post : $id_post,
				action : 'delete_post'
			},
			success : function() {
				location.reload();
			}
		});
	}
	else
	{
		return false;
	}
});

// Xoá bài viết chỉ định trong trang chỉnh sửa
$('#del_post').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá bài viết này không?');
	if ($confirm == true)
	{
		$id_post = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'posts.php',
			type : 'POST',
			data : {
				id_post : $id_post,
				action : 'delete_post'
			},
			success : function() {
				location.href = $_DOMAIN + 'posts/';
			}
		});
	}
	else
	{
		return false;
	}
});

// Trạng thái website
$('#formStatusWeb button').on('click', function() {
	$stt_web = $('#formStatusWeb input[name="stt_web"]:radio:checked').val();

	$.ajax({
		url : $_DOMAIN + 'setting.php',
		type : 'POST',
		data : {
			stt_web : $stt_web,
			action : 'stt_web'
		}, success : function() {
			$('#formStatusWeb .alert').attr('class', 'alert alert-success');
			$('#formStatusWeb .alert').html('Thay đổi thành công.');
			location.reload();
		}, error : function() {
			$('#formStatusWeb .alert').removeClass('hidden');
			$('#formStatusWeb .alert').html('Đã có lỗi xảy ra, hãy thử lại.');
		}
	});
});

// Chỉnh sửa thông tin website
$('#formInfoWeb button').on('click', function() {
	$title_web = $('#title_web').val();
	$descr_web = $('#descr_web').val();
	$keywords_web = $('#keywords_web').val();

	$.ajax({
		url : $_DOMAIN + 'setting.php',
		type : 'POST',
		data : {
			title_web : $title_web,
			descr_web : $descr_web,
			keywords_web : $keywords_web,
			action : 'info_web'
		}, success : function() {
			$('#formInfoWeb .alert').attr('class', 'alert alert-success');
			$('#formInfoWeb .alert').html('Thay đổi thành công.');
			location.reload();
		}, error : function() {
			$('#formInfoWeb .alert').removeClass('hidden');
			$('#formInfoWeb .alert').html('Đã có lỗi xảy ra, hãy thử lại.');
		}

	});
});

// Thêm tài khoản
$('#formAddAcc button').on('click', function() {
	$un_add_acc = $('#un_add_acc').val();
	$pw_add_acc = $('#pw_add_acc').val();
	$repw_add_acc = $('#repw_add_acc').val();

	if ($un_add_acc == '' || $pw_add_acc == '' || $repw_add_acc == '')
	{
		$('#formAddAcc .alert').removeClass('hidden');
		$('#formAddAcc .alert').html('Vui lòng điền đầy đủ thông tin.');
	}
	else
	{
		$.ajax({
			url : $_DOMAIN + 'accounts.php',
			type : 'POST',
			data : {
				un_add_acc: $un_add_acc,
				pw_add_acc : $pw_add_acc,
				repw_add_acc : $repw_add_acc,
				action : 'add_acc'
			}, success : function(data) {
				$('#formAddAcc .alert').html(data);
			}, error : function() {
				$('#formAddAcc .alert').removeClass('hidden');
				$('#formAddAcc .alert').html('Đã có lỗi xảy ra, hãy thử lại.');
			}  
		});
	}
});

// Khoá nhiều tài khoản cùng lúc
$('#lock_acc_list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn khoá các tài khoản đã chọn không?');
	if ($confirm == true)
	{
		$id_acc = [];

		$('#list_acc input[type="checkbox"]:checkbox:checked').each(function(i) {
			$id_acc[i] = $(this).val();
		});

		if ($id_acc.length === 0)
		{
			alert('Vui lòng chọn ít nhất một tài khoản.');
		}
		else
		{
			$.ajax({
				url : $_DOMAIN + 'accounts.php',
				type : 'POST',
				data : {
					id_acc : $id_acc,
					action : 'lock_acc_list'
				},
				success : function(data) {
					location.reload();
				}, error : function() {
					alert('Đã có lỗi xảy ra, hãy thử lại.');
				}
			});
		}
	}
	else
	{
		return false;
	}
});

// Khoá tài khoản chỉ định trong bảng danh sách
$('.lock-acc-list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn khoá tài khoản này không?');
	if ($confirm == true)
	{
		$id_acc = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'accounts.php',
			type : 'POST',
			data : {
				id_acc : $id_acc,
				action : 'lock_acc'
			},
			success : function() {
				location.reload();
			}
		});
	}
	else
	{
		return false;
	}
});

// Mở khoá nhiều tài khoản cùng lúc
$('#unlock_acc_list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn mở khoá các tài khoản đã chọn không?');
	if ($confirm == true)
	{
		$id_acc = [];

		$('#list_acc input[type="checkbox"]:checkbox:checked').each(function(i) {
			$id_acc[i] = $(this).val();
		});

		if ($id_acc.length === 0)
		{
			alert('Vui lòng chọn ít nhất một tài khoản.');
		}
		else
		{
			$.ajax({
				url : $_DOMAIN + 'accounts.php',
				type : 'POST',
				data : {
					id_acc : $id_acc,
					action : 'unlock_acc_list'
				},
				success : function(data) {
					location.reload();
				}, error : function() {
					alert('Đã có lỗi xảy ra, hãy thử lại.');
				}
			});
		}
	}
	else
	{
		return false;
	}
});

// Mở tài khoản chỉ định trong bảng danh sách
$('.unlock-acc-list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn mở khoá tài khoản này không?');
	if ($confirm == true)
	{
		$id_acc = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'accounts.php',
			type : 'POST',
			data : {
				id_acc : $id_acc,
				action : 'unlock_acc'
			},
			success : function() {
				location.reload();
			}
		});
	}
	else
	{
		return false;
	}
});

// Xoá nhiều tài khoản cùng lúc
$('#del_acc_list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá các tài khoản đã chọn không?');
	if ($confirm == true)
	{
		$id_acc = [];

		$('#list_acc input[type="checkbox"]:checkbox:checked').each(function(i) {
			$id_acc[i] = $(this).val();
		});

		if ($id_acc.length === 0)
		{
			alert('Vui lòng chọn ít nhất một tài khoản.');
		}
		else
		{
			$.ajax({
				url : $_DOMAIN + 'accounts.php',
				type : 'POST',
				data : {
					id_acc : $id_acc,
					action : 'del_acc_list'
				},
				success : function(data) {
					location.reload();
				}, error : function() {
					alert('Đã có lỗi xảy ra, hãy thử lại.');
				}
			});
		}
	}
	else
	{
		return false;
	}
});

// Xoá tài khoản chỉ định trong bảng danh sách
$('.del-acc-list').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá tài khoản này không?');
	if ($confirm == true)
	{
		$id_acc = $(this).attr('data-id');

		$.ajax({
			url : $_DOMAIN + 'accounts.php',
			type : 'POST',
			data : {
				id_acc : $id_acc,
				action : 'del_acc'
			},
			success : function() {
				location.reload();
			}
		});
	}
	else
	{
		return false;
	}
});

// Xem ảnh avatar trước
function preUpAvt() {
    img_avt = $('#img_avt').val();
    $('#formUpAvt .box-pre-img').html('<p><strong>Ảnh xem trước</strong></p>');
    $('#formUpAvt .box-pre-img').removeClass('hidden');
 
    // Nếu đã chọn ảnh
    if (img_avt != '')
    {
        $('#formUpAvt .box-pre-img').html('<p><strong>Ảnh xem trước</strong></p>');
        $('#formUpAvt .box-pre-img').removeClass('hidden');
		$('#formUpAvt .box-pre-img').append('<img src="' + URL.createObjectURL(event.target.files[0]) + '" style="border: 1px solid #ddd; width: 50px; height: 50px; margin-right: 5px; margin-bottom: 5px;"/>');
    } 
    // Ngược lại chưa chọn ảnh
    else
    {
        $('#formUpAvt .box-pre-img').html('');
        $('#formUpAvt .box-pre-img').addClass('hidden');
    }
}

// Upload ảnh đại diện
$('#formUpAvt').submit(function(e) {
    img_avt = $('#img_avt').val();
    $('#formUpAvt button[type=submit]').html('Đang tải ...');
 
    // Nếu có chọn ảnh
    if (img_avt) {
    	size_img_avt = $('#img_avt')[0].files[0].size;
    	type_img_avt = $('#img_avt')[0].files[0].type;

        e.preventDefault();
        // Nếu lỗi về size ảnh
        if (size_img_avt > 5242880) { // 5242880 byte = 5MB 
            $('#formUpAvt button[type=submit]').html('Upload');
            $('#formUpAvt .alert-danger').removeClass('hidden');
            $('#formUpAvt .alert-danger').html('Tệp đã chọn có dung lượng lớn hơn mức cho phép.');
        // Nếu lỗi về định dạng ảnh
        } else if (type_img_avt != 'image/jpeg' && type_img_avt != 'image/png' && type_img_avt != 'image/gif') {
            $('#formUpAvt button[type=submit]').html('Upload');
            $('#formUpAvt .alert-danger').removeClass('hidden');
            $('#formUpAvt .alert-danger').html('File ảnh không đúng định dạng cho phép.');
        } else {
            $(this).ajaxSubmit({ 
                beforeSubmit: function() {
                    target:   '#formUpAvt .alert-danger', 
                    $("#formUpAvt .box-progress-bar").removeClass('hidden');
                    $("#formUpAvt .progress-bar").width('0%');
                },
                uploadProgress: function (event, position, total, percentComplete){ 
                    $("#formUpAvt .progress-bar").animate({width: percentComplete + '%'});
                    $("#formUpAvt .progress-bar").html(percentComplete + '%');
                },
                success: function (data) {     
                    $('#formUpAvt button[type=submit]').html('Upload');
                    $('#formUpAvt .alert-danger').attr('class', 'alert alert-success'); 
                    $('#formUpAvt .alert-success').html(data);
                },
                error: function() {
                    $('#formUpAvt button[type=submit]').html('Upload');
                    $('#formUpAvt .alert-danger').removeClass('hidden');  
                    $('#formUpAvt .alert-danger').html('Không thể upload hình ảnh vào lúc này, hãy thử lại sau.');
                },
                resetForm: true
            }); 
            return false;
        }
    // Ngược lại không chọn ảnh
    } else {
        $('#formUpAvt button[type=submit]').html('Upload');
        $('#formUpAvt .alert-danger').removeClass('hidden');
        $('#formUpAvt .alert-danger').html('Vui lòng chọn tệp hình ảnh.');
    }
});

// Xoá ảnh đại diện
$('#del_avt').on('click', function() {
	$confirm = confirm('Bạn có chắc chắn muốn xoá ảnh đại diện này không?');
	if ($confirm == true)
	{
		$.ajax({
			url : $_DOMAIN + 'profile.php',
			type : 'POST',
			data : {
				action : 'delete_avt'
			}, success : function() {
				location.reload();
			}, error : function() {
				alert('Đã có lỗi xảy ra, vui lòng thử lại.');
			}
		});
	}
	else {
		return false;
	}
});

// Cập nhật thông tin khác
$('#formUpdateInfo button').on('click', function() {
	$('#formUpdateInfo button').html('Đang tải ...');
	$dn_update = $('#dn_update').val();
	$email_update = $('#email_update').val();
	$fb_update = $('#fb_update').val();
	$gg_update = $('#gg_update').val();
	$tt_update = $('#tt_update').val();
	$phone_update = $('#phone_update').val();
	$desc_update = $('#desc_update').val();

	if ($dn_update && $email_update) {
		$.ajax({
			url : $_DOMAIN + 'profile.php',
			type : 'POST',
			data : {
				dn_update : $dn_update,
				email_update : $email_update,
				fb_update : $fb_update,
				gg_update : $gg_update,
				tt_update : $tt_update,
				phone_update : $phone_update,
				desc_update : $desc_update,
				action : 'update_info'
			}, success : function(data) {
				$('#formUpdateInfo .alert').removeClass('hidden');
				$('#formUpdateInfo .alert').html(data);
			}, error : function() {
				$('#formUpdateInfo .alert').removeClass('hidden');
				$('#formUpdateInfo .alert').html('Đã có lỗi xảy ra, vui lòng thử lại.');
			}
		});
		$('#formUpdateInfo button').html('Lưu thay đổi');
	} else {
		$('#formUpdateInfo button').html('Lưu thay đổi');
        $('#formUpdateInfo .alert').removeClass('hidden');
        $('#formUpdateInfo .alert').html('Vui lòng điền đầy đủ thông tin.');
	}
});

$('#formChangePw button').on('click', function() {
	$('#formChangePw button').html('Đang tải ...');	
	$old_pw_change = $('#old_pw_change').val();
	$new_pw_change = $('#new_pw_change').val();
	$re_new_pw_change = $('#re_new_pw_change').val();

	if ($old_pw_change && $new_pw_change && $re_new_pw_change) {
		$.ajax({
			url : $_DOMAIN + 'profile.php',
			type : 'POST',
			data : {
				old_pw_change : $old_pw_change,
				new_pw_change : $new_pw_change,
				re_new_pw_change : $re_new_pw_change,
				action : 'change_pw'
			}, success : function(data) {
				$('#formChangePw .alert').removeClass('hidden');
        		$('#formChangePw .alert').html(data);
			}, error : function() {
				$('#formChangePw .alert').removeClass('hidden');
        		$('#formChangePw .alert').html('Đã có lỗi xảy ra, vui lòng thủ lại.');
			}
		});
		$('#formChangePw button').html('Lưu thay đổi');
	} else {
		$('#formChangePw button').html('Lưu thay đổi');
        $('#formChangePw .alert').removeClass('hidden');
        $('#formChangePw .alert').html('Vui lòng điền đầy đủ thông tin.');
	}
});