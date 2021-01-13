import { createI18n } from "vue3-i18n";
import en from './en.js'
import ja from './ja.js'
import ko from './ko.js'

const messages = { en, ja, ko };

const i18n = createI18n({
    locale: "en",
    messages,
});

export default i18n;