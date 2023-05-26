import React from 'react';

type Props = {
  date: string;
};

const DateFormatter: React.FC<Props> = ({ date }) => {
  const formattedDate = formatDate(date);

  return <span>{formattedDate}</span>;
};

const formatDate = (date: string): string => {
  const parsedDate = new Date(date);

  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  };

  return parsedDate.toLocaleDateString('en', options);
};

export default DateFormatter;