function toggleClass(className_hidden, blockClassName, plusClass, blockClassNamePlus, titleClass, blockTitle){
  let block = document.querySelector(`.${blockClassName}`);
  let plus = document.querySelector(`.${blockClassNamePlus}`);
  let title = document.querySelector(`.${blockTitle}`);
  if (block.classList.contains(className_hidden) && plus.classList.contains(plusClass) && title.classList.contains(titleClass)) {
    block.classList.remove(className_hidden);
    plus.classList.remove(plusClass);
    title.classList.remove(titleClass);
  }
  else {
    block.classList.add(className_hidden);
    plus.classList.add(plusClass);
    title.classList.add(titleClass);
  }
};
