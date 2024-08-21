<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Code Repository</title>
        <link rel="stylesheet" href="css/styles.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/script.js"></script>
    </head>
    <body>
        <div style="width:100%; display:flex; justify-content:space-arrow;overflow-y:auto;">
            <div style="width:50%; border:1px solid black; height:250px;">
                
            </div>
            <div class="form-section" style="width:50%; border:1px solid black; height:250px; background-color:black;">
                <h1>Code Repository</h1>
                <h2>Create Project</h2>
                <form id="createProjectForm" method="post">
                    <input type="text" name="name" placeholder="Project Name" required>
                    <textarea name="description" placeholder="Project Description"></textarea>
                    <button type="submit">Create Project</button>
                </form>
            </div>
        </div>
            
        <div class="container" style="display:flex; justify-content: space-arrow;overflow-x:hidden;">
            <div class="project-section" style="width:50%; height:500px; overflow:autol">
                <h2>Projects</h2>
                <?php
                    include 'db.php';
                    $projects = $conn->query("SELECT * FROM projects ORDER BY created_at DESC");

                    while ($project = $projects->fetch_assoc()) {
                        echo "<div class='project' style='height: 200px; overflow:auto;'>";
                            echo "<h3>{$project['name']}</h3>";
                            echo "<p>{$project['description']}</p>";

                            // $files = $conn->query("SELECT * FROM files WHERE project_id = {$project['id']}");
                            $files = $conn->query("SELECT * FROM files WHERE project_id = {$project['id']} ORDER BY created_at DESC");
                            echo "<form class='addFileForm' method='post'>";
                                echo "<input type='hidden' name='project_id' value='{$project['id']}'>";
                                echo "<input type='text' name='name' placeholder='File Name' required>";
                                echo "<textarea name='content' placeholder='File Content' required></textarea>";
                                echo "<button type='submit'>Add File</button>";
                            echo "</form>";

                            echo "<ul class='fileList'>";
                                while ($file = $files->fetch_assoc()) {
                                    echo "<li class='fileItem' data-file-id='{$file['id']}'>{$file['name']}</li>";
                                }
                            echo "</ul>";
                        echo "</div>";
                    }
                    $conn->close();
                ?>
            </div>
            <div class="file-content-section" style="width:50%; height:500px; overflow:auto;">
                <h2>File Content</h2>
                <pre id="contentDisplay" style="background-color:black; color:greenyellow;"></pre>
            </div>
        </div>
    </body>
</html>