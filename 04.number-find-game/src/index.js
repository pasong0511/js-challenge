const numForm = document.querySelector("#num-form");
const numInput = document.querySelector("#num-form input");

const clientForm = document.querySelector("#clinet-form");
const clinetInput = document.querySelector("#clinet-form input");

const drawMatch = document.querySelector("#js-choiceResult h4");
const drawResult = document.querySelector("#js-result h5");

//게임 시작을 위한 값 입력
function gameNumberInput(event) {
  event.preventDefault(); //새로고침 방지
  const gameInputVaule = numInput.value; //입력 값 추출
  let findGameValue = 0;

  console.log("게임 입력 값:", gameInputVaule);
  findGameValue = Math.floor(Math.random() * gameInputVaule); //입력값에 범위 내에서 랜덤 값 뽑기
  console.log("랜덤 값:", findGameValue); //정답 값

  return findGameValue; //랜덤 값 리턴
}

//클라이언트 입력 값
function clientNumberInput(event) {
  event.preventDefault(); //새로고침 방지
  console.log("클라이언트 입력 값:", clinetInput.value);
  const clientValue = parseInt(clinetInput.value);

  return clientValue; //클라이언트 입력값 리턴
}

//main play 버튼 누르면 게임 시작 시작
function playWithmachine(event) {
  event.preventDefault();
  numberCompared(event);
}

//머신 숫자와 클라이언트 숫자 비교
function numberCompared(event) {
  event.preventDefault(); //새로고침 방지
  const mNum = gameNumberInput(event); //머신 랜덤 숫자 저장
  const cNum = clientNumberInput(event); //클라이언트 입력 숫자 저장

  drawMachineAndClientNum(mNum, cNum); //머신랜덤숫자, 클라이언트 입력 HTML로 그려줌

  //머신 랜덤 숫자와, 클라이언트 입력 비교
  if (mNum === cNum) {
    drawResult.innerText = "You Win!";
  } else {
    drawResult.innerText = "You Lost!";
  }
}

//입력 값 그려주는 함수
function drawMachineAndClientNum(mNum, cNum) {
  drawMatch.innerText = `You chose: ${cNum}, the machine chose: ${mNum}.`;
}

numForm.addEventListener("submit", gameNumberInput);
clientForm.addEventListener("submit", playWithmachine); //play 버튼 클릭시 playWithmachine() 시작
