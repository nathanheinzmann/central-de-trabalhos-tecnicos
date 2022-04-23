import React from 'react';
import Link from 'next/link';
import * as S from './Menu.style';

const Menu = () => {
  return (
    <S.Container>
      <Link href="/" as="/" passHref>
        <S.MainLink>CTT</S.MainLink>
      </Link>
    </S.Container>
  );
};

export default Menu;