const menuList = document.getElementById('menu-list');
const menuAddNew = document.getElementById('menu-add-new');
const menuContact = document.getElementById('menu-contact');

const listSection = document.getElementById('list-section');
const addNewSection = document.getElementById('add-new');
const contactSection = document.getElementById('contact-section');

const sections = [listSection, addNewSection, contactSection];

// Display the list section by default
sections.forEach((section, index) => {
  if (index === 0) {
    section.style.display = 'flex';
  } else {
    section.style.display = 'none';
  }
});

const displaySection = (menuItem, sectionToShow) => {
  menuItem.addEventListener('click', () => {
    sections.forEach((section) => {
      if (section === sectionToShow) {
        section.style.display = 'flex';
      } else {
        section.style.display = 'none';
      }
    });
  });
};

const displayListSection = () => {
  displaySection(menuList, listSection);
};

const displayAddNewSection = () => {
  displaySection(menuAddNew, addNewSection);
};

const displayContactSection = () => {
  displaySection(menuContact, contactSection);
};

export { displayListSection, displayAddNewSection, displayContactSection };
