import { useEffect, useRef, useState } from "react";
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
    Switch,
    useMantineColorScheme,
    Flex,
    ThemeIcon,
    Image,
    Avatar,
    Card,
    ScrollArea,
    Center,
    Paper,
} from "@mantine/core";
import { Content1 } from "./Contents/Content1";
import {
    IconMoonStars,
    IconPhoto,
    IconSettings,
    IconSun,
} from "@tabler/icons-react";
import {
    usePrevious,
    useScrollIntoView,
    useViewportSize,
    useWindowScroll,
} from "@mantine/hooks";
import {
    BrandFacebook,
    BrandInstagram,
    BrandLinkedin,
    Container,
    Home2,
} from "tabler-icons-react";
import icon from "../assets/icon.jpg";
import TestParallex from "./Contents/Test/TestParallex";
import TestScroll2 from "./Contents/Test/TestScroll2";
import TestFlip from "./Contents/Test/TestReactSpring/TestFlip";

export default function LayoutScreen() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [scroll, scrollTo] = useWindowScroll();

    const [preScroll, setPreScroll] = useState();
    const viewport = useRef(null);
    const preY = usePrevious(scroll.y);
    // console.log('y: ', scroll.y);

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const colorChange = colorScheme === "dark" ? "white" : "black";
    const iconSize = 40;

    const { targetRef, scrollIntoView } = useScrollIntoView({ offset: 60 });
    const { targetRef: targetRef2, scrollIntoView: scrollIntoView2 } = useScrollIntoView({ offset: 60 });
    const { targetRef: targetRef3, scrollIntoView: scrollIntoView3 } = useScrollIntoView({ offset: 120 });
    const { targetRef: targetRef4, scrollIntoView: scrollIntoView4 } = useScrollIntoView({ offset: 60 });



    const props = { targetRef, targetRef2, targetRef3, targetRef4 }

    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            // layout="alt"
            navbar={
                <Navbar
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 250 }}
                // style={{ boxShadow: '10px' }}
                // sx={{ boxShadow: '10px 0px 20px gray' }}
                >
                    {/* <MediaQuery
                        largerThan="sm" styles={{ display: 'none' }}
                    >
                        <Burger
                            opened={opened}
                            // onClick={() => setOpened((o) => !o)}
                            onClick={() => setOpened(!opened)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />

                    </MediaQuery> */}

                    <Navbar.Section grow component={ScrollArea} w={{ sm: 200, lg: 250 }}>
                        {/* Top */}
                        <Stack align={"center"} mt={30}>
                            <Card radius={1000} shadow={"lg"} sx={{ alignItems: "center" }}>
                                <Avatar
                                    src={icon}
                                    radius={1000}
                                    size={150}
                                    alt="Icon"
                                    sx={{ marginBottom: 0 }}
                                />
                            </Card>

                            <Text fw={400} fz={20}>
                                Andy Wong
                            </Text>

                            <Flex
                                w={{ sm: 200, lg: 250 }}
                                mb={40}
                                sx={{ justifyItems: "space-between" }}
                                justify={"center"}
                            >
                                <BrandInstagram
                                    size={iconSize}
                                    strokeWidth={2}
                                    color={colorChange}
                                />
                                <BrandLinkedin
                                    size={iconSize}
                                    strokeWidth={2}
                                    color={colorChange}
                                />
                            </Flex>
                        </Stack>

                        <Stack
                            // sx={(theme) => ({ backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}
                            mx={"md"}
                        >
                            <Button
                                variant="outline"
                                color={colorScheme === "dark" ? "gray" : "dark"}
                                onClick={() => {
                                    scrollIntoView3();
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                variant="outline"
                                color={colorScheme === "dark" ? "gray" : "dark"}
                                onClick={() => {
                                    scrollIntoView();
                                }}
                            >
                                About
                            </Button>
                            <Button
                                variant="outline"
                                color={colorScheme === "dark" ? "gray" : "dark"}
                                onClick={() => {
                                    scrollIntoView2();
                                }}
                            >
                                Education
                            </Button>
                            <Button
                                variant="outline"
                                color={colorScheme === "dark" ? "gray" : "dark"}

                            >
                                Resume
                            </Button>
                        </Stack>

                        {/* End */}
                        <Stack
                            justify="flex-end"
                            align={"flex-end"}
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.colorScheme === "dark"
                                        ? theme.colors.dark[8]
                                        : theme.colors.gray[0],
                            })}
                        >
                            {/* <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon> */}
                        </Stack>
                    </Navbar.Section>
                </Navbar>
            }
            header={
                <Header height={{ base: 60 }} p="md">
                    <Group position="apart" align={"center"}>
                        <Group>
                            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>
                        </Group>
                        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                            <Group spacing={2}>
                                {/* <Button variant="outline">3</Button> */}
                                <Group w={50} h={30}>
                                    <Switch
                                        onLabel={<IconSun size="1.1rem" />}
                                        offLabel={<IconMoonStars size="1.1rem" />}
                                        onClick={() => toggleColorScheme()}
                                    />
                                </Group>
                                {/* <ActionIcon variant='filled'><IconSettings size="2rem" stroke={1} /></ActionIcon> */}
                            </Group>
                        </MediaQuery>
                    </Group>
                </Header>
            }

        // footer={
        //     <Transition transition="slide-up" mounted={scroll.y > preY} >
        //         {(transitionStyles) => (

        //             <Footer height={50} p="md"
        //                 style={transitionStyles}
        //             >

        //                 Application footer
        //             </Footer>

        //         )}

        //     </Transition>
        // }
        >
            <Content1 targetRef={props} />
            {/* <TestParallex /> */}
            {/* <TestScroll2 /> */}
        </AppShell>
    );
}
