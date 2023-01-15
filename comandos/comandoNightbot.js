var mensaje; let random=Math.round(Math.random()*100);
function createList(inputQuery){
    let localArray1=inputQuery.trim().toLowerCase().split(" ");
    let localArray2=[];
    for(let i=0;i<localArray1.length;i++){
        if(localArray1[i]=='')continue;
        localArray2.push(localArray1[i])
    }return localArray2;
}let inputList=createList(query);
let outputList = [
    {input:['conacho','conacho93','conachin'],output:"el dios de oswaIsset shadou8Dorime"},
    {input:['como estas','cómo estás','como estás','cómo estas','como estas?','cómo estás?','como estás?','cómo estas?'],output:['bien, y tu? :)','mal :( , y tu?']},
    {input:['mierda','mal'],output:'Chale catsenHands'},
    {input:'bien',output:'que bien :D'},
    {input:['qué','q','que','que?','qué?','q?'],output:'so :tf:'},
    {input:['karen','ileine','iIeine'],output:'la novia de oswaI catsenCandy'},
    {input:['oswal','oswaI','oswalsset','oswaIsset'],output:'el tsundere y novio de iIeine catsenCandy'},
    {input:['miau','miau_we'],output:'el arrecho conterJuguito2'},
    {input:['qp','quantumprofile','quantum'],output:'E... catsenShrug'},
    {input:['puto','pto'],output:'tu'},
    {input:['nuze','nuze_owo'],output:'el novio de oswaI'},
    {input:['tomas','t0m4s','t0m4selias'],output:'él es god'},
    {input:['porqué','xq','porque','pq','porqué?','xq?','porque?','pq?'],output:['por q sí','por que sí','catsenShrug','qsy','No sé','por que me caes mal zomiSmile']},
    {input:['josue','josuemtz55'],output:'es un hoss'},
    {input:['!8ball','8ball','pregunta','pregunta,'],output:['qué pregunta, obviamente','QUE !!, conterNoo','pos no','pos si','puede ser','catsenShrug','E...','creo q sí','puede q no','estoy seguro de que sí','conterNoo','a?','e?','k','claro que si!!!!','ñao ñao','seh','ajam','y...No','No.','sep','No sé, espero haberte ayudado 👍','tal vez y no','ysi','yno','sisisisi','Claro !','O.o','o.O','no te wa decir conterNoo','siempre','jamás','no quiero decirte :)']},
    {input:'lol',output:'lol'}
];
function equalArrays(list1,list2){
    if(list1.length!=list2.length)return false;
    for(let i=0;i<list1.length;i++){
        if(list1[i]!=list2[i])return false;
    }return true;
}
function includes(list1,list2){
    if(list1.length<list2.length)return false;
    if(list1.length==list2.length)return equalArrays(list1,list2);
    for(let i=0;i<list1.length-list2.length+1;i++){
        if(equalArrays(list2,list1.slice(i,i+list2.length)))return true;
    }
    return false;
}
function getMessage(output){
    if(typeof output=='string'){
        return output;
    }
    else if(Array.isArray(output)){
        return output[Math.floor(Math.random()*output.length)];
    }
}
function takeTheAt(arg){
    if(typeof arg.input=='string'){
        let internal=[];internal.push(arg.input);
        let array=arg.input.toLowerCase().split(' ');
        if(array.length!=1)return;
        if(!arg.input.startsWith('@'))internal.push('@'+array[0]);
        if(!arg.input.endsWith('?'))internal.push(array[0]+'?');
        if(!arg.input.endsWith(','))internal.push(array[0]+',');
        arg.input=internal;
    }
    else if(Array.isArray(arg.input)){
        let internal=[].concat(arg.input);
        for(let i=0;i<arg.input.length;i++){
            let array=arg.input[i].toLowerCase().split(' ');
            if(array.length!=1)continue;
            if(!arg.input[i].startsWith('@')&&!arg.input.includes('@'+array[0]))internal.push('@'+array[0]);
            if(!arg.input[i].endsWith('?')&&!arg.input.includes(array[0]+'?'))internal.push(array[0]+'?');
            if(!arg.input[i].endsWith(',')&&!arg.input.includes(array[0]+','))internal.push(array[0]+',');
        }arg.input=internal;
    }
}
for(let i=0;i<outputList.length;i++){
    takeTheAt(outputList[i]);
    if(typeof outputList[i].input=='string'){
        if(!includes(inputList,outputList[i].input.toLowerCase().split(' ')))continue;
        mensaje=getMessage(outputList[i].output);break;
    }
    else if(Array.isArray(outputList[i].input)){
        let any = false;
        for(let j=0;j<outputList[i].input.length;j++){
            if(!includes(inputList,outputList[i].input[j].toLowerCase().split(' ')))continue;any=true;
        }
        if(!any)continue;
        mensaje=getMessage(outputList[i].output);break;
    }else {mensaje='el coso es de tipo: '+typeof outputList[i];break;}
}
if(mensaje==undefined){
    if(query.trim().toLowerCase()==''){
        mensaje='@'+user+' q'
    }
    else {
        const responses = ['@'+user+' q'];
        mensaje = responses[Math.floor(Math.random()*responses.length)];
    }
}