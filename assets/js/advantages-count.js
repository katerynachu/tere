
const listBenefitsEl = document.querySelector('.advantages_list');
const benefitItems = listBenefitsEl.querySelectorAll('.advantages_item');

benefitItems.forEach((item, index) => {
  const numberElement = item.querySelector('.advantages_number');
  const formattedIndex = (index + 1).toString().padStart(2, '0'); // Додати нуль перед індексом, якщо менше 10
  numberElement.textContent = formattedIndex+'.';
});

