const el4 = document.getElementById('el-4');
const el5 = document.querySelector('.el-5');

el4.addEventListener('click', function () {
    if (!this.classList.contains('color-state-1')) {
        this.classList.add('color-state-1');
    } else {
        this.classList.remove('color-state-1');
    }
});

el5.addEventListener('click', function () {
    if (!this.classList.contains('color-state-2')) {
        this.classList.add('color-state-2');
    } else {
        this.classList.remove('color-state-2');
    } 
});

const imgContainer = document.getElementById('img-container');
const imgUrl = 'https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=800&q=80';

document.getElementById('btn-add').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'https://www.muenchen.de/';
    link.target = '_blank';
    link.title = 'Перейти на офіційний сайт Мюнхена';

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'Панорама Мюнхена та площа Марієнплац';
    img.width = 600;

    link.appendChild(img);
    imgContainer.appendChild(link);
});

document.getElementById('btn-increase').addEventListener('click', function () {
    const images = imgContainer.querySelectorAll('img');
    if (images.length > 0) {
        const lastImg = images[images.length - 1];
        lastImg.width += 50;
    }
});

document.getElementById('btn-decrease').addEventListener('click', function () {
    const images = imgContainer.querySelectorAll('img');
    if (images.length > 0) {
        const lastImg = images[images.length - 1];
        if (lastImg.width > 100) {
            lastImg.width -= 50;
        }
    }
});

document.getElementById('btn-remove').addEventListener('click', function () {
    const links = imgContainer.querySelectorAll('a');
    if (links.length > 0) {
        imgContainer.removeChild(links[links.length - 1]);
    }
});