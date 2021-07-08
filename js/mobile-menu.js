// (() => {
    
//     const menuBtnRef = document.querySelector('[data-menu-button]');
   
  
//     menuBtnRef.addEventListener('click', () => {

//         const expanded = menuBtnRef.getAttribute("aria-expended") === "true" || false;

//         menuBtnRef.classList.toggle('is-open');
//         menuBtnRef.setAttribute("aria-expended", !expanded);
//     });

//   })();


  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'),
      closeModalBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();