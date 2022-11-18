// Navigation menu
const menu = document.querySelector('.menu-icon');
const ul = document.querySelector('.nav-menu');
// const crossIcon = document.querySelector('times');
const mobileMenu = document.querySelectorAll('.mobile-menu');
let menuState = false;

function toggleMenu() {
  if (menuState) {
    ul.classList.remove('df');
    menuState = false;
  } else {
    ul.classList.add('df');
    menuState = true;
  }
}
menu.addEventListener('click', toggleMenu);
mobileMenu.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});

// crossIcon.addEventListener('click', toggleMenu);

// Pojects

const projectDbs = [
  {
    id: 'project1',
    title: 'Tonic',
    frame: ['Canopy', 'Back End Dev', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    imageUrl: './media/Desktop-1.png',
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project2',
    title: 'Multi-Post Stories',
    frame: ['Facebook', 'Full Stack Dev', 2015],
    primaryText: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'css', 'javascript'],
    imageUrl: './media/Snapshoot Portfolio-4.png',
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project3',
    title: 'FACEBOOK 360',
    frame: ['Facebook', 'Full Stack Dev', 2015],
    primaryText: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'css', 'javascript'],
    imageUrl: './media/Snapshoot Portfolio.png',
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project4',
    title: 'Uber Navigation',
    frame: ['Uber', 'Lead Developer', 2018],
    primaryText: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'css', 'javascript'],
    imageUrl: './media/multi-post.png',
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: '#',
    sourceLink: '#',
  },
];

function popProject(id) {
  const projects = projectDbs;

  let project;
  for (let i = 0; i < projectDbs.length; i += 1) {
    if (projects[i].id === id) {
      project = projects[i];
    }
  }

  if (project) {
    const section = document.createElement('section');
    section.setAttribute('id', project.id);
    section.classList.add('card-works');

    const divSection = document.createElement('div');
    divSection.classList.add('cards');

    // Title
    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = project.title;

    // close-icon
    const closeIcon = document.createElement('div');
    closeIcon.setAttribute('id', 'close-icon');
    closeIcon.innerHTML = '<img src="./media/close.png" alt="X">';

    // work information

    const work = document.createElement('ul');
    work.classList.add('work');

    // for each work information

    project.frame.forEach((item) => {
      const workItem = document.createElement('li');
      workItem.classList.add('work-item');
      workItem.innerText = item;
      work.appendChild(workItem);
    });

    // The image

    const image = document.createElement('div');
    image.classList.add('work-image');
    image.innerHTML = `<img class='card-img' src='${project.imageUrl}' alt='${project.title}'/>`;

    // Projects Blocks

    const projectBlock = document.createElement('div');
    projectBlock.classList.add('project-block');

    // left block

    const leftBlock = document.createElement('div');
    leftBlock.classList.add('left-block');

    // details on the left block

    const detailsLeftBlock = document.createElement('p');
    detailsLeftBlock.classList.add('paragraph');
    detailsLeftBlock.innerText = project.p;
    leftBlock.append(detailsLeftBlock);

    // right block

    const rightBlock = document.createElement('div');
    rightBlock.classList.add('right-block');

    // skills category

    const skills = document.createElement('ul');
    skills.classList.add('skills');
    project.tags.forEach((tag) => {
      const skill = document.createElement('li');
      skill.innerText = tag;
      skills.appendChild(skill);
    });

    // action

    const action = document.createElement('div');
    action.classList.add('action');

    // livelink

    const liveLink = document.createElement('a');
    liveLink.classList.add('see-live');
    liveLink.setAttribute('href', project.liveLink);
    liveLink.innerHTML = 'See live  <label class="see-l"> <img src="./media/link.png" alt="Live"/> </label>';

    // source link
    const sourceLink = document.createElement('a');
    sourceLink.classList.add('source-link');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.innerHTML = 'See Live  <label class="source-l"> <img src="./media/sourcelink.png" alt="Live"/> </label>';

    // append the livelink and source link
    action.append(liveLink, sourceLink);

    // append skills and actions

    rightBlock.append(skills, action);

    // append leftblock and right block

    projectBlock.append(leftBlock, rightBlock);

    // append projectBlock and other subsections to the card.

    divSection.append(cardTitle, closeIcon, work, image, projectBlock);

    // append the cards to the section

    section.append(divSection);

    // append the section to the main

    document.querySelector('main').append(section);

    // add event listener

    const closePopup = document.getElementById('close-icon');
    closePopup.addEventListener('click', () => {
      document.querySelector('main').removeChild(section);
    });
  }
}

// Implementing existing project
function popAllProject() {
  // first portfolio
  const portfolio = document.getElementById('portfolio');
  portfolio.classList.add('works');
  projectDbs.forEach((project) => {
    // Dom for each card we select
    const card = document.createElement('div');
    card.classList.add('Card-Works');

    const snapshootPortfolio = document.createElement('div');
    snapshootPortfolio.classList.add('Snapshoot-Portfolio');
    snapshootPortfolio.innerHTML = `<img class='card-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    card.appendChild(snapshootPortfolio);

    // Specific details on work done

    // Work done block work details

    const workBlock = document.createElement('div');
    workBlock.classList.add('Left-Block');

    // Project Title
    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('Primary-Text');
    projectTitle.innerText = project.title;
    workBlock.appendChild(projectTitle);

    // the ul elements

    const frame2 = document.createElement('ul');
    frame2.classList.add('work-info');

    // the li items

    project.frame.forEach((item) => {
      const itemsFrame2 = document.createElement('li');
      itemsFrame2.classList.add('items-frame2');
      itemsFrame2.innerText = item;
      frame2.appendChild(itemsFrame2);
    });

    workBlock.appendChild(frame2);

    // the content on the work block

    const workBlockContent = document.createElement('p');
    workBlockContent.classList.add('workblock-p');
    workBlockContent.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
    workBlock.appendChild(workBlockContent);

    // Tags
    const tags = document.createElement('ul');
    tags.classList.add('tags');

    project.tags.forEach((skill) => {
      const tag = document.createElement('li');
      tag.classList.add('tag-skill');
      tag.innerText = skill;
      tags.appendChild(tag);
    });
    workBlock.appendChild(tags);

    // The button/action
    const actionButton = document.createElement('button');
    actionButton.classList.add('action-button');
    actionButton.innerText = 'See More';
    actionButton.setAttribute('id', project.id);

    actionButton.addEventListener('click', () => {
      popProject(project.id);
    });

    workBlock.appendChild(actionButton);
    card.appendChild(workBlock);
    portfolio.appendChild(card);
  });
}

window.onload = () => {
  popAllProject();
};

/* Validate form */
function onSubmit(event) {
  const validate = document.getElementById('email');
  const errorMessage = document.getElementById('error');
  const email = validate.value;

  if (email.toLowerCase() !== email) {
    event.preventDefault();
    validate.classList.add('invalid');
    errorMessage.classList.add('error');
    errorMessage.innerText = 'Email should be lowercase!';
  } else {
    validate.classList.remove('invalid');
    errorMessage.classList.remove('error');
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);

// Here is where you can remove the comments