import { Anchor, Button, Container, Image, Text, Title } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { useStyles } from './useStyles';
import Cv from '../../assets/HubertKarwowskiCV.pdf';
import heroImage from '../../assets/hero.png';

export const Hero = () => {
    const {
        classes,
    } = useStyles();

    return (
        <div className={classes.hero}>
            <Container className={classes.container}>
                <Title order={1} className={classes.title}>Hubert Karwowski</Title>
                <Text size="xl" mt="md" className={classes.subtitle}>Passionate Front-End Developer who specialize in
                    building websites using React Framework.
                </Text>
                <Anchor download="CV" href={Cv}>
                    <Button mt="md" className={classes.cvButton} rightIcon={<IconDownload />}>Download
                        CV
                    </Button>
                </Anchor>
            </Container>
            <Container className={classes.heroImageContainer}>
                <Image src={heroImage} alt="Coder Image" className={classes.heroImage} />
            </Container>
        </div>
    );
};
