import React, { FC } from 'react';
import { ItemModel } from '../../pages/Home/Home.module';
import styles from '../../styles/Card.module.css';
import Image from '../Image';

const Card: FC<{ item: ItemModel }> = props => {
  const { mission_name, launch_date_utc, links, rocket, flight_number } = props.item;
  return (
    <div className={styles.card}>
      <Image imageURL={links.mission_patch_small} />
      <br />
      <h2>{mission_name}</h2>
      <p>Flight No {flight_number}</p>
      <p>{new Date(launch_date_utc || null).toDateString()}</p>
      <p>{rocket?.first_stage?.cores[0]?.core_serial}</p>
      <p>{rocket?.second_stage?.payloads[0]?.payload_id}</p>
    </div>
  );
};

export default Card;
