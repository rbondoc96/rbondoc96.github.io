import gsap from 'gsap';
import type {Component} from 'solid-js';
import {createEffect} from 'solid-js';

import './index.css';

const Loader: Component<{
    onFinish: () => void;
}> = (props) => {
    createEffect(() => {
        const timeline = gsap.timeline();

        timeline
            .set('.loader__box', {opacity: 0})
            .to('.loader__bar.left', {
                width: '50%',
                transformOrigin: '0% 0%',
                duration: 0.8,
                delay: 0.2,
            })
            .to(
                '.loader__bar.right',
                {
                    width: '50%',
                    transformOrigin: '100% 0%',
                    duration: 0.8,
                },
                '<',
            )
            .to('.loader__bar.left', {opacity: 0, duration: 0.5})
            .to('.loader__bar.right', {opacity: 0, duration: 0.5}, '<')
            .to('.loader__box', {opacity: 1, delay: 0.1, duration: 0.2}, '<')
            .to('.loader__box', {
                rotate: 360,
                repeat: 1,
                duration: 1,
                repeatDelay: 0.35,
            })
            .to('.loader__box', {
                width: '100%',
                duration: 0.3,
                onComplete: props.onFinish,
            })
            .to(
                '.loader',
                {
                    opacity: 0,
                    zIndex: -1,
                    delay: 0.3,
                    duration: 0.3,
                },
                '<',
            )
            .addLabel('onLoadComplete', '>');
    });

    return (
        <div class="loader">
            <div class="loader__container">
                <div class="loader__bars">
                    <div class="loader__bar left" />
                    <div class="loader__bar right" />
                </div>
                <div class="loader__box__wrapper">
                    <div class="loader__box" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
