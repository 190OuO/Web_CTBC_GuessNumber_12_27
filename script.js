// 1.更新提示文字
// 搜尋指定元素("搜尋的元素");
// document.querySelector("名稱")
const tip =document.querySelector(".tip");
document.querySelector(".tip").textContent ="請輸入1~100 內的數字";
// 2.設定答案
let answar =Math.random() *100+1;
answar =Math.floor(answar);
console.log("答案:",answar);
let min =1, max =100;

// 3.取得確認按鈕是否點擊以及輸入的數字
document.querySelector("#ok").addEventListener('click',function (){
    console.log("點擊確認按鈕");
    let number = document.querySelector("#number").value;
    console.log(number);
    if(number== answar){
        tip.textContent ="恭喜猜對囉!";
    }

    else if (number>answar){
        tip.textContent =`請輸入1~${number}內的數字`;
        max = number;
    }
    else {
        tip.textContent =`請輸入${number} ~ 100內的數字`;
        min=number;
    }
});

