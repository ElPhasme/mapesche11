let activeFilters = [];
let tagFilters = document.getElementsByClassName('tagFilter');

for (let i=0; i < tagFilters.length; i++)
{
  tagFilters[i].addEventListener('change', () => { toggleRowVisibility(tagFilters[i]) });
  tagFilters[i].checked = "checked";
  activeFilters.push(tagFilters[i].id);
}


function toggleRowVisibility(e)
{
  let elements = document.querySelectorAll(`[data-tags*="${e.id}"]`);
  let el = elements[0];

    if (e.checked) {
      activeFilters.push(e.id);
    }
    else {
      for (let i=0; i < activeFilters.length; i++) {
        if (activeFilters[i] == e.id) {
            activeFilters.splice(i,1);
          }
      }
      }
     
      if (activeFilters.length <= 0) {
        for (let i=0; i<elements.length; i++) {
            elements[i].style.display = "none";
        }
      }
      for (let i=0; i<elements.length; i++) {
        for (let j=0; j<activeFilters.length; j++) {
          if (elements[i].dataset.tags.includes(activeFilters[j])) {
            elements[i].style.removeProperty('display');
            break;
          }
          else {
            elements[i].style.display = "none";
          }
        }
    }
}

