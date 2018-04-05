require('./css');

import Carousel from "./carousel";

new Carousel({
  el: document.querySelector(".page-main_reviews_list"),
  leftControl: document.querySelector(".arrow-left"),
  rightControl: document.querySelector(".arrow-right"),
  itemWidth: 842
});
