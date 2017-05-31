import React, { Component } from 'react';
import './Carousel.css';

import ProjectColumn from './ProjectColumn';

class Carousel extends Component {
  constructor(props) {
    super(props);

    const projects = [...Array(10).keys()].map(() => {
      return {
        title: 'PROJECT TITLE',
      }
    });

    this.state = {
      projects,
    };
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="Carousel">
        <ul>
          {projects.map(projectContent => <ProjectColumn {...projectContent} />)}
        </ul>
      </div>
    );
  }
}

export default Carousel;
