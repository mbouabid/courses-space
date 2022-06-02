<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$courses = [];
$sql = "SELECT * FROM mbou_course";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $courses[$cr]['id']    = $row['id'];
    $courses[$cr]['title'] = $row['title'];
    $courses[$cr]['description'] = $row['description'];
    $courses[$cr]['level'] = $row['level'];
    $courses[$cr]['fileName'] = $row['fileName'];
    $cr++;
  }
    
  echo json_encode(['data'=>$courses]);
}
else
{
  http_response_code(404);
}