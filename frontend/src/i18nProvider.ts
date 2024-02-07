// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"artists":{"name":"Artists","fields":{"artistName":"Artist Name","band":"Band","dateOfBirth":"Date Of Birth","id":"id"}},"albums":{"name":"Albums","fields":{"albumName":"Album Name","artistName":"Artist Name","copiesSold":"Copies Sold","launchDate":"Launch Date","id":"id"}},"tracks":{"name":"Tracks","fields":{"trackName":"Track Name","album":"Album","lyrics":"Lyrics","id":"id"}}}};
const frResources = { resources: {"artists":{"name":"Artists (fr)","fields":{"artistName":"Artist Name (fr)","band":"Band (fr)","dateOfBirth":"Date Of Birth (fr)","id":"id"}},"albums":{"name":"Albums (fr)","fields":{"albumName":"Album Name (fr)","artistName":"Artist Name (fr)","copiesSold":"Copies Sold (fr)","launchDate":"Launch Date (fr)","id":"id"}},"tracks":{"name":"Tracks (fr)","fields":{"trackName":"Track Name (fr)","album":"Album (fr)","lyrics":"Lyrics (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    