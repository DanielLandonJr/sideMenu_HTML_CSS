const SideNav = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
  });

  const loadEventListeners = () => {
    document.querySelector('.open-side-menu').addEventListener('click', toggleSideMenu);
    document.querySelector('.close-side-menu').addEventListener('click', toggleSideMenu);
    document.querySelector('.navbar-nav').addEventListener('click', menuSelection);
    document.querySelector('#side-menu').addEventListener('click', menuSelection);
  };

  const menuSelection = (event) => {
    console.log(event.target.innerHTML);
  };

  const toggleSideMenu = () => {
    if (document.querySelector('#side-menu-back').style.display === 'none') {
      document.querySelector('#side-menu').style.width = '250px';
      // will display an overlay that prevents users from interacting with ui underneath the menu
      document.querySelector('#side-menu-back').style.display = 'block';
      // will slide main content to the right
      // document.querySelector('#main').style.marginLeft = '250px';
    } else {
      document.querySelector('#side-menu').style.width = '0';
      document.querySelector('#side-menu-back').style.display = 'none';
      // will slide main content back to the left
      // document.querySelector('#main').style.marginLeft = '0px';
    }
  };

  // public methods
  return {
    init: () => {
      loadEventListeners();
    }
  }
})();

SideNav.init();