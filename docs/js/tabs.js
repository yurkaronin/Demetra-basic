// const container = document.querySelector(".custom-price");
// const btns2 = document.querySelectorAll(".tabs__buttons");
// const content = document.querySelectorAll(".custom-price__tabs-item");
//
// container.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     btns2.forEach(function (btn) {
//       btn.classList.remove("active");
//       e.target.classList.add("active");
//     });
//     content.forEach(function (tabs) {
//       tabs.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });

const tabsBtn   = document.querySelectorAll(".tabs__buttons");
const tabsItems = document.querySelectorAll(".custom-price__tabs-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if( ! currentBtn.classList.contains('active') ) {
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function(item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

// document.querySelector('.tabs__nav-btn').click();


