import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import French from '../../lang/fr.json';
import English from '../../lang/en.json';

export const Context = React.createContext();

let local = navigator.language;

let lang;
if (local === 'en') {
    lang = English;
} else if (local === 'fr') {
    lang = French;
} else {
    lang = French;
    local = 'fr'
}

/* Composant pour changer la locale et donc la traduction */
const LangueWrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    const  selectLanguage = () => {
        const newLocale = (locale === 'fr')?'en':'fr';
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else if (newLocale === 'fr') {
            setMessages(French);
        } else {
            setMessages(French);
        }
    }

    return (
        <Context.Provider value={{ locale, selectLanguage }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}

export default LangueWrapper;