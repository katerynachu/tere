const listBenefitsEl = document.querySelector('.benefits_list');
const benefitItems = listBenefitsEl.querySelectorAll('.benefits_item');

benefitItems.forEach((item, index) => {
  const numberElement = item.querySelector('.benefits_item-number');
  numberElement.textContent = index + 1;
});

