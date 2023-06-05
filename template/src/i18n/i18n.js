import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import { zh_CN, en_US } from './lang'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(VueI18n)
const messages = {
	en_US: Object.assign(en_US, enLocale),
	zh_CN: Object.assign(zh_CN, zhLocale),
}
const i18n = new VueI18n({
	locale: localStorage.getItem('locale') || 'zh_CN',
	messages,
})
locale.i18n((key, value) => i18n.t(key, value))
export default i18n
