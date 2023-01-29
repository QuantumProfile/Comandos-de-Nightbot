<?php
$user = $_GET['u'];
$canal = $_GET['c'];
$query = $_GET['q'];
$ql=[];
function equalStrings($normal,$lower){
    return strtolower($normal)==$lower;
}
if($query!='')$ql=explode(" ",$query);
$blacklist=['merceditas09','vane96','nightbot','apulxd','commanderroot','streamelements','hiddxn','diannab_'];
function getRandom($not){
    $is_in_blacklist=true;
    $random_viewer='null';
    while($is_in_blacklist){
        $ch = curl_init("https://2g.be/twitch/randomviewer.php?channel=".$GLOBALS['canal']);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        $random_viewer=rtrim(curl_exec($ch));
        $is_in_blacklist=in_array($random_viewer,$GLOBALS['blacklist'])||$random_viewer==strtolower($not);
    }
    return $random_viewer;
}
$paraNum=count($ql);
if($paraNum>2){
    echo 'Quien cumea a quien?';
}
else if($paraNum<1){
    echo $user.' ha cumeado en '.getRandom($user);
}
else if($paraNum<2&&(strtolower($user)==strtolower($ql[0]))){
    echo 'Por qué te cumearías a ti mismo?';
}
else if($paraNum>1&&(strtolower($ql[0])==strtolower($ql[1]))){
    echo 'Por qué quieres que '.$ql[0].' se cumee a si mismo?';
}
else{
    $u='null';$t='null';
    if($paraNum<2){
        $u=$user;$t=$ql[0];
    }
    else{
        $u=$ql[0];$t=$ql[1];
    }
    if(strtolower($u)=='random')$u=getRandom($t);
    if(strtolower($t)=='random')$t=getRandom($u);
    echo $u.' ha cumeado en '.$t;
}
?>
