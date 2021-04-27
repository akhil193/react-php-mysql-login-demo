<?php
//set content type header to json
header('Content-type: application/json');

require('config.php');
//Disable CORB = Cross-Origin Read Blocking (CORB) for testing
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/vendor/autoload.php';

use ReallySimpleJWT\Token;

/**
 * Sample data for demonstration
 */
$secret = 'sec!ReT423*&';
$expiration = time() + 3600;
$issuer = 'localhost';


//decode post input variables
$data = json_decode(file_get_contents("php://input"));

$result = Token::validate($data->token, $secret);

if($result){
	$sql = "SELECT name,email,role FROM mstlogin where loginid='".$data->loginid."'";
	$data_result = $conn->query($sql);
	
	if ($data_result->num_rows > 0) {
		$row = $data_result->fetch_assoc();
		
		echo json_encode([
			'status' => 200,
			'name' => $row["name"],
			'email' => $row["email"],
			'role' => $row["role"]
		]);
	} else {
		echo json_encode([
			'status' => 400,
			'message' => 'Login failed!'
		]);
	}
	$conn->close();
}else{
	echo json_encode([
		'status' => 400,
		'message' => 'Login failed!'.$sql
	]);
}
?>