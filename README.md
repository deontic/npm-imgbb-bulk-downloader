# imgBB bulk downloader (unofficial)
<img src = "https://user-images.githubusercontent.com/68165727/131923011-65df82b2-6520-4228-81dc-6079d4fb6cde.jpg" alt = "img bb" width=280 >

Download imageBB images in bulk with ease


## Install

download the npm package from npm via running 
`npm i @un-index/imgbb-bulk` 
in the directory you will require it

then install the dependencies via 
`npm install` 

## Usage
```js
const imgbulk = require("@un-index/imgbb-bulk")

imgbulk(`https://ibb.co/Vgvx2Bm
https://ibb.co/Xsb8Lyr
https://ibb.co/VBrnTSQ
https://ibb.co/9Vgr2hP`)

/* output: 
  writing to ./imgout/Vgvx2Bm.gif
  done
  writing to ./imgout/Xsb8Lyr.gif
  done
  writing to ./imgout/9Vgr2hP.webp
  done
  writing to ./imgout/VBrnTSQ.gif
  done
*/
```
### (optional) specify a separator

```js
imgbulk(`https://ibb.co/Vgvx2Bm,https://ibb.co/Xsb8Lyr,https://ibb.co/VBrnTSQ,https://ibb.co/9Vgr2hP`, ",")
// by default the newline character is used as the separator
```

# complaints or contact
electroblast878@gmail.com
