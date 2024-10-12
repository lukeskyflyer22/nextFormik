import React from 'react';

type TextErrorProps = {
    children: React.ReactNode;
};

const TextError: React.FC<TextErrorProps> = ( {children} ) => {
    return <div>{children}</div>;
};

export default TextError