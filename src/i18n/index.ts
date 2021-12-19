import I18n from 'ex-react-native-i18n'
import en from './en'
import zh from './zh'

// 默认中文
I18n.defaultLocale = 'zh';

I18n.fallbacks = true;

I18n.locale = 'zh';

I18n.translations = {
	en,
	zh
};

/**
 * 封装不用语言内容获取
 * @param name
 * @param params
 */
export function strings(name: string, params = {}) {
	return I18n.t(name, params);
}

/**
 * 设置用户语言
 * @param lan 语言
 */
export function setLanguage(lan: string) {
	I18n.locale = lan;
}
