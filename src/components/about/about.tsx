import { Badge, Container, Text, Title } from '@mantine/core';
import { timelineData } from './workExperience';
import { useStyles } from './useStyles';
import './about.css';

interface Props {
    data: {
        text: string,
        date: string,
        company: string,
    }
}

export const About = () => {
    const dateNow = new Date().getFullYear();
    const {
        classes,
        theme,
    } = useStyles();

    const TimelineItem = ({ data }: Props) => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <time>{data.date}</time>
                <Badge mt="sm" style={{ backgroundColor: theme.colors.violet[3] }}>
                    <time>{data.company}</time>
                </Badge>
                <p>{data.text}</p>
                <span className="circle" />
            </div>
        </div>
    );

    const Timeline = () =>
        (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        );

    return (
        <Container mt={100} id="about-me">
            <Title mb="md" className={classes.text}>
                About Me and My Work Experience
            </Title>
            <Text className={classes.subtext}>
                Hi! I’m Hubert, a frontend developer based in Poland. I currently have
                {` ${dateNow - 2022}+`} years of professional work experience. I enjoy black tea,
                reading books, gaming and music.
            </Text>
            <Timeline />
        </Container>
    );
};
