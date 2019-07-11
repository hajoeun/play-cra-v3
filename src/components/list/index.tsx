import React from 'react';
import { ResponseItem } from 'api';


interface Props {
  items: Array<ResponseItem>
}

export const List: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {
        items.map(item => (
          <li key={item.id}>
            {item.id}
          </li>
        ))
      }
    </ul>
  )
}
