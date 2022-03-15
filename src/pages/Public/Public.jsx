import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageForm from '../../components/LanguageForm';
import Languages from '../../locale/languages.json';

const Public = () => {
  const [language, setLanguage] = useState(Languages.pt)

  return (
    <div className="background">
      <div className="container">
        <LanguageForm language={language} setLanguage={setLanguage} />
        <h1>{language['project-title']}</h1>
        <p>{language['project-info']}</p>
        <h2>{language['public-title']}</h2>
        <p>{language['public-info']}</p>
        <Link to="/private">
          <button>
            Acessar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Public;