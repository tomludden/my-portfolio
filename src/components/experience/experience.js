import './experience.css'

export function loadExperience() {
  const experienceSection = document.createElement('section')
  experienceSection.id = 'experience'

  const experienceHeader = document.createElement('h2')
  experienceHeader.textContent = 'Experience/Studies'
  experienceSection.appendChild(experienceHeader)

  const buttonsDiv = document.createElement('div')
  buttonsDiv.classList.add('buttons')

  const btnExperience = document.createElement('button')
  btnExperience.id = 'btnExperience'
  btnExperience.textContent = 'Experience'
  buttonsDiv.appendChild(btnExperience)

  const btnStudies = document.createElement('button')
  btnStudies.id = 'btnStudies'
  btnStudies.textContent = 'Studies'
  buttonsDiv.appendChild(btnStudies)

  experienceSection.appendChild(buttonsDiv)

  const contentExperience = document.createElement('div')
  contentExperience.id = 'contentExperience'
  contentExperience.classList.add('content')

  const expImage1 = document.createElement('img')
  expImage1.src = 'https://img.icons8.com/fluent/512/css3.png'
  expImage1.alt = 'Experience 1'
  contentExperience.appendChild(expImage1)

  const expImage2 = document.createElement('img')
  expImage2.src =
    'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
  expImage2.alt = 'Experience 2'
  contentExperience.appendChild(expImage2)

  const expImage3 = document.createElement('img')
  expImage3.src =
    'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png'
  expImage3.alt = 'Experience 3'
  contentExperience.appendChild(expImage3)

  experienceSection.appendChild(contentExperience)

  const contentStudies = document.createElement('div')
  contentStudies.id = 'contentStudies'
  contentStudies.classList.add('content')

  const studiesList = document.createElement('ul')

  const studyItem1 = document.createElement('li')
  studyItem1.textContent = 'Frontend'
  studiesList.appendChild(studyItem1)

  const studyItem2 = document.createElement('li')
  studyItem2.textContent = 'Backend'
  studiesList.appendChild(studyItem2)

  contentStudies.appendChild(studiesList)

  experienceSection.appendChild(contentStudies)

  // Append experienceSection to the app div, not to experience
  document.getElementById('app').appendChild(experienceSection)

  // Set up the event listeners for the buttons
  document.getElementById('btnExperience').addEventListener('click', () => {
    document.getElementById('contentExperience').classList.add('active')
    document.getElementById('contentStudies').classList.remove('active')
  })

  document.getElementById('btnStudies').addEventListener('click', () => {
    document.getElementById('contentStudies').classList.add('active')
    document.getElementById('contentExperience').classList.remove('active')
  })
}
