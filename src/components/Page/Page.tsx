import {type ParentComponent} from 'solid-js';

import Helmet, {type HelmetProps} from '@/components/Helmet';

type PageProps = HelmetProps;

const Page: ParentComponent<PageProps> = props => {
    return (
        <>
            <Helmet {...props} />
            {props.children}
        </>
    );
};

export default Page;
