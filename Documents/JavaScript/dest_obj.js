let book = {title:'Javaポケットリファレンス',publish:'技術評論社',price:2680};

let{price,title,memo = 'なし'}＝book;

console.log(title);
console.log(price);
console.log(memo);


let x = 1;
let y = 2;
[x,y] = [y,x];

console.log(x,y) //結果:2,1

if(x === 1){console.log('hello');}
x ===1 && console.log('hello');
