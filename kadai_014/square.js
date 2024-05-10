// 計算する値(1～10)をランダムで出力
const num = Math.floor(Math.random() * 11) + 1;

// 計算する値
console.log(num);

// 二乗の計算
const square = (num) => {
    return num*num;
}

// 二乗の結果を出力
console.log(square(num));