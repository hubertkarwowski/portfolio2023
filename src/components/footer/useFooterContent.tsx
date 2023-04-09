import { IconBrandGithub, IconBrandLinkedin, IconDeviceMobile, IconMail } from '@tabler/icons-react';
import { ActionIcon, Group, Text } from '@mantine/core';
import { useStyles } from './styles';

export const useFooterContent = () => {
    const { classes } = useStyles();

    const contactContent = [
        {
            title: 'Contact Me',
            content: [
                {
                    label: 'hubert.karwowski01@gmail.com',
                    icon: <IconMail size="1.5rem" />,
                },
                {
                    label: '+48 572 938 418',
                    icon: <IconDeviceMobile size="1.5rem" />,
                },
            ],
        },
    ];

    const linksContent = [{
        title: 'Find Me Here',
        content: [
            {
                link: 'https://www.linkedin.com/in/hubert-karwowski/',
                icon: <IconBrandGithub size="1.5rem" />,
                label: 'LinkedIn Profile',
            },
            {
                link: 'https://github.com/hubertkarwowski/',
                icon: <IconBrandLinkedin size="1.5rem" />,
                label: 'GitHub Profile',

            },
        ],
    }];

    const groups = contactContent.map((group) => {
        const content = group.content.map((item, index) => (
            <Group spacing={10}>
                {item.icon}
                <Text<'span'>
                  key={index}
                  className={classes.content}
                  component="span"
                >
                    {item.label}
                </Text>
            </Group>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {content}
            </div>
        );
    });

    const linkGroups = linksContent.map((group) => {
        const content = group.content.map((item, index) => (
            <ActionIcon size="lg" key={index} component="a" href={item.link} target="_blank" title={item.label}>
                {item.icon}
            </ActionIcon>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                <Group>
                    {content}
                </Group>
            </div>
        );
    });

    return (
        <>
            <div className={classes.groups}>{groups}</div>
            <div>{linkGroups}</div>
        </>
    );
};
