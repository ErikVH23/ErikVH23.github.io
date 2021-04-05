

function changeTab(evt, elementID){
    console.log(elementID);
    var tabContent, i;
    tabContent = document.getElementsByClassName("tabContent");
    //Clears current content    
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].setAttribute("style","display:none" );
    }

    //Displays new content

    document.getElementById(elementID).setAttribute("style", "display:block");
    



}