import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import './Renderer.less';
import './styles/phb/phb.style.less';

const md = new MarkdownIt({
  html: true,
});

const Renderer = ({ value }) => (
  <div
    className="renderer phb"
    dangerouslySetInnerHTML={{ __html: md.render(value) }}
  />
);

Renderer.propTypes = {
  value: PropTypes.string,
};

Renderer.defaultProps = {
  value: '',
};

export default Renderer;
