import { Affix, Badge, Blockquote, Button, Card, Grid, Group, Transition } from '@mantine/core';


import { Image, Center, Text, Box } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';



function Demo() {
    return (
        <Card shadow="sm"
            // @ts-ignore
            padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
}
export function Content1() {
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <>
            <Blockquote cite="– Forrest Gump">
                Life is like an npm install – you never know what you are going to get.
            </Blockquote>
            <Text>I am Andy</Text>
            <Text>Hands-on experience in web development in frontend by reactjs and backend with
                Spring Boot. Major in Physics at HKUST and familiar with Python in solving basic
                numerical and symbolic computation problems.</Text>

            <Grid gutter={20} >
                <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
                <Grid.Col lg={3} md={6} sm={6} xs={12} > <Demo /></Grid.Col>
            </Grid>
            <Affix position={{ bottom: '4rem', right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftIcon={<IconArrowUp size="1rem" />}
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            Scroll to top
                        </Button>
                    )}
                </Transition>
            </Affix>
        </>
    );
}