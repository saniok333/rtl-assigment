import React, { PropsWithChildren } from 'react';
import { PropsT as HeaderProps, Header } from '../../components/Header';
import styles from './Main.module.scss';

const Main: React.FC<HeaderProps & PropsWithChildren> = ({
  children,
  ...rest
}) => {
  return (
    <div>
      <Header {...rest} />
      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
};

export default Main;
