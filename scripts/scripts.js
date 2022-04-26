function toggleRowVisibility(e)
{
  const elements = document.querySelectorAll(`[data-tags*="${e.id}"]`);
  for (let i = 0; i < elements.length; i++) {
    if (e.checked) {
      elements[i].style.removeProperty('display');
    }
    else {
      elements[i].style.display = "none";
    }
  }
}

tagFilters = document.getElementsByClassName('tagFilter');
for (let i=0; i < tagFilters.length; i++)
{
  tagFilters[i].addEventListener('change', () => { toggleRowVisibility(tagFilters[i]) });
}
