import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins';
import { getConfig, getTheme } from '../state/selectors';
import { AppProviders } from '../components/AppProviders';

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    createGenerateClassNameOptions: getConfig(state).createGenerateClassNameOptions,
    language: getConfig(state).language,
    theme: getTheme(state),
    translations: getConfig(state).translations
  };
};
var enhance = compose(connect(mapStateToProps), withPlugins('AppProviders'));
export default enhance(AppProviders);