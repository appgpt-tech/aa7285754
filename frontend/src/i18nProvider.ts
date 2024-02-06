// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"books":{"name":"Books","fields":{"bookTitle":"Book Title","releaseDate":"Release Date","numberOfBooksSold":"Number Of Books Sold","author":"Author","numberOfEditions":"Number Of Editions","id":"id"}},"authors":{"name":"Authors","fields":{"authorName":"Author Name","dateOfBirth":"Date Of Birth","sex":"Sex","countryOfBirth":"Country Of Birth","id":"id"}}}};
const frResources = { resources: {"books":{"name":"Books (fr)","fields":{"bookTitle":"Book Title (fr)","releaseDate":"Release Date (fr)","numberOfBooksSold":"Number Of Books Sold (fr)","author":"Author (fr)","numberOfEditions":"Number Of Editions (fr)","id":"id"}},"authors":{"name":"Authors (fr)","fields":{"authorName":"Author Name (fr)","dateOfBirth":"Date Of Birth (fr)","sex":"Sex (fr)","countryOfBirth":"Country Of Birth (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    