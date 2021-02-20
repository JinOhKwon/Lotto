import * as React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

interface LoadingProps {
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = (props) => {
    const {isLoading} = props;

    return <ActivityIndicator animating={isLoading} color={Colors.red800} />;
};

export default Loading;
