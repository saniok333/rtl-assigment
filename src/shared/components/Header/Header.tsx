import React from 'react';
import { getSrcMap } from '../../utils/getSrcMap';
import { Picture } from '../Picture';
import styles from './Header.module.scss';
import { HeaderImageSrcMap } from './Header.namespace';

interface IImageData {
  imageUrl: string;
  crops: ArticlesModel.Crop[];
}

export interface PropsT {
  imageData: IImageData;
  title: string;
  label: string;
  description: string;
}

const Header: React.FC<PropsT> = ({ imageData, title, label, description }) => {
  const { crops, imageUrl } = imageData;

  const srcMap = getSrcMap({
    config: HeaderImageSrcMap,
    crops,
  });

  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    filter: 'brightness(30%)',
  };

  return (
    <div className={styles.headerContainer}>
      <Picture
        srcMap={srcMap}
        defaultSrc={imageUrl}
        imageStyles={imageStyles}
      />
      <div className={styles.textWrapper}>
        <h2 className={styles.label}>{label}</h2>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Header;
