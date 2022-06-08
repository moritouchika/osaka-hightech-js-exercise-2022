//初期化処理(すべてのピースをランダムに配置する)
for (let n = 1; n <= 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + n);
  
    // MEMO: 1 ～ 16 でランダムに数値を決めると、番号が被る場合がある
    piece.style.order = parseInt(Math.random() * 16) + 1;
  }

  //ピースがクリックしたときに実行する処理(関数)
function pieceClikHandler(event){
    console.log('ピースがクリックされました');
    console.log(event.target);
}

for (let p = 1; p<= 16; p = p + 1) {
const piece01 = document.querySelector('.pos-'+p);

piece01.addEventListener('click',pieceClikHandler);
}