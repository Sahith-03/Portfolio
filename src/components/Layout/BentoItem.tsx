import { motion, type HTMLMotionProps, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { type ReactNode, type MouseEvent } from 'react';
import styles from './BentoItem.module.css';

interface BentoItemProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2;
    disableHover?: boolean;
}

export const BentoItem: React.FC<BentoItemProps> = ({
    children,
    className = '',
    colSpan = 1,
    rowSpan = 1,
    disableHover = false,
    whileHover = {}, // Custom hover handled internally for tilt
    ...props
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            onMouseMove={disableHover ? undefined : handleMouseMove}
            onMouseLeave={disableHover ? undefined : handleMouseLeave}
            style={{
                rotateX: disableHover ? 0 : rotateX,
                rotateY: disableHover ? 0 : rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`
        ${styles.item}
        ${styles[`colSpan${colSpan}`]}
        ${styles[`rowSpan${rowSpan}`]}
        ${className}
      `}
            {...props}
        >
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};
