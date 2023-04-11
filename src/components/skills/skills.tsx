import { Container, Grid, Space, Text, Title } from '@mantine/core';
import { useRenderCircles } from './renderCircles';
import { useStyles } from './useStyles';

export const Skills = () => {
    const {
        classes,
    } = useStyles();

    const renderCircles = useRenderCircles();

    return (
        <div className={classes.container} id="skills">
            <Container my="xl">
                <Grid justify="center" align="center">
                    <Grid.Col xs={12} md={6}>
                        <Title mb="xl">Skills</Title>
                        <Text>
                            Since the very beginning, I’ve done remote work for agencies, consulted
                            for startups, and collaborated with talented people to create web
                            products for both business and consumer use.
                            <Space h="md" />
                            I create successful responsive websites that are fast, easy to use, and
                            built with best practices. The main area of my expertise is front-end
                            development with React.
                            <Space h="md" />
                            Visit my LinkedIn profile for more details or contact me.
                        </Text>
                    </Grid.Col>
                    <Grid.Col xs={12} md={6}>
                        <Grid justify="center" align="center">
                            {renderCircles}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
};
