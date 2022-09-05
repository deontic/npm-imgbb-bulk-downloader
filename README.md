# imgBB bulk downloader npm package (unofficial)
<img src = "https://user-images.githubusercontent.com/68165727/131923011-65df82b2-6520-4228-81dc-6079d4fb6cde.jpg" alt = "img bb" width=280 >

 _download imageBB images in bulk with ease_
 
 **(Note: you can get the easier to use web-based version at https://deontic.github.io/imgBB-web-bulk-downloader/ or the executable file written in Python here: https://github.com/deontic/imgBB-bulk-exe/releases/)**

## Info


You can use this tool to mass download images images from [imgBB](https://imgbb.com/) from their urls,
I made this because there's no other utility available for this purpose.


## Install

in case you don't have node installed you can set it up very easily: https://nodejs.org/en/download/

make sure you initialize an npm repository before continuing via
```
npm init
```

download the package via npm by running 
```
npm i @un-index/imgbb-bulk
```
in the directory you will require it

then install the dependencies via 
```
npm install
```

## Usage

first copy all your links from your imgBB upload page



<img src = "https://user-images.githubusercontent.com/68165727/132007868-764525db-b23d-4099-ba05-48a27b580c3a.gif" width = 620/>

paste the links in a string and pass them to imgbb-bulk

<img src = "https://user-images.githubusercontent.com/68165727/132009542-37dcceea-92e3-485d-8b44-64d276ff8a93.gif" width = 620/>
<i>note: the GIF shows me using similar urls (which happens when the same file is uploaded multiple times) imgBB-bulk does NOT work properly when there are duplicate urls, so remove those before running it</i>
                                                                                                            
                                                                                                            
                                                                                                            
```js
// require imgbb-bulk
const imgbulk = require("@un-index/imgbb-bulk")

// save images to a folder named imgout, stored in the current directory
// NOTE: if there's any extra spaces at the end of any URL or there is a newline at the end,
// you WILL get an Invalid URL error so get rid of those

imgbulk(`https://ibb.co/Vgvx2Bm
https://ibb.co/Xsb8Lyr
https://ibb.co/VBrnTSQ
https://ibb.co/9Vgr2hP`)

/* example output:
  writing to ./imgout/img1.gif
  done
  writing to ./imgout/img2.gif
  done
  writing to ./imgout/img3.webp
  done
  writing to ./imgout/img4.gif
  done
*/
```
### (optional) specify a separator

```js
// by default the newline character is used as the separator
imgbulk(`https://ibb.co/Vgvx2Bm,https://ibb.co/Xsb8Lyr,https://ibb.co/VBrnTSQ,https://ibb.co/9Vgr2hP`, ",")
```

## Contact
electroblast878@gmail.com
