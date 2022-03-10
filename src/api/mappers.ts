import { API_ROOT } from 'common/constants';
import { HttpMethods } from 'common/enums';
import { TRequestArgs, THeader, TBody, IRequestInit, IQuery } from 'api/types';

export function getArgs(args: TRequestArgs): IRequestInit {
  const headers: THeader = {};
  let body: TBody | null = null;
  const method = args.method || HttpMethods.GET;

  if (method !== HttpMethods.GET && args?.body) {
    if (args.body instanceof FormData) {
      body = args.body;
    } else {
      body = JSON.stringify(args.body);
      headers['Content-Type'] = 'application/json';
    }
  }

  headers.Accept = 'application/json';

  return {
    method,
    headers,
    ...(body ? { body } : {}),
  } as IRequestInit;
}

export function getUrl({
  endpoint,
  query,
}: {
  endpoint: string;
  query?: IQuery;
}): URL {
  const url = new URL(endpoint, API_ROOT);

  if (query) {
    Object.keys(query).forEach((key) => {
      url.searchParams.append(key, String(query[key]));
    });
  }

  return url;
}
