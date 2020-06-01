import fetch from 'isomorphic-unfetch';
import normalizeUrl from 'normalize-url';
import { Utils } from 'manifesto.js/dist-esmodule/Utils';
import ActionTypes from './action-types';

/**
 * requestInfoResponse - action creator
 *
 * @param  {String} infoId
 * @memberof ActionCreators
 */
export function requestInfoResponse(infoId) {
  return {
    infoId,
    type: ActionTypes.REQUEST_INFO_RESPONSE,
  };
}

/**
 * receiveInfoResponse - action creator
 *
 * @param  {String} infoId
 * @param  {Object} manifestJson
 * @memberof ActionCreators
 */
export function receiveInfoResponse(infoId, infoJson, ok, tokenServiceId) {
  return {
    infoId,
    infoJson,
    ok,
    tokenServiceId,
    type: ActionTypes.RECEIVE_INFO_RESPONSE,
  };
}

/**
 * receiveDegradedInfoResponse - action creator
 *
 * @param  {String} infoId
 * @param  {Object} manifestJson
 * @memberof ActionCreators
 */
export function receiveDegradedInfoResponse(infoId, infoJson, ok, tokenServiceId) {
  return {
    infoId,
    infoJson,
    ok,
    tokenServiceId,
    type: ActionTypes.RECEIVE_DEGRADED_INFO_RESPONSE,
  };
}

/**
 * receiveInfoResponseFailure - action creator
 *
 * @param  {String} infoId
 * @param  {String} error
 * @memberof ActionCreators
 */
export function receiveInfoResponseFailure(infoId, error, tokenServiceId) {
  return {
    error,
    infoId,
    tokenServiceId,
    type: ActionTypes.RECEIVE_INFO_RESPONSE_FAILURE,
  };
}
/** @private */
function getAccessTokenService({ accessTokens }, iiifService) {
  if (!iiifService) return undefined;

  const services = Utils.getServices(iiifService).filter(s => s.getProfile().match(/http:\/\/iiif.io\/api\/auth\/1\//));

  for (let i = 0; i < services.length; i += 1) {
    const authService = services[i];
    const accessTokenService = Utils.getService(authService, 'http://iiif.io/api/auth/1/token');
    const token = accessTokens[accessTokenService.id];
    if (token && token.json) return token;
  }

  return undefined;
}

/**
 * fetchInfoResponse - action creator
 *
 * @param  {String} infoId
 * @memberof ActionCreators
 */
export function fetchInfoResponse({ imageId, imageResource }) {
  return ((dispatch, getState) => {
    const state = getState();
    const infoId = (imageId || imageResource.getServices()[0].id);
    const headers = {};

    const infoResponse = infoId
      && state.infoResponses
      && state.infoResponses[infoId]
      && !state.infoResponses[infoId].isFetching
      && state.infoResponses[infoId].json;

    const tokenService = getAccessTokenService(
      getState(),
      infoResponse || (imageResource && imageResource.getServices()[0]),
    );

    if (tokenService) {
      headers.Authorization = `Bearer ${tokenService.json.accessToken}`;
    }

    dispatch(requestInfoResponse(infoId));

    const tokenServiceId = tokenService && tokenService.id;
    return fetch(`${infoId.replace(/\/$/, '')}/info.json`, { headers })
      .then(response => response.json().then(json => ({ json, ok: response.ok })))
      .then(({ json, ok }) => {
        if (ok && normalizeUrl(infoId, { stripAuthentication: false }) === normalizeUrl(json.id || json['@id'], { stripAuthentication: false })) {
          dispatch(receiveInfoResponse(infoId, json, ok, tokenServiceId));
        } else {
          dispatch(receiveDegradedInfoResponse(infoId, json, ok, tokenServiceId));
        }
      })
      .catch(error => dispatch(receiveInfoResponseFailure(infoId, error, tokenServiceId)));
  });
}

/**
 * removeInfoResponse - action creator
 *
 * @param  {String} infoId
 * @memberof ActionCreators
 */
export function removeInfoResponse(infoId) {
  return { infoId, type: ActionTypes.REMOVE_INFO_RESPONSE };
}
