import { Box, Button, Grid, List } from '@material-ui/core';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Ball from './Ball';

/**
 * 로또 공 목록을 반환한다.
 */
function getLottoNumbers(): Array<number> {
    // 1~ 45가 들어있는 배열 생성
    const randomNumbers = Array(45).fill(0).map((randomNumber, idx) => idx + 1);
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

function Lotto() {
    /**
     * 로도 번호 메모 목록
     * 
     * @TODO 리액트 훅 메모 사용법 확인 필요
     */
    const lottoNumberMemos = useMemo(() => getLottoNumbers(), []);
    /**
     * 로또 번호
     */
    const [lottoNumbers, setLottoNumbers] = useState(lottoNumberMemos);
    /**
     * 로또 공
     */
    const [lottoBalls, setLottoBalls] = useState([] as any);
    /**
     * 보너스
     */
    const [bonus, setBonus] = useState(null);
    /**
     * 다시 하기
     */
    const [isRedo, setIsRedo] = useState(false);
    /**
     * 시간 목록
     */
    const timeouts = useRef([] as any);

    /**
     * 초기화
     */
    const onResetNumber = useCallback(() => {  // 초기화
        setLottoNumbers(getLottoNumbers());
        setLottoBalls([]);
        setBonus(null);
        setIsRedo(false);
        timeouts.current = [];
    }, [lottoNumbers]);

    /**
     * 리액트 hook
     */
    useEffect(() => {
        // 1초 간격으로 출력
        for (let i = 0; i < lottoNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setLottoBalls((prevBalls: any) => [...prevBalls, lottoNumbers[i]]);
            }, (i + 1) * 1000);
        }

        // 보너스공
        timeouts.current[6] = setTimeout(() => {
            setBonus(lottoNumbers[1] as any);
            setIsRedo(true);
        }, 7000);

        // 해제
        return () => {
            timeouts.current.forEach((v: any) => {
                clearTimeout(v);
            });
        }
    }, [timeouts.current]);



    return (
        <>
            <Grid
                container
                direction='column'
            >
                <Grid item>
                    <Box component='h1'>
                        당첨 결과
                    </Box>
                </Grid>

                <Grid item>
                    <Box component='h3'>
                        결과창
                    </Box>
                    <List>
                        {lottoBalls.map((winBall: any, idx: any) => <Ball key={idx} lottoNumber={winBall} />)}
                    </List>
                </Grid>

                <Grid item>
                    <Box component='h3'>
                        보너스
                    </Box>
                    {bonus && <Ball lottoNumber={bonus} />}
                    {isRedo && <Button onClick={onResetNumber}>한 번 더!</Button>}
                </Grid>
            </Grid>
        </>
    );
}

export default Lotto;
