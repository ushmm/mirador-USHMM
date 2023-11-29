import MinimalWindow from '../containers/MinimalWindow';

/**
 * MosaicRenderPreview is used to for the preview when dragging a mosaic window/tile
*/
import { jsx as _jsx } from "react/jsx-runtime";
export function MosaicRenderPreview(props) {
  var t = props.t,
    title = props.title,
    windowId = props.windowId;
  return /*#__PURE__*/_jsx(MinimalWindow, {
    windowId: "".concat(windowId, "-preview"),
    label: t('previewWindowTitle', {
      title: title
    }),
    ariaLabel: false
  });
}
MosaicRenderPreview.defaultProps = {
  t: function t(k) {
    return k;
  },
  title: ''
};