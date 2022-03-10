import { ResponseError } from 'helpers';
import { TRequestArgs } from 'api/types';
import { getUrl, getArgs } from 'api/mappers';

async function call<TResponse>(args: TRequestArgs): Promise<TResponse> {
  const response = await fetch(
    getUrl({ endpoint: args.endpoint, query: args.query }).href,
    getArgs(args),
  );
  const json = await response.json();

  if (!response.ok) {
    throw new ResponseError(json?.error || 'Request error');
  }

  return json as TResponse;
}

export default call;
