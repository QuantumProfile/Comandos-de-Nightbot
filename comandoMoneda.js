function definirCaras(){
    let r=Math.floor(Math.random()*2);
    cara1=cara1!='null'?cara1:(cara1='la cara 1',tip=TIP);
    cara2=cara2!='null'?cara2:(cara2='la cara 2',tip=TIP);
    r=r==0?cara1:cara2;
}
if(parte=1){let tip='';const TIP=' Puedes nombrar las caras de la moneda poniendo "!moneda [nombre1] o [nombre2]" catsenCandy .';definirCaras();
var mensaje=`@${u} me has propuesto tirar una moneda...${tip}`;}
if(parte=2){
definirCaras();
var mensaje=`Ha tocado ${r} !`;}
