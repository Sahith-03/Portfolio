import React, { type ReactNode } from 'react';
import styles from './BentoGrid.module.css';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
    return (
        <div className={`${styles.grid} ${className}`}>
            {children}
        </div>
    );
};
