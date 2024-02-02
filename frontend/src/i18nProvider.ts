// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Books":{"name":"Books","fields":{"title":"Book Title","authorName":"Author Name","genre":"Genre","bookCover":"Book Cover","id":"id"}},"Authors":{"name":"Authors","fields":{"authorName":"Author Name","books":"Books","id":"id"}},"Genres":{"name":"Genres","fields":{"category":"Category","id":"id"}}}};
const frResources = { resources: {"Books":{"name":"Livres","fields":{"title":"title","authorName":"authorName","genre":"genre","bookCover":"bookCover","id":"id"}},"Authors":{"name":"Auteurs","fields":{"authorName":"authorName","books":"books","id":"id"}},"Genres":{"name":"Genres","fields":{"category":"category","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    