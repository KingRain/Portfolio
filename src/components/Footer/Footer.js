import React from 'react';
import { AiFillCreditCard, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="https://discord.com/app">Discord: RainBoi#1553</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Discord Server</LinkTitle>
          <LinkItem href="https://discord.gg/RQ2a9w83fM">
            The Cloud 🚀
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Eat your Veggies My Guy</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/KingRain">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://coindrop.to/rainboi">
            <AiFillCreditCard size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/rainboi.png">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
