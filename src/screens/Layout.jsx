import { useEffect, useRef, useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    ActionIcon,
    Stack,
    Button,
    Transition,
    Grid,
    Box,
    Group,
} from '@mantine/core';
import { Content1 } from './Contents/Content1';
import { IconSettings } from '@tabler/icons-react';
import { usePrevious, useViewportSize, useWindowScroll } from '@mantine/hooks';

export default function LayoutScreen() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [scroll, scrollTo] = useWindowScroll();

    const [preScroll, setPreScroll] = useState();
    const viewport = useRef(null);
    const preY = usePrevious(scroll.y);

    // console.log('y: ', scroll.y);


    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
                    <Stack justify="flex-start" h={'100vh'} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                        <Button variant="outline">1</Button>
                        <Button variant="outline">2</Button>
                        <Button variant="outline">3</Button>
                    </Stack>
                    <Stack justify="flex-end" align={'flex-end'} h={'100vh'} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                        <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
                    </Stack>
                </Navbar>
            }
            header={
                // <Transition transition={'slide-down'} mounted={scroll.y < preY}>
                //     {(transitionStyle) => (



                //     )}
                // </Transition>


                <Header height={{ base: 60, md: 70 }} p="md"
                // style={transitionStyle}
                >

                    <Group position="apart" align={'center'}>
                        <Group>

                            <MediaQuery
                                largerThan="sm" styles={{ display: 'none' }}
                            >
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />

                            </MediaQuery>

                        </Group>
                        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                            <Group>
                                <Button variant="outline">3</Button>
                                <Button variant="outline">3</Button>
                                <Button variant="outline">3</Button>
                            </Group>
                        </MediaQuery>
                    </Group>
                </Header>
            }
            footer={
                <Transition transition="slide-up" mounted={scroll.y > preY}>
                    {(transitionStyles) => (

                        <Footer height={60} p="md"
                            style={transitionStyles}
                        >

                            Application footer
                        </Footer>

                    )}

                </Transition>
            }
        >
            {/* <Text>Resize app to see responsive navbar in action</Text> */}
            <Content1 />
        </AppShell>
    );
}