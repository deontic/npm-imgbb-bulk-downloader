

const fs = require('fs');
const fetch = require("node-fetch");


function main(urls, sep="\n") {


    let dir = "./imgout"
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }




    urls = urls.split(sep)



    for (let url of urls) {
        let urlkey = url.match(/[^/]+$/)

        fetch(url).then((res) => {
            res.text().then(async (doc) => {

                let root = doc.indexOf("i.ibb.co")
                let jpg = doc.indexOf(".jpg")
                let imgUrl;
                let imgType = "jpg";

                imgUrl = "https://" + doc.substring(root, jpg + 4)

                // these are the formats all formats get converted to in the end

                let types = ["jpg", "png", "gif", "webp"]

                for (type of types) {
                    imgUrl = "https://" + doc.substring(doc.lastIndexOf("i.ibb.co"), doc.lastIndexOf("." + type) + type.length + 1).replace(/%2F/g, "/")

                    // 129 characters is the current limit to url sizes
                    // if the matched url is greater than 129, then it is likely we got an incorrect match

                    if (imgUrl.length > 129) {
                        continue
                    }
                    imgType = type
                    break
                }
                // the url is still more than 129 characters long, so tell the user we can't download this one

                if (imgUrl.length > 129) {
                    console.log(`cannot download img at url: ${url}`)
                    return;
                }


                let res = await fetch(imgUrl)

                const buffer = await res.buffer();
                console.log(`writing to ./imgout/${urlkey}.${imgType}`)
                fs.writeFile(`./imgout/${urlkey}.${imgType}`, buffer, () => {
                    console.log("done")
                });
            })
        }).then(console.log)
    }
}


module.exports = main

