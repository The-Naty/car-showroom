
<?php

$connection = mysqli_connect("localhost", "Zanaty", "11233455", "showroom_db");

if($connection === false){
    die("DB_ERROR: "
        . mysqli_connect_error());
}

$car_manufacturer = $_REQUEST['car-manufacturer'];
$car_model_name = $_REQUEST['car-model'];
$email_address = $_REQUEST['email'];
$contact_number = $_REQUEST['contactnumber'];

$sql = "INSERT INTO orders VALUES (
    '$car_manufacturer','$car_model_name','$email_address','$contact_number')";

if(mysqli_query($connection, $sql)){
    echo "Order submited successfully!";
} else{
    echo "DB_ERROR: $sql. "
        . mysqli_error($connection);
}

mysqli_close($connection);
?>
