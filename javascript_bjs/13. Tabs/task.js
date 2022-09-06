const tabsNav = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));

tabsNav.forEach((tab) => {
    tab.addEventListener('click', switchTabs);
    
    function switchTabs() {
        const tabActive = document.querySelector('.tab_active');   

        tabActive.classList.remove('tab_active');
        tabsContent[tabsNav.indexOf(tabActive)].classList.remove('tab__content_active');

        tab.classList.add('tab_active');
        tabsContent[tabsNav.indexOf(tab)].classList.add('tab__content_active');
    }
});