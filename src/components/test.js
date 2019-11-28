var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


if (isInViewport(el)) {
    el.classList.add('text');
      next();
  } else {
      console.warn('something went wrong with scramble script');
  }
    
  if (isInViewport(el2)) {
    el2.classList.add('text');
      next();
  } else {
      console.warn('something went wrong with scramble script');
  }
  
    if (isInViewport(el3)) {
    el3.classList.add('text');
      next();
  } else {
      console.warn('something went wrong with scramble script');
  }

