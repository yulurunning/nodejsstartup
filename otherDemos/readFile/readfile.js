var fs = require("fs");

// 阻塞式
var data = fs.readFileSync("input.txt");
console.log(data.toString());

// 非阻塞式
fs.readFile('input.txt', function(err, data){
  if (err) {
    return consoloe.log(err);
  }
  console.log(data.toString());
});

console.log("Progress Finish");
