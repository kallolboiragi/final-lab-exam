<?php
   $id="";
   $pass="";
   $cpass="";
   $name="";
   $utype="";
  if(isset($_REQUEST['submit'])){ 
   $id=$REQUEST['id'];
   $pass=$REQUEST['pass'];
   $cpass=$REQUEST['cpass'];
   $name=$REQUEST['name'];
   
   $myfile=fopen('Info.txt',w);
   fwrite($myfile,$id.$pass.$cpass.$name);
   fclose($myfile);
   echo"done";}
?>