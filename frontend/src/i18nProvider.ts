// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Books":{"name":"Books","fields":{"Title":"Title","Author":"Author","Genre":"Genre","BookCover":"Book Cover","id":"id"}},"Authors":{"name":"Authors","fields":{"Name":"Name","Books":"Books","id":"id"}},"Genres":{"name":"Genres","fields":{"Category":"Category","id":"id"}}}};
const frResources = { resources: {"Books":{"name":"Livres","fields":{"Title":"Titre","Author":"Auteur","Genre":"Le genre","BookCover":"Couverture du livre","id":"id"}},"Authors":{"name":"Auteurs","fields":{"Name":"Nom","Books":"Livres","id":"id"}},"Genres":{"name":"Genres","fields":{"Category":"Categorie","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    