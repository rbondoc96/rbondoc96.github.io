import type {ParentComponent} from 'solid-js';

import './index.css';

interface SectionHeaderProps {
    children: string;
}

const SectionHeader: ParentComponent<SectionHeaderProps> = (props) => {
    return (
        <div class="section-header">
            <h2 class="section-header__text">{props.children}</h2>
        </div>
    );
};

export default SectionHeader;
