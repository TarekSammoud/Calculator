
///BUTTONS
let input1=undefined ; 
let input2=undefined ;
let OPinput=undefined ;
let lastInput=undefined ;
let nbInputs= 0 ;
let result=0; 

    const screen = document.querySelector('.calculation') ;
    const one = document.getElementById('1') ;
    const two = document.getElementById('2') ;
    const three = document.getElementById('3') ;
    const four = document.getElementById('4') ;
    const five = document.getElementById('5') ;
    const six = document.getElementById('6') ;
    const seven = document.getElementById('7') ;
    const eight = document.getElementById('8') ;
    const nine = document.getElementById('9') ;
    const zero = document.getElementById('0') ;
    const clear= document.getElementById('clear') ;

    const plus = document.getElementById('+') ; 
    const minus = document.getElementById('-') ; 
    const times = document.getElementById('*') ;
   const division = document.getElementById('/') ;

   const equal = document.getElementById('=') ;

    
    const operators = [plus,minus,times,division]; 

    function clearAll()
    {
        screen.textContent ='' ;
        let input2=undefined ;
let OPinput=undefined ;
let lastInput=undefined ;
let nbInputs= 0 ;
let result=0; 

    }


    clear.addEventListener('click' ,()=>{
        screen.textContent = '' ;
        let input1=undefined ; 
let input2=undefined ;
let OPinput=undefined ;
let lastInput=undefined ;
let nbInputs= 0 ;
let result=0; 
    }) ;

    const numbers=[one,two,three,four,five,six,seven,eight,nine,zero] ; 

    numbers.forEach((number)=>{ 
        number.addEventListener('click',()=> {
            if (result==1)
                clearAll(); 
            lastInput = 1 ;
            nbInputs ++ ; 
        
            if (nbInputs % 2 !=0)
            {input1 = number.textContent ;
            screen.textContent += input1 ;}

            else 
            {input2 = number.textContent ;
            screen.textContent += input2 ;}


            console.log(input1) ;
            console.log(input2) ;

        })
    })


    operators.forEach((operator)=>{ 
        operator.addEventListener('click',()=> {
            console.log(typeof(lastInput)) ;
            if (typeof(lastInput)=='number')
            {OPinput = operator.textContent ;
            screen.textContent += OPinput ;
            lastInput='op' ;}

        })
    })


    equal.addEventListener('click',()=> {
        switch (OPinput)
        {
            case '+' : screen.textContent = sum(input1,input2) ;
                    result =1 ;
            break ;
            
            case '-' : screen.textContent =  substract(input1,input2) ;  
            result =1 ;

            break ;
            
            case '*' : screen.textContent =  multiply(input1,input2) ;
               
            result =1 ;
            break ;
            
            case '/' : console.log(OPinput) ;
                 screen.textContent =  divide(input1,input2) ; 
                 result =1 ;
                 break ; 
    
            default : screen.textContent =  "OOPS";
            result =1 ;
            break ;
        }
    })




function sum(a,b)
{
    return parseInt(a)+parseInt(b); 
}

function multiply(a,b)
{
    return a*b ; 
}

function substract(a,b)
{
    return a-b ;
}

function divide(a,b)
{
    console.log(a,b);
    if (b==0)
        return "OOPS" ;
        else
     
    { console.log(a/b); 
        return (a/b) ; 
    }
}

function operate(operator,a,b)
{
    console.log("OPERATING") ;

}