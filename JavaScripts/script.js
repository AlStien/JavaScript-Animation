//accessing objects from main HTML document
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
    bgr.style.backgroundImage = bg[i];      //accessing next background from background array
    bgr_obj.style.backgroundImage = bg_obj[i];      //the tree, cactus to be displayed over the charactter to give behind look
}

//to bring previous background
function prevBG()
{
    i--;
    if(i===-1)
    {
        i=3;
    }
    bgr.style.backgroundImage = bg[i];      //accessing previous background from background array
    bgr_obj.style.backgroundImage = bg_obj[i];      //the tree, cactus to be displayed over the charactter to give behind look
}

//for moving the background, object and object animation
function Move()
{
    //background move
    let bgPos = 0;      //variable to give background position
    setInterval(bgrMove, 10);
    function bgrMove()
    {
        if(b === false)         //to move background forward as object moves backward
            bgPos=bgPos-3;
        else         //to move background backward as object moves forward
            bgPos=bgPos+3;

        bgr_obj.style.backgroundPositionX = bgPos + "px";       //to move background
        bgr.style.backgroundPositionX = bgPos + "px";       //the move tree, cactus overlay
    }

    //object running animation
    setInterval(objAnim, 120);
    function objAnim()
    {
        j++;
        if(j===4)
            j=0;
        obj.style.backgroundImage = objArr[j];      //changing object image to give running look
    }

    //object movement
    let objPos = 60;        //to make initial position of object
    setInterval(objMove, 10);
    function objMove()
    {
        if(b===false)       //to move object forward
            objPos = objPos+1.5;
        else        //to move object backwards from other end
            objPos = objPos-1.5

        obj.style.left = objPos + "px";

        //to change object direction when reaching right end
        if(parseInt(object.style.left) >= screen.width*8.05/10)
        {
            b = true;
            obj.style.transform = "rotateY(180deg)";        //to bring object in reverse direction
            nextBG();       //to change background automatically whenever object changes direction
        }

        //to change object direction when reaching left end
        if(parseInt(object.style.left) <= -80)
        {
            b = false;
            obj.style.transform = "rotateY(360deg)";        //to bring object in its original direction
            nextBG();       //to change background automatically whenever object changes direction
        }
    }
}