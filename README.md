# svg-morphing

svg-morphing package helps resolve the path length issue when animating svg from one shape to another by adjusting the paths command lines. 

___

## Usage

To morph svg from #path0 to #path1, define desired paths as usual in svg \<defs> element.

### Attributes
Add 2 attributes to both paths:
  * svg-adapt: tells svg-morphing that this path must be transformed.
  * svg-adapt-[name]: tells svg-morphing which group this path belongs to. There must be 2 paths with identical svg-adapt-[name] attribute to proceed. No more, no less.

### Class
Set the class of the svg \<animate> element\(s) to the svg-adapt-[name] you picked.

### Limitations
Both svg paths must be drawn around SVG viewBox center point as illustrated below (paths drawn in blue).

This one will work.

![svg-correct](./doc/svg-correct.svg)

This one will not (maybe someday).

![svg-incorrect](./doc/svg-incorrect.svg)

```html
<svg viewBox="0 0 100 100">
  <defs>
    <path id="path0" svg-adapt svg-adapt-a d="M 10,30 A 20,20 0 0 1 50 30 A 20,20 0 0 1 90 30 Q 90,60 50 90 Q 10 60 10 30 z" />
    <path id="path1" svg-adapt svg-adapt-a d="M 80 50 A 30,30 0 0 1 20 50 A 30,30 0 0 1 80 50" />
  </defs>
  <path>
    <animate class="svg-adapt-a"
      attributeName="d"
      dur="1.5s"
      fill="freeze" />
  </path>
</svg>
```


## Process
The current repo is set to preprocess the .html file at build time.
Paths sent to the client therefore already fit the conditions to smoothly morph and do not need to be processed by the browser.


## Forwards
* svg-morphing shall be adapted to morph polygon points.

## Demo
Available on https://codepen.io/pen/?editors=1100
