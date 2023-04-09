import { Container, Flex, Grid, Progress, Space, Text, Title } from '@mantine/core';
import { useStyles } from './useStyles';
import { TaskCard } from './card';

export const Skills = () => {
    const {
        classes,
    } = useStyles();
    return (
        <div className={classes.container}>
            <Container my="xl">
                <Grid>
                    <Grid.Col xs={12} sm={6}>
                        <Title mb="mb">Skills</Title>
                        <Text>
                            Since the very beginning, I’ve done remote work for agencies, consulted
                            for startups, and collaborated with talented people to create web
                            products for both business and consumer use.
                            <Space h="md" />
                            I create successful responsive websites that are fast, easy to use, and
                            built with best practices. The main area of my expertise is front-end
                            development with React.
                            <Space h="md" />
                            Visit my LinkedIn profile for more details or just contact me.
                        </Text>
                    </Grid.Col>
                    <Grid.Col xs={12} sm={6}>
                        <Flex direction="column" gap="md">
                            <div>
                                <Text>HTML</Text>
                                <Progress value={80} size="sm" radius={0} />
                            </div>
                            <div>
                                <Text>CSS/SCSS</Text>
                                <Progress value={70} size="sm" radius={0} />
                            </div>
                            <div>
                                <Text>Javascript</Text>
                                <Progress value={70} size="sm" radius={0} />
                            </div>
                            <div>
                                <Text>React</Text>
                                <Progress value={80} size="sm" radius={0} />
                            </div>
                        </Flex>
                    </Grid.Col>
                </Grid>
                <Grid grow mt="md">
                    <Grid.Col span={4}>
                        <TaskCard
                          details="lorem ipsum"
                          dateFrom="2022"
                          dateTo="2022"
                          firm="FinalApp"
                          jobTitle="Junior Front-End Engineer"
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <TaskCard
                          details="lorem ipsum"
                          dateFrom="2022"
                          dateTo="2023"
                          firm="Codern"
                          jobTitle="Junior Front-End Engineer"
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <TaskCard
                          details="lorem ipsum"
                          dateFrom="2023"
                          dateTo="Now"
                          firm="Codern"
                          jobTitle="Front-End Engineer"
                          current
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
};
