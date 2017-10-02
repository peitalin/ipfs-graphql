import axios from 'axios';
import config from 'config';
import d from 'debug';
import winston from 'winston';
import jwtDecode from 'jwt-decode';
import Cache from 'node-cache';


let cache =  new Cache();
const debug = d('pds:core-logic');

export const isValid = (jwt) => {
  const { exp } = jwtDecode(jwt);
  return new Date() / 1000 < exp;
};
const {
  authUrl,
  searchUrl,
  clientId,
  clientSecret,
  propertyUrl,
} = config.get('coreLogic');

export const fetchNewToken = async () => {
  try {
    const { data: authResponse } = await axios.request({
      url: authUrl,
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      },
    });

    return authResponse.access_token;
  } catch (e) {
    debug('Failed to fetch an auth token', e);
    winston.error('Failed to fetch an auth token.', e);
    throw e;
  }
};


export const getToken = async () => {
  const authToken = cache.get('token');
  if (authToken && isValid(authToken)) {
    debug('Valid token in cache.  Returning.');
    return authToken;
  }
  debug('No valid auth token currently available, attempting to fetch a new one');
  const newToken = await fetchNewToken();
  debug('New Token fetched', { newToken });
  cache.set('token', newToken);
  return newToken;
};


export const lookupAddress = async (addressString) => {
  const token = await getToken();
  return axios.request({
    url: searchUrl,
    params: {
      q: addressString,
      access_token: token,
    },
  });
};

export const lookupProperty = async (propertyId) => {
  const token = await getToken();
  return axios.request({
    url: `${propertyUrl}${propertyId}.json`,
    params: {
      access_token: token,
      returnFields: 'address,attributes,avmDetailList,currentOwnershipList,contactList,developmentApplicationList,' +
        'externalReferenceList,featureList,forRentPropertyCampaignList,forSaleAgencyCampaignList,' +
        'ForSalePropertyCampaignList,legal,parcelList,propertyPhotoList,saleList,site,title',
    },
  });
};
