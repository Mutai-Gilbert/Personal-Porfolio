function dcl(t = 'div') {
  if (!t) {
    t = 'div';
  }
  return document.createElement(t);
}

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
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project3',
    title: 'FACEBOOK 360',
    frame: ['Facebook', 'Full Stack Dev', 2015],
    primaryText: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    imageUrl: './media/Snapshoot Portfolio.png',
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project4',
    title: 'Uber Navigation',
    frame: ['Uber', 'Lead Developer', 2018],
    primaryText: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    imageUrl: './media/multi-post.png',
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    const section = dcl('section');
    section.setAttribute('id', project.id);
    section.classList.add('card-works');

    const divSection = dcl('div');
    divSection.classList.add('cards');

    // Title
    const cardTitle = dcl('h2');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = project.title;

    // close-icon
    const closeIcon = dcl('span');
    closeIcon.setAttribute('id', 'close-icon');
    closeIcon.innerHTML = '<img src="./media/close-icon2.png" alt="X">';

    // work information

    const work = dcl('ul');
    work.classList.add('work');

    // for each work information

    project.frame.forEach((item) => {
      const workItem = dcl('li');
      workItem.classList.add('work-item');
      workItem.innerText = item;
      work.appendChild(workItem);
    });

    // The image

    const image = dcl('div');
    image.classList.add('work-image');
    image.innerHTML = `< img class='img' src='${project.imageUrl}' alt='${project.title}' />`;

    // Projects Blocks

    const projectBlock = dcl();
    projectBlock.classList.add('project-block');

    // left block

    const leftBlock = dcl();
    leftBlock.classList.add('left-block');

    // details on the left block

    const detailsLeftBlock = dcl('p');
    detailsLeftBlock.classList.add('paragraph');
    detailsLeftBlock.innerText = project.p;
    leftBlock.append(detailsLeftBlock);

    // right block

    const rightBlock = dcl();
    rightBlock.classList.add('right-block');

    // skills category

    const skills = dcl('ul');
    skills.classList.add('skills');
    project.tags.forEach((tag) => {
      const skill = dcl('li');
      skill.innerText = tag;
      skills.appendChild(skill);
    });

    // action

    const action = dcl();
    action.classList.add('action');

    // livelink

    const liveLink = dcl('a');
    liveLink.classList.add('see-live');
    liveLink.setAttribute('href', project.liveLink);
    liveLink.innerHTML = 'See live  <span class="button"> <img src="./media/livelink.png" alt="Live"/> </span>';

    // source link
    const sourceLink = dcl('a');
    sourceLink.classList.add('source-link');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.innerHTML = 'See Live  <span class="button"> <img src="./media/sourcelink.png" alt="Live"/> </span>';

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
    const card = dcl('div');
    card.classList.add('Card-Works');

    const snapshootPortfolio = dcl('div');
    snapshootPortfolio.classList.add('Snapshoot-Portfolio');
    snapshootPortfolio.innerHTML = `<img class='card-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    card.appendChild(snapshootPortfolio);

    // Specific details on work done

    // Work done block work details

    const workBlock = dcl('div');
    workBlock.classList.add('Left-Block');

    // Project Title
    const projectTitle = dcl('h2');
    projectTitle.classList.add('Primary-Text');
    projectTitle.innerText = project.title;
    workBlock.appendChild(projectTitle);

    // the ul elements

    const frame2 = dcl('ul');
    frame2.classList.add('work-info');

    // the li items

    project.frame.forEach((item) => {
      const itemsFrame2 = dcl('li');
      itemsFrame2.classList.add('items-frame2');
      itemsFrame2.innerText = item;
      frame2.appendChild(itemsFrame2);
    });

    workBlock.appendChild(frame2);

    // the content on the work block

    const workBlockContent = dcl('p');
    workBlockContent.classList.add('workblock-p');
    workBlockContent.innerText = project.p;
    workBlock.appendChild(workBlockContent);

    // Tags
    const tags = dcl('ul');
    tags.classList.add('tags');

    project.frame.forEach((skill) => {
      const tag = dcl('li');
      tag.classList.add('tag-skill');
      tag.innerText = skill;
      tags.appendChild(tag);
    });
    workBlock.appendChild(tags);

    // The button/action
    const actionButton = dcl('button');
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
