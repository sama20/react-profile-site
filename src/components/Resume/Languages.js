import React from 'react';
import data from '../../data/resume/languages';
import Table from '../Stats/Table';

const Languages = () => (
  <div className="languages">
    <div className="link-to" id="languages" />
    <div className="title">
      <h3>Languages</h3>
    </div>
    <Table data={data} />
  </div>
);

// Courses.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       number: PropTypes.string,
//       link: PropTypes.string,
//       university: PropTypes.string,
//     })
//   ),
// };

// Courses.defaultProps = {
//   data: [],
// };

export default Languages;
