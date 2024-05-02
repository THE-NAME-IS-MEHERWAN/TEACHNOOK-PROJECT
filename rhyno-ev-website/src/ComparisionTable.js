import React from 'react';
import { useTable } from 'react-table';

const ComparisonTable = () => {
  const data = [
    {
      name: 'SE03 Lite',
      battery: '1.8Kwh',
      batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
      batteryWarranty: '3 years',
      chargingTime: '3 hours (12A)',
      motor: '1500W',
      maxSpeed: '55 km/h',
      warrantyOnElectronics: '1 year',
      maxRange30: '100 km',
      maxRange45: '90 km',
      maxRangeFull: '60 km',
      otherKeyBenefits: 'Fire-safe, Range prediction, Comfortable ride, Stable and safe',
    },
    {
      name: 'SE03',
      battery: '2.7Kwh',
      batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
      batteryWarranty: '3 years',
      chargingTime: '4 hours (12A)',
      motor: '1500W',
      maxSpeed: '55 km/h',
      warrantyOnElectronics: '1 year',
      maxRange30: '150 km',
      maxRange45: '110 km',
      maxRangeFull: '90 km',
      otherKeyBenefits: 'Fire-safe, Range prediction, Comfortable ride, Stable and safe',
    },
    {
      name: 'SE03 Max',
      battery: '2.7Kwh',
      batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
      batteryWarranty: '3 years',
      chargingTime: '4 hours (12A)',
      motor: '2000W',
      maxSpeed: '65 km/h',
      warrantyOnElectronics: '1 year',
      maxRange30: '120 km',
      maxRange45: '100 km',
      maxRangeFull: '80 km',
      otherKeyBenefits: 'Fire-safe, Range prediction, Comfortable ride, Stable and safe',
    },
  ];

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Battery',
      accessor: 'battery',
    },
    {
      Header: 'Battery Features',
      accessor: 'batteryFeatures',
    },
    {
      Header: 'Battery Warranty',
      accessor: 'batteryWarranty',
    },
    {
      Header: 'Charging Time',
      accessor: 'chargingTime',
    },
    {
      Header: 'Motor',
      accessor: 'motor',
    },
    {
      Header: 'Max Speed',
      accessor: 'maxSpeed',
    },
    {
      Header: 'Warranty on Electronics',
      accessor: 'warrantyOnElectronics',
    },
    {
      Header: 'Max Range (30 km/h)',
      accessor: 'maxRange30',
    },
    {
Header: 'Max Range (45 km/h)',
      accessor: 'maxRange45',
    },
    {
      Header: 'Max Range (Full Speed)',
      accessor: 'maxRangeFull',
    },
    {
      Header: 'Other Key Benefits',
      accessor: 'otherKeyBenefits',
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ComparisonTable;