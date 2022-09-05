import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.stackexchange.com/2.3/users/4453634?order=desc&sort=reputation&site=stackoverflow',
    );

    console.info(res);
    const resData = (await res.json()).items[0];
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const iconStack = {
    link: 'https://stackoverflow.com/users/4453634/',
    label: 'Stackoverflow',
    icon: faStackOverflow,
  };

  return (
    <div>
      <h3>
        Some state about my stackoverflow
        &nbsp;<FontAwesomeIcon icon={iconStack.icon} />
      </h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
