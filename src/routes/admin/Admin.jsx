import { useEffect, useState } from 'react';
import fetchUserData from './_lib/fetchUserData';

export default function AdminPanel() {
  const baseURL = import.meta.env.VITE_BASE_API_URL;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setData(data);
    };
    fetchData();
  }, [baseURL]);

  // Assuming that all entries have same length
  // this will work fine. and prevent calculation on every iteration
  const entryLength = Object.keys(data[0] || {}).length;

  return (
    <div className="w-full p-4">
      <table className="border border-[#36a186] border-solid w-full max-w-[1920px] rounded-lg table-fixed mx-auto my-0">
        <thead>
          <tr className="bg-[#36a18622] *:p-4 *:font-bold text-[#36a186]">
            <th>Index</th>
            <th colSpan={2}>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) =>
            Object.entries(entry).map(([key, value], j) => (
              <tr
                key={entry.form_id + '' + key}
                className="*:border *:border-[#36a186] *:border-solid *:px-4 *:py-2 *:break-words *:text-center [&:nth-of-type(even)]:bg-[#36a18622]"
              >
                {j === 0 && (
                  <td
                    rowSpan={entryLength}
                    className="align-middle text-[#36a186] font-bold text-lg"
                  >
                    {i + 1}
                  </td>
                )}
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
