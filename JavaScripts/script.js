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
