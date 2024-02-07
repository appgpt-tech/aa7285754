// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"contacts":{"name":"Contacts","fields":{"name":"Name","email":"Email","mobileNumber":"Mobile Number","linkedinUrl":"Linkedin Url","id":"id"}},"websites":{"name":"Websites","fields":{"websiteTitle":"Website Title","url":"Url","category":"Category","rating":"Rating","id":"id"}},"credentials":{"name":"Credentials","fields":{"url":"Url","username":"Username","password":"Password","id":"id"}},"movies":{"name":"Movies","fields":{"movieTitle":"Movie Title","genre":"Genre","watchedStatus":"Watched Status","id":"id"}}}};
const frResources = { resources: {"contacts":{"name":"Contacts (fr)","fields":{"name":"Name (fr)","email":"Email (fr)","mobileNumber":"Mobile Number (fr)","linkedinUrl":"Linkedin Url (fr)","id":"id"}},"websites":{"name":"Websites (fr)","fields":{"websiteTitle":"Website Title (fr)","url":"Url (fr)","category":"Category (fr)","rating":"Rating (fr)","id":"id"}},"credentials":{"name":"Credentials (fr)","fields":{"url":"Url (fr)","username":"Username (fr)","password":"Password (fr)","id":"id"}},"movies":{"name":"Movies (fr)","fields":{"movieTitle":"Movie Title (fr)","genre":"Genre (fr)","watchedStatus":"Watched Status (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    