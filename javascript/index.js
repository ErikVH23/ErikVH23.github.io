

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

function renderMD(){
    marked.setOptions({
                renderer: new marked.Renderer(),
                highlight: function(code, language) {
                    const hljs = require('highlight.js');
                    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
                    return hljs.highlight(validLanguage, code).value;
                },
                pedantic: false,
                gfm: false,
                breaks: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                xhtml: false
            });


    $.get('./markdown/workExperience.md', {}, function(data) {
        console.log("Loaded Markdown");
        console.log(data.toString());
        document.getElementById("workExperience").innerHTML = DOMPurify.sanitize(marked(data));
    });
    

    $.get('./markdown/home.md', {}, function(data) {
        console.log("Loaded Markdown");
        console.log(data.toString());
        document.getElementById("aboutMe").innerHTML = DOMPurify.sanitize(marked(data));
    });
 

    $.get('./markdown/projects.md', {}, function(data) {
        console.log("Loaded Markdown");
        console.log(data.toString());
        document.getElementById("projects").innerHTML = DOMPurify.sanitize(marked(data));
    });
 

}
