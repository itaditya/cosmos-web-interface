const extensions = ['.cpp', '.java', '.py', '.c', '.go', '.js'];
const path = require('path');
const fs = require('fs');
let tree = {};
const walkSync = function (dir, tree) {
  const files = fs.readdirSync(dir);
  const folder = path.basename(dir)
  tree[folder] = {};
  files.forEach(function (file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      walkSync(path.join(dir, file), tree[folder]);
    } else {
      if (extensions.includes(path.extname(file))) {
        tree[folder][file] = 1;
      }
    }
  });
};
walkSync('cosmos/code/', tree)
fs.writeFile('codes.json', JSON.stringify(tree), 'utf8', function(){
  console.log('successfull');
});
