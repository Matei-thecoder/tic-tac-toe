let count=9;
let bool=[10, 11, 12, 13, 14, 15, 16, 17, 18];
let win=false;

function move(id)
{
    let cell=document.getElementById(id);
    if(bool[id-1]<10)
    {
        //alert("deja ocupat");
    }
    else
    {
            cell.innerHTML = "X";
            cell.style.color="white";
            cell.style.backgroundColor="#0388fc";
            
           // document.getElementById("player").innerHTML="Jucator 2";
            count--;
            bool[id-1]=1;
            check();
            if(win)
            {
                alert("Ai castigat");
                for(let i=0;i<9;i++)
                {
                    bool[i]=3;
                }
                let buton=document.getElementById("reset");
                buton.innerHTML="RESETEAZA";
                buton.style.color="white";
                buton.style.backgroundColor="#6b18d9";
                let winner=document.getElementById("winner");
                winner.innerHTML="Ai Castigat";
                winner.style.color="white";
                winner.style.backgroundColor="#0388fc";
                

            }
            else
            {
                ai();
            }
            
        
        
        
    }
    if(count==0 && win==false)
    {
        alert("REMIZA");
        let winner=document.getElementById("winner");
        winner.innerHTML="REMIZA";
        winner.style.color="white";
        winner.style.backgroundColor="#873beb";
        let buton=document.getElementById("reset");
        buton.innerHTML="RESETEAZA";
        buton.style.color="white";
        buton.style.backgroundColor="#6b18d9";
    }
       
    
}
function ai()
{
    
    let pos = Math.floor(Math.random() * (8 - 0) + 0);
    
    while(bool[pos]==1||bool[pos]==2)
    {
        pos = Math.floor(Math.random() * (8 - 0) + 0);
    }
    bool[pos]=2;
    let cell = document.getElementById(pos+1);
    cell.innerHTML = "O";
    cell.style.color="white";
    cell.style.backgroundColor="#fc0328";
    count -- ;
    check();
    if(win)
    {
        alert("Ai pierdut");
         for(let i=0;i<9;i++)
         {
            bool[i]=3;
        }
        let buton=document.getElementById("reset");
         buton.innerHTML="RESETEAZA";
        buton.style.color="white";
        buton.style.backgroundColor="#6b18d9";
        let winner=document.getElementById("winner");
        winner.innerHTML="Ai pierdut";
        winner.style.color="white";
        winner.style.backgroundColor="#fc0328";
                

    }
    if(count==0 && win==false)
    {
        alert("REMIZA");
        let winner=document.getElementById("winner");
        winner.innerHTML="REMIZA";
        winner.style.color="white";
        winner.style.backgroundColor="#873beb";
        let buton=document.getElementById("reset");
        buton.innerHTML="RESETEAZA";
        buton.style.color="white";
        buton.style.backgroundColor="#6b18d9";
    }
}
function check()
{
    if(bool[0]==bool[1] && bool[1]==bool[2])
    {
        win=true;
    }
    if(bool[3]==bool[4] && bool[4]==bool[5])
    {
        win =true;
    }
    if(bool[6]==bool[7] && bool[7]==bool[8])
    {
        win=true;
    }
    if(bool[0]==bool[3] && bool[3]==bool[6])
    {
        win=true;
    }
    if(bool[1]==bool[4] && bool[4]==bool[7])
    {
        win=true;
    }
    if(bool[2]==bool[5] && bool[5]==bool[8])
    {
        win=true;
    }
    if(bool[0]==bool[4] && bool[4]==bool[8])
    {
        win=true;
    }
    if(bool[2]==bool[4] && bool[4]==bool[6])
    {
        win=true;
    }
}
function reset()
{
    document.location.reload(true);
    
    
}