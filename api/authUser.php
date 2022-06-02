<?php
session_start();
require 'connect.php';
$postdata = file_get_contents("php://input");
if ($postdata!=null){
        $data = json_decode($postdata);
        $login = $data->login;
        $password = $data->password;

        $user=null;
        $sql = "SELECT * FROM mbou_user";
        if($result = mysqli_query($con,$sql))
        { 
                while($row = mysqli_fetch_assoc($result))
                {
                    if ($row['mail']==$login && $row['password']==$password){ 
                        $user = [
                          'id' => $row['id'],
                          'fname' => $row['fname'],
                          'lname' => $row['lname'],
                          'role' => $row['role']
                        ];
                        $_SESSION['user'] = $user;  
                        break;
                    } 
                }     

      }
      else{
        
        http_response_code(404);
      }
      echo json_encode($user); 
}

   



