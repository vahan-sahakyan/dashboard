const logo = document.getElementById('logo');
const toggleSidebar = document.getElementById('toggle-sidebar');
const menuTextItems = document.querySelectorAll('.menu-item_text');

const updateToggleIcon = () =>
  !logo.className.includes('hidden')
    ? (toggleSidebar.src = './assets/close.png')
    : (toggleSidebar.src = './assets/more.png');

updateToggleIcon();

toggleSidebar.addEventListener('click', () => {
  menuTextItems.forEach(item => {
    item.classList.toggle('hidden');
    console.log(item);
  });
  logo.classList.toggle('hidden');
  updateToggleIcon();
});
