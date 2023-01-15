/*var error="";if(persona1==undefined){error+=" persona1 no esta definido, pon un persona1=\"$(user)\"; . ";}if(persona2==undefined){error+="persona2 no esta definido, pon un persona1=\"$(touser)\"; . ";}if(Dos==undefined){error+="Dos no esta definido, pon un Dos=\"$(2)\"; . ";}if(persona2==undefined){error+="random(coso) no esta definido, pon un function random(coso){coso=\"$(urlfetch urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel))\".trim();return coso;} . ";}if(error==""){}*/

function randomviewer(list){
    let randomviewer=persona1.toLowerCase();
    for(let i=0;i<list.length;i++){
        numero=i;
        randomviewer=list[i].trim();if(randomviewer!=persona1.toLowerCase()){break;}
    }return randomviewer;
}var random = Math.floor(Math.random()*101);if(Dos!="null"){persona1=persona2;persona2=Dos;if(persona2.startsWith("@")){persona2=persona2.substring(1,persona2.length);}}else 
if(persona1==persona2){
    let list=r();var numero;var test="";
    for(let i=0;i<list.length;i++){test=test+list[i];}
    persona2=randomviewer(list);
}


/*let U="$(user)";let t="$(touser)";let u=U.toLowerCase();if("$(2)"!="null"){U="$(touser)";t="$(2)";if(t.startsWith("@")){t=t.substring(1,t.length);}}else if(U==t){while(t.toLowerCase()==u){t="$(urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel))".trim();if(t==u){t="$(urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel))".trim()}else break;}}U+" ha cumeado en "+t+" uwu"*/