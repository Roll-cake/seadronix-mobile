//변수 값 지정
//let num =10;
//const num= 20; ->const는 바뀌면 안되는 변수

//function average(a,b){
// const avg=(a+b)/2;
//  console.log(avg);
//}
//average(5555, 7777);

///버튼
const btnAll = document.querySelector(".btn--all");
const header = document.querySelector(".header");
// const animals = ["강아지", "망아지", "송아지", "병아지", "고양이", "호랑이"];
//header에 on이 붙으면 목차 자르륵
const depth01 = document.querySelectorAll(".gnb > .list > li > a");
const depth02 = document.querySelectorAll("gnb > .list > li .depth02 ");
const depth01Total = depth01.length;
const depth02Total = depth02.length;
for (let i = 0; i < 6; i++) {
  //console.log(animals[i]);
  depth01[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < depth02Total; j++) {
      depth02[j].classList.remove("on");
    }
    depth02[i].classList.add("on");
  });
}

btnAll.addEventListener("click", function () {
  //console.log("btnAll 클릭"); //끝에 ; 까먹지 말기

  header.classList.toggle("on");
  //-----------------------------------------add
  //header.classList.add("on");
  //--------------------------------------------contains
  // if(header.classList.contains("on")){
  //  header.classList.remove("on");
  // }else{
  //   header.classList.add("on");
  // }
});
new Swiper(".visual__list", {
  effect: "cube", //큐브형태로 페이지(이미지)가 넘어간다.
  pagination: {
    el: ".visual__list .pagination",
    type: "bullets",
  },
});
