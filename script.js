const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const textBox = document.getElementById('text-box');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');  

const imageMode = (theme) => { 
  img1.src = `./images/undraw_designer_life_re_${theme}.svg`;
  img2.src = `./images/undraw_product_explainer_${theme}.svg`;
  img3.src = `./images/undraw_virtual_reality_re_${theme}.svg`;
}
console.log(img1);

const toggleTheme = (dark) => { 
  nav.style.backgroundColor = dark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = dark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'; 
  toggleIcon.children[0].textContent = dark ? 'Dark Mode' : 'Light Mode';
  dark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  dark ? imageMode('dark') : imageMode('light');
}

const switchTheme = (e) => { 
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleTheme(true)
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleTheme(false)
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleTheme(true);
  }
} 