document.querySelectorAll('.file-link').forEach(link => {
    const path = link.getAttribute('href');
    const fileName = path.split('/').pop();
    link.textContent = fileName;
});

function filterFiles(type) {

    const items = document.querySelectorAll('.pb');

    items.forEach(item => {

        if (type === 'all') {
            item.style.display = 'flex';
        }
        else if (item.dataset.type === type) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }

    });

}