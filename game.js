let player1=true;
let player2=false;
let count=9;
let id;

let bool=[10, 11, 12, 13, 14, 15, 16, 17, 18];

//let r1=false,r2=false,r3=false,c1=false,c2=false,c3=false,d1=false,d2=false;

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
        if(player1)
        {
            cell.innerHTML = "X";
            cell.style.color="black";
            player1=false;
            player2=true;
            document.getElementById("player").innerHTML="Jucator 2";
            count--;
            bool[id-1]=1;
            check();
            if(win)
            {
                alert("Jucator 1 a castigat!");
                for(let i=0;i<9;i++)
                {
                    bool[i]=3;
                }
                let buton=document.getElementById("reset");
                buton.innerHTML="RESETEAZA";
                buton.style.color="white";
                buton.style.backgroundColor="#6b18d9";
                

            }
        }
        else if(player2)
        {
            cell.innerHTML = "O";
            cell.style.color="black";
            player1=true;
            player2=false;
            count--;
            document.getElementById("player").innerHTML="Jucator 1";
            bool[id-1]=2;
            check();
            if(win)
            {
                alert("Jucator 2 a castigat!");
                for(let i=0;i<9;i++)
                {
                    bool[i]=3;
                }
                let buton=document.getElementById("reset");
                buton.innerHTML="RESETEAZA";
                buton.style.color="white";
                buton.style.backgroundColor="#6b18d9";
                
                
            }
        }
        else{
            alert("error");
        }
        
    }
    if(count==0){
        alert("REMIZA");
        for(let i=0;i<9;i++)
        {
             bool[i]=3;
        }
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
