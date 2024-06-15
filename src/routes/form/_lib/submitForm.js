export default async function submitForm({
  amount,
  bank,
  debtTypes,
  personalDetails
}) {
  const baseURL = import.meta.env.VITE_BASE_API_URL;

  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json'
  };

  const bodyContent = JSON.stringify({
    debt_amount: amount,
    bank: bank,
    debt_type: JSON.stringify(debtTypes),
    first_name: personalDetails.firstName,
    last_name: personalDetails.lastName,
    phone: personalDetails.phone,
    email: personalDetails.email
  });

  const response = await fetch(`${baseURL}/DebtManagementForm/`, {
    method: 'POST',
    body: bodyContent,
    headers: headersList
  });

  const data = await response.text();
  console.log(data);
}
