import React, {FC, memo} from 'react';

interface BallProps {
    lottoNumber: number | null
}

// 함수 컴포넌트
const Ball: FC<BallProps> = memo(({lottoNumber}) =>  {
    let background;

    if(lottoNumber != null) {
        if(lottoNumber <= 10) {
            background = 'red';
        } else if (lottoNumber <= 20) {
            background = 'orange';
        } else if (lottoNumber <= 30) {
            background = 'yellow';
        } else if (lottoNumber <= 40) {
            background = 'blue';
        } else {
            background = 'green';
        }
    }

    return (
        <div className="ball" style={{ background }}>{lottoNumber}</div>
    );
});

export default Ball;