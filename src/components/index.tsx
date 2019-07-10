import React, { useEffect } from 'react';
import 'components/index.css';
import { GithubAPI } from 'api';
import { Body } from 'components/body';

const EntryRoute: React.FC = () => {

  useEffect(() => {

    GithubAPI()
      .then(res => { console.log(res) })

  }, []);

  return (
    <Body/>
  );
}

export default EntryRoute;
