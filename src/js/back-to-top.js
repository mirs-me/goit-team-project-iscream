const backToTop = document.querySelector('.go-to-top-button');

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}

const topFunction = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener('scroll', scrollFunction);
