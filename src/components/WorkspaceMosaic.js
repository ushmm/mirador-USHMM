import React from 'react';
import PropTypes from 'prop-types';
import {
  Mosaic, getLeaves, createBalancedTreeFromLeaves,
} from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import Window from '../containers/Window';

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
class WorkspaceMosaic extends React.Component {
  /**
   */
  constructor(props) {
    super(props);

    this.tileRenderer = this.tileRenderer.bind(this);
    this.mosaicChange = this.mosaicChange.bind(this);
    this.determineWorkspaceLayout = this.determineWorkspaceLayout.bind(this);
    this.zeroStateView = <div />;
  }

  /**
   * Render a tile (Window) in the Mosaic.
   */
  tileRenderer(id, path) {
    const { windows } = this.props;
    const window = windows[id];
    if (!window) return null;
    return (
      <Window
        key={window.id}
        window={window}
      />
    );
  }

  /**
   * Update the redux store when the Mosaic is changed.
   */
  mosaicChange(newLayout) {
    const { updateWorkspaceMosaicLayout } = this.props;
    updateWorkspaceMosaicLayout(newLayout);
  }

  /**
   * Used to determine whether or not a "new" layout should be autogenerated.
   * If a Window is added or removed, generate that new layout and use that for
   * this render. When the Mosaic changes, that will trigger a new store update.
   */
  determineWorkspaceLayout() {
    const { windows, workspace, updateWorkspaceMosaicLayout } = this.props;
    const windowKeys = Object.keys(windows).sort();
    const leaveKeys = getLeaves(workspace.layout);
    // Check every window is in the layout, and all layout windows are present
    // in store
    if (!windowKeys.every(e => leaveKeys.includes(e))
    || !leaveKeys.every(e => windowKeys.includes(e))) {
      const newLayout = createBalancedTreeFromLeaves(windowKeys);
      updateWorkspaceMosaicLayout(newLayout);
      return newLayout;
    }
    return null;
  }

  /**
   */
  render() {
    const { workspace } = this.props;
    const newLayout = this.determineWorkspaceLayout();
    return (
      <Mosaic
        renderTile={this.tileRenderer}
        initialValue={newLayout || workspace.layout}
        onChange={this.mosaicChange}
        className="mirador-mosaic"
        zeroStateView={this.zeroStateView}
      />
    );
  }
}


WorkspaceMosaic.propTypes = {
  updateWorkspaceMosaicLayout: PropTypes.func.isRequired,
  windows: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  workspace: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default WorkspaceMosaic;
