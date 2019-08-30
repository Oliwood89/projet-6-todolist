<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>To Do List</title>
</head>
<body>

    <?php
        @include("assets/php/contenu.php");
        $display = new Displayer();
    ?>
    <form action="" id="form">
        <input type='text' id='input'>
        <input type="submit">
    </form>
    <div>
        <h2>A faire</h2>
        <div id='todo'>
        <?php
            echo $display->getTodo();
        ?>
        </div>
    </div>
    <div>
        <h2>Archives</h2>
        <div id='archive'>
        <?php
            echo $display->getArchive();
        ?>
        </div>
    </div>
    <button id='save'>Enregistrer</button>
    <script src="assets/js/script.js"></script>
</body>
</html>