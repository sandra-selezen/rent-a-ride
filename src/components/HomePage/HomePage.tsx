import { whyUsSection } from "../../constants/why-us-section"
import { aboutSection } from "../../constants/about-section"
import { AdvantagesItem, AdvantagesItemText, AdvantagesItemTitle, AdvantagesList, CallToActionBtn, CommonSection, CallToActionWrapper, Hero, HeroContent, HeroTitle, LogoTitle, SectionTitle, AboutList, AboutItem, AboutItemText, AboutSection } from "./HomePage.styled"

export const HomePage = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle><LogoTitle>Rent a Ride</LogoTitle> is here to redefine your driving experience!</HeroTitle>
        </HeroContent>
      </Hero>
      <CommonSection>
        <SectionTitle>Welcome to <LogoTitle>Rent a Ride</LogoTitle>, the coolest car rental service in Ukraine! <br />
        Forget the boring car agencies you used to deal with. <br />
        We’re here to make your journey ridiculously fun!</SectionTitle>
      </CommonSection>
      <CommonSection>
        <SectionTitle>Ride in Style</SectionTitle>
        <AboutList>
          {aboutSection.map((item) => (
            <AboutItem key={item.id}>
              <AboutItemText>{item.text}</AboutItemText>
            </AboutItem>
          ))}
        </AboutList>
      </CommonSection>
      <AboutSection>
        <HeroContent>
          <HeroTitle>Get ready for the ride!</HeroTitle>
        </HeroContent>
      </AboutSection>
      <CommonSection>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <AdvantagesList>
          {whyUsSection.map((item) => (
            <AdvantagesItem key={item.id}>
              <AdvantagesItemTitle>{item.title}</AdvantagesItemTitle>
              <AdvantagesItemText>{item.text}</AdvantagesItemText>
            </AdvantagesItem>
          ))}
        </AdvantagesList>
      </CommonSection>
      <CommonSection>
        <SectionTitle>Ready to hit the road? Start your adventure today!</SectionTitle>
        <CallToActionWrapper>
          <CallToActionBtn to="/catalog">Browse cars</CallToActionBtn>
        </CallToActionWrapper>
      </CommonSection>
    </>
  )
}
