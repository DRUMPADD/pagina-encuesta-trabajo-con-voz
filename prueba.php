<?php require_once('conexion.php'); 
//recibir el parámetro cantidad
$cantidad=$_POST["cantidad"];
if( isset( $_POST["submit"] ) ){ 
 $fac=$_POST['factura'];
 $consulta="INSERT INTO facturas (factura) VALUES ('$fac')";
 mysqli_query($consulta);
}
for($x =0 ; $x <= $_POST['cantidad'] ; $x++) 
if(isset($_POST["num" . $x])) {
 $Pro=  $_POST["producto".$x ];
 $Desc=$_POST["descripcion".$x ];

 $consulta2="INSERT INTO productos (producto, descripcion) VALUES ('$Pro', '$Desc')";
 mysqli_query($consulta2);
}
?>
<form id="form1" name="form1" method="post" >
  N. de Productos a Registrar:
  <input name="cantidad" type="number" min="1" id="cantidad" value="1" />
  <input type="submit" name="Submit" value="Ok" />
</form>


<? 

if($cantidad>0){ 
  ?>
<br /><br />
<form method="POST">
<table width="auto" border="0">
  <tr>
    <td colspan="3">
      <p>No. Factura:
  <input type="text" name="factura" id="factura" required >
      </p>           
 </td>
  </tr>
  <tr>
    <td>No.</td>
    <td>Nombre Producto:</td>
    <td>Descripcion Producto:</td>
  </tr>
  <?
 $cantidad=1;
  //while con minúscula
 while($cantidad<=$_POST['cantidad']){ 
  ?>

  <tr>
    <td><? echo "$cantidad"; ?></td>
    <td><input type="text" name="producto<? echo "$cantidad";?>" required="required"></td>
    <td><input type="text" name="descripcion<? echo "$cantidad";?>" required="required"></td>
 <input name="num<? echo "$cantidad"; ?>" type="hidden">
 <input name="cantidad" type="hidden" id="cantidad" value="<? echo "$_POST[cantidad]"; ?>" />
<?
$cantidad++;
}
?>
  </tr>
  <tr>
   <td colspan="3" align="right">
   <button type ="submit" name="submit" >Guardar</button>
   </td>
<? } ?>  
  </tr>
</table>
</form>