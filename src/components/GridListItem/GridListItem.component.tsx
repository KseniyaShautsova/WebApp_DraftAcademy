import React from "react";
import styles from "./GridListItem.module.css"
import {PlayListModelWithId} from "~/models/playlist.model"
import Link from "next/link"

interface Props {
    item: PlayListModelWithId
}

const GridListItem =({item}: Props)=>(
    <li className={styles.root}>
    <div className={styles.playlist}>
      <div
        className={styles.playlistColorSign}
        style={{ backgroundColor: item?.color || "#000000" }}
      />

      <Link
        href={`/playlist/${item.id}`}
        className={styles.playlistName}
      >
        {item.name}
      </Link>
    </div>

    <span className={styles.ownerName}>{item.owner}</span>
  </li>
)

export default GridListItem;