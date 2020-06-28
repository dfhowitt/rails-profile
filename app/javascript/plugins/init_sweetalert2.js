import Swal from 'sweetalert2'

const initSweetalert = (selector, options = {}, callback = () => {} ) => {
  const swalButtons = document.querySelectorAll(selector);
  if (swalButtons) { // protect other pages
    swalButtons.forEach((swalButton) => {
      swalButton.addEventListener('click', () => {
        // swal(options).then(callback(id));
        Swal.fire(
          'Thanks!',
          'Your message has been sent!',
          'success'
        ).then(function(){
         location.reload();
         });

      });
    });
  };
};

export { initSweetalert };
