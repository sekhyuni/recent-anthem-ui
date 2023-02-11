import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import { createColumnHelper } from '@tanstack/react-table';

import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

type Dataset = {
  sequence: number;
  dataset_id: number;
  name: string;
  register: string;
  createdAt: string;
};

const data: Dataset[] = [
  {
    sequence: 1,
    dataset_id: 1,
    name: 'coffee_test1',
    register: 'admin',
    createdAt: '2023-01-25 10:50:31',
  },
  {
    sequence: 2,
    dataset_id: 2,
    name: 'coffee_test2',
    register: 'admin',
    createdAt: '2023-01-25 10:50:31',
  },
  {
    sequence: 3,
    dataset_id: 3,
    name: 'coffee_test3',
    register: 'admin',
    createdAt: '2023-01-25 10:50:31',
  },
  {
    sequence: 4,
    dataset_id: 4,
    name: 'coffee_test4',
    register: 'admin',
    createdAt: '2023-01-25 10:50:31',
  },
];

const StyledTableWrapper = styled.div`
  .table-container > thead {
    border-top: 1px solid #c8ced3;
  }

  .table-container > tbody {
    & > tr > td {
      :nth-child(2) {
        text-align: start;
      }
    }
  }
`;

export const Default = () => {
  const router = useRouter();

  const columnHelper = createColumnHelper<Dataset>();

  const columns = [
    columnHelper.accessor('sequence', {
      header: () => <span>순서</span>,
      cell: (info) => <i>{info.getValue()}</i>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('name', {
      header: () => <span>데이터셋 명</span>,
      cell: (info) => <i>{info.getValue()}</i>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('register', {
      header: () => <span>등록자</span>,
      cell: (info) => <i>{info.getValue()}</i>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('createdAt', {
      header: () => <span>등록일자</span>,
      cell: (info) => <i>{info.getValue()}</i>,
      footer: (info) => info.column.id,
    }),
  ];

  const objOfColWidth: { [colIdx: number]: string } = {
    0: '50px',
    1: '',
    2: '50px',
    3: '150px',
  };

  return (
    <StyledTableWrapper>
      <Table
        data={data}
        columns={columns}
        handleTableRowClick={(rowData: Dataset) => {
          router.push({
            pathname: 'detail',
            query: {
              dataset_id: rowData.dataset_id,
            },
          });
        }}
        objOfColWidth={objOfColWidth}
      />
    </StyledTableWrapper>
  );
};
