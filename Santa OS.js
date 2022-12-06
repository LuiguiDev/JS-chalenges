const files = ['photo', 'postcard', 'photo', 'photo', 'video']
const duplicates = files.filter((element, index) => index !== files.indexOf(element))

function fixFiles(files){
  let filesNum = []
  files.forEach(element => {
    element = element + '(1)'
    filesNum.push(element)
  });
  return filesNum
}

const dup = fixFiles(duplicates)
console.log(dup)
