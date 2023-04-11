import { BadgeCardProps } from 'components/portfolio/card';
import theSpace from '../../assets/thespace.png';
import danceapp24 from '../../assets/danceapp24.png';
import myClinicy from '../../assets/myclinicy.png';

export const items: BadgeCardProps[] = [
    {
        title: 'Clinicy',
        details: 'Clinicy is high-complex web application that makes booking and finalizing appointment easier than ever thanks to features such as EMR.',
        link: 'https://myclinicy.com/',
        image: myClinicy,
        badges: [
            { label: 'React' },
            { label: 'Typescript' },
            { label: 'Bootstrap/Reactstrap' },
            { label: 'Redux' },
            { label: 'Redux Saga' },
        ],
    },
    {
        title: 'THE SPACE',
        details: 'The Space is an official website built for a client. Built with React, React Spring and more libraries',
        link: 'https://the-space.com/',
        image: theSpace,
        badges: [
            { label: 'React' },
            { label: 'React-Spring' },
            { label: 'Twin.Macro' },
            { label: 'React Motion' },
            { label: 'Styled-Components' },
            { label: 'Tailwind' },
        ],
    }, {
        title: 'PWA Google Play DanceApp24',
        details: 'DanceApp24 is an official web application that focuses on dancing activity.',
        link: 'https://danceapp24.com//',
        image: danceapp24,
        badges: [
            { label: 'React' },
            { label: 'Typescript' },
            { label: 'Tailwind' },
            { label: 'GraphQl' },
        ],
    }];
