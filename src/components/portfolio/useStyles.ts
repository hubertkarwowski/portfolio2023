import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({

    card: {
        borderTop: `${theme.primaryColor} 3px solid`,
        width: '260px',
        padding: `${theme.spacing.md}`,
    },
}));
