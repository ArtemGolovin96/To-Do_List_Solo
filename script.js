// Кнопка сортировки
let sortImg = document.querySelector('.sortbutton');
let  delButton = document.querySelectorAll('.task-button');
let firstDeleteButton = document.querySelector('.task-button')

    sortImg.addEventListener('mouseover', (event) => {
        if (sortImg.src.endsWith('/img/todo_down_svg.svg')) {
            sortImg.src = './img/sort_down_black.svg';
        } else if (sortImg.src.endsWith('/img/sort_up_svg.svg')) {
            sortImg.src = './img/sort_up_black.svg';
        }
});

sortImg.addEventListener('mouseout', (event) => {
        if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
            sortImg.src = './img/todo_down_svg.svg';
        } else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
            sortImg.src = './img/sort_up_svg.svg';
        }
});


function sorEventLisImg () {
    
    if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
        sortImg.src = './img/sort_up_black.svg';
        sortList();
    } else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_down_black.svg';
        sortListReverse();
    }
}

sortImg.addEventListener('click', sorEventLisImg);



// Кнопка удалить 
// "Вешаем" обработчик на кнопку удаления
function addEvListenerClickDelete (arg) {
    arg.addEventListener('click', (event) => {
        arg.parentNode.remove();
    })
    arg.addEventListener('keydown', (event) => {
        if (event.keyCode == 32 && arg == document.activeElement) {
            event.preventDefault();
            arg.parentNode.remove();

        }
    })
}
addEvListenerClickDelete(firstDeleteButton); //"Вешае" на первую кнопку удаления



// Кнопка добавить 
let addButton = document.querySelector('.append-button'); // Кнопка "Добавить"
let div = document.querySelector('.tasks'); // Копируемый элемент
let list = document.querySelector('.list');
let input = document.querySelector('.task-text')

    addButton.addEventListener('click', (event) => {
        let cloneInput = div.cloneNode(true);
        cloneInput.firstElementChild.value = '';
        addEvListenerFocusBlurToDelButton(cloneInput);
        addEvListenerClickDelete (cloneInput.lastElementChild);
        list.append(cloneInput);
    });
//Обработчик сработает при фокусе на кнопке и нажатии пробела
    addButton.addEventListener('keydown', (event) => {
        if (event.keyCode == 32 && addButton == document.activeElement) {
            let cloneInput = div.cloneNode(true);
            cloneInput.firstElementChild.value = '';
            addEvListenerFocusBlurToDelButton(cloneInput);
            addEvListenerClickDelete (cloneInput.lastElementChild);
            list.append(cloneInput);
        }
    });


// Сортировка списка задач по алфавиту в прямом порядке
function sortList() {
    let sortingList = document.querySelectorAll('.tasks');
    let list = document.querySelector('.list');
    let arr = Array.from(sortingList);
    arr.sort((a, b) => {
        let aa = a.firstElementChild.value;
        let bb = b.firstElementChild.value;
        if (aa < bb) {
            return -1;
        } 
        if (aa > bb) {
            return 1;
        }
        if (aa == bb) {
            return 0;
        }
    })
    arr.forEach((el) => {
        list.append(el)
    })

}

// Сортировка списка задач по алфавиту в ОБРАТНОМ порядке
function sortListReverse() {
    let sortingList = document.querySelectorAll('.tasks');
    let list = document.querySelector('.list');
    let arr = Array.from(sortingList);
    arr.sort((a, b) => {
        let aa = a.firstElementChild.value;
        let bb = b.firstElementChild.value;
        if (aa < bb) {
            return 1;
        } 
        if (aa > bb) {
            return -1;
        }
        if (aa == bb) {
            return 0;
        }
    })
    arr.forEach((el) => {
        list.append(el)
    })

}   

// Адаптируем приложение для людей с ограничением по зрению
//Анимация при выборе клавишей TAB
function addEvListenerFocusBlurToDelButton (argument) {
        argument.lastElementChild.addEventListener('focus', (event) => {
                argument.lastElementChild.style.background = 'url("img/delete_on_svg.svg")';
                argument.lastElementChild.style.backgroundSize = '97%';
              });
        argument.lastElementChild.addEventListener('blur', (event) => {
            argument.lastElementChild.style.background = 'none';
            argument.lastElementChild.src = './img/delete_off_svg.svg';
            });

}

sortImg.addEventListener('focus', (event) => {
    sortImg.src = './img/sort_down_black.svg';
  });

sortImg.addEventListener('blur', (event) => {
    sortImg.src = './img/todo_down_svg.svg';
  });



//"Ловим" события клавиатуры

function keyPress(e) {
    let keyNum;
    if (window.event) {
        keyNum = window.event.keyCode;
    }
    else if (e) {
        keyNum = e.which;
    }
}
document.onkeydown = keyPress;

document.onkeydown = function(event){
    if (event.keyCode == 32 && sortImg == document.activeElement) {
        event.preventDefault();
        sorEventLisImg ()
    }

    delButton.forEach((el) => {

    })
};

