// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"contacts":{"name":"Contacts","fields":{"name":"Name","mobile":"Mobile","email":"Email","id":"id"}},"tasks":{"name":"Tasks","fields":{"taskTitle":"Task Title","description":"Description","scheduledStartDate":"Scheduled Start Date","scheduledEndDate":"Scheduled End Date","actualEndDate":"Actual End Date","id":"id"}},"credentials":{"name":"Credentials","fields":{"url":"Url","username":"Username","password":"Password","id":"id"}}}};
const frResources = { resources: {"contacts":{"name":"Contacts (fr)","fields":{"name":"Name (fr)","mobile":"Mobile (fr)","email":"Email (fr)","id":"id"}},"tasks":{"name":"Tasks (fr)","fields":{"taskTitle":"Task Title (fr)","description":"Description (fr)","scheduledStartDate":"Scheduled Start Date (fr)","scheduledEndDate":"Scheduled End Date (fr)","actualEndDate":"Actual End Date (fr)","id":"id"}},"credentials":{"name":"Credentials (fr)","fields":{"url":"Url (fr)","username":"Username (fr)","password":"Password (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    