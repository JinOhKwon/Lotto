import React, {FC, PropsWithChildren} from 'react';
import {Appbar} from 'react-native-paper';
import {Platform} from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

interface TopbarProps {
    children?: any;
}

const TopBar: FC<PropsWithChildren<TopbarProps>> = ({children}) => (
    <Appbar.Header>
        <Appbar.Content title='로또' subtitle={'로또 확인'} />
        <Appbar.Action icon='magnify' onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

export default TopBar;
