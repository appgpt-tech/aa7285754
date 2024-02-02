// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Books":{"name":"Books","fields":{"title":"Title","authorName":"Author Name","genre":"Genre","bookCover":"Book Cover","id":"id"}},"Authors":{"name":"Authors","fields":{"authorName":"Author Name","birthCountry":"Birth Country","id":"id"}},"Genres":{"name":"Genres","fields":{"genre":"Genre","category":"Category","id":"id"}}}};
const frResources = { resources: {"Books":{"name":"Livres","fields":{"title":"Titre","authorName":"Nom de l'auteur","genre":"Genre","bookCover":"Couverture du livre","id":"id"}},"Authors":{"name":"Auteurs","fields":{"authorName":"Nom de l'auteur","birthCountry":"Pays de naissance","id":"id"}},"Genres":{"name":"Genres","fields":{"genre":"Genre","category":"Categorie","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    