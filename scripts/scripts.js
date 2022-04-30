tagFilters = document.getElementsByClassName('tagFilter');
for (let i=0; i < tagFilters.length; i++)
{
  tagFilters[i].addEventListener('change', () => { toggleRowVisibility(tagFilters[i]) });
  tagFilters[i].checked = "checked";
}


function toggleRowVisibility(e)
{
  let elements = document.querySelectorAll(`[data-tags*="${e.id}"]`);

  let el = elements[0];
  for (let i = 0; i < elements.length; i++) {
    el = elements[i];
    if (e.checked) {
      elements[i].style.removeProperty('display');
    }
    else {
      let notFound = 1;

      for (let i=0; i < tagFilters.length; i++)
      {
        let tt = el.dataset.tags;
        if (tt.includes(tagFilters[i].includes))
        {
          notFound = 0;
        }
      }
      
      if (notFound == 1)
      {
        elements[i].style.display = "none";
      }
    }
  }



}

