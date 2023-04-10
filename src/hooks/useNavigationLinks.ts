import {useContext} from 'react';

import {NavigationContext} from '@/core/providers/NavigationLinkProvider';

export const useNavigationLinks = () => {
    const context = useContext(NavigationContext);

    if (context === undefined) {
        throw new Error('useNavigationLinks must be used within a NavigationProvider.');
    }

    return context;
};

export default useNavigationLinks;
