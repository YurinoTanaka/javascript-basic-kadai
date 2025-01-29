const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  
  // 文章を書き換える
  text.textContent = 'ボタンをクリックしました';
});