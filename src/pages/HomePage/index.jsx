import { AboutPersonality } from '../../components/AboutPersonality';
import { ChooseTest } from '../../components/ChooseTest';
import { HowItWorks } from '../../components/HowItWorks';
import { PageIntro } from '../../components/PageIntro';

export const HomePage = () => {
  return (
    <main>
      <PageIntro />
      <ChooseTest />
      <AboutPersonality />
      <HowItWorks />
    </main>
  );
};
