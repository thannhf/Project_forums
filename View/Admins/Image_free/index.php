
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Image_free</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <!-- header & upload image -->
        <section class="image-generator">
            <div class="content">
                <h1>AI Image Generator Tool JavaScript</h1>
                <p>Convert your text into an image within a second using this
                    JavaScript-powered AI Image Generator tool.</p>
                <form method="POST" action="index.php" enctype="multipart/form-data" style="padding:7px; background-color:white; color:black; border:3px solid black; border-radius:20px;">
                    <input type="hidden" name="size" value="1000000">
                    <input type="file" name="image" style="cursor:pointer;">
                    <input type="text" name="author" placeholder="author-images">
                    <button type="submit" name="upload">upload</button>
                </form>
            </div>
        </section>
        <section class="image-gallery">
            <div class="img-card"><img src="images/img-1.jpg" alt="image"></div>
            <div class="img-card"><img src="images/img-2.jpg" alt="image"></div>
            <div class="img-card"><img src="images/img-3.jpg" alt="image"></div>
            <div class="img-card"><img src="images/img-4.jpg" alt="image"></div>
        </section>

        <header style="background: linear-gradient(to right, #f06, #f79); padding: 40px; text-align: center; color: #fff;">
  <h1 style="font-size: 40px; font-weight: bold;">ArtifyPics</h1>
  <p style="font-size: 18px;">Free artistic photos for creative projects</p>
  <nav>
    <a href="#home" style="margin: 0 15px; color: #fff;">Home</a>
    <a href="#artists" style="margin: 0 15px; color: #fff;">Artists</a>
    <a href="#trending" style="margin: 0 15px; color: #fff;">Trending</a>
    <a href="#submit" style="margin: 0 15px; color: #fff;">Submit</a>
  </nav>
</header>

        
        <div class="container_image" style="width:100%; height:1000px; border:1px solid orange; background-color:black; color:white; overflow-x:hidden; overflow-y: auto; display:inline-block;text-align:center;">
            <h1>Images Upload</h1>
            <?php require_once 'xuly.php'; ?><br>
        </div><br>
        
        <!-- slide show chạy -->
        

        <!-- slide show vòng quay -->

        <!-- hoạt ảnh mây mưa hay gì đó -->



        <!-- footer -->
        <script src="script.js"></script>
    </body>
</html>