
let DATA = {
    language: 'Javascript',
    topics: [
        'Home',
        'Overview',
        'Syntax',
        'Enabling',
        'Placement',
        'Variable',
        'Operators',
        'If...Else',
        'Switch Case',
        'While Loop',
        'For Loop',
        'For..in',
        'Loop Control',
        'Function',
        'Events',
        'Cookies',
        'page Redirect',
        'Dialog Boxes',
        'Void Keyword',
        'Page Priniting',

    ]
}

let make_result_container = () => {
    let container = document.createElement('div')
    container.classList.add('menu-reult-container')
    container.innerHTML = `
        
        <p class='description'><b>JavaScript</b> is a lightweight, interpreted <b>programming</b> language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. <b>JavaScript</b> is very easy to implement because it is integrated with HTML. It is open and cross-platform.</p>
        <h2 class='question'>Why to Learn Javascript</h2>
        <p class='description'><b>Javascript</b> is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning Javascript:</p>
        <ul class="list">
            <li><p>Javascript is the most popular <b>programming language</b> in the world and that makes it a programmer’s great choice. Once you learnt Javascript, it helps you developing great front-end as well as back-end softwares using different Javascript based frameworks like jQuery, Node.JS etc.</p></li>
            <li><p>Javascript is everywhere, it comes installed on every modern web browser and so to learn Javascript you really do not need any special environment setup. For example Chrome, Mozilla Firefox , Safari and every browser you know as of today, supports Javascript.</p></li>
            <li><p>Javascript helps you create really beautiful and crazy fast websites. You can develop your website with a console like look and feel and give your users the best Graphical User Experience.</p></li>
            <li><p>JavaScript usage has now extended to mobile app development, desktop app development, and game development. This opens many opportunities for you as Javascript Programmer.</p></li>
            <li><p>Due to high demand, there is tons of job growth and high pay for those who know JavaScript. You can navigate over to different job sites to see what having JavaScript skills looks like in the job market.</p></li>
            <li><p>Great thing about Javascript is that you will find tons of frameworks and Libraries already developed which can be used directly in your software development to reduce your time to market.</p></li>
        </ul>
    `

    return container
}
let make_menu_item = (language, topic) => {
    let container = document.createElement('li')
    container.classList.add('toggle-menu-item')
    // container.classList.add('menu-open')
    container.innerHTML = `

        <div>
            <span>${language}</span>
            -
            <span>${topic}</span>
        </div>
    `

    return container
}

let toggle_menu_container = document.querySelector('.toggle-menus')
let toggle_menu_result_container = document.querySelector('.toggle-menu-result')
let active_menu = undefined
let Language = DATA.language

DATA.topics.map(T => {
    let container = make_menu_item(Language, T)
    toggle_menu_container.appendChild(container)
    menu_item_event(container)
})

toggle_menu_result_container.appendChild(make_result_container())

function menu_item_event(container) {

    container.addEventListener('click', (e) => {

        if (active_menu) {
            active_menu.classList.remove('menu-item-open')
        }

        active_menu = container;

        active_menu.classList.add('menu-item-open')
    })

}