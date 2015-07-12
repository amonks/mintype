# miNType

miNType is Kevin Zweerink's [ntype](//github.com/kevinzweerink/ntype) (try it out at [ntype.blue](//ntype.blue)), but with most of the features removed.

It makes it real easy to put some cool 4d type on your website.

<!--more-->

## major limitations

*   rn you can only have one instance of ntype
*   you can't customize any of the things yet
    *   like the background color
    *   ~~or the rotation~~
*   it doesn't update when u resize ur window (but does when u refresh)

## how to

see [index.html](https://github.com/amonks/ntype/blob/gh-pages/index.html) for an example.

here's the important bit:

    var ntypediv = document.getElementById("sayhello")
    var ntype = new NType(ntypediv);
    var options = {
      // this bit says which axes to rotate
      matrix: ["xz", "xy"],
    };
    ntype.begin("hi", options);

## dev

run `npm install` to install the uglifier

then run `grunt` to concatenate the files in `js/` into one file `lib/mintype.js` and then minify it to `lib/mintype.min.js`
