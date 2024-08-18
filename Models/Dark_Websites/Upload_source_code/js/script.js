$(document).ready(function() {
    $('#createProjectForm').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url: 'create_project.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert(response);
                $('#projectList').load(location.href + " #projectList");
            }
        });
    });

    $(document).on('submit', '.addFileForm', function(e) {
        e.preventDefault();

        $.ajax({
            url: 'add_file.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert(response);
                $('#projectList').load(location.href + " #projectList");
            }
        });
    });

    $(document).on('click', '.fileItem', function() {
        var fileId = $(this).data('file-id');

        $.ajax({
            url: 'get_file_content.php',
            type: 'GET',
            data: { file_id: fileId },
            success: function(response) {
                $('#contentDisplay').text(response);
            }
        });
    });

    $(document).on('submit', '.updateFileForm', function(e) {
        e.preventDefault();

        $.ajax({
            url: 'update_file.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert(response);
                var fileId = $('input[name="file_id"]').val();
                $.ajax({
                    url: 'get_file_content.php',
                    type: 'GET',
                    data: { file_id: fileId },
                    success: function(response) {
                        $('#contentDisplay').text(response);
                    }
                });
            }
        });
    });
});
