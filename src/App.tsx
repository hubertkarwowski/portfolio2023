import { AppShell, Header } from '@mantine/core';
import { Skills } from './components/skills/skills';
import { links } from './components/header/links';
import { ThemeProvider } from './ThemeProvider';
import { Hero } from './components/hero/hero';
import { HeaderContent } from './components/header/header';
import { FooterLinks } from './components/footer/footer';
import { Portfolio } from './components/portfolio/portfolio';

export default function App() {
    return (
        <ThemeProvider>
            <AppShell
              padding={0}
              header={<Header height={60} px="md"><HeaderContent links={links.links} /></Header>}
            >
                <Hero />
                <Skills />
                <Portfolio />
                <FooterLinks />
            </AppShell>
        </ThemeProvider>
    );
}
