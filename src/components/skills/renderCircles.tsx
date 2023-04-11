import { Center, Flex, Grid, RingProgress, Text } from '@mantine/core';
import { useStyles } from './useStyles';

export const useRenderCircles = () => {
    const items = [{
        label: 'HTML',
        percentage: 90,
    }, {
        label: 'CSS/SCSS',
        percentage: 90,
    }, {
        label: 'TypeScript',
        percentage: 70,
    }, {
        label: 'React',
        percentage: 80,
    }];

    const {
        theme,
    } = useStyles();

    return (
        items.map((item) => (
            <Grid.Col xs={6} sm={3}>
                <Center>
                    <RingProgress
                      roundCaps
                      thickness={8}
                      label={
                            <Flex direction="column">
                                <Text size="xs" align="center">
                                    {item.label}
                                </Text>
                                <Text size="xs" align="center">
                                    {item.percentage}%
                                </Text>
                            </Flex>

                        }
                      sections={[{
                            value: item.percentage,
                            color: theme.primaryColor,
                        }]}
                    />
                </Center>
            </Grid.Col>
        ))
    );
};
