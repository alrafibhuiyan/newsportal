<?php

session_start();
include('includes/config.php');
error_reporting(0);
if(strlen($_SESSION['login'])==0)
  { 
header('location:index.php');
}

$newsId = $_GET['newsId'];

$query=mysqli_query($con,"UPDATE news SET published='1' WHERE id= '$newsId'");

if($query){
    header("location:./unapprove-post.php");
}

?>
