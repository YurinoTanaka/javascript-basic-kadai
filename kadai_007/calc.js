// 変数numに1以上の正の数を代入する
let num = 15;

// 変数numの数によって表示内容を変える
if(num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}else if(num % 5 === 0){
  console.log('5の倍数です');
}else if(num % 3 === 0){
  console.log('3の倍数です');
}else{
  console.log(num);
}
