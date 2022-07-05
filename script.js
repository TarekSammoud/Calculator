
///BUTTONS
let input1='' ; 
let input2='' ;
let OPinput=undefined ;
let lastInput=undefined ;
let nbInputs= 0 ;
let result=0; 
let lastcalc='' ;



    const screen = document.querySelector('.calculation') ;
    const subscreen = document.querySelector('.subCalc') ;

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
        let input1='' ; 
        let input2='0' ;
        let OPinput=undefined ;
        let lastOPinput=undefined; 
        let lastInput=undefined ;
        let nbInputs= 0 ;
        let result=0; 
        let lastcalc='' ;
        screen.textContent='' ;
        subscreen.textContent='' ;
        
        

    }


    clear.addEventListener('click' ,()=>{
        let input1='' ; 
        let input2='' ;
        let OPinput=undefined ;
        let lastOPinput=undefined; 
        let lastInput=undefined ;
        let nbInputs= 0 ;
        let result=0; 
        let lastcalc='' ;
        screen.textContent='' ;
        subscreen.textContent='' ;
        
        
    }) ;

    const numbers=[one,two,three,four,five,six,seven,eight,nine,zero] ; 

    numbers.forEach((number)=>{ 
        number.addEventListener('click',()=> {
            if (result==1)
                clearAll(); 
            lastInput = 1 ;
   

            if (nbInputs == 0)
            {
                if (lastcalc==0)
                {input1 += number.textContent ;
            screen.textContent = input1 ;
                }

          }

            else 
            {
                input2 += number.textContent ;
            screen.textContent = input2 ;
        
            }



          //  console.log(input2) ;

        })
    })


    operators.forEach((operator)=>{ 
        operator.addEventListener('click',()=> {
            console.log(`input1 : ${input1}`)
            console.log(`input2 : ${input2}`)

            console.log(`type of last input : ${typeof(lastInput)}`)
            if (typeof(lastInput)=='number')
            {
                if (nbInputs==0)
                    nbInputs=1 ;
                    else 
                    nbInputs=0 ;

                lastOPinput = OPinput ;
                OPinput = operator.textContent ;
                subscreen.textContent += screen.textContent ;

            subscreen.textContent += OPinput ;

            lastInput='op' ;

            


            if (input2!='')
            {
            switch (lastOPinput)
            {
                case '+' : 
                console.log('case +')
                lastcalc = sum(input1,input2) ;
                if (!Number.isNaN(lastcalc))
                {console.log(`last calc ${lastcalc}`); 
                    screen.textContent = lastcalc ;
                    nbInputs=1 ;
                    input2 ='';
                    input1 = `${lastcalc}` ;
                    console.log(`input 1 after calc : ${input1}`) ;


                }
                break ;
                
                case '-' :  
                console.log('case -')

                lastcalc =  substract(input1,input2) ; 
                if (!Number.isNaN(lastcalc))
                {console.log(`last calc ${lastcalc}`); 
                screen.textContent = lastcalc ;
                nbInputs=1 ;
                input2 ='';
                input1 = `${lastcalc}` ;
                    console.log(`input 1 after calc : ${input1}`) ;


                }
                break ;
                
                case '*' :  
                console.log('case *')

                lastcalc =  multiply(input1,input2) ;
                if (!Number.isNaN(lastcalc))
                {console.log(`last calc ${lastcalc}`); 
                    screen.textContent = lastcalc ;
                    nbInputs=1 ;
                    input2 ='';
                    input1 = `${lastcalc}` ;
                    console.log(`input 1 after calc : ${input1}`) ;
                }

                break ;
                
                case '/' :  
                console.log('case /')

                     lastcalc =  divide(input1,input2) ; 
                     if (!Number.isNaN(lastcalc))
                     {  console.log(`last calc ${lastcalc}`); 
                        screen.textContent = lastcalc ;
                        nbInputs=1 ;
                        input2 ='';
                        input1 = `${lastcalc}` ;
                    console.log(`input 1 after calc : ${input1}`) ;

                    }
                     break ; 
        
                default :  
                lastcalc =   0 ;
                break ;
        
            }

 

        
        }

    }

        })
    })


    equal.addEventListener('click',()=> {
        switch (OPinput)
        {
            case '+' : subscreen.textContent += `${input2} =`
            screen.textContent = sum(input1,input2) ;
                    result =1 ;
            break ;
            
            case '-' :  subscreen.textContent += `${input2} =`
            screen.textContent =  substract(input1,input2) ;  
            result =1 ;

            break ;
            
            case '*' :  subscreen.textContent += `${input2} =`
            screen.textContent =  multiply(input1,input2) ;
               
            result =1 ;
            break ;
            
            case '/' :  subscreen.textContent += `${input2} =`
                 screen.textContent =  divide(input1,input2) ; 
                 result =1 ;
                 break ; 
    
            default :  subscreen.textContent += `${input2} =`
            screen.textContent =  "OOPS";
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
    return parseInt(a)*parseInt(b) ; 
}

function substract(a,b)
{
    return parseInt(a)-parseInt(b) ;
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