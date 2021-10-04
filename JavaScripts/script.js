let bg = ['url(Images/Morning.jpg)', 'url(Images/Desert.jpg)', 'url(Images/Fuji.jpg)', 'url(Images/Desert-2.jpg)'];
let objArr = ['url(Images/naruto-run-1.png)', 'url(Images/naruto-run-2.png)', 'url(Images/naruto-run-3.png)', 'url(Images/naruto-run-4.png)']
let i=0, j=0;
function nextBG()
{
    i++;
    if(i===4)
        i=0;
    document.getElementById("bground").style.backgroundImage = bg[i];
}

function prevBG()
{
    i--;
    if(i===-1)
        i=3;
    document.getElementById("bground").style.backgroundImage = bg[i];
}

function Move()
{
    //background move
    let id=null;
    let bgr = document.getElementById("bground");
    let pos = 0;
    clearInterval(id);
    id = setInterval(bgrMove, 10);
    function bgrMove()
    {
        pos--;
        bgr.style.backgroundPositionX = pos + "px";
    }

    //object move
    let obj = document.getElementById("object");
    let ob = setInterval(objMove, 250);
    function objMove()
    {
        j++;
        if(j===4)
            j=0;
        obj.style.backgroundImage = objArr[j];
    }
}