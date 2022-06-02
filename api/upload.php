<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        
    $folderPath = "../src/assets/uploads/";
    $file_tmp = $_FILES['file']['tmp_name'];
    $file =$_FILES['file']['name'];
    move_uploaded_file($file_tmp,$folderPath.$file); 
?>