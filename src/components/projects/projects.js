import './projects.css'

import { projectArray } from './projectArray.js'

export function loadProjects() {
  const projectsSection = document.createElement('section')
  projectsSection.id = 'projects'

  const projectsHeader = document.createElement('h2')
  projectsHeader.textContent = 'Projects'
  projectsHeader.classList.add('projects-header')
  projectsSection.appendChild(projectsHeader)

  const projectsContent = document.createElement('div')
  projectsContent.classList.add('projects-content')

  // Loop through the projects array and create the project elements
  projectArray.forEach((project) => {
    const projectLink = document.createElement('a')
    projectLink.href = project.link
    projectLink.target = '_blank' // Opens in a new tab

    const projectImage = document.createElement('img')
    projectImage.src = project.imageSrc
    projectImage.alt = project.alt
    projectImage.classList.add('project-image')
    projectLink.appendChild(projectImage)

    projectsContent.appendChild(projectLink)
  })

  projectsSection.appendChild(projectsContent)

  // Append the projects section to the body of the page (inside the app div)
  document.getElementById('app').appendChild(projectsSection)
}
