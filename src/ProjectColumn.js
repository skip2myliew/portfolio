import React, { Component } from 'react';
import './ProjectColumn.css';

import ProjectTile from './ProjectTile';

class ProjectColumn extends Component {
  constructor(props) {
    super(props);

    const projectsImages = [...Array(5).keys()].map((project, i) => {
      return {
        title: 'image title',
        isInvisible: i > 0,
      }
    });

    this.state = {
      projectsImages,
      isSelected: false,
    };

    this.showImages = this.showImages.bind(this);
    this.hideImages = this.hideImages.bind(this);
  }

  showImages() {
    const { projectsImages } = this.state;
    this.setState({
      ...this.state,
      projectsImages: projectsImages.map(project => ({...project, isInvisible: false})),
      isSelected: true,
    });
  }

  hideImages() {
    const { projectsImages } = this.state;
    this.setState({
      ...this.state,
      projectsImages: projectsImages.map((project, i) => ({...project, isInvisible: i > 0})),
      isSelected: false,
    });
  }

  render() {
    const { projectsImages, isSelected } = this.state;

    return (
      <li className={'project-column' + (isSelected ? ' is-selected' : '')}>
        <div 
          className='project-column-wrapper'
          onMouseEnter={this.showImages}
          onMouseLeave={this.hideImages}
        >
          <h3>{this.props.title}</h3>
          <ul>
            {projectsImages.map((content, i) => <ProjectTile {...content} />)}
          </ul>
        </div>
      </li>
    );
  }
}

export default ProjectColumn;
