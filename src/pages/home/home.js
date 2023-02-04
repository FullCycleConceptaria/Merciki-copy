import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Reasons from '../../components/Reasons/Reasons';
import HowDoesItWork from '../../components/HowDoesItWork/HowDoesItWork';
import JoinCommunity from '../../components/JoinCommunity/JoinCommunity';
import TheyTalkAboutUs from '../../components/TheyTalkAboutUs/TheyTalkAboutUs';

export default function Home() {
  return (
    <>
      <HeroHeader />
      <Reasons />
      <HowDoesItWork />
      <JoinCommunity />
      <TheyTalkAboutUs />
    </>
  );
}
