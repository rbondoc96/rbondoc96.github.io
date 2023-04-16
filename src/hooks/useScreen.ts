import {useCallback, useEffect, useState} from 'react';
import breakpoints from '@/core/breakpoints.json';

type ScreenSize = keyof typeof breakpoints;

export default function useScreen() {
    const [currentSize, setCurrentSize] = useState<ScreenSize>('xs');

    const isEqualOrLargerThan = useCallback(
        (screen: ScreenSize) => {
            return breakpoints[currentSize] >= breakpoints[screen];
        },
        [currentSize],
    );

    useEffect(() => {
        const trackWindowSize = () => {
            let largestBreakpointValue = 0;

            for (const [breakpoint, value] of Object.entries(breakpoints)) {
                if (value > largestBreakpointValue && window.innerWidth >= value) {
                    setCurrentSize(breakpoint as ScreenSize);
                    largestBreakpointValue = value;
                }
            }
        };

        window.addEventListener('resize', trackWindowSize);

        return () => {
            window.removeEventListener('resize', trackWindowSize);
        };
    });

    return {isEqualOrLargerThan, currentSize};
}
