var animal1 = "zebra";
var animal2 = "donkey";

if((animal1 == "zebra" || animal1 == "donkey") && 
   (animal2 == "zebra" || animal2 == "donkey") && 
   animal1 != animal2){
  trace("ZEEDONK");
}else{
  trace("NOT ZEEDONK");
}