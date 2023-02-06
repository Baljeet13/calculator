let screen=document.getElementById('screen').value;
let buttons=document.querySelectorAll('button');
buttons.forEach(x=>{
    x.addEventListener('click',()=>{
        let value1=x.innerHTML
       if(!isNaN(value1)){
        //console.log("hello")
         screen+=value1;
        document.getElementById('screen').value=screen
    }
    else if(value1=='AC'){
        screen="";
        document.getElementById('screen').value=screen
        
    }
    else if(value1=='🔙'){
        
        screen=screen.replace(/.$/,"")
        document.getElementById('screen').value=screen
    }




    else if(value1=='+'){
    char=screen.charAt(screen.length-1)                      //this is not to write two operator simultaneosly when we press on +
    if(screen.length!==0 &&char!='+' && char!='-' && char!='/' && char!='*' &&char!='.'){
        screen+='+'
    document.getElementById('screen').value=screen
    }
    else if(char== '-' || char=='*' || char=='/'){
        screen=screen.replace(/.$/,'+')
        document.getElementById('screen').value=screen

    }
    else{
        screen+=''
    document.getElementById('screen').value=screen

    }
    
    }






    else if(value1=='-'){
        char=screen.charAt(screen.length-1)  
        if(screen.length!==0 && char!='+' && char!='-' && char!='/' && char!='*' &&char!='.'){
        screen+='-'
        document.getElementById('screen').value=screen
    }
    else if(char== '+' || char=='*' || char=='/'){
        screen=screen.replace(/.$/,'-')
        document.getElementById('screen').value=screen}
    else{
        screen+=''
    document.getElementById('screen').value=screen
    }
    }




    else if(value1=='.'){
        char=screen.charAt(screen.length-1)  
        if(char!='+' && char!='-' && char!='/' && char!='*' &&char!='.'){
        
        screen+='.'
        document.getElementById('screen').value=screen
    }}




    else if(value1=='('){
        if(screen.length==0){
            screen+='('
            document.getElementById('screen').value=screen

        }
        else{
        screen+='*('
        document.getElementById('screen').value=screen}
    }




    else if(value1==')'){
        screen+=')'
        document.getElementById('screen').value=screen
    }



    else if(value1=='/'){
        char=screen.charAt(screen.length-1)  
        if( screen.length!==0 && char!='+' && char!='-' && char!='/' && char!='*' &&char!='.'){
        screen+='/'
        document.getElementById('screen').value=screen
    }
    else if(char== '-' || char=='*' || char=='+'){
        screen=screen.replace(/.$/,'/')
        document.getElementById('screen').value=screen
    }
    else{
        screen+=''
        document.getElementById('screen').value=screen

    }}






    else if(value1=='*'){
        char=screen.charAt(screen.length-1)  
        if(screen.length!==0 && char!='+' && char!='-' && char!='/' && char!='*' &&char!='.'){
        screen+='*'
        document.getElementById('screen').value=screen
        }
        else if(char== '-' || char=='+' || char=='/'){
            screen=screen.replace(/.$/,'*')
            document.getElementById('screen').value=screen
        }
        else{
            screen+=''
            document.getElementById('screen').value=screen

        }}






    else if(value1=='='){
        screen=eval(screen)   //eval is prebuild
        document.getElementById('screen').value=screen
     }
     
    })
})

