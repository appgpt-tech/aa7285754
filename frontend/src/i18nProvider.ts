// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Books":{"name":"Books","fields":{"bookTitle":"bookTitle","releaseDate":"releaseDate","numberOfBooksSold":"numberOfBooksSold","author":"author","numberOfEditions":"numberOfEditions","id":"id"}},"Authors":{"name":"Authors","fields":{"authorName":"authorName","dateOfBirth":"dateOfBirth","gender":"gender","countryOfBirth":"countryOfBirth","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    