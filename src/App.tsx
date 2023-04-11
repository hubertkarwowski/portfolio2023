import { useEffect } from 'react';
import { AppShell, Header } from '@mantine/core';
import { links } from './components/header/links';
import { Hero } from './components/hero/hero';
import { HeaderContent } from './components/header/header';
import { ThemeProvider } from './ThemeProvider';
import { FooterLinks } from './components/footer/footer';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';
import '../index.css';

interface Props {
    hideLoader: () => void
}

export const App = ({ hideLoader }: Props) => {
    useEffect(hideLoader, []);
    return (
        <ThemeProvider>
            <div className="container">
                <AppShell
                  padding={0}
                  m={0}
                  header={<Header height={60} px="md"><HeaderContent links={links.links} /></Header>}
                >
                    <Hero />
                    <Skills />
                    <About />
                    <Portfolio />
                    <FooterLinks />
                </AppShell>
            </div>
        </ThemeProvider>
    );
};
