import React from "react";
import { Button } from "../button/button.styled";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./info-section.styled";

const InfoSection = ({
  colorScheme,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  dark,
  primary,
}) => {
  return (
    <InfoContainer colorScheme={colorScheme} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading colorScheme={colorScheme}>{headLine}</Heading>
              <Subtitle colorScheme={colorScheme}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  dark={dark ? 1 : 0}
                  primary={primary ? 1 : 0}
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img.default} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
