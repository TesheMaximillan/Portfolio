/// ///////////////////////////////// Global Variables
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const projectModal = document.querySelector('.project-modal');
const container = document.querySelector('.container');
const projButton = document.querySelectorAll('.btn-pro');
const toggleMenu = document.querySelector('.toggle');
const form = document.querySelector('.form');
// const closeIcon = document.querySelector('icon-close');

/// ///////////////////////////////// Mobile Menu
toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('open');
  logo.classList.toggle('logo-display');
  body.classList.toggle('overflow-hidden');
});

/// ///////////////////////////////// Popup Window
function closeModal() {
  projectModal.classList.toggle('show-modal');
  container.classList.toggle('hide-container');
}

/// ///////////////////////////////// Data store for popup window
const projects = [
  {
    name: 'Art-Blog Website',
    technologies: ['HTML/SCSS', 'JavaScript'],
    picture: [
      'https://user-images.githubusercontent.com/51437483/161064540-3f51158b-497c-494c-997e-c19004b7cb37.JPG',
      'https://user-images.githubusercontent.com/51437483/161064540-3f51158b-497c-494c-997e-c19004b7cb37.JPG',
      'https://user-images.githubusercontent.com/51437483/161064540-3f51158b-497c-494c-997e-c19004b7cb37.JPG',
      'https://user-images.githubusercontent.com/51437483/161064540-3f51158b-497c-494c-997e-c19004b7cb37.JPG',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: 'https://teshemaximillan.github.io/ArtBlog/',
    linkToSource: 'https://github.com/TesheMaximillan/ArtBlog',
  },
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
    name: 'Awesome Books',
    technologies: ['HTML/SCSS', 'JavaScript'],
    picture: [
      'https://user-images.githubusercontent.com/51437483/159135872-8873034c-198c-4b56-9cd0-70091ad7b818.jpg',
      'https://user-images.githubusercontent.com/51437483/159135872-8873034c-198c-4b56-9cd0-70091ad7b818.jpg',
      'https://user-images.githubusercontent.com/51437483/159135872-8873034c-198c-4b56-9cd0-70091ad7b818.jpg',
      'https://user-images.githubusercontent.com/51437483/159135872-8873034c-198c-4b56-9cd0-70091ad7b818.jpg',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
    linkToLive: 'https://teshemaximillan.github.io/Awesome-Books-Modules/',
    linkToSource: 'https://github.com/TesheMaximillan/Awesome-Books-Modules',
  },
];

/// ///////////////////////////////// Data manipulation in popup window

for (let i = 0; i < projects.length; i += 1) {
  projButton[i].addEventListener('click', () => {
    container.classList.toggle('hide-container');
    projectModal.classList.toggle('show-modal');
    const modalSection2 = `
    <div class="modal-section">
      <div class="icon-close" ${closeModal} onclick="closeModal()">
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
        <a href="${projects[i].linkToSource}" class="btn btn-light btn-source">
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

/// ///////////////////////////////// Data manipulation in popup window
const EMAIL_INVALID = 'email field has to be in lower case.';

const showError = (input, message) => {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  msg.classList.add('error-message');
};

const validateEmail = (input, errorMessage) => {
  const email = input.value.trim();
  if (email !== email.toLowerCase()) {
    return showError(input, errorMessage);
  }

  return true;
};

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);

  // if valid, submit the form.
  if (emailValid) {
    document.forms[0].submit();
  }
});