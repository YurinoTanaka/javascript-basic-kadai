const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // 2秒後に文章を書き換える
  setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
  }, 2000);
  
});