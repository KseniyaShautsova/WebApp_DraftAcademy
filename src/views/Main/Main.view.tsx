import React from "react";
import { PlayListModelWithId } from "~/models/playlist.model";
import { GridList, GridListItem } from "~/components";

interface Props {
  items: Array<PlayListModelWithId>;
}

const Main = ({ items }: Props) => (
  <GridList>
    {items.map((item) => (
      <GridListItem item={item} key={item.id} />
    ))}
  </GridList>
)

export default Main;