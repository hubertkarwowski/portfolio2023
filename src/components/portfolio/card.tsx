import { ActionIcon, Card, Group, Space, Text, Title } from '@mantine/core';
import { IconWorldWww } from '@tabler/icons-react';
import { useStyles } from './useStyles';

interface Props {
    title: string;
    link: string;
    details: string;
}

export const PortfolioCard = ({
                                  title,
                                  link,
                                  details,
                              }: Props) => {
    const { classes } = useStyles();

    return (
        <Card className={classes.card} radius={0}>
            <Group position="apart">
                <Title order={3}>
                    {title}
                </Title>
                <ActionIcon
                  size="lg"
                  component="a"
                  href={link}
                  target="_blank"
                  title={title}
                >
                    <IconWorldWww />
                </ActionIcon>
            </Group>
            <Space h="md" />
            <Text fz="sm" c="dimmed">
                {details}
            </Text>
        </Card>
    );
};
