<?php
require 'connect.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);
  $title = mysqli_real_escape_string($con, trim($request->title));
  $description = mysqli_real_escape_string($con, trim ($request->description));
  $level = mysqli_real_escape_string($con, trim ($request->level));
  $filePath = mysqli_real_escape_string($con, trim ($request->file));
  $fileName = strtolower(end(explode('\\',$filePath)));

  $sql = "INSERT INTO `mbou_course`(`title`,`description`,`level`,`fileName`) VALUES ('{$title}','{$description}','{$level}','{$fileName}')";
 if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    //echo json_encode(true);  
  }
  else
  {
    http_response_code(422);
  }
}
