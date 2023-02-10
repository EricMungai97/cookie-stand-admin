import useResource from '../hooks/useResource';
import CookieStandRow from './CookieStandRow';

export default function ReportTable() {
  const { resources, deleteResource } = useResource();
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>6 am</th>
          <th>7 am</th>
          <th>8 am</th>
          <th>9 am</th>
          <th>10 am</th>
          <th>11 am</th>
          <th>12 pm</th>
          <th>1 pm</th>
          <th>2 pm</th>
          <th>3 pm</th>
          <th>4 pm</th>
          <th>5 pm</th>
          <th>6 pm</th>
          <th>7 pm</th>
          <th>totals</th>
        </tr>
      </thead>
      <tbody>
        {resources.map(stand => (

          <CookieStandRow key={stand.id} info={stand || [ ]} deleteStand={deleteResource} />
        ))}
      </tbody>
    </table>
  );
  // return props.reportTable.length > 0 ? (
  //   <table className="w-11/12 my-4 mr-20 ml-20 ">
  //     <thead>
  //       <tr className='bg-violet-400 ' >
  //         <th className="pl-2 text-white">Location</th>
  //         {hours.map((hour, idx) => {
  //           return (
  //             <th key={idx} className="pl-2  text-white">{hour}</th>
  //           );
  //         })}
  //         <th className="pl-2 text-white">Totals</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {sales.map((sale, idx) => {
  //         const city = Object.keys(sale)[0];
  //         const values = sale[city];
  //         return (
  //           <tr key={idx} className="bg-violet-300" >
  //             <td className="pl-2 border border-gray-400">{city}</td>
  //             {values.map((value, idx) => {
  //               return (
  //                 <td key="idx" className="pl-2 border border-gray-400 text-purple-900">{value}</td>
  //               );
  //             })}
  //           </tr>
  //         );
  //       })}
  //       <tr></tr>
  //     </tbody>
  //     <tfoot>
  //     </tfoot>
  //   </table>
  // ) : (
  //   <h2 className="text-center text-4xl">No Cookie Stands Available</h2>
  // );
}