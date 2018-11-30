import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import './Editor.less';

export default class Editor extends Component {
  static propTypes = {
    language: PropTypes.string,
    value: PropTypes.string,
    wrap: PropTypes.bool,
    onChange: PropTypes.func,
    onCursorActivity: PropTypes.func,
  }

  static defaultProps = {
    language: '',
    value: '',
    wrap: false,
    onChange: () => {},
    onCursorActivity: () => {},
  }

  componentDidMount() {
    const { value, wrap, language } = this.props;
    this.editor = CodeMirror(this.node, {
      value,
      lineNumbers: true,
      lineWrapping: wrap,
      mode: language,
    });

    this.editor.on('change', this.handleChange);
    this.editor.on('cursorActivity', this.handleCursorActivity);
    this.updateSize();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.editor
      && nextProps.value !== undefined
      && this.editor.getValue() !== nextProps.value
    ) {
      this.editor.setValue(nextProps.value);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  setCursorPosition = (line, char) => {
    setTimeout(() => {
      this.editor.focus();
      this.editor.doc.setCursor(line, char);
    }, 10);
  }

  updateSize = () => {
    this.editor.refresh();
  }

  handleChange = (editor) => {
    const { onChange } = this.props;
    onChange(editor.getValue());
  }

  handleCursorActivity = () => {
    const { onCursorActivity } = this.props;
    onCursorActivity(this.editor.doc.getCursor());
  }

  render() {
    return <div className="editor" ref={(node) => { this.node = node; }} />;
  }
}
