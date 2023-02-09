import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Reasons from '../../components/Reasons/Reasons';
import WhatCanIDoHere from '../../components/WhatCanIDoHere/WhatCanIDoHere';
import HowDoesItWork from '../../components/HowDoesItWork/HowDoesItWork';
import JoinCommunity from '../../components/JoinCommunity/JoinCommunity';
import TheyTalkAboutUs from '../../components/TheyTalkAboutUs/TheyTalkAboutUs';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroHeader />
      <Reasons />
      <HowDoesItWork />
      <WhatCanIDoHere />
      <JoinCommunity />
      <TheyTalkAboutUs />
    </>
  );
}
