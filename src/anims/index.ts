import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const animProps = {
    duration: 0.5,
    opacity: 0,
    y: '-10%',
};

const animationInit = (isMobile: boolean) => {
    gsap.registerPlugin(ScrollTrigger);

    const homeTimeline = gsap.timeline();

    if (!isMobile) {
        homeTimeline.delay(1.5);
    } else {
        homeTimeline.delay(1);
    }

    homeTimeline.from('.Home-header', animProps)
        .from('.Home-text', animProps)
        .from('.Home-button', animProps);

    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.js-About-Header',
            start: 'top 30%',
        },
    });

    const aboutAnimProps = {
        duration: 0.4,
        opacity: 0,
        y: '-10%',
    };

    aboutTimeline.from('.js-About-Header', aboutAnimProps);
    aboutTimeline.from('.About-left', aboutAnimProps);

    if (!isMobile) {
        aboutTimeline.from('.About-right', aboutAnimProps);
    } else {
        const tempTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.About-right',
                start: 'top 30%',
            },
        });

        tempTimeline.from('.About-right', {
            duration: 0.25,
            opacity: 0,
            x: '10%',
        });
    }

    const workTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.js-Work-Header',
            start: 'top 30%',
        },
    });

    workTimeline.from('.js-Work-Header', animProps);
    workTimeline.from('.TimelineBullet, .Work-links', {
        ...animProps,
        delay: 0.25,
    });
    // workTimeline.from('.Work-links', animProps)

    if (!isMobile) {
        workTimeline.from('.Work-ProjectCards', {
            duration: 0.5,
            opacity: 0,
            x: '100%',
        });
    } else {
        const tempTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.Work-ProjectCards',
                start: 'top 30%',
            },
        });

        tempTimeline.from('.Work-ProjectCards', animProps);
    }

    const contactTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.js-Contact-Header',
            start: 'top 50%',
        },
    });

    const contactAnimProps = {
        duration: 0.25,
        opacity: 0,
        y: '-10%',
    };

    contactTimeline.from('.js-Contact-Header', contactAnimProps);
    contactTimeline.from('.Contact-content', contactAnimProps);
    contactTimeline.from('.Contact-button', contactAnimProps);
    contactTimeline.from('.Contact-footer', contactAnimProps);
};

export default animationInit;
