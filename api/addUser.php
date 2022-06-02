<?php
require 'connect.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);
  $fname = mysqli_real_escape_string($con, trim($request->fname));
  $lname = mysqli_real_escape_string($con, trim ($request->lname));
  $mail = mysqli_real_escape_string($con, trim ($request->mail));
  $password = mysqli_real_escape_string($con, trim ($request->password));
  $sql = "INSERT INTO `mbou_user`(`fname`,`lname`,`mail`,`password`) VALUES ('{$fname}','{$lname}','{$mail}','{$password}')";
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $user = [
      'fname' => $fname,
      'lname' => $lname
    ];
    echo json_encode($user);
    
  }
  else
  {
    http_response_code(422);
  }
}
