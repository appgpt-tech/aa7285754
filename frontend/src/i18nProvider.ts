// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Projects":{"name":"Projects","fields":{"projectName":"Project Name","description":"Description","id":"id"}},"Tasks":{"name":"Tasks","fields":{"taskName":"Task Name","id":"id"}},"Assignees":{"name":"Assignees","fields":{"assigneeName":"Assignee Name","role":"Role","email":"Email","id":"id"}}}};
const frResources = { resources: {"Projects":{"name":"Projets","fields":{"projectName":"Nom du Projet","description":"Description","id":"id"}},"Tasks":{"name":"Tâches","fields":{"taskName":"Nom de la Tâche","id":"id"}},"Assignees":{"name":"Attributaires","fields":{"assigneeName":"Nom de l'Attributaire","role":"Role","email":"Email","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    