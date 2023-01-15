if(q=='')ql=[];
else ql=q.split(' ');
function random(user){
    let blacklist=[user.toLowerCase(),'merceditas09','vane96'];

    let newList=[];
    for(let i=0;i<rl.length;i++){
        let blacklisted=false;
        for(let j=0;j<blacklist.length;j++){
            if (rl[i].trim()==blacklist[j])blacklisted=true;
        }
        if (!blacklisted)newList.push(rl[i]);
    }let r='';
    if (newList.length==0)r=rl[Math.floor(Math.random()*rl.length)];
    else r=newList[Math.floor(Math.random()*newList.length)];

    return r;
}
if(ql.length>2)'Quien cumea a quien? O.o';
else if(ql.length>0&&u.toLowerCase()==ql[0].toLowerCase())'Por qué te cumearías a ti mismo? O.o';
else if(ql.length>1&&ql[0].toLowerCase()==ql[1].toLowerCase())'Por qué quieres que '+ql[0]+' se cumee a si mismo? O.o';
else{
    if(ql.length==0)t=random(u);
    if(ql.length==1)t=ql[0];
    if(ql.length>1){
        t=ql[1]!='random'?ql[1]:random(ql[0]);
        u=ql[0];}
    u+' ha cumeado en '+t;
}