<?php
require_once("api/DB.php");

//$db = new DB("localhost:3306", "bublecoz_bublehub", "bublecoz_Kamo", "Epsilion28.");
$db = new DB("127.0.0.1", "studenthub", "root", "Epsilion28");

$formname = $_GET['formname'];

$query = "UPDATE posts SET postimg=:postimg WHERE id=:postid";
if(isset($_POST["image"]))
{
	$data = $_POST["image"];
	
	$image_array_1 = explode(";",$data);
	
	$image_array_2 = explode(",", $image_array_1[1]);
	
	$data = base64_decode($image_array_2[1]);
	
	$imageName = time().'.png';
	
	file_put_contents($imageName,$data);
	
	//$image_file = addslashes(file_get_contents($imageName));
				
	//$db->query('UPDATE posts SET postimg=:postimg WHERE id=:postid', array (':postimg'=>$imgpost,':postid'=>$postid));
	$folder='img/';
	$final_file = ''.$imageName.'';
	$new_loc = $folder.$final_file;
	if(copy($final_file,$folder.$final_file)) {
	//move_uploaded_file($final_file,$folder.$final_file);
		$imageName = $new_loc;
		unlink($final_file);
		//$preparams = array($formname=>$new_loc);
		
		//$params = $preparams + $params;

		//$db->query($query,$params);
		
	
	
		echo $imageName;
	}
	}
?>