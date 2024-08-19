<<<<<<< HEAD
function showModal(event, id) {
    event.preventDefault();

    // Show the modal
    $('#folderModal-' + id).modal('show');

}

function deleteFolder(id) {
    if (confirm("Do you want to delete this folder the images will be deleted also?")) {
        window.location = "./endpoint/delete-folder.php?folder=" + id;
    }
}

$(document).ready(function() {
    $(".delete-image").on("click", function () {
        if (confirm("Do you want to delete all checked images?")) {
            var checkedImageIDs = [];

            $(".delete-check-box:checked").each(function () {
                var imageID = $(this).attr("id").replace("checkbox-", "");
                checkedImageIDs.push(imageID);
            });

            $(".delete-check-box").prop("checked", false);
            
            window.location = "./endpoint/delete-image.php?image=" + checkedImageIDs;

        }
    });

    $(document).on("dblclick", ".image-card", function() {
        // Show all checkboxes
        $(".delete-check-box").show();
        $(".add-image").hide();
        $(".delete-image").show();
        $(".cancel-delete").show();
    });
});

function cancelDelete() {
    $(".delete-check-box").hide();
    $(".add-image").show();
    $(".delete-image").hide();
    $(".cancel-delete").hide();
=======
function showModal(event, id) {
    event.preventDefault();

    // Show the modal
    $('#folderModal-' + id).modal('show');

}

function deleteFolder(id) {
    if (confirm("Do you want to delete this folder the images will be deleted also?")) {
        window.location = "./endpoint/delete-folder.php?folder=" + id;
    }
}

$(document).ready(function() {
    $(".delete-image").on("click", function () {
        if (confirm("Do you want to delete all checked images?")) {
            var checkedImageIDs = [];

            $(".delete-check-box:checked").each(function () {
                var imageID = $(this).attr("id").replace("checkbox-", "");
                checkedImageIDs.push(imageID);
            });

            $(".delete-check-box").prop("checked", false);
            
            window.location = "./endpoint/delete-image.php?image=" + checkedImageIDs;

        }
    });

    $(document).on("dblclick", ".image-card", function() {
        // Show all checkboxes
        $(".delete-check-box").show();
        $(".add-image").hide();
        $(".delete-image").show();
        $(".cancel-delete").show();
    });
});

function cancelDelete() {
    $(".delete-check-box").hide();
    $(".add-image").show();
    $(".delete-image").hide();
    $(".cancel-delete").hide();
>>>>>>> 65cc91a7 (update code)
}