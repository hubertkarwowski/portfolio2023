import { Container, Text } from '@mantine/core';
import { useStyles } from './styles';
import { useFooterContent } from './useFooterContent';

export const FooterLinks = () => {
    const { classes } = useStyles();
    const content = useFooterContent();
    const dateNow = new Date().getFullYear();

    return (
        <footer className={classes.footer} id="contact-me">
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Text>HK</Text>
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Passionate Front-End Developer
                    </Text>
                </div>

            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    {`© ${dateNow} Hubert Karwowski. All rights reserved.`}
                </Text>
                {content}
            </Container>
        </footer>
    );
};
