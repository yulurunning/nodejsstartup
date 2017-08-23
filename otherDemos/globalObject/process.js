process.on('exit', function(code){
  // 以下代码永远不会执行
  setTimeout(function(){
    console.log('永远不会执行');
  }, 5);

  console.log('退出码为:', code);
});
