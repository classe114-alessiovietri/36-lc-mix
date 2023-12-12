/* `

    CONSEGNA
    Stampare in pagina una lista della spesa, prima con il for e poi con il while

*/

const groceryList = [
    'Pane',
    'Caffè',
    'Pasta',
    'Latte',
    'Pomodori',
    'Carne',
];
console.log('groceryList', groceryList, typeof groceryList);
console.log('groceryList.length', groceryList.length, typeof groceryList.length);

const myUl = document.getElementById('grocery-list');
console.log('myUl', myUl, typeof myUl);

// myUl.innerHTML = '<li>' + groceryList + '</li>';
// myUl.append(groceryList);

// for (let i = 0; i < groceryList.length; i++) {

//     console.log('i', i, groceryList[i]);

//     const newLi = document.createElement('li');
//     newLi.append(groceryList[i]);
//     myUl.append(newLi);

//     newLi.addEventListener('click', function () {
        
//         if (newLi.classList.contains('clicked')) {
//             newLi.classList.remove('clicked');
//         }

//         else {
//             newLi.classList.add('clicked');
//         }

//         // newLi.classList.toggle('clicked');
//     });

// }

let listString = 'LISTA: ';

let i = 0;
while (i < groceryList.length) {

    console.log('i', i, groceryList[i]);

    listString += groceryList[i] + ', ';

    const newLi = document.createElement('li');
    newLi.append(groceryList[i]);
    myUl.append(newLi);

    newLi.addEventListener('click', function () {
        if (newLi.classList.contains('clicked')) {
            newLi.classList.remove('clicked');
        }

        else {
            newLi.classList.add('clicked');
        }

        // newLi.classList.toggle('clicked');
    });

    i++;

}

groceryList[0] = 'Cetrioli';
console.log('groceryList', groceryList, typeof groceryList);

console.log(listString);

// const specialLi = document.querySelector('#grocery-list > :nth-child(3)');
// specialLi.classList.add('ciccio');


// console.log('groceryList[2]', groceryList[2], typeof groceryList[2]);
// groceryList[2].classList.add('ciccio-2');


// const favoriteColor = 'rosso';
// const luckyNumber = 8;

// 'Il mio colore preferito è ' + favoriteColor + ', mentre il mio numero fortunato è ' + luckyNumber;
// "Il mio colore preferito è " + favoriteColor + ", mentre il mio numero fortunato è " + luckyNumber;
// `Il mio colore preferito è ${favoriteColor}, mentre il mio numero fortunato è ${luckyNumber}`;