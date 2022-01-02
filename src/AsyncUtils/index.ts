export const apiCall = (params: string) =>
  fetch(`https://restcountries.com/v2/${params}`).then((response) =>
    response.json()
  );

export const apiCallByAlphaCode = (params: string) =>
  fetch(`https://restcountries.com/v2/alpha?codes=${params}`).then((response) =>
    response.json()
  );
