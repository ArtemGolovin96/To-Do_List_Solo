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
    } else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_down_black.svg';
    }
});











// Кнопка добавить 
let addButton = document.querySelector('.append-button');

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
