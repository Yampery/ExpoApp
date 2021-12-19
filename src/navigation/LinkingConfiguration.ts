import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {RootStackParamList} from '../types';

const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [Linking.makeUrl('/')],
	config: {
		screens: {
			Root: {
				screens: {
					TabOne: {
						screens: {
							TabOneScreen: 'one',
						},
					},
					TabTwo: {
						screens: {
							TabTwoScreen: '2',
						},
					},
					TabThree: {
						screens: {
							TabTwoScreen: '3',
						},
					},
				},
			},
			Modal: 'modal',
			NotFound: '*',
		},
	},
};

export default linking;
