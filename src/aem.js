import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import componentClasses from './componentList';


const componentClassFromName = (componentName) => {
    return componentClasses[componentName];
};

const createReactElement = (componentName, properties) => {
    console.log('The Component Name and Properties are ', componentName, properties, componentClasses);
    const element = React.createElement(componentClassFromName(componentName)
    , properties, null);
    return (
    <Provider store={window.store}>
        {element}
    </Provider>);
};

const CreateReactComponent = (componentName, id, data) => {
    ReactDOM.render(createReactElement(componentName, data), 
        document.getElementById(id));
};

/**
* This method will create the Component with IntlProvider with the with locale @locale.
*
* @param childComponent - The Child Component to Render within the IntlProvider.
    (String, the name of the Child Component.)
* @param locale - the locale to render for the Intl.
* @param data - the data for the child component.
* @param rootNode - the Id of the Root Node.
*/
const CreateIntlProvider = (childComponent, locale, data, rootNode) => {
    const child = createReactElement(childComponent, data);
    console.log('The Child is ', child);
    ReactDOM.render(<IntlProvider locale={locale}>
                      {child}
                   </IntlProvider>, document.getElementById(rootNode)
                   );
};

window.createReactComponent = CreateReactComponent;
window.createIntlProvider = CreateIntlProvider;

