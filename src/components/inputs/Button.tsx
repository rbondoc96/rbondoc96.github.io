import React, {FunctionComponent as FC} from 'react';

interface IButton {
    onClick: (event: React.MouseEvent) => void;
    children: React.ReactNode;
}

const Button: FC<IButton> = ({onClick, children}) => {
    const className = `button${''}`;

    return (
        <button onClick={onClick} className={className} type="button" tabIndex={0}>
            {children}
        </button>
    );
};

export default Button;
