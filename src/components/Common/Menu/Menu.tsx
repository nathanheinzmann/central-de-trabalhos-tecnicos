import React from 'react';
import Link from 'next/link';
import * as S from './Menu.style';

const Menu = () => {
  return (
    <S.Container>
      <Link href="/" as="/" passHref>
        <S.LinkArea>
          <S.Logo src="/assets/images/logo.png" alt="voltar" />
          <S.Text>Central de Trabalhos Técnicos</S.Text>
        </S.LinkArea>
      </Link>
    </S.Container>
  );
};

export default Menu;