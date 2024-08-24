import { useTranslation } from 'react-i18next';
import { I18N_NAMESPACES } from '../../../helpers/constants';
import { StyledRow, StyledTitle } from '../../../styles/styles';
import { Col, Row } from 'react-bootstrap';
import myImage from '../../../assets/images/cartoon_me.png';
import Image from 'next/image';

const Hero = () => {
  const { t } = useTranslation([I18N_NAMESPACES.COMMON], { useSuspense: false });
  return (
    <StyledRow xs={1} sm={2} className="d-flex align-items-center">
      <Col>
        <StyledTitle>{t('common:frontendDeveloper')}</StyledTitle>
        <h3>{t('common:basedInKorea')}</h3>
      </Col>
      <Col className="d-flex justify-content-center mt-5">
        <Image
          className="rounded"
          src={myImage}
          alt="Drawing of Chris Nohall"
          width={213}
          height={403}
          priority
        />
      </Col>
      <canvas data-engine="three.js r150" width="4526" height="1282" />
    </StyledRow>
  );
};

export default Hero;
