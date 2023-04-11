import { Badge, Button, Card, createStyles, Group, Image, rem, Text } from '@mantine/core';
import { IconCircleArrowUpRight } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        maxWidth: '350px',
    },

    section: {
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.red[6],
    },

    label: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },

    image: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '180px',
        width: '100%',

    },
}));

export interface BadgeCardProps {
    image: string;
    title: string;
    details: string;
    link: string;
    badges: {
        label: string;
    }[];
}

export function PortfolioCard({
                                  image,
                                  title,
                                  details,
                                  badges,
                                  link,
                              }: BadgeCardProps) {
    const {
        classes,
    } = useStyles();

    const features = badges.map((badge) => (
        <Badge
          key={badge.label}
        >
            {badge.label}
        </Badge>
    ));

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} className={classes.image} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group position="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                </Group>
                <Text fz="sm" mt="xs">
                    {details}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Main Technologies
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Button
                  component="a"
                  target="_blank"
                  href={link}
                  rightIcon={<IconCircleArrowUpRight />}
                  radius="md"
                  style={{ flex: 1 }}
                >
                    Visit Website
                </Button>
            </Group>
        </Card>
    );
}
