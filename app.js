// Navigation menu
const menu = document.querySelector('.menu-icon');
const ul = document.querySelector('.nav-menu');
const X = document.querySelector('x');
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
X.addEventListener('click', toggleMenu);
mobileMenu.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});

// Pojects

const projectDbs = [
  {
    id: 'card-1',
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
    id: 'card-2',
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
    id: 'card-3',
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
    id: 'card-4',
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

function iterateThroughProject(id) {
  const projects = projectDbs;

  let project;
  for (let i = 0; i < projectDbs.length; i++) {
    if (projects[i].id === id) {
      project = projects[i];
    }
  }

  if (project) {
    const section = document.createElement('section');
    section.setAttribute('id', project.id);
    section.classList.add('card-works');

    const divSection = document.createElement();
    divSection.classList.add('cards');

    // Title
    const cardTitle = document.createElement('h1');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = project.title;

    // close-icon
    const closeIcon = document.createElement('span');
    closeIcon.setAttribute('id', 'close-icon');
    closeIcon.innerHTML = '<img src="./media/close-icon2.png" alt="X">';

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

    const image = document.createElement();
    image.classList.add('work-image');
    image.innerHTML = `< img class="img" src="${project.imageUrl}" alt="${project.title}" />`;

    // Projects Blocks

    const projectBlock = document.createElement();
    projectBlock.classList.add('project-block');

    // left block 
    const leftBlock = document.createElement();
    leftBlock.classList.add('left-block');

    // details on the left block

    const detailsLeftBlock = document.createElement('p');
    detailsLeftBlock.classList.add('paragraph');
    detailsLeftBlock.innerText = project.p;
    leftBlock.append(detailsLeftBlock);

    // right block

    const rightBlock = document.createElement();
    rightBlock.classList.add('right-block');

    // skills category

    const skills = document.createElement('ul');
    skills.classList.add('skills');
    skills.tags.forEach((item) => {
      const skill = document.createElement('li');
      skill.innerText = item;
      skills.appendChild(skill);
    });

    // border-bottom 

    const borderBottom = document.createElement();
    borderBottom.classList.add('border');

    // livelink 

    const liveLink = document.createElement('a');
    liveLink.classList.add('see-live');
    liveLink.setAttribute('href', project.liveLink);
    liveLink.innerHTML = 'See live  <span class="button"> <img src="./media/livelink.png" alt="Live"/> </span>';

    // source link 
    const sourceLink = document.createElement('a');
    sourceLink.classList.add('source-link');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.innerHTML = 'See Source  <span class="button"> <img src="./media/sourcelink.png" alt="Live"/> </span>';
  }
}