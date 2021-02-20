/**
 * 로또 공 목록을 반환한다.
 */
export function getLottoNumbers(): Array<number> {
    // 1~ 45가 들어있는 배열 생성
    const randomNumbers = new Array(45).fill(0).map((randomNumber, idx) => idx);

    const shuffle = [];
    // 1~45를 랜덤하게 섞기
    while (randomNumbers.length > 0) {
        shuffle.push(randomNumbers.splice(Math.floor(Math.random() * randomNumbers.length), 1)[0]);
    }

    // shuffle의 마지막 수를 보너스 숫자로
    const bonusNumber = shuffle[shuffle.length - 1];
    // shuffle의 0~6번째 수를 오름차순 정렬하여 당첨 숫자로
    const winNumbers = shuffle.splice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}