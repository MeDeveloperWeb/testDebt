export default async function getAuthCredentials(formData) {
  const baseURL = import.meta.env.VITE_BASE_API_URL;

  const jsonFormData = {};

  formData.forEach(function (value, key) {
    jsonFormData[key] = value;
  });

  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json'
  };

  const bodyContent = JSON.stringify(jsonFormData);

  const response = await fetch(`${baseURL}/login/`, {
    method: 'POST',
    body: bodyContent,
    headers: headersList
  });

  if (!response.ok)
    return {
      access: undefined,
      role: 'user'
    };

  const data = await response.json();

  return {
    access: data.access,
    role: 'admin'
  };
}
