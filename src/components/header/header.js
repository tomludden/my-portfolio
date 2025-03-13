import './header.css'

export function loadHeader() {
  const headerElement = document.createElement('header')

  const title = document.createElement('h1')
  title.textContent = 'My Portfolio'
  headerElement.appendChild(title)

  const nav = document.createElement('nav')

  const homeLink = document.createElement('a')
  homeLink.href = '#about'
  homeLink.textContent = 'About'
  nav.appendChild(homeLink)

  const experienceLink = document.createElement('a')
  experienceLink.href = '#experience'
  experienceLink.textContent = 'Experience/Studies'
  nav.appendChild(experienceLink)

  const projectsLink = document.createElement('a')
  projectsLink.href = '#projects'
  projectsLink.textContent = 'Projects'
  nav.appendChild(projectsLink)

  headerElement.appendChild(nav)

  document.getElementById('app').appendChild(headerElement)
}
