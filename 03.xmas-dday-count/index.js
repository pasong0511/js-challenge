const clockTitle = document.querySelector(".js-clock");

function getXmasDistance() {
  //현재 일시
  const now = new Date();
  //크리스마스 일시
  const xmas = getNextXmas();

  return xmas - now; //크리스마스 지정일 - 현재시간
}

//내년도 날짜 반환
function getNextXmas() {
  const now = new Date();
  const year = now.getFullYear();
  const xmas = new Date(`${year}.12.24 00:00:00+0900`);
  if (xmas - now < 0) {
    return new Date(`${year + 1}.12.24 00:00:00+0900`);
  }
  return xmas;
}

//크리스마스 지정일 - 현재시간 차이 시간을 통해서 크리스마스 d-day 계산
function distanceToString(distance) {
  const distanceDay = Math.floor(distance / (1000 * 60 * 60 * 24));
  const distanceHours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const distanceMinutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const distanceSecondes = Math.floor((distance % (1000 * 60)) / 1000);

  return `${distanceDay}일 ${distanceHours}시 ${distanceMinutes}분 ${distanceSecondes}초`;
}

function updateClock() {
  clockTitle.innerHTML = distanceToString(getXmasDistance());
}

updateClock();
setInterval(updateClock, 1000);
