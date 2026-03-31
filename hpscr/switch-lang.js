const switchBtn = document.getElementById('lang-switch');
const flag = document.querySelector('.lang-flag');
const text = document.querySelector('.lang-text');

const currentLang = document.documentElement.lang;
const path = window.location.pathname;


// 👉 UI
if (currentLang === 'de') {
    flag.src = '/img/elements/uk-flag.svg';
    text.textContent = 'English';
} else {
    flag.src = '/img/elements/de-flag.svg';
    text.textContent = 'Deutsch';
}


// 👉 КЛІК
switchBtn.addEventListener('click', () => {
    const parts = path.split('/');

    // ['', 'pages', 'de', 'product', 'file.html']

    if (currentLang === 'de') {
        parts[2] = 'en';
    } else {
        parts[2] = 'de';
    }

    const newPath = parts.join('/');

    window.location.href = newPath;
});

/*const switchBtn = document.getElementById('lang-switch');
const flag = document.querySelector('.lang-flag');
const text = document.querySelector('.lang-text');

// беремо мову з <html lang="...">
const currentLang = document.documentElement.lang;
const path = window.location.pathname;

// 👉 ВИСТАВЛЯЄМО UI
if (currentLang === 'de') {
    flag.src = '/img/elements/uk-flag.svg';
    text.textContent = 'English';
} else {
    // дефолт = EN
    flag.src = '/img/elements/de-flag.svg';
    text.textContent = 'Deutsch';
}


// 👉 КЛІК
switchBtn.addEventListener('click', () => {
    let newPath;

    if (currentLang === 'de') {
        newPath = path.replace('/de/', '/en/');
    } else {
        newPath = path.replace('/en/', '/de/');
    }

    window.location.href = newPath;
});



const flag = document.querySelector('.lang-flag');
const text = document.querySelector('.lang-text');
const path = window.location.pathname;

if (path.includes('/en/')) {
    // зараз EN → можна перейти на DE
    flag.src = '/img/elements/de-flag.svg';
    text.textContent = 'Deutsch';


} else if (path.includes('/de/')) {
    // зараз DE → можна перейти на EN
    flag.src = '/img/elements/uk-flag.svg';
    text.textContent = 'English';

} else {
    // якщо взагалі нема мови в URL → це EN (дефолт)
    flag.src = '/img/elements/de-flag.svg';
    text.textContent = 'Deutsch';
}*/