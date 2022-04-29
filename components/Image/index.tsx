import React, { FC } from 'react';
import styles from '../../styles/Image.module.css';
const Image: FC<{ imageURL: string }> = ({ imageURL }) => {
  return <img alt='ss' src={imageURL} className={styles.image} />;
};

export default Image;
