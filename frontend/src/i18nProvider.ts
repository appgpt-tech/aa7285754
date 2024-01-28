// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Loans":{"name":"loans","fields":{"accountNumber":"accountNumber","loanAmount":"loanAmount","productType":"productType","outstandingBalance":"outstandingBalance","id":"id"}},"RealEstate":{"name":"realEstate","fields":{"propertyType":"propertyType","value":"value","location":"location","floodRisk":"floodRisk","earthquakeRisk":"earthquakeRisk","fireRisk":"fireRisk","geolocation":"geolocation","id":"id"}},"RiskFactors":{"name":"riskFactors","fields":{"riskFactor":"riskFactor","riskWeight":"riskWeight","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    