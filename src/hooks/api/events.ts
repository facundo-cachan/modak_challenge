/**
 * Event API methods.
 *
 * @constructor
 */

import { apiInstance } from '.';

import type { AxiosRequestConfig } from 'axios';

class EventAPI {
  getAll = async ({ url = '/events', method = 'get' }: AxiosRequestConfig) => {
    const response = await apiInstance({ url, method, })
    return response
  };
}

export default new EventAPI()