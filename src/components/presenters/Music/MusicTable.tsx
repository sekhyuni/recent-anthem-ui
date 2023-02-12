import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import { createColumnHelper } from '@tanstack/react-table';

import Table from '~components/commons/Table/Table';
import { Album } from '~components/commons/Table/TableItem';
import * as MusicType from '~types/musicType';

export interface IMusicTable {
  data: MusicType.ListResponseType['data'];
}

const MusicTable = ({ data }: IMusicTable) => {
  const router = useRouter();

  const columnHelper =
    createColumnHelper<MusicType.ListResponseType['data'][0]>();

  const columns = [
    columnHelper.accessor('rank', {
      header: () => <span>랭킹</span>,
      cell: (info) => <span>{info.getValue()}</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('title', {
      header: () => <span>곡</span>,
      cell: (info) => <span>{info.getValue()}</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('artist', {
      header: () => <span>아티스트</span>,
      cell: (info) => <span>{info.getValue()}</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('album', {
      header: () => <span>앨범</span>,
      cell: (info) => <Album>{info.getValue()}</Album>,
      footer: (info) => info.column.id,
    }),
  ];

  const objOfColWidth: { [colIdx: number]: string } = {
    0: '10%',
    1: '40%',
    2: '20%',
    3: '30%',
  };

  return (
    <StyledTableWrapper>
      <Table
        data={data}
        columns={columns}
        handleTableRowClick={(
          rowData: MusicType.ListResponseType['data'][0]
        ) => {
          router.push({
            pathname: 'detail',
            query: {
              _id: rowData._id,
            },
          });
        }}
        objOfColWidth={objOfColWidth}
      />
    </StyledTableWrapper>
  );
};

const StyledTableWrapper = styled.div`
  .table-container > thead {
    border-top: 1px solid #c8ced3;
    & > tr > th {
      :nth-of-type(2) {
        text-align: start;
      }
    }
  }

  .table-container > tbody {
    & > tr > td {
      :nth-of-type(2) {
        text-align: start;
      }
    }
  }
`;
export default MusicTable;
