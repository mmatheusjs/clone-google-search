

function changeColor(){
    var tema = document.getElementById('theme')
    if(tema.className == 'light'){
        tema.classList.remove('light');        
        tema.classList.add('dark');
            } else{
                tema.classList.remove('dark');
                tema.classList.add('light');
            }
        
    var tema2 = document.getElementById('theme-header')
    if(tema2.className == 'light-header'){
        tema2.classList.remove('light-header');
        tema2.classList.add('dark-header');
        } else{
            tema2.classList.remove('dark-header');
            tema2.classList.add('light-header');
        }
    
    var tagsa = document.querySelectorAll('a');
    for (var index = 0; index < tagsa.length; index++) {
        var element = tagsa[index];
        
        if(element.classList.contains('light-a')){
            element.classList.remove('light-a');
            element.classList.add('dark-a');
        } else {
            element.classList.remove('dark-a');
            element.classList.add('light-a');
        }
    }
    }







    
  

     
    // function changeFont(){
    //     var color = document.getElementById('a');
    //     color.classList.toggle("dark-font");
    // }


    // tema.classList.toggle("dark");

 

