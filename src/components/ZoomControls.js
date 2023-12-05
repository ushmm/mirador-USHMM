import { Component } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import RotateRightIcon from '@material-ui/icons/RotateRightSharp';
import PropTypes from 'prop-types';
import RestoreZoomIcon from './icons/RestoreZoomIcon';
import MiradorMenuButton from '../containers/MiradorMenuButton';

/**
 */
export class ZoomControls extends Component {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);

    this.handleZoomInClick = this.handleZoomInClick.bind(this);
    this.handleZoomOutClick = this.handleZoomOutClick.bind(this);
    this.handleRotateClick = this.handleRotateClick.bind(this);
  }

  /**
   * @private
   */
  handleZoomInClick() {
    const { windowId, updateViewport, viewer } = this.props;

    updateViewport(windowId, {
      zoom: viewer.zoom * 2,
    });
  }

  /**
   * @private
   */
  handleZoomOutClick() {
    const { windowId, updateViewport, viewer } = this.props;

    updateViewport(windowId, {
      zoom: viewer.zoom / 2,
    });
  }

  /**
   * @private
   */
  handleRotateClick() {
    const { windowId, updateViewport, viewer } = this.props;
    updateViewport(windowId, {
      // eslint-disable-next-line react/prop-types
      rotation: (viewer.rotation + 90) % 360,
    });
  }

  /**
   * render
   * @return
   */
  render() {
    const {
      displayDivider, showZoomControls, classes, t, zoomToWorld,
    } = this.props;

    if (!showZoomControls) {
      return (
        <>
        </>
      );
    }
    return (
      <div className={classes.zoom_controls}>
        <MiradorMenuButton className="js-mirador-image-control" aria-label={t('zoomIn')} onClick={this.handleZoomInClick}>
          <AddCircleIcon fontSize="large" />
        </MiradorMenuButton>
        <MiradorMenuButton className="js-mirador-image-control" aria-label={t('zoomOut')} onClick={this.handleZoomOutClick}>
          <RemoveCircleIcon fontSize="large" />
        </MiradorMenuButton>
        <MiradorMenuButton className="js-mirador-image-control" aria-label={t('zoomReset')} onClick={() => zoomToWorld(false)}>
          <RestoreZoomIcon fontSize="large" />
        </MiradorMenuButton>
        <MiradorMenuButton className="js-mirador-image-control" aria-label="Rotate canvas" onClick={this.handleRotateClick}>
          <RotateRightIcon fontSize="large" />
        </MiradorMenuButton>
        {displayDivider && <span className={classes.divider} />}
      </div>
    );
  }
}

ZoomControls.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  displayDivider: PropTypes.bool,
  showZoomControls: PropTypes.bool,
  t: PropTypes.func,
  updateViewport: PropTypes.func,
  viewer: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    zoom: PropTypes.number,
  }),
  windowId: PropTypes.string,
  zoomToWorld: PropTypes.func.isRequired,
};

ZoomControls.defaultProps = {
  displayDivider: true,
  showZoomControls: false,
  t: key => key,
  updateViewport: () => {},
  viewer: {},
  windowId: '',
};
