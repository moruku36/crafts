var data =['apple','orange','banana'];
//配列オブジェクトにhogeメソッドを追加
Array.prototype.hoge = function(){}
for(var key in data){
  console.log(data[key]);

} //result 
