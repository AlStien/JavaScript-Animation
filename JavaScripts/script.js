let bg = ['url(Images/Morning.jpg)', 'url(Images/Desert.jpg)', 'url(Images/Fuji.jpg)', 'url(Images/Desert-2.jpg)'];
let i=0;
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

let id=null;
function bgMove()
{
    let bgr = document.getElementById("bground");
    let pos = 0;
    clearInterval(id);
    id = setInterval(bgrMove, 10);
    function bgrMove()
    {
        pos++;
        bgr.style.backgroundPositionX = pos + "px";
    }

}