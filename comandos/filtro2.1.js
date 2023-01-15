if(q=='')ql=[];
else ql=q.split(' ');let BlackList=['merceditas09','vane96'];
function random(user){
    let blacklist=[user.toLowerCase()].concat(BlackList);

    let newList=[];
    for(let i=0;i<rl.length;i++){
        let blacklisted=false;
        for(let j=0;j<blacklist.length;j++){
            if (rl[i].trim()==blacklist[j])blacklisted=true;
        }
        if (!blacklisted)newList.push(rl[i].trim());
    }let r='';
    if (newList.length==0)r=rl[Math.floor(Math.random()*rl.length)];
    else r=newList[Math.floor(Math.random()*newList.length)];

    return r;
}
if(ql.length>2)'Quien cumea a quien?';
else{
    if(ql.length==0)t='random';
    if(ql.length==1)t=ql[0];
    if(ql.length>1){
        u=ql[0];t=ql[1];
    }
    let CheckingSituation=false;
    if(u.toLowerCase()=='random'||t.toLowerCase()=='random')CheckingSituation=true;
    
    t=t.toLowerCase()!='random'?t:random(u);
    u=u.toLowerCase()!='random'?u:random(t);
    
    let RareSituation=false;
    if(CheckingSituation){
        for(let i=0;i<BlackList.length;i++){
            if(u.toLowerCase()==BlackList[i]||t.toLowerCase()==BlackList[i])RareSituation=true;
        }
    }
    
    if(RareSituation)'Salió una persona prohibida SPRAY';
    else if(u.toLowerCase()==t.toLowerCase()){
        if(ql.length<2)'Por qué te cumearías a ti mismo?';
        else if(ql.length>1)'Por qué quieres que '+u+' se cumee a si mismo?';
    }
    else u+' ha cumeado en '+t;
}