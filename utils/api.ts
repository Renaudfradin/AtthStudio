export type ApiMethod = 'GET';

export interface CallApiOptions extends RequestInit {
  method?: ApiMethod;
  body?: any;
  headers?: Record<string, string>;
}

export async function callApi<T = any>(
  endpoint: string,
  options: CallApiOptions = {},
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error(
      "La variable NEXT_PUBLIC_API_BASE_URL n'est pas définie dans .env.local",
    );
  }
  const url = `${baseUrl}${endpoint}`;
  const { method = 'GET', body, headers, ...rest } = options;
  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    ...rest,
  };
  if (body !== undefined && method !== 'GET') {
    fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body);
  }
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur API (${response.status}): ${errorText}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  return response.text() as unknown as T;
}
