import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import BottomNavi from './src/components/Layout/BottomNavi';
import TopBar from './src/components/Layout/TopBar';
import Lotto from './src/components/Lotto/Lotto';
import theme from './src/components/theme/Theme';

export default function App() {
	return (
		<>
			<PaperProvider theme={theme}>
				<TopBar />
				<View style={styles.container}>
					<Lotto></Lotto>
				</View>
				<BottomNavi />
			</PaperProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
