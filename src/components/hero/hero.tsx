import { Button, Text, Title } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { useStyles } from './useStyles';

export const Hero = () => {
    const {
        classes,
    } = useStyles();

    return (
        <div className={classes.hero}>
            <Title order={1}>Hubert Karwowski</Title>
            <Text size="xl">Front-End Developer</Text>
            <Button variant="outline" mt={10} className={classes.cvButton}>Download CV <IconDownload /></Button>
        </div>
    );
};
