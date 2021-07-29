const fs = require('fs');
const path = require('path');

console.log(process.argv);

const [,, folder, separator, ...indexes] = process.argv;

fs.readdirSync(folder).forEach(filename => {
  const oldPath = path.join(folder, filename);
  // const nePath = path.join(folder, )

  const fileNameWithoutExtension = filename.split('.').slice(0, -1).join('.');
  const extension = path.extname(filename);

  const newName = fileNameWithoutExtension
    .split(separator)
    .filter((item, index) => indexes.includes(index.toString()))
    .join(separator);
  const newPath = path.join(folder, newName + extension);

  console.log(filename);

  // fs.renameSync(oldPath, newPath);
  // console.log(indexes, oldPath, newPath);
})