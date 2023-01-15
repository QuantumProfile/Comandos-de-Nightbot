var random = Math.floor(Math.random()*101);
if(typeof Dos!='undefined'&&Dos!="null"){persona1=persona2;persona2=Dos;if(persona2.startsWith("@")){persona2=persona2.substring(1,persona2.length);}}
else if(persona1==persona2&&typeof modo=='undefined'){
for(let i=0;i<list.length;i++){
persona2 = persona1.toLowerCase()==list[i].trim()?persona2:list[i].trim();if(persona1!=persona2)break;
}}