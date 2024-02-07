// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"books":{"name":"Books","fields":{"title":"Title","isbn":"Isbn","author":"Author","id":"id"}},"authors":{"name":"Authors","fields":{"authorName":"Author Name","gender":"Gender","dateOfBirth":"Date Of Birth","numberOfBooks":"Number Of Books","id":"id"}}}};
const frResources = { resources: {"books":{"name":"Books (fr)","fields":{"title":"Title (fr)","isbn":"Isbn (fr)","author":"Author (fr)","id":"id"}},"authors":{"name":"Authors (fr)","fields":{"authorName":"Author Name (fr)","gender":"Gender (fr)","dateOfBirth":"Date Of Birth (fr)","numberOfBooks":"Number Of Books (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    