import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm RainBoi
        </SectionTitle>
        <SectionText>
        I am a Graphic Designer, Web Designer, Professional Discord Bot Devoloper and an Epic Gamer.
        </SectionText>
        <Button href="#about" onClick={props.handleClick}>Contact</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;