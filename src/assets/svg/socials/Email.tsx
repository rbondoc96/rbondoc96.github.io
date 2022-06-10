import React, {FunctionComponent as FC, useContext} from 'react';
import UIContext from '@/core/UIContext';
import UITheme from '@/types/enum';

interface IEmailProps {
    className?: string,
    onClick?: React.MouseEventHandler,
}

const Email: FC<IEmailProps> = ({className, onClick}) => {
    const {theme} = useContext(UIContext);
    const uiTheme = theme[0];

    return (
        <svg
            className={className}
            onClick={onClick}
            fill={uiTheme === UITheme.dark ? '#FFF' : '#000'}
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
        >
            <g>
                <g>
                    <path d="M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121
                    C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18
                    s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894z
                     M51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939
                    l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"
                    />
                </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
        </svg>
    );
};

export default Email;
