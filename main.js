// load animation
document.addEventListener('click', (e) => { 
    if (e.target.matches('.btn_active_animation_open')) {
        if (document.querySelector('.active_animation_open')) {
            document.querySelector('.animation_open').classList.remove('active_animation_open')
            setTimeout(() => {
                document.querySelector('.animation_open').classList.add('active_animation_open')
            }, 1);
        } 
        else {
            document.querySelector('.animation_open').classList.add('active_animation_open')
        }
    } 
})


let titleTag = document.querySelector('title');
let title = "My portfolio";
let subtitle = " | Hugo Clavinas";

titleTag.innerHTML = title+subtitle;

// BIBLIOTHEQUE AOS ANIMATION SCROLL
AOS.init({
    duration: 800,
    delay: 400,
});


// check navbar, true or false
document.querySelector('.header_content').addEventListener('click', () => {
    if (document.querySelector('#btn_navbar_on').checked == true) {
        document.querySelector('#btn_navbar_on').checked = false;
    } else {
        document.querySelector('#btn_navbar_on').checked = true;
    }
})


// MODAL CONTENUE
let modal = document.querySelector('#modal')
let body_modal = modal.querySelector('.body_modal')
let btn_modal_contact_on = document.querySelector('.btn_modal_contact_on')
let btn_modal_off = document.querySelector('.btn_modal_off')

const modalOnOff = (params) => {
    if (params.matches('.modal_active')) {
        params.classList.remove('modal_active')
        params.classList.add('modal_desactive')

    } else {
        params.classList.remove('modal_desactive')
        params.classList.add('modal_active')
    }
}

btn_modal_contact_on.addEventListener('click', ()=>modalOnOff(modal))
btn_modal_off.addEventListener('click', ()=>modalOnOff(modal))


// PROJETS 
const project = document.querySelector('#projects .projects_body')

const dataProjects = async (bloc) => {
    await fetch('./src/datas/projects.json')
    .then(res => res.json())  
    .then(data => {
        if (document.querySelector('#projects')) {
            data.forEach(item => {
                if (item.priority == 1) {
                    // let p = ""
                    // item.description.forEach((paragraphe) => {p += `<p>${paragraphe}</p><br>`})
                    project.innerHTML += `
                    <div class="project_card">
                        <div class="card_content" style="background-image: url('./public/assets/images/projects_images/${item.pathUrlimages}');">
                            <div class="card_modal" data-id-project="${item.id}">
                                <p>INFOS</p>
                            </div>
                            <div class="back_shadow">
                                <div class="project_description">
                                    <h3>${item.title}</h3>
                                    <p>${item.type}</p>
                                </div>
                            </div>
                        </div>
                        <div class="links">
                            <a class="btn_view_project" title="voir projet" href="${item.linkViewProject}" target="_blank">voir projet</a>
                            <a class="btn_git" title="GitHub" href="${item.linkGitHub}" target="_blank">
                                <i class='bx bxl-github'></i>
                            </a>
                        </div>
                    </div>
                    `
                } 
            })
        }
    }) 
}

dataProjects(project)


// MODAL PROJECT EVENT CLICK
let modal_project = document.querySelector('#modal_project')
let btn_modal_project_off = document.querySelector('.btn_modal_project_off')
let dataModalProject = (id) => {
    fetch('./src/datas/projects.json')
    .then(res => res.json())  
    .then(data => {
        data.forEach(project => {
            if (project.id == Number(id)) {
                modal_project.querySelector('.modal_project_bloc_img').setAttribute('href', project.linkViewProject)
                modal_project.querySelector('.modal_project_content img').setAttribute('src', `./public/assets/images/projects_images/${project.pathUrlimages}`)
                modal_project.querySelector('.title').innerHTML = project.type + ": " + project.title
                modal_project.querySelector('.content_right_description').innerHTML = ""
                project.description.forEach((paragraphe) => {
                    modal_project.querySelector('.content_right_description').innerHTML += `<p>${paragraphe}</p>`
                })
                modal_project.querySelector('.technos ul').innerHTML = ""
                project.technos.forEach((techno) => {
                    modal_project.querySelector('.technos ul').innerHTML += `<li>${techno}</li>`
                })
            }
        })
    }) 

}
document.addEventListener('click', (e) => {
    // console.log(e.target.matches('.card_modal'));
    if (e.target.matches('.card_modal')) {
        let id = e.target.getAttribute('data-id-project')
        // console.log(id);
        modalOnOff(modal_project)
        dataModalProject(id)
    }
})
btn_modal_project_off.addEventListener('click', ()=>modalOnOff(modal_project))