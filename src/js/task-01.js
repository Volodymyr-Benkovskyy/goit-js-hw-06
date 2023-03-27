const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const itemsTitle = item.querySelector("h2").textContent;
  const itemsSum = item.querySelectorAll("ul li").length;
  console.log(`Category: ${itemsTitle}`);
  console.log(`Elements: ${itemsSum}`);
});
