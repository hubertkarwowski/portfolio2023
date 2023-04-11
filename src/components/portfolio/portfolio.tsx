import { Center, Container, Grid, Title } from '@mantine/core';
import { PortfolioCard } from './card';
import { items } from './items';

export const Portfolio = () => (
    <Container mt={100} id="portfolio">
        <Center>
            <Title>
                Portfolio
            </Title>
        </Center>
        <Grid mt={50} justify="center" align="center" gutter={50}>
            {items.map((project) => (
                <Grid.Col xs={12} sm={6} lg={4}>
                    <PortfolioCard
                      title={project.title}
                      details={project.details}
                      image={project.image}
                      link={project.link}
                      badges={project.badges}
                    />
                </Grid.Col>
            ))}
        </Grid>
    </Container>
);
