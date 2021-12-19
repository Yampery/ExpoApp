/**
 * 导航
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
import {ColorSchemeName, Pressable} from 'react-native';

import Colors from '../config/Colors';
import useColorScheme from '../hooks/useColorScheme';
import StateScreen from '../screens/StateScreen';
import TaskScreen from '../screens/TaskScreen';
import MineScreen from '../screens/MineScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import {strings} from "../i18n";
import NotFoundScreen from "../screens/404";
import ModalScreen from "../screens/ModalScreen";
import {FontAwesome} from "@expo/vector-icons";
import LinkingConfiguration from './LinkingConfiguration';

/**
 * 导航tab
 * @param name 名称
 */
const getTabBarIcon =
	(name: string) => ({color, size}: { color: string; size: number }) =>
			<MaterialCommunityIcons name={name} color={color} size={size}/>;

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator/>
		</NavigationContainer>
	);
}


/**
 * 全局导航
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
			<Stack.Screen name="Modal" component={ModalScreen} options={{title: strings('mine.setting')}}/>
		</Stack.Navigator>
	);
}

/**
 * 底部导航
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="State"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}>
			<BottomTab.Screen
				name="State"
				component={StateScreen}
				options={({navigation}: RootTabScreenProps<'State'>) => ({
					title: strings('navigation.state'),
					tabBarIcon: getTabBarIcon('file-document')
				})}
			/>
			<BottomTab.Screen
				name="Task"
				component={TaskScreen}
				options={{
					title: strings('navigation.task'),
					tabBarIcon: getTabBarIcon('message-reply'),
					tabBarBadge: 2,
				}}
			/>
			<BottomTab.Screen
				name="Mine"
				component={MineScreen}
				options={({ navigation }: RootTabScreenProps<'Mine'>) => ({
					title: strings('navigation.mine'),
					tabBarIcon: getTabBarIcon('message-reply'),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Modal')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="info-circle"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
		</BottomTab.Navigator>
	);
}
