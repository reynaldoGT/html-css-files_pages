
window.addEventListener('load', () => {
    render();
    hover_active();
    menu_responsive();
})


const home = 'fas fa-home'
const folder_close = 'far fa-folder'
const folder_open = 'far fa-folder-open'
const shared = 'fas fa-share-square'
const trash = 'far fa-trash-alt'
const folder_plus = 'fas fa-folder-plus'
const folder_minus = 'fas fa-folder-minus'
//Menu icons
const menu_3_points = 'fas fa-ellipsis-v'
const hamburger = 'fas fa-bars'
const zip = 'fas fa-file-archive'


const files = [
    {
        name: 'Tutoriales',
        icono: folder_close,
        create: '12-05-2019'
    },
    {
        name: 'Desk files',
        icono: folder_close,
        create: '12-07-2019'
    },
    {
        name: 'Webinar',
        icono: folder_close,
        create: '12-05-2019'
    },
    {
        name: 'Apple fies',
        icono: folder_close,
        create: '20-20-2019'
    },
];

const folders = [
    { icono: folder_close, name: 'Client files' },
    { icono: folder_close, name: 'Apple files' },
    { icono: folder_close, name: 'Desktop files' },
    { icono: folder_close, name: 'Ui/Ux files' },
    { icono: folder_close, name: 'Brading' },
    { icono: folder_close, name: 'Portafolio' },
    { icono: folder_close, name: 'Webinar' },
    { icono: folder_close, name: 'Images' },
    { icono: folder_close, name: 'Tutorial' },
]


const render = () => {
    const file_group = document.getElementById('file-group'),
        group_folders = document.getElementById('group_folders');
    files.forEach(file => {
        const div = document.createElement('div');
        div.classList.add('file');
        div.innerHTML = `
    
    <div class="icons">
        <i class="${file.icono}"></i>
        <i class="fas fa-ellipsis-v"></i>
    </div>
    <div class="info">
        <p>${file.name}</p>
        <span> Create at: ${file.create} </span>
    </div>
    `;
        file_group.appendChild(div);
    })


    folders.forEach(folder => {
        const div = document.createElement('div');
        div.classList.add('folder');

        div.innerHTML = `
    
    <i class='${folder.icono}'></i>
    <p>${folder.name}</p>
    `;
        group_folders.appendChild(div);

    });

}

const hover_active = () => {
    let open = false;
    const folders = document.querySelectorAll('.folder');
    console.log(folders);
    folders.forEach(folder => {
        folder.addEventListener('click', () => {

            const file = folder.childNodes[1]
            if (!open) {

                file.classList.remove(["far"], ["fa-folder"])
                file.classList.add('far', 'fa-folder-open');
                file.style.color = '#FF9F00';
                open = true;
            } else {
                file.classList.remove(["far"], ["fa-folder-open"])
                file.classList.add('far', 'fa-folder')
                file.style.color = '#000';
                open = false;
            }
        })
    })
}



const menu_responsive = () => {
    const menu_hidden = document.querySelector('#menu-hidden');
    const menu_show = document.querySelector('#menu-show');
    
    const dashboard = document.querySelector('#dashboard');
    
    
    menu_hidden.addEventListener('click', e => {
        dashboard.classList.toggle('active');
    })
    menu_show.addEventListener('click', e => {
        dashboard.classList.toggle('active');

    })
}