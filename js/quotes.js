const quotes = [
  {
    quote:"결국 두려움과 분열로 뒤로 물러서지 말고 희망을 갖고 나아가야 한다.",
    author:"제시 잭슨",
  },
  {
    quote:"당신의 사랑을 선택하세요, 당신의 선택을 사랑하세요.",
    author:"토마스 S. 몬슨",
  },
  {
    quote:"노화는 하나의 과정이 아니다. 우리가 나이를 먹게 하는 많은 다른 일들이 일어나고 있습니다. 나는 가지고 있다.",
    author:"레이 커즈웨일",
  },
  {
    quote:"나는 아침형 인간이고 아침에 나에게 첫 번째 일은 체육관에 가는 것이다.",
    author:"시드하르트 슈클라",
  },
  {
    quote:"나에게 크리스마스는 아키와 소금물고기, 그리고 옥수수빵 머핀으로 하루를 시작하는 것을 의미해.",
    author:"앤슬리 해리엇",
  },
  {
    quote:"내가 인도 음악을 연주할 위험은 없다고 생각한다. 하지만 조지 해리슨의 '어둠을 조심해'라는 노래를 한 곡 했는데, 그런 느낌이었어요. 그건 착각이었어요. 저는 엄지손가락으로 피아노를 치고 있었고, 짐 고든은 타블라스를 연주하고 있었습니다. 그는 놀라운 선수이다. 그곳은 내가 가본 곳 중 가장 인도에 가까웠다.",
    author:"리언 러셀",
  },
  {
    quote:"부정적인 마음으로 긍정적인 삶을 살 수는 없고 긍정적인 결과를 얻으면 긍정적인 수입을 얻게 되고 더 긍정적인 마음을 갖게 되고 그냥 웃어넘길 뿐이다.",
    author:"마일리 사이러스",
  },
  {
    quote:"나는 사람들이 나에게 부족하다고 말할 때 훌륭한 선수들에 대한 존경심이 부족하다는 것을 이해할 수 없다.",
    author:"펩 과르디올라",
  },
  {
    quote:"인내는 미덕이라고 그들은 말한다. 그러나 비상시에 정부는 신속한 결정을 내리고 미국 국민을 보호하기 위해 과감하고 단호한 조치를 취할 수 있어야 한다.",
    author:"재러드 폴리스",
  },
  {
    quote:"우리는 형제로서 함께 살거나 바보로서 함께 죽는 것을 배워야 한다.",
    author:"마틴 루터 킹 주니어",
  },
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;