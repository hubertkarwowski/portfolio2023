import { createStyles, keyframes, rem } from '@mantine/core';

const scroll = keyframes({
    '0%': { backgroundPosition: '-500px -30px' },
    '100%': { backgroundPosition: '500px 1050px' },
});
const upDown = keyframes({
    '0%': {
        transform: 'translateY(-0)',
    },
    '50%': {
        transform: 'translateY(-25px)',
    },
    '100%': {
        transform: 'translateY(0)',
    },
});

export const useStyles = createStyles((theme) => ({

    hero: {
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%237a64ed\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        height: '600px',
        width: '100%',
        padding: '0',
        margin: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        animation: `${scroll} 60s linear infinite`,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },

    heroImageContainer: {
        position: 'relative',
        width: '100%',
    },

    heroImage: {
        animation: `${upDown} 5s  infinite`,
        animationTimingFunction: 'ease-in-out',

    },

    container: {
        display: 'flex',
        height: '100%',
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 0,
        marginLeft: rem(32),
        zIndex: 1,
        padding: 0,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            textAlign: 'center',
            margin: 'auto',
            width: '100%',
            alignItems: 'center',
        },
    },

    cvButton: {
        textAlign: 'center',
    },

    title: {
        fontSize: rem(60),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },

    subtitle: {
        width: '45ch',
        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
        [theme.fn.smallerThan('md')]: {
            width: '25ch',

        },
    },
}));
