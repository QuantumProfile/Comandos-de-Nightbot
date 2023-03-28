<?php
$query=$_GET['q'];
$user=$_GET['u'];
$canal = $_GET['c'];
$ql=[];
if($query!='')$ql=explode(" ",$query);
if(count($ql)==0){
    $ql=[$user,$user];
}
$touser=$ql[0];
$randomNumber=0;
$paraNum=count($ql);
function matches($a,$b){
    return strtolower($a)==strtolower($b);
}
function matches2($a,$b,$c,$d){
    return matches($a,$b)&&matches($c,$d);
}

if($paraNum==2){
    $user=$touser;
    $touser=$ql[1];
}
if($user==$touser){
    $ch = curl_init("https://2g.be/twitch/randomviewer.php?channel=".$GLOBALS['canal']);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    $touser=rtrim(curl_exec($ch));
}
function options($list){
    $value=false;
    for($i=0;$i<=count($list);$i++){
        $first=$list[$i][0];
        $second=$list[$i][1];
        $value=$value||(matches2($GLOBALS['user'],$first,$GLOBALS['touser'],$second))||(matches2($GLOBALS['user'],$second,$GLOBALS['touser'],$first));
    }
    return $value;
}
if(options([['josuemtz55','diannab_'],['dianna','josue'],['diannab_','josue'],['dianna','josuemtz55']])){
    $randomNumber=2147483647;
    
}else{
    $randomNumber=rand(0,100);
}
echo 'hay un '.$randomNumber.'% de que '.$user.' y '.$touser.' se casen';
?>
