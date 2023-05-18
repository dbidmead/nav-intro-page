const featuresNavLink = document.querySelector('#features');
featuresNavLink.dropDownHeight = '165px';
featuresNavLink.isExpanded = false;

const careersNavLink = document.querySelector('#careers');
careersNavLink.dropDownHeight = '120px';
careersNavLink.isExpanded = false;

const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.nav-content');
sideBar.isExpanded = false

function toggleExpand(e) {
    console.log(e.target)
    let arrow = e.target.lastElementChild;
    let dropDown = e.target.nextElementSibling;
    let dropDownItems = document.querySelectorAll('.dropdown-el');
    arrow.classList.toggle('expanded');
    e.target.isExpanded = !e.target.isExpanded;
    console.log(e.target.isExpanded)
    dropDown.setAttribute('style', e.target.isExpanded ? 
        `height:${e.target.dropDownHeight}; opacity: 1; margin-top:1rem` :
        `height:0; opacity:0; margin-top:0`
    );
    dropDownItems.forEach(item => {
        item.setAttribute('style', e.target.isExpanded ? 
            'pointer-events:all' :
            'pointer-events:none')
    })
}

function handleExpandSideBar() {
    hamburger.classList.toggle('active');
    sideBar.isExpanded = !sideBar.isExpanded;
    sideBar.setAttribute('style', sideBar.isExpanded ? 
        'right:0' :
        'right:-70%')
}

featuresNavLink.addEventListener('click', toggleExpand);
careersNavLink.addEventListener('click', toggleExpand);
hamburger.addEventListener('click', handleExpandSideBar);

