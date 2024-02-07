// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"friends":{"name":"Friends","fields":{"name":"Name","birthday":"Birthday","starSign":"Star Sign","gender":"Gender","email":"Email","id":"id"}},"websites":{"name":"Websites","fields":{"siteName":"Site Name","url":"URL","rating":"Rating","id":"id"}},"credentials":{"name":"Credentials","fields":{"url":"URL","username":"Username","password":"Password","id":"id"}}}};
const frResources = { resources: {"friends":{"name":"Amis","fields":{"name":"Nom","birthday":"Anniversaire","starSign":"Signe Astrologique","gender":"Genre","email":"Courriel","id":"id"}},"websites":{"name":"Sites Web","fields":{"siteName":"Nom du Site","url":"URL","rating":"Évaluation","id":"id"}},"credentials":{"name":"Identifiants","fields":{"url":"URL","username":"Nom d'utilisateur","password":"Mot de passe","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    