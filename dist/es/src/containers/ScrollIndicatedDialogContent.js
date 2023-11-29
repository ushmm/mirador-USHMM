function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { withStyles } from '@material-ui/core/styles';
import { ScrollIndicatedDialogContent } from '../components/ScrollIndicatedDialogContent';

/**
 * Styles for the withStyles HOC
 */
var styles = function styles(theme) {
  var _shadowScrollDialog;
  return {
    shadowScrollDialog: (_shadowScrollDialog = {
      /* Shadow covers */
      background: "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ")
      // Shaddows
      + 'radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%,'
    }, _defineProperty(_shadowScrollDialog, "background", "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") // eslint-disable-line no-dupe-keys
    + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ")
    // Shaddows
    + 'radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;'), _defineProperty(_shadowScrollDialog, "backgroundAttachment", 'local, local, scroll, scroll'), _defineProperty(_shadowScrollDialog, "backgroundRepeat", 'no-repeat'), _defineProperty(_shadowScrollDialog, "backgroundSize", '100% 40px, 100% 40px, 100% 14px, 100% 14px'), _defineProperty(_shadowScrollDialog, "overflowY", 'auto'), _shadowScrollDialog)
  };
};
export default withStyles(styles)(ScrollIndicatedDialogContent);