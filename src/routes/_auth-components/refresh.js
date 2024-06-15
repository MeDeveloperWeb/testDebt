export default async function getRefreshedCredentials() {
  // return {
  //   role: 'admin',
  //   access: 'access'
  // };

  const baseURL = import.meta.env.VITE_BASE_API_URL;

  const headersList = {
    Accept: '*/*'
  };

  const response = await fetch(`${baseURL}/token/refresh/`, {
    method: 'POST',
    headers: headersList
  });

  if (!response.ok) {
    return {
      role: 'user',
      access: undefined
    };
  }

  const data = await response.json();

  return data;
}

export function isRevalidationRequired(access) {
  // If user doesn't have access or user access is expiring in less than 30 seconds return true
  // else false
  return !access || parseJwt(access).exp < Math.round(Date.now() / 1000) + 30;
}

function parseJwt(token) {
  // Doesn't verify jwt
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.log(error);
    return {
      error: 'Invalid JWT'
    };
  }
}
