// btnというHTML要素を取得して、定数に代入
const eventBtn = document.getElementById('btn');

// textというHTML要素を取得して、定数に代入
const btnCheck = document.getElementById('text');

// ボタンクリックしたらevent処理を実行
eventBtn.addEventListener('click', () => {
    // ボタンをクリックしましたに変更
    btnCheck.textContent = 'ボタンをクリックしました';
});