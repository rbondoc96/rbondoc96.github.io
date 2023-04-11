import type {AnimatedComponentProps, HTMLProps} from '@/core/props';
import Section from '@/components/pages/home/Section';

type WorkSectionProps = AnimatedComponentProps & HTMLProps;

const WorkSection = ({animClass, id}: WorkSectionProps) => (
    <Section animClass={animClass} id={id} space="2xl">
        <Section.Header marginY="sm">Places I&apos;ve Worked At</Section.Header>
    </Section>
);

export default WorkSection;
