const fs = require('fs');
const fetch = require('node-fetch');

// NOTE visit node-fetch npm for 3.0.0 and 2.6.1 , 3.0.0 makes it an ESM-only module
// so change stuff in package.json accordingly and here as well

/*function*/ module.exports = function (/*main*/ urls, sep = '\n') {
  let dir = './imgout';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  urls = urls.split(sep);

  for (let url of urls) {
    fetch(url).then((res) => {
      res.text().then(async (doc) => {
        let root = doc.indexOf('i.ibb.co');
        let jpg = doc.indexOf('.jpg');

        let name = doc.match(/<title>([^<]*)<\/title>/);
        // let name = doc.match(/data-text="image-title">(.*)</)

        let imgUrl;
        let imgType = 'jpg';

        imgUrl = 'https://' + doc.substring(root, jpg + 4);
        name = name ? (typeof name[1] === 'string' ? name[1] : imgUrl) : imgUrl;
        console.log(name, '<<<');

        // these are the formats all formats get converted to in the end

        let types = ['jpg', 'png', 'gif', 'webp'];

        for (let type of types) {
          imgUrl =
            'https://' +
            doc
              .substring(
                doc.lastIndexOf('i.ibb.co'),
                doc.lastIndexOf('.' + type) + type.length + 1
              )
              .replace(/%2F/g, '/');

          // 129 characters is the current limit to url sizes
          // if the matched url is greater than 129, then it is likely we got an incorrect match

          if (imgUrl.length > 129) {
            continue;
          }
          imgType = type;
          break;
        }
        // the url is still more than 129 characters long, so tell the user we can't download this one

        if (imgUrl.length > 129) {
          console.log(`cannot download img at url: ${url}`);
          return;
        }

        let res = await fetch(imgUrl);

        const buffer = await res.buffer();
        console.log(`writing to ./imgout/${name}.${imgType}`);
        fs.writeFile(`./imgout/${name}.${imgType}`, buffer, () => {
          console.log('done');
        });
      });
    });
  }
};

// module.exports = main
