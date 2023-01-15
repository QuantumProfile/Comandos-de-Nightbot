function randomviewer(list){
    let randomviewer=persona1.toLowerCase();
    for(let i=0;i<list.length;i++){
        randomviewer=list[i].trim();if(randomviewer!=persona1.toLowerCase()){break;}
    }return randomviewer;
}var random = Math.floor(Math.random()*101);let u=persona1.toLowerCase();
if(persona1==persona2){
    let list = r();
    persona2=randomviewer(list);
}