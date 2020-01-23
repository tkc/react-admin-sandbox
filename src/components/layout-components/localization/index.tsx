import React from "src/components/layout-components/localization/node_modules/react";
import { LocaleProvider } from "src/components/layout-components/localization/node_modules/antd";
import { IntlProvider, addLocaleData } from "src/components/layout-components/localization/node_modules/react-intl";
import { connect } from "src/components/layout-components/localization/node_modules/react-redux";

// import english from "../../locales/en-US";
// import french from "locales/fr-FR";
// import russian from "locales/ru-RU";
// import chinese from "locales/zh-CN";
// addLocaleData(english.localeData);
// addLocaleData(french.localeData);
// addLocaleData(russian.localeData);
// addLocaleData(chinese.localeData);

const locales = {
  // "en-US": english,
  // "fr-FR": french,
  // "ru-RU": russian,
  // "zh-CN": chinese,
};

@connect(({ settings }) => ({ settings }))
class Localization extends React.Component {
  render() {
    const {
      children,
      settings: { locale },
    } = this.props;
    const currentLocale = locales[locale];
    return (
      <LocaleProvider locale={currentLocale.antdData}>
        <IntlProvider locale={currentLocale.locale} messages={currentLocale.messages}>
          {children}
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default Localization;
