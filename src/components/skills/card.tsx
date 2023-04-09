import { Badge, Card, Flex, Group, Progress, Text } from '@mantine/core';
import { IconCode } from '@tabler/icons-react';

interface Props {
    jobTitle: string;
    firm: string;
    details: string;
    dateFrom: string;
    dateTo: string;
    current?: boolean
}

export const TaskCard = ({
                             jobTitle,
                             firm,
                             details,
                             dateFrom,
                             dateTo,
                             current,
                         }: Props) => (
    <Card withBorder padding="lg" radius="md" style={{ minWidth: '260px' }}>
        <Group position="apart">
            <IconCode type="mark" size="2rem" />
            <Badge>{firm}</Badge>
        </Group>

        <Text fz="lg" fw={500} mt="md">
            {jobTitle}
        </Text>
        <Text fz="sm" c="dimmed" mt={5}>
            {details}
        </Text>

        <Flex justify="space-between">
            <Text
              span
              c="dimmed"
              fz="sm"
              mt="md"
              fw={500}
              sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
            >
                {dateFrom}
            </Text>

            <Text
              c="dimmed"
              fz="sm"
              mt="md"
              span
              fw={500}
              sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
            >
                {dateTo}
            </Text>
        </Flex>

        <Progress value={100} mt={5} animate={current} />
    </Card>
);
