import React, { PropTypes } from 'react';
import logo from './logo.svg';
import './ProjectTile.css';

const ProjectTile = ({ title, isInvisible }) => (
  <li className={'project-tile' + (isInvisible ? ' is-invisible' : '')}>
    <h3>{title}</h3>
    <img src={logo} className="cover-image project-image" />
  </li>
);

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ProjectTile