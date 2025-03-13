import './about.css'

export function loadAbout() {
  const aboutSection = document.createElement('section')
  aboutSection.id = 'about'

  const aboutText = document.createElement('div')
  aboutText.classList.add('about-text')

  const aboutHeader = document.createElement('h2')
  aboutHeader.textContent = 'About'
  aboutHeader.classList.add('about-header')
  aboutText.appendChild(aboutHeader)

  const aboutParagraph = document.createElement('p')
  aboutParagraph.textContent =
    'I am a software developer with a passion for creating innovative solutions. I have a strong background in programming and a desire to learn new technologies. I am currently working on a web application that will help people find their perfect pet.'
  aboutText.appendChild(aboutParagraph)

  const aboutImage = document.createElement('img')
  aboutImage.src = 'https://robohash.org/stefan-one'
  aboutImage.alt = 'Picture of me'
  aboutImage.classList.add('about-image')

  aboutSection.appendChild(aboutText)
  aboutSection.appendChild(aboutImage)

  // Append the aboutSection to the #app div
  document.getElementById('app').appendChild(aboutSection)
}
