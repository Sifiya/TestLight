export default class Carousel {
  constructor(options) {
    this._el = options.el;
    this._leftControl = options.leftControl;
    this._rightControl = options.rightControl;
    this._itemsCount = Array.from(this._el.children).length;
    console.log(this._itemsCount);
    this._itemWidth = options.itemWidth;
    this._currentMargin = 0;

    this.setListeners();
  }

  setListeners() {
    this._leftControl.addEventListener('click', this.turnLeft.bind(this));
    this._rightControl.addEventListener('click', this.turnRight.bind(this));
  }

  turnRight() {
    this._currentMargin -= this._itemWidth + 4;
    if (this._currentMargin < (-(this._itemWidth + 4) * (this._itemsCount -1))) {
      this._currentMargin = 0;
    }
    this._el.style.marginLeft = this._currentMargin + "px";
  }

  turnLeft() {
    this._currentMargin += this._itemWidth + 4;
    if (this._currentMargin > 0) {
      this._currentMargin = -(this._itemWidth + 4) * (this._itemsCount -1);
    }
    this._el.style.marginLeft = this._currentMargin + "px";
  }
}