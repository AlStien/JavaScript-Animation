let bg = ['url(Images/Morning.jpg)', 'url(Images/Desert.jpg)', 'url(Images/Fuji.jpg)', 'url(Images/Desert-2.jpg)'];
let bg_obj = ['url(Images/Morning-tree.png)', 'url(Images/desert-cactus.png)', 'url(Images/fuji-tree.png)','url(Images/empty.png)']
let objArr = ['url(Images/naruto-run-1.png)', 'url(Images/naruto-run-2.png)', 'url(Images/naruto-run-3.png)', 'url(Images/naruto-run-4.png)']
let bgr = document.getElementById("bground");
let bgr_obj = document.getElementById("bground_object");
let i=0, j=0;
function nextBG()
{
    i++;
    if(i===4)
        i=0;
    bgr.style.backgroundImage = bg[i];
    bgr_obj.style.backgroundImage = bg_obj[i];
}

function prevBG()
{
    i--;
    if(i===-1)
    {
        i=3;
    }
    bgr.style.backgroundImage = bg[i];
    bgr_obj.style.backgroundImage = bg_obj[i];
}

function Move()
{
    //background move
    let id=null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(bgrMove, 10);
    function bgrMove()
    {
        pos=pos-3;
        bgr_obj.style.backgroundPositionX = pos + "px";
        bgr.style.backgroundPositionX = pos + "px";
    }

    //object move
    let obj = document.getElementById("object");
    let ob = setInterval(objMove, 120);
    function objMove()
    {
        j++;
        if(j===4)
            j=0;
        obj.style.backgroundImage = objArr[j];
    }
}