import React from 'react';

export default function EmailLink() {
  const message = 'asghari.moha@gmail.com';
  return (
    <div>
      <a href={`mailto: ${message}`}>
        <span>{message}</span>
      </a>
    </div>
  );
}
