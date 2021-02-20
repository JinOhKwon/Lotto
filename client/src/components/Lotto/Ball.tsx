import React, {FC, memo} from 'react';
import { StyleSheet, Text } from 'react-native';

/**
 * 볼 전달 데이터
 */
interface BallProps {
    lottoNumber: number | null;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

// 함수 컴포넌트
const Ball: FC<BallProps> = memo(({lottoNumber}) => {
    let background = '';

    if (lottoNumber != null) {
        if (lottoNumber <= 10) {
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
        <Text>
            {lottoNumber}
        </Text>
    );
});

export default Ball;
