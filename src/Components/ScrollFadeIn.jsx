import React, { useRef, useState, useEffect } from 'react';
import { Blockquote, Box, Card, Paper, useMantineColorScheme, useMantineTheme } from '@mantine/core';


// @ts-ignore
import { motion, useReducedMotion } from "framer-motion"

export const ScrollFadeIn = (props) => {
    const contentRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();
    const [isVisible, setIsVisible] = useState(false);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}

        // viewport={{ once: true }}
        >
            <Box ref={contentRef} my={20}>
                {props.children}
            </Box>

        </motion.div>
    );
};