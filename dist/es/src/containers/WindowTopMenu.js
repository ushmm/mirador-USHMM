import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { WindowTopMenu } from '../components/WindowTopMenu';
import { getConfig } from '../state/selectors';
import { withWorkspaceContext } from '../contexts/WorkspaceContext';

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopMenu
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    showThumbnailNavigationSettings: getConfig(state).thumbnailNavigation.displaySettings
  };
};

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowTopMenu
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDraggingEnabled: function toggleDraggingEnabled() {
      return dispatch(actions.toggleDraggingEnabled());
    }
  };
};
var enhance = compose(withTranslation(), withWorkspaceContext, connect(mapStateToProps, mapDispatchToProps), withPlugins('WindowTopMenu'));
export default enhance(WindowTopMenu);