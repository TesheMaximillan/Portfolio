/// ///////////////////////////////// Global Variables
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const projectModal = document.querySelector('.project-modal');
const container = document.querySelector('.container');
const projButton = document.querySelectorAll('.btn-pro');

/// ///////////////////////////////// Mobile Menu
const toggleMenu = (menu) => {
  menu.classList.toggle('open');
  logo.classList.toggle('logo-display');
  body.classList.toggle('overflow-hidden');
};

const toggleModal = () => {
  projectModal.classList.toggle('show-modal');
  container.classList.toggle('hide-container');
};

/// ///////////////////////////////// Data manipulation in popup window

for (let i = 0; i < projButton.length; i++) {
  projButton[i].addEventListener('click', () => {
    container.classList.toggle('hide-container');
    projectModal.classList.toggle('show-modal');

    const modalSection2 = `
    <div class="modal-section">
      <div class="icon-close" onclick="toggleModal()">
        <svg class="icon">
          <use xlink:href="images/sprite.svg#ic_cross"></use>
        </svg>
      </div>
      <div class="modal-heading">
        <h2 class="project-name-detail">${projects[i].name}</h2>
        <ul class="languages">           
          ${projects[i].technologies.map((e) => `<li>${e}</li>`).join('')}
        </ul>
      </div>
      <div class="proj-img">
        <img class="proj-img--main" src="${
  projects[i].picture[0]
}" alt="Project Detail Picture" />
        <div class="proj-img--list">
          ${projects[i].picture
    .map(
      (e) => `<img class="proj-img proj-img_sub" src="${e}" alt="Project Detail Picture" />`,
    )
    .join('')}
        </div>
      </div>
      <div class="project-description">
        ${projects[i].description.map((e) => `<p>${e}</p>`)}
      </div>
      <div class="project-link">
        <a href="${projects[i].linkToLive}" class="btn btn-light btn-live">
          <span class="btn-name">See Live</span>
          <span class="btn-icon">
            <svg class="icon">
              <use xlink:href="images/sprite.svg#ic_link"></use>
            </svg>
          </span>
        </a>
        <a href=""${projects[i].linkToSource}" class="btn btn-light btn-source">
          <span class="btn-name">See Source</span>
          <span class="btn-icon">
            <svg class="icon">
              <use xlink:href="images/sprite.svg#ic_github_white"></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="page-link">
        <a href="" class="prev-page" onclick="prev()"><span class="left-arrow">&larr;</span>
          <span class="page-text">Previous project</span></a>
        <a href="" class="next-page" onclick="next()">
          <span class="page-text">Next project</span><span class="right-arrow">&rarr;</span></a>
      </div>
    </div>
    `;
    projectModal.innerHTML = modalSection2;
  });
}

/// ///////////////////////////////// Data store for popup window
let projects = [
  {
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    picture: [
      'images/project/Rectangle21(1).png',
      'images/project/Rectangle21(1).png',
      'images/project/Rectangle21(1).png',
      'images/project/Rectangle21(1).png',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    picture: [
      'images/project/Rectangle21.png',
      'images/project/Rectangle21.png',
      'images/project/Rectangle21.png',
      'images/project/Rectangle21.png',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    picture: [
      'images/project/Rectangle21(2).png',
      'images/project/Rectangle21(2).png',
      'images/project/Rectangle21(2).png',
      'images/project/Rectangle21(2).png',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    picture: [
      'images/project/Rectangle21(3).png',
      'images/project/Rectangle21(3).png',
      'images/project/Rectangle21(3).png',
      'images/project/Rectangle21(3).png',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    picture: [
      'images/project/Rectangle21(4).png',
      'images/project/Rectangle21(4).png',
      'images/project/Rectangle21(4).png',
      'images/project/Rectangle21(4).png',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    picture: [
      'images/project/Rectangle21(5).png',
      'images/project/Rectangle21(5).png',
      'images/project/Rectangle21(5).png',
      'images/project/Rectangle21(5).png',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: '#',
    linkToSource: '#',
  },
];
