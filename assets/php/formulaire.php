<?php

$validate = $_POST['validate'];
$todo = $_POST['todo'];
$path = '../json/data.json';

$json = json_decode(file_get_contents($path));

// $arr = array("todo" => ($json->todo != null || count($json->todo) == 0 ? $json->todo : array())
// , "validate" => ($json->archive != null || count($json->archive) == 0 ? $json->archive : array()));

$arr = array("todo" => ($json->todo != null ? $json->todo : array())
,"archive" => ($json->archive != null ? $json->archive : array()));

$arr['todo'] = json_decode($todo);
$arr['archive'] = json_decode($validate);

file_put_contents($path,json_encode($arr));

?>