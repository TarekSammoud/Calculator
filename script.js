
///BUTTONS
let input ; 
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

    


    clear.addEventListener('click' ,()=>{
        screen.textContent = '' ;
    }) ;
    const numbers=[one,two,three,four,five,six,seven,eight,nine,zero] ; 

    numbers.forEach((number)=>{ 
        number.addEventListener('click',()=> {
            input = number.textContent ;
            screen.textContent += input ;
            console.log(input) ;
        })
    })




function sum(a,b)
{
    return a+b; 
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
    if (b==0)
        return "OOPS" ;
        else
    return Math.round(a/b) ; 

}

function operate(operator,a,b)
{
    switch (operator)
    {
        case '+' : return sum(a,b) ;
            break ;
        
        case '-' : return substract(a,b) ;  
            break ;
        
        case '*' : return multiply(a,b) ;
            break ;
        
        case '/' : return divide(a,b) ; 
            break ; 

        default : return 0 ;
            break ;
    }
}