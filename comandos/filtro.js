blacklist=['merceditas09','vane96',u.toLowerCase()];
u=Dos=='null'?u:t;t=Dos=='null'||Dos=='random'?t:Dos;

let newList=[];
for(let i=0;i<rl.length;i++){
    blacklisted=false;
    for(let j=0;j<blacklist.length;j++){
        if (rl[i]==blacklist[j])blacklisted=true;
    }
    if (!blacklisted)newList.push(rl[i]);
}
if (newList.length==0)r=rl[Math.floor(Math.random()*rl.length)];
else r=newList[Math.floor(Math.random()*newList.length)];

t=u!=t&&Dos!='random'?t:r;u+' ha cumeado en '+t 