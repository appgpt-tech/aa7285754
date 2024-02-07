// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"friends":{"name":"Friends","fields":{"name":"Name","birthday":"Birthday","starSign":"Star Sign","gender":"Gender","email":"Email","id":"id"}},"websites":{"name":"Websites","fields":{"siteName":"Site Name","url":"Url","rating":"Rating","id":"id"}},"credentials":{"name":"Credentials","fields":{"url":"Url","username":"Username","password":"Password","id":"id"}}}};
const frResources = { resources: {"friends":{"name":"Friends (fr)","fields":{"name":"Name (fr)","birthday":"Birthday (fr)","starSign":"Star Sign (fr)","gender":"Gender (fr)","email":"Email (fr)","id":"id"}},"websites":{"name":"Websites (fr)","fields":{"siteName":"Site Name (fr)","url":"Url (fr)","rating":"Rating (fr)","id":"id"}},"credentials":{"name":"Credentials (fr)","fields":{"url":"Url (fr)","username":"Username (fr)","password":"Password (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    