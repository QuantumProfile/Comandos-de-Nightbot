u=u.toLowerCase();const pos=['piedra','papel','tijera'];const r=Math.floor(Math.random()*pos.length);let res="Escojo "+pos[r];let g=". Haz ganado !!, GG catsenPout";let p=". Jaja L ez adambombLUL";let e=". Empate wtf";if(u==pos[r]){res+e;}else if(u==pos[0]){if(r==1){res+p}else{res+g}}else if(u==pos[1]){if(r==2){res+p}else{res+g}}else if(u==pos[2]){if(r==0){res+p}else{res+g}}else{"eso no se puede usar, tramposo catsenPout"}