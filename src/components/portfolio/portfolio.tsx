import { Container, Grid } from '@mantine/core';
import { PortfolioCard } from './card';
import { items } from './items';

export const Portfolio = () => (
    <Container>
        <Grid justify="center" align="center" gutter={50}>
            {items.map((item) => (
                <Grid.Col xs={12} sm={6} lg={4}>
                    <PortfolioCard title={item.title} link={item.link} details={item.details} />
                </Grid.Col>
            ))}
        </Grid>
    </Container>
);
