const today = new Date();

const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();

console.log('今日の日付は"' + year + '年' + month + '月' + day + '日' + '"です');