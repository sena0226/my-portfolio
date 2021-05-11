const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");

const display1 = document.getElementById("display-1");
const display2 = document.getElementById("display-2");
const display3 = document.getElementById("display-3");

const baito = document.getElementById("baito");
const circle = document.getElementById("circle");
const racket = document.getElementById("racket");

button1.onclick = function () {
  display1.textContent = "残念！肌黒いけど居酒屋じゃありません！";
};
button2.onclick = function () {
  display1.textContent = "正解！受験終わった三月に初めて、三年以上続けてます！";
  baito.textContent = "アルバイト：書店";
};
button3.onclick = function () {
  display1.textContent =
    "残念！テニスコーチはやってみたいって思って結局できてないです泣";
};
button4.onclick = function () {
  display2.textContent = "正解！テニスが大好きなんです！";
  circle.textContent = "サークル：テニスサークル";
};
button5.onclick = function () {
  display2.textContent = "正解！小学校からテニスやってます！";
  circle.textContent = "サークル：テニスサークル";
};
button6.onclick = function () {
  display2.textContent = "正解！どなたかテニスしませんか？";
  circle.textContent = "サークル：テニスサークル";
};
button7.onclick = function () {
  display3.textContent =
    "残念！フェデラーは好きだけどPRO STAFFは扱うの難しくて苦手です泣";
};
button8.onclick = function () {
  display3.textContent = "正解！Radicalはめちゃくちゃ大好きで3本持ってます！";
  racket.textContent = "テニスラケット：Radical";
};
button9.onclick = function () {
  display3.textContent = "残念！友達の借りたら使いやすくて好きではある！";
};
