import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({

    text: {
        textAlign: 'center',
    },

    subtext: {
        textAlign: 'center',
        margin: '0 auto',
        width: '59ch',
        [theme.fn.smallerThan('sm')]: {
            margin: '0 auto',
            width: '100%',
        },
    },
}));
