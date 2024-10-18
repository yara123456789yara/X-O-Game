
let title = document.querySelector(".title");
let turn = 'X';
let squares = [];

function endGame(num1, num2, num3){
    title.innerHTML = `${squares[num1]} Winner`;
    document.getElementById('item'+num1).style.backgroundColor = 'rgb(73, 75, 78)';
    document.getElementById('item'+num2).style.backgroundColor = 'rgb(73, 75, 78)';
    document.getElementById('item'+num3).style.backgroundColor = 'rgb(73, 75, 78)';

    setInterval(function(){
        title.innerHTML += '.'
    },800);
    setTimeout(function(){
        location.reload();  
    },4000);
}

function win(){
    let filledSquares = 0;
    
    for (let i = 1 ; i < 10 ; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
        if (squares[i] != '') {
            filledSquares++; // عد المربعات المملوءة
        }
    }
    
    // تحقق من حالات الفوز
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != ''){
        endGame(1, 2, 3);
        return; // إيقاف الفحص بعد إعلان الفائز
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != ''){
        endGame(4, 5, 6);
        return;
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != ''){
        endGame(7, 8, 9);
        return;
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        endGame(1, 4, 7);
        return;
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        endGame(2, 5, 8);
        return;
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != ''){
        endGame(3, 6, 9);
        return;
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        endGame(3, 5, 7);
        return;
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != ''){
        endGame(1, 5, 9);
        return;
    }
    
    // تحقق من حالة التعادل فقط بعد التأكد من عدم وجود فائز
    if (filledSquares === 9) {
        title.innerHTML = 'Error'; // إعلان التعادل
        title.style.color = 'red';
        setTimeout(function(){
            location.reload();
        }, 3000);
    }
}

function game(id){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML === ''){
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML="O";
    }
    else if(turn === 'O' && element.innerHTML === ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML="X";
    }
    win();
}
