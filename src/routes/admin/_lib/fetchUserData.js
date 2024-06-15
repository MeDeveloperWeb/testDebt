export default async function fetchUserData(access) {
  const baseURL = import.meta.env.VITE_BASE_API_URL;
  try {
    const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${access}`,
      'Content-Type': 'application/json'
    };

    const response = await fetch(`${baseURL}//DebtManagementForm/`, {
      method: 'GET',
      headers: headersList
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// function dummyData() {
//   return [
//     {
//       url: 'https://api.godebtfree.in/DebtManagementForm/1/',
//       form_id: 1,
//       debt_amount: 1000,
//       bank: 'HDFC Bsnk',
//       debt_type: 'type1',
//       first_name: 'John',
//       last_name: 'Wick',
//       phone: 8888888,
//       email: 'test@test.com'
//     },
//     {
//       url: 'https://api.godebtfree.in/DebtManagementForm/2/',
//       form_id: 2,
//       debt_amount: 1000,
//       bank: 'HDFC Bsnk',
//       debt_type: "['type1']",
//       first_name: 'John',
//       last_name: 'Wick',
//       phone: 8888888,
//       email: 'test@test.com'
//     }
//   ];
// }
