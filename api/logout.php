<?php
session_start();
session_unset();
session_destroy();
//$auth = false;
echo json_encode(false);  
?>
