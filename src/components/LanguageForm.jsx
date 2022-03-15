import React from 'react';
import ptFlag from '../assets/images/pt.png';
import enFlag from '../assets/images/en.png';
import esFlag from '../assets/images/es.png';
import Languages from '../locale/languages.json';

const LanguageForm = (props) => {

  const handleClick = (language) => {
    props.setLanguage(language)
  };

  const getSelectedFlag = (language) => {
    return (
      language === props.language ? { opacity: 1 } : { opacity: 0.5 }
    );
  };

  return (
    <div className="language-form">
      <img
        src={ptFlag}
        alt="Português"
        onClick={() => handleClick(Languages.pt)}
        style={getSelectedFlag(Languages.pt)}
      />
      <img
        src={enFlag}
        alt="English"
        onClick={() => handleClick(Languages.en)}
        style={getSelectedFlag(Languages.en)}
      />
      <img
        src={esFlag}
        alt="Español"
        onClick={() => handleClick(Languages.es)}
        style={getSelectedFlag(Languages.es)}
      />
    </div>
  );
};

export default LanguageForm;