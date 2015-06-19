# Flickity JS Meteor wrapper

_Touch, responsive, flickable galleries_

See [flickity.metafizzy.co](http://flickity.metafizzy.co) for complete docs and demos.

## Install

```sh
meteor add emenoh:flickity
```

## License

### Commerical license

If you want to use Flickity to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Purchase a Flickity Commercial License at [flickity.metafizzy.co](http://flickity.metafizzy.co/#commerical-license)

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use Flickity under the terms of the GPLv3.

[Read more about Flickity's license](http://flickity.metafizzy.co/license.html).

## Usage

Flickity works with a container element and a set of child cell elements

### Spacebars templates

```html
<template name="carousel">
	<div class="container">
		<div class="gallery">
			{{#each photos}}
				<div class="cell">{{> homePhoto}}</div>
			{{/each}}
		</div>
	</div>
</template>

<template name="homePhoto">
	<img src="img/photos/{{slug}}.jpg" alt="{{title}}">
</template>
```

if (Meteor.isClient) {
  Template.carousel.rendered = function() {
    var gallery = this.$('.gallery');
    var carousel = new Flickity( gallery, {
     // options, defaults below
    });

	//methods are called on the gallery object, e.g. 
	// carousel.next();
	// carousel.select('3)')
	// console.log(carousel.selectedIndex);
	// returns '3';
  }
}
```


### Options

``` js
var flky = new Flickity( '.gallery', {
  // options, defaults listed

  accessibility: true,
  // enable keyboard navigation, pressing left & right keys

  autoPlay: false,
  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second

  cellAlign: 'center',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

  cellSelector: undefined,
  // specify selector for cell elements

  contain: false,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled

  draggable: true,
  // enables dragging & flicking

  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells

  friction: 0.2,
  // smaller number = easier to flick farther

  initialIndex: 0,
  // zero-based index of the initial selected cell

  lazyLoad: true,
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells

  percentPosition: true,
  // sets positioning in percent values, rather than pixels
  // Enable if items have percent widths
  // Disable if items have pixel widths, like images

  prevNextButtons: true,
  // creates and enables buttons to click to previous & next cells

  pageDots: true,
  // create and enable page dots

  resize: true,
  // listens to window resize events to adjust size & positions

  rightToLeft: false,
  // enables right-to-left layout

  setGallerySize: true,
  // sets the height of gallery
  // disable if gallery already has height set with CSS

  watchCSS: false,
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }
  // IE8 and Android 2.3 do not support watching :after
  // set watch: 'fallbackOn' to enable for these browsers

  wrapAround: false
  // at end of cells, wraps-around to first for infinite scrolling

});
```

---

By [Metafizzy](http://metafizzy.co)




### Client js file

```js
Template.home.rendered = function () {
	$('#carousel').slick({
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
};
```