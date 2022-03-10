import { HttpMethods } from 'common/enums';
import { TRequestArgs } from './types';
import call from './base';

export const get = async <TResponse>(
  args: Omit<TRequestArgs, 'method' | 'body'>,
): Promise<TResponse> => call<TResponse>({ ...args, method: HttpMethods.GET });

export const post = async <TResponse>(
  args: Omit<TRequestArgs, 'method'>,
): Promise<TResponse> => call<TResponse>({ ...args, method: HttpMethods.POST });
