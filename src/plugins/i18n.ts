import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from '@/locales'

Vue.use(VueI18n)

const i18nOption: VueI18n.I18nOptions = {
    locale: 'zh', // 设置地区
    fallbackLocale: 'zh',
    silentFallbackWarn: process.env.NODE_ENV === 'production', // 回退本地化
    messages, // 设置地区信息
}

export default new VueI18n(i18nOption)