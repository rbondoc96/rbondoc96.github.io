import React from 'react';

export type StateHandler<T> = React.Dispatch<React.SetStateAction<T>>;
