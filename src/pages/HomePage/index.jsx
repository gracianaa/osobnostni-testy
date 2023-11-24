import { AboutPersonality } from '../../components/AboutPersonality';
import { ChooseTest } from '../../components/ChooseTest';
import { Menu } from '../../components/Menu';
import { PageIntro } from '../../components/PageIntro';

export const HomePage = () => {
  return (
    <main>
      <Menu />
      <PageIntro />
      <ChooseTest />
      <AboutPersonality />
    </main>
  );
};
