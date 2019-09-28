let sidebar = {
  profilePicture: 'https://media.licdn.com/dms/image/C4E03AQH7U_BL5gyFEQ/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=xW80fD8Dx5RlXuD_qrDOH3Dkw5lnyhIpDN6a-qsW_iQ',
  contactInfo: {
    email: 'geisydomiciano@gmail.com',
    phoneNumber: '+46 070 372 43 21',
    location: 'Solna, Sweden',
    linkedin: 'http://linkedin.com/geisydomiciano/en',
    skype: 'geisy1998'
  },
  skills: ['HTML5', 'CSS3', 'Javascript', 'Vue.js', 'Nuxt.js', 'Testing', 'SSR', 'PWA']
}

let image = document.querySelector('.picture')
image.setAttribute('src', sidebar.profilePicture)

const contactInfoTemplate = `<a href="mailto:${sidebar.contactInfo.email}">${sidebar.contactInfo.email}</a>
<a href="tel:${sidebar.contactInfo.phoneNumber}">${sidebar.contactInfo.phoneNumber}</a>
<address class="location">${sidebar.contactInfo.location}</address>
<a href="${sidebar.contactInfo.linkedin}" target="_blank" rel="noopener noreferrer">${sidebar.contactInfo.linkedin}</a>
<p class="skype">${sidebar.contactInfo.skype}</p>`

document.querySelector('.contact-info').insertAdjacentHTML('afterbegin', contactInfoTemplate)

let skillTemplate = ''
sidebar.skills.forEach(function (skill) {
  skillTemplate += `<mark class="skill">${skill}</mark>`
})

document.querySelector('.skills').insertAdjacentHTML('beforeend', skillTemplate)
