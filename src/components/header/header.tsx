import { useState } from 'react';
import { Burger, Container, Group, Header, Paper, rem, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './useStyles';

interface HeaderResponsiveProps {
    links: { link: string; label: string }[];
}

export function HeaderContent({ links }: HeaderResponsiveProps) {
    const [opened, {
        toggle,
    }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const {
        classes,
        cx,
    } = useStyles();

    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
          onClick={() => {
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={rem(60)} mb={120} className={classes.root}>
            <Container className={classes.header}>
                <h3>HK</h3>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}
