 
function avvio(){
    const table = document.getElementById("myTable");
    
        const row1 = table.insertRow();
        for (let idx = 0 ; idx < 4; idx++) {
            let cell = row1.insertCell();
            cell.id = idx;
            cell.innerHTML = ""
            cell.setAttribute("oncontextmenu", "controlloG1(this)") ;
            cell.setAttribute("onclick", "controlloG2(this)"); 
             
        }     
        
        const row2 = table.insertRow(); 
        for (let idx = 4 ; idx < 8; idx++) {
            let cell = row2.insertCell();
            cell.id = idx;
            cell.innerHTML = ""
            cell.setAttribute("oncontextmenu", "controlloG1(this)");
            cell.setAttribute("onclick", "controlloG2(this)");
             
        }  
        const row3 = table.insertRow(); 
        for (let idx = 8 ; idx < 12; idx++) {
            let cell = row3.insertCell();
            cell.id = idx;
            cell.innerHTML = ""
            cell.setAttribute("oncontextmenu", "controlloG1(this)");
            cell.setAttribute("onclick", "controlloG2(this)");
            
        }  
        const row4 = table.insertRow(); 
        for (let idx = 12 ; idx < 16; idx++) {
            let cell = row4.insertCell();
            cell.id = idx;
            cell.innerHTML = ""
            cell.setAttribute("oncontextmenu", "controlloG1(this)");
            cell.setAttribute("onclick", "controlloG2(this)");
             
        }  
   
}
let i = 0; 
let turnoIniziale = Math.floor(Math.random()*2) + 1;  
document.getElementById("paragrafo").innerHTML = "comincia il giocatore numero: " + turnoIniziale; 
let cellePiene = new Array();



function colore(turno, id){
    if(turno == 1){
        document.getElementById(id).innerHTML = "&#127877"; 
         
        
    }
    else{
        document.getElementById(id).innerHTML = "&#127876"; 
         
    }
}

let g1 = new Array(); 
let g2 = new Array(); 
let idx = 0; 

function controlloG1(tag){
   

        if( tag.id == 0 && !cellePiene.includes("12")){
            colore(1, "12")
            cellePiene[i++] = "12"; 
            g1[idx++] = "12"; 
            turno = 2; 
            
            
        }
        
        else if(tag.id == 0 && cellePiene.includes("12") && !cellePiene.includes("8")){
            colore(1, "8"); 
            cellePiene[i++] = "8"; 
            g1[idx++] = "8"; 
            
        }
        else if(tag.id == 0 && cellePiene.includes("8") && !cellePiene.includes("4")){
            colore(1, "4"); 
            cellePiene[i++] = "4"; 
            g1[idx++] = "4"; 
        }
        else if(tag.id == 0 && cellePiene.includes("4") && !cellePiene.includes("0")){
            colore(1, "0"); 
            cellePiene[i++] = "0"; 
            g1[idx++] = "0"; 
        }

        else if(tag.id == 1 && !cellePiene.includes("13")){
            colore(1, "13"); 
            cellePiene[i++] = "13";
            g1[idx++] = "13"; 
        }

        else if(tag.id == 1 && cellePiene.includes("13") && !cellePiene.includes("9")){
            colore(1, "9"); 
            cellePiene[i++] = "9"; 
            g1[idx++] = "9"; 
        }
        
        else if(tag.id == 1 && cellePiene.includes("9") && !cellePiene.includes("5")){
            colore(1, "5"); 
            cellePiene[i++] = "5"; 
            g1[idx++] = "5"; 
        }
        else if(tag.id == 1 && cellePiene.includes("5") && !cellePiene.includes("1")){
            colore(1, "1"); 
            cellePiene[i++] = "1";
            g1[idx++] = "1"; 
        }
        else if(tag.id == 2 && !cellePiene.includes("14")){
            colore(1, "14"); 
            cellePiene[i++] = "14"; 
            g1[idx++] = "14"; 
        }

        else if(tag.id == 2 && cellePiene.includes("14") && !cellePiene.includes("10")){
            colore(1, "10"); 
            cellePiene[i++] = "10"; 
            g1[idx++] = "10"; 
        }
        
        else if(tag.id == 2 && cellePiene.includes("10") && !cellePiene.includes("6")){
            colore(1, "6"); 
            cellePiene[i++] = "6"; 
            g1[idx++] = "6"; 
        }
        else if(tag.id == 2 && cellePiene.includes("6") && !cellePiene.includes("2")){
            colore(1, "2"); 
            cellePiene[i++] = "2"; 
            g1[idx++] = "2"; 
        }
        else if(tag.id == 3 && !cellePiene.includes("15")){
            colore(1, "15"); 
            cellePiene[i++] = "15"; 
            g1[idx++] = "15"; 
        }

        else if(tag.id == 3 && cellePiene.includes("15") && !cellePiene.includes("11")){
            colore(1, "11"); 
            cellePiene[i++] = "11"; 
            g1[idx++] = "11"; 
        }
        
        else if(tag.id == 3 && cellePiene.includes("11") && !cellePiene.includes("7")){
            colore(1, "7"); 
            cellePiene[i++] = "7"; 
            g1[idx++] = "7"; 
        }
        else if(tag.id == 3 && cellePiene.includes("7") && !cellePiene.includes("3")){
            colore(1, "3"); 
            cellePiene[i++] = "3"; 
            g1[idx++] = "3"; 
        }
       
        conclusione("Congratulazioni ha vinto il giocatore 1 !!"); 
        
}




function controlloG2(tag){
    
        
        if(tag.id == 0 && !cellePiene.includes("12")){
            colore(2, "12"); 
            cellePiene[i++] = "12"; 
            g2[idx++] = "12"; 
        }

        else if(tag.id == 0 && cellePiene.includes("12") && !cellePiene.includes("8")){
            colore(2, "8"); 
            cellePiene[i++] = "8"; 
            g2[idx++] = "8"; 
        }
        
        else if(tag.id == 0 && cellePiene.includes("8") && !cellePiene.includes("4")){
            colore(2, "4"); 
            cellePiene[i++] = "4";
            g2[idx++] = "4"; 
        }
        else if(tag.id == 0 && cellePiene.includes("4") && !cellePiene.includes("0")){
            colore(2, "0"); 
            cellePiene[i++] = "0"; 
            g2[idx++] = "0"; 
        }

         else if(tag.id == 1 && !cellePiene.includes("13")){
            colore(2, "13"); 
            cellePiene[i++] = "13"; 
            g2[idx++] = "13"; 
        }

        else if(tag.id == 1 && cellePiene.includes("13") && !cellePiene.includes("9")){
            colore(2, "9"); 
            cellePiene[i++] = "9"; 
            g2[idx++] = "9"; 
        }
        
        else if(tag.id == 1 && cellePiene.includes("9") && !cellePiene.includes("5")){
            colore(2, "5"); 
            cellePiene[i++] = "5"; 
            g2[idx++] = "5"; 
        }
        else if(tag.id == 1 && cellePiene.includes("5") && !cellePiene.includes("1")){
            colore(2, "1"); 
            cellePiene[i++] = "1"; 
            g2[idx++] = "1"; 
        }
        else if(tag.id == 2 && !cellePiene.includes("14")){
            colore(2, "14"); 
            cellePiene[i++] = "14";
            g2[idx++] = "14"; 
        }

        else if(tag.id == 2 && cellePiene.includes("14") && !cellePiene.includes("10")){
            colore(2, "10"); 
            cellePiene[i++] = "10"; 
            g2[idx++] = "10"; 
        }
        
        else if(tag.id == 2 && cellePiene.includes("10") && !cellePiene.includes("6")){
            colore(2, "6"); 
            cellePiene[i++] = "6";
            g2[idx++] = "6"; 
        }
        else if(tag.id == 2 && cellePiene.includes("6") && !cellePiene.includes("2")){
            colore(2, "2"); 
            cellePiene[i++] = "2"; 
            g2[idx++] = "2"; 
        }
        else if(tag.id == 2 && !cellePiene.includes("14")){
            colore(2, "14"); 
            cellePiene[i++] = "14"; 
            g2[idx++] = "14"; 
        }
        else if(tag.id == 3 && !cellePiene.includes("15")){
            colore(2, "15"); 
            cellePiene[i++] = "15";
            g2[idx++] = "15"; 
        }

        else if(tag.id == 3 && cellePiene.includes("15") && !cellePiene.includes("11")){
            colore(2, "11"); 
            cellePiene[i++] = "11"; 
            g2[idx++] = "11"; 
        }
        
        else if(tag.id == 3 && cellePiene.includes("11") && !cellePiene.includes("7")){
            colore(2, "7"); 
            cellePiene[i++] = "7"; 
            g2[idx++] = "7"; 
        }
        else if(tag.id == 3 && cellePiene.includes("7") && !cellePiene.includes("3")){
            colore(2, "3"); 
            cellePiene[i++] = "3"; 
            g2[idx++] = "3";         
        }
        
        conclusione("Congratulazioni ha vinto il giocatore 2 !!"); 
    }

    
    
    


function conclusione(msg){
    if(g1.includes("0") && g1.includes("1") && g1.includes("2") && g1.includes("3")){
        alert(msg); 
    }
    else if(g1.includes("4") && g1.includes("5") && g1.includes("6") && g1.includes("7")){
        alert(msg); 
    }
    
    else if(g1.includes("8") && g1.includes("9") && g1.includes("10") && g1.includes("11")){
        alert(msg); 
    }
    else if(g1.includes("12") && g1.includes("13") && g1.includes("14") && g1.includes("15")){
        alert(msg); 
    }
    else if(g1.includes("0") && g1.includes("4") && g1.includes("8") && g1.includes("12")){
        alert(msg); 
    }
    else if(g1.includes("1") && g1.includes("5") && g1.includes("9") && g1.includes("13")){
        alert(msg); 
    }
    else if(g1.includes("2") && g1.includes("6") && g1.includes("10") && g1.includes("14")){
        alert(msg); 
    }
    else if(g1.includes("3") && g1.includes("7") && g1.includes("11") && g1.includes("15")){
        alert(msg); 
    }
    else if(g1.includes("12") && g1.includes("9") && g1.includes("6") && g1.includes("3")){
        alert(msg); 
    }
    else if(g1.includes("0") && g1.includes("5") && g1.includes("10") && g1.includes("15")){
        alert(msg); 
    }
    if(g2.includes("0") && g1.includes("1") && g1.includes("2") && g1.includes("3")){
        alert(msg); 
    }
    else if(g2.includes("4") && g1.includes("5") && g1.includes("6") && g1.includes("7")){
        alert(msg); 
    }
    
    else if(g2.includes("8") && g2.includes("9") && g2.includes("10") && g2.includes("11")){
        alert(msg); 
    }
    else if(g2.includes("12") && g2.includes("13") && g2.includes("14") && g2.includes("15")){
        alert(msg); 
    }
    else if(g2.includes("0") && g2.includes("4") && g2.includes("8") && g2.includes("12")){
        alert(msg); 
    }
    else if(g2.includes("1") && g2.includes("5") && g2.includes("9") && g2.includes("13")){
        alert(msg); 
    }
    else if(g2.includes("2") && g2.includes("6") && g2.includes("10") && g2.includes("14")){
        alert(msg); 
    }
    else if(g2.includes("3") && g2.includes("7") && g2.includes("11") && g2.includes("15")){
        alert(msg); 
    }
    else if(g2.includes("12") && g2.includes("9") && g2.includes("6") && g2.includes("3")){
        alert(msg); 
    }
    else if(g2.includes("0") && g2.includes("5") && g2.includes("10") && g2.includes("15")){
        alert(msg); 
    
}     




}
