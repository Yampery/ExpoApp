import React from 'react';
import { Text, View } from '../../components/Themed';
import {ListItem, Icon, ListItemProps} from 'react-native-elements';
import {strings} from "../../i18n";

const list = [
	{
		title: strings('mine.appointment'),
		icon: 'av-timer'
	},
	{
		title: strings('mine.setting'),
		icon: 'flight-takeoff'
	},
];

export default function Settings() {
	return (
		<View>
			{
				list.map((item, i) => (
					<ListItem key={i} bottomDivider>
							<ListItem.Title><Text>{item.title}</Text></ListItem.Title>
						<ListItem.Chevron tvParallaxProperties />
					</ListItem>
				))
			}
		</View>
	);
};
