javascript:(function(){
  document.querySelector('body.advocate-modal-visible').style.overflow='auto';
  
  var elem = document.getElementById("advocate-modal");
  elem.parentNode.removeChild(elem);
})();
