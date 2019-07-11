import React, { useEffect, useState } from 'react';
import 'components/index.css';
import { GithubAPI, ResponseItem } from 'api';
import { Body } from 'components/body';
import { List } from 'components/list';

const EntryRoute: React.FC = () => {

  const [items, setItems] = useState<Array<ResponseItem>>([]);

  useEffect(() => {

    GithubAPI()
      .then(res => {
        setItems(res.items);
      })

  }, []);

  return (
    <>
      <Body/>
      {
        items.length ? (
          <List
            items={items}
          />
        ) : '--------'
      }
    </>
  );
}

export default EntryRoute;
