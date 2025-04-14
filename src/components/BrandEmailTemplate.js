import React from 'react';

const BrandEmailTemplate = ({ template, data }) => {
  const replaceVariables = (content) => {
    let processedContent = content;
    Object.entries(data).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      processedContent = processedContent.replace(regex, value);
    });
    return processedContent;
  };

  const processedHtml = replaceVariables(template.htmlContent);
  const processedCss = replaceVariables(template.cssStyles);

  return (
    <div className="email-template">
      <style>{processedCss}</style>
      <div 
        dangerouslySetInnerHTML={{ __html: processedHtml }}
        className="email-content"
      />
    </div>
  );
};

export default BrandEmailTemplate; 