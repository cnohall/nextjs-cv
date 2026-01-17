import React from 'react';
import { useTranslation } from 'next-i18next';
import { StyledSubheading, StyledTitle, StyledParagraph } from '../../../styles/styles';
import { colors, I18N_NAMESPACES } from '../../../helpers/constants';

const Introduction: React.FC = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON]);

  return (
    <div id="about">
      <StyledSubheading>{t('common:about')}</StyledSubheading>
      <StyledTitle>{t('common:intro_title')}</StyledTitle>
      <StyledParagraph color={colors.silver}>
        {t('common:intro_text')}
      </StyledParagraph>
    </div>
  );
};

export default Introduction;
