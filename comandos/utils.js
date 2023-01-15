//l1 son los inputs, l2 son las parejas y/o nombres prohibidos, l3 son las parejas y/o nombres especiales, l4 es por si quiero poner mas $(random)s, l5 y l6 son los contrarios de l2 y l3 respectivamente.
//de l1 los inputs van en este orden, 1=user, 2=touser, 3=$(2), 4=query, 5=random
//query es lo de "" y los cosos $(num) es lo de "null"
if(typeof l1=='undefined')l1='undefined';
if(l1!='undefined'){
    u=l1[0];t=l1[1];Dos=l1[2];q=l1[3],r=l1[4];
}
/*if(typeof u=='undefined')u='undefined';if(typeof t=='undefined')t='undefined';
if(typeof Dos=='undefined')Dos='undefined';if(typeof q=='undefined')q='undefined';*/
//if(typeof l2=='undefined')l2='undefined';if(typeof l3=='undefined')l3='undefined';
if(typeof l4=='undefined')l4='undefined';
if(typeof p1=='undefined')p1='todefine';if(typeof p2=='undefined')p2='todefine';
if(typeof o1=='undefined')o1='undefined';if(typeof o2=='undefined')o2='undefined';
if(typeof ol=='undefined')ol='undefined';
var n=Math.floor(Math.random()*101);
function ia(object){return Array.isArray(object);}
function qa(word){word=!word.startsWith('@')?word:word.substring(1,word.length);}
function qe(word){word=word.trim();}
function cn(num){n=num;}
function ql(query){return query.split(' ');}
function cv(variable,cambio){variable=cambio;}
function bf1(word){return word=='null'||word==''||typeof word=='undefined';}
function bf2(word,match){return word.toLowerCase().trim()==match.toLowerCase().trim();}
function bf3(user,touser){
    if(typeof touser=='undefined'){
        return bf1(user);
    } else
    return user==touser;
}
//lista de disyunciones
function ld(list,word){
    let boolean=false;
    for(let i=0;list.length;i++){
        if(!bf2(list[i],word))continue;
        boolean=true;break;
    }return boolean;
}
if(typeof l4!='undefined'){
    var r=l4[0];
}
var b1=bf3(u,t);
var b2=bf1(Dos);
var b3=false;
if(typeof l2!='undefined'){
    for(let i=0;l2.length;i++){
        if(!ia(l2[i])){
            if(!bf2(p1,l2[i])&&!bf2(p2,l2[i]))continue;
            b3=true;break;
        }else
        if(!ia(l2[i][0])){
            if(!ia(l2[i][1])){
                if(!bf2(p1,l2[i][0])&&!bf2(p2,l2[i][1]))continue;
                b3=true;break;
            }else{
                let b01=ld(l2[i][1],p2);
                if(!bf1(p1,l2[i][0])&&!b01)continue;b3=true;break;
            }
        }else{
            let b02=ld(l2[i][0],p1);
            if(!ia(l2[i][1])){
                if(!b02&&!bf2(p2,l2[i][1]))continue;
                b3=true;break;
            }else{
                let b03=ld(l2[i][1],p2);
                if(!b02&&!b03)continue;b3=true;break;
            }
        }
    }
}
var b4='null';
if(typeof l3!='undefined'){
    for(let i=0;l3.length;i++){
        if(!ia(l3[i])){
            if(bf2(p1,l3[i])||bf2(p1,l3[i]))b4=i;
        }else
        if(!ia(l3[i][0])){
            if(!ia(l3[i][1])){
                if((bf2(p1,l3[i][0])&&bf2(p2,l3[i][1]))
                ||(bf2(p1,l3[i][1])&&bf2(p2,l3[i][0]))){
                    b4=i;break;
                }
            }else{
                let b01=ld(l3[i][1],p1);
                let b02=ld(l3[i][1],p2);
                if((bf2(p1,l3[i][0])&&b02)||(b01&&bf2(p2,l3[i][0]))){
                    b4=i;break;
                }
            }
        }else{
            let b01=ld(l3[i][0],p1);
            let b02=ld(l3[i][0],p2);
            if(!ia(l3[i][1])){
                if((b01&&bf2(p2,l3[i][1]))||(bf2(p1,l3[i][1])&&b02)){
                    b4=i;break;
                }
            }else{
                let b03=ld(l3[i][1],p1);
                let b04=ld(l3[i][1],p2);
                if((b01&&b04)||(b02&&b03)){
                    b4=i;break;
                }
            }
        }
    }
}
function c4(){
    p1=b2?u:t;p2=b2||bf2(Dos,'random')?t:Dos;
}


