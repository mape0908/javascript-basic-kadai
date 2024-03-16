//btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// DOM操作でHTMLを書き換える
let changeText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
  changeText.innerHTML="<h2>ボタンをクリックしました</h2>";
})
