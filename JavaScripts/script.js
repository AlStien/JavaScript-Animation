let bg = ['url(Images/Morning.jpg)', 'url(Images/Desert.jpg)', 'url(Images/Fuji.jpg)', 'url(Images/Desert-2.jpg)'];
let bg_obj = ['url(Images/Morning-tree.png)', 'url(Images/desert-cactus.png)', 'url(Images/fuji-tree.png)','url(Images/empty.png)']
let objArr = ['url(Images/naruto-run-1.png)', 'url(Images/naruto-run-2.png)', 'url(Images/naruto-run-3.png)', 'url(Images/naruto-run-4.png)']
let bgr = document.getElementById("bground");
let bgr_obj = document.getElementById("bground_object");
let obj = document.getElementById("object");
let i=0, j=0;
let b = false;

//to bring next background
function nextBG()
{
    i++;
    if(i===4)
        i=0;
    bgr.style.backgroundImage = bg[i];
    bgr_obj.style.backgroundImage = bg_obj[i];
}

//to bring previous background
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

//for moving the background, object and object animation
function Move()
{
    //background move
    let bgPos = 0;
    setInterval(bgrMove, 10);
    function bgrMove()
    {
        if(b === false)
            bgPos=bgPos-3;
        else
            bgPos=bgPos+3;
        bgr_obj.style.backgroundPositionX = bgPos + "px";
        bgr.style.backgroundPositionX = bgPos + "px";
    }

    //object running animation
    setInterval(objAnim, 120);
    function objAnim()
    {
        j++;
        if(j===4)
            j=0;
        obj.style.backgroundImage = objArr[j];
    }

    //object movement
    let objPos = 60;
    setInterval(objMove, 10);
    function objMove()
    {
        if(b===false)
            objPos = objPos+1.5;
        else
            objPos = objPos-1.5
        obj.style.left = objPos + "px";
        if(parseInt(object.style.left) >= screen.width*8/10)
        {
            obj.style.transform = "rotateY(180deg)";
            b = true;
        }
        if(parseInt(object.style.left) <= -80)
        {
            obj.style.transform = "rotateY(360deg)";
            b = false;
        }
    }
}