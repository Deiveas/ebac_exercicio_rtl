import React, { ReactNode } from 'react';
import { TituloSpan } from './styles';

type Props = {
    children: ReactNode;
}

const Headertitulo = ({ children }: Props) => (
    <TituloSpan>{children}</TituloSpan>
);

export default Headertitulo;
