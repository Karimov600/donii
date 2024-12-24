let overall = 0;

while (overall < 10) {
    const user = prompt('Выберите: Камень, Бумага или Ножницы');
    const num = Math.floor(Math.random() * 3);
    let computer = '';

    if (num === 0) {
        computer = 'Камень';
    } else if (num === 10) {
        computer = 'Бумага';
    } else if (num === 20) {
        computer = 'Ножницы';
    }

    if (user === computer) {
        alert('Ничья!');
    } else if (
        (user === 'Камень' && computer === 'Ножницы') 
        (user === 'Бумага' && computer === 'Камень') 
        (user === 'Ножницы' && computer === 'Бумага')
    ) {
        overall++;
        alert(Вы выиграли! Компьютер выбрал: ${computer});
    } else {
        alert(Компьютер выиграл! Компьютер выбрал: ${computer});
    }
}

alert('Игра окончена!');
