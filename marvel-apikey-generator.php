<?php
/*
	MARVEL API
	Authentication for Server-Side Applications
	Server-side applications must pass two parameters in addition to the apikey parameter:
	
	ts - a timestamp (or other long string which can change on a request-by-request basis)
	hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
	RUNS THIS CODE ON: http://phpfiddle.org/ TO GET THE apikey PARAMETER
*/

//Replace by your dev account values
$publicKey = "00756345469ae591c18fb1e9e705f301";
$privateKey = "c4b0ef3d03fa12e068d397ebb9184063f7513959";

//timestamp
$ts = date_timestamp_get(date_create());


//md5(ts+privateKey+publicKey)
echo "apikey parameter: ".md5($ts.$privateKey.$publicKey);
//Example Output 
//apikey parameter: 23571914a0bd7d9f002c5c58c0c5ee28
?>