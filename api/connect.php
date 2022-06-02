<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'mboudb');
/*
define('DB_HOST', 'localhost');
define('DB_USER', 'id18505957_mbouabid');
define('DB_PASS', 'm+b=!5Y}%g2IH%@n');
define('DB_NAME', 'id18505957_mbouabid_db');
*/
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");
  

  return $connect;
}

$con = connect();