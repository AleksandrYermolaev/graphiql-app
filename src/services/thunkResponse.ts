import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'data/constants';
import { generateRequestParams } from 'helpers/generateRequestParams';
import { ApiPayloadType } from 'types';

export const getRequest = createAsyncThunk('resp/post', async (request: ApiPayloadType) => {
  try {
    const { requestBody, requestHeaders } = generateRequestParams(request);
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...requestHeaders,
      },
      body: requestBody,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
});
