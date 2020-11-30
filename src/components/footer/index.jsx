import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./footer.styled";

const Footer = () => {
  const footerLinks = {
    1: {
      title: "About Us",
      links: [
        "About us",
        "How it works",
        "Testimonials",
        "Careers",
        "Investors",
        "Terms of Service",
      ],
    },
    2: {
      title: "Videos",
      links: [
        "Submit Video",
        "Influencer",
        "Testimonials",
        "Careers",
        "Investors",
        "Agency",
      ],
    },
    3: {
      title: "Contact Us",
      links: [
        "Contact",
        "Support",
        "FAQs",
        "Careers",
        "Investors",
        "Chat With Us",
      ],
    },
    4: {
      title: "Social Media",
      links: [
        "Instagram",
        "Facebook",
        "Linkedin",
        "Twitter",
        "Youtube",
        "Twitch",
      ],
    },
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{footerLinks[1].title}</FooterLinkTitle>
              {footerLinks[1].links.map((link, index) => (
                <FooterLink key={index} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{footerLinks[2].title}</FooterLinkTitle>
              {footerLinks[2].links.map((link, index) => (
                <FooterLink key={index} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{footerLinks[3].title}</FooterLinkTitle>
              {footerLinks[3].links.map((link, index) => (
                <FooterLink key={index} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{footerLinks[4].title}</FooterLinkTitle>
              {footerLinks[4].links.map((link, index) => (
                <FooterLink key={index} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={scroll.scrollToTop}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
