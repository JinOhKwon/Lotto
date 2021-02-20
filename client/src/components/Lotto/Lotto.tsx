import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { apiService } from '../../core/service/ApiService';
import { getLottoNumbers } from '../../shared/util/Util';
import Ball from './Ball';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        display: 'flex',
        flexDirection: 'column'
    }
});

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
     * 리액트 hook
     */
    useEffect(() => {
        // 1초 간격으로 출력
        for (let i = 0; i < lottoNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setLottoBalls((prevBalls: any) => [
                    ...prevBalls,
                    lottoNumbers[i],
                ]);
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
        };
    }, [timeouts.current]);

    /**
     * 초기화
     */
    const onResetNumber = useCallback(() => {
        // 초기화
        setLottoNumbers(getLottoNumbers());
        setLottoBalls([]);
        setBonus(null);
        setIsRedo(false);
        timeouts.current = [];
    }, [lottoNumbers]);

    const receive = () => {
        apiService()
            .get('lotto/last')
            .then((res: any) => {
                console.log(res);
            });
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Title>몇일자 당첨 번호</Title>
                    <Button
                        onPress={receive}>
                        당첨번호 가져오기
                    </Button>
                </View>

                <View style={styles.body}>
                    <Title>결과 창</Title>
                    {lottoBalls.map((winBall: any, idx: any) => (
                        <Ball key={idx} lottoNumber={winBall} />
                    ))}

                    <Title>보너스</Title>
                    {bonus && <Ball lottoNumber={bonus} />}
                    {isRedo && (
                        <Button
                            onPress={onResetNumber}>
                            한 번 더!
                        </Button>
                    )}
                </View>
            </View>
        </>
    );
}

export default Lotto;

