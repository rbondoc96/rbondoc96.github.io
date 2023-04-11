import type {AnimatedComponentProps, HTMLProps} from '@/core/props';
import Section from '@/components/pages/home/Section';

type ContactSectionProps = AnimatedComponentProps & HTMLProps;

const ContactSection = ({animClass, id}: ContactSectionProps) => (
    <Section animClass={animClass} id={id} space="2xl">
        <Section.Header marginY="sm">Let&apos;s Get in Touch!</Section.Header>
    </Section>
);

export default ContactSection;
