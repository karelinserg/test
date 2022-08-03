import {contactLinks, languages, navigation, skills} from "./scripts/data.js";

//Header

const addActiveClassNav = (i) => {
    navElsArr[i].classList.add('-activeLink')
}
const removeActiveClassNav = () => {
    navElsArr.map(i => i.classList.remove('-activeLink'))
}

window.addEventListener('scroll', function () {

    if (pageYOffset < 784) {
        removeActiveClassNav()
        addActiveClassNav(0)
    }
    if (pageYOffset > 785) {
        removeActiveClassNav()
        addActiveClassNav(1)
    }
    if (pageYOffset > 1400) {
        removeActiveClassNav()
        addActiveClassNav(2)
    }
    if (pageYOffset > 2400) {
        removeActiveClassNav()
        addActiveClassNav(3)
    }
    if (pageYOffset > 3240) {
        removeActiveClassNav()
        addActiveClassNav(4)
    }
    if (pageYOffset > 4190) {
        removeActiveClassNav()
        addActiveClassNav(5)
    }
    if (pageYOffset > 4820) {
        removeActiveClassNav()
        addActiveClassNav(6)
    }
});

const headerListEl = document.querySelector('.header-list')

const handleNavClick = (event) => {
    removeActiveClassNav()
    event.target.classList.add('-activeLink')
}

const drawNavEl = (array) => {
    headerListEl.innerHTML = array.map(item => {
        return (
            `<li class="header-list-item">
                <a class="navLink" href="#${item.id}">${item.name}</a>
            </li>`
        )
    }).join('')
}
drawNavEl(navigation)

const navEl = document.getElementsByClassName('navLink')
const navElsArr = Array.from(navEl)
addActiveClassNav(0)

navElsArr.map(item => item.addEventListener('click', handleNavClick))

//Skills

const skillsBodyEl = document.querySelector('.skills-body')
const arrowDownBtn = document.querySelector('.arrow-down-link')

const drawSkillCard = (array) => {
    skillsBodyEl.innerHTML = array.map(item => {
        return (
            `<div class="skills-card">
                <img class="skills-icon" src="./img/icons/${item.imgUrl}.png" alt="${item.name}">
                <p class="skills-name">${item.name}</p>
            </div>`
        )
    }).join('')
}

let openSkills = false;

const handleClickArrow = () => {
    !openSkills ? arrowDownBtn.classList.add('rotate-180') : arrowDownBtn.classList.remove('rotate-180')
    !openSkills ? openSkills = true : openSkills = false
    !openSkills ? drawSkillCard(skills.slice(0, 6)) : drawSkillCard(skills)
    skillsBodyEl.classList.toggle('-showAll')
    skillsBodyEl.scrollTop = skillsBodyEl.scrollHeight
    !openSkills ?
        arrowDownBtn.setAttribute('href', '#skills') :
        arrowDownBtn.setAttribute('href', '#skills-title')
}

drawSkillCard(skills.slice(0, 6))
arrowDownBtn.addEventListener('click', handleClickArrow)


$('.single-slide').slick({
    dots: true,
});

// Languages

const languagesBodyBlock = document.querySelector('.languages-body')

const drawLanguageCard = (array) => {
    languagesBodyBlock.innerHTML = array.map(item => {
        return (
            `<div class="language-card">
                <img class="languages-flag" src="./img/flags/${item.name}.png" alt="${item.name} flag">
                <h3 class="languages-title">${item.name}</h3>
                <p class="languages-level">${item.level}</p>
            </div>`
        )
    }).join('')
}

drawLanguageCard(languages)

// Contacts

const contactLinksBlock = document.querySelector('.contact-links')

const drawContactLink = (array) => {
    contactLinksBlock.innerHTML = array.map(item =>{
        return (
            `<a href=${item.link} target="_blank">
                <img src=${item.img} alt=${item.alt}>
            </a>`
        )
    }).join('')
}

drawContactLink(contactLinks)
