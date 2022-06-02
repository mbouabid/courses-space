<?php
require 'connect.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);
  $id = mysqli_real_escape_string($con, trim($request->id));
  $sql = "delete from `mbou_course` where id=$id";
 if(mysqli_query($con,$sql))
  {
    http_response_code(200); 
  }
  else
  {
    http_response_code(422);
  }
}
