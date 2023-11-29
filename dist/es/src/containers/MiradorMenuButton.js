import { compose } from 'redux';
import { withPlugins } from '../extend/withPlugins';
import { MiradorMenuButton } from '../components/MiradorMenuButton';
import { withWorkspaceContext } from '../contexts/WorkspaceContext';
var enhance = compose(withWorkspaceContext, withPlugins('MiradorMenuButton'));
export default enhance(MiradorMenuButton);