import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withPlugins } from '../extend/withPlugins';
import { FullScreenButton } from '../components/FullScreenButton';

/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */
var mapStateToProps = function mapStateToProps(_state) {
  return {};
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {};
var enhance = compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps), withPlugins('FullScreenButton'));
export default enhance(FullScreenButton);