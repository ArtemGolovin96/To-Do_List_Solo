// Кнопка сортировки
let sortImg = document.querySelector('.sortbutton');

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

sortImg.addEventListener('click', (event) => {
    console.log(sortImg.src)
    if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
        sortImg.src = './img/sort_up_black.svg';
        sortList()
    } else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_down_black.svg';
        sortListReverse()
    }
});

// Кнопка удалить 
// Функция для создания обработчика вместе с родительским div'ом
function deleteButton() {
    let  delButton = document.querySelectorAll('.task-button');
    delButton.forEach((el) => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            el.parentNode.remove();
        })
    })
}


// Кнопка добавить 
let addButton = document.querySelector('.append-button'); // Кнопка "Добавить"
let div = document.querySelector('.tasks'); // Копируемый элемент
let list = document.querySelector('.list');
let input = document.querySelector('.task-text')


addButton.addEventListener('mouseover', (event) => {
        if (sortImg.src.endsWith('/img/add_svg.svg')) {
            sortImg.src = './img/add_off_svg.svg';
        } else if (sortImg.src.endsWith('/img/add_off_svg.svg')) {
            sortImg.src = './img/add_svg.svg';
        }
});

addButton.addEventListener('mouseout', (event) => {
    if (sortImg.src.endsWith('/img/add_svg.svg')) {
        sortImg.src = './img/add_off_svg.svg';
    } else if (sortImg.src.endsWith('/img/add_off_svg.svg')) {
        sortImg.src = './img/add_svg.svg';
    }
});

addButton.addEventListener('click', (event) => {
    let cloneInput = div.cloneNode(true);
    cloneInput.firstElementChild.value = ''
    list.append(cloneInput);
    deleteButton();
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


