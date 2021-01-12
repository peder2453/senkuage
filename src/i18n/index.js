import { createI18n } from "vue3-i18n";
import en from './en.js'
import zh from './zh.js'

const messages = { en, zh };

const i18n = createI18n({
    locale: "en",
    messages,
});

export default i18n;