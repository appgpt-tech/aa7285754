// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Projects":{"name":"Projects","fields":{"projectName":"Project Name","description":"Description","id":"id"}},"Tasks":{"name":"Tasks","fields":{"taskName":"Task Name","description":"Description","id":"id"}},"Assignees":{"name":"Assignees","fields":{"assigneeName":"Assignee Name","role":"Role","id":"id"}}}};
const frResources = { resources: {"Projects":{"name":"Projets","fields":{"projectName":"Nom du projet","description":"La description","id":"id"}},"Tasks":{"name":"Tâches","fields":{"taskName":"Nom de la tâche","description":"La description","id":"id"}},"Assignees":{"name":"Affectés","fields":{"assigneeName":"Nom de l'affecté","role":"Rôle","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    