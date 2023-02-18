import styled from '@emotion/styled';

import { ComponentProps } from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { v4 as uuid } from 'uuid';

export interface ITableProps<TData> extends ComponentProps<'table'> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  handleTableRowClick?: (rowData: TData) => void;
  objOfColWidth: { [colIdx: number]: string };
}

const Table = <TData extends { [key: string]: any }>({
  data,
  columns,
  handleTableRowClick,
  objOfColWidth,
  ...rest
}: ITableProps<TData>): JSX.Element => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable role='grid' className='table-container' {...rest}>
      <colgroup>
        {columns.map((_, idx) => (
          <col key={uuid()} width={objOfColWidth[idx]} />
        ))}
      </colgroup>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <StyledTheadtr role='row' key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <StyledTh key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </StyledTh>
            ))}
          </StyledTheadtr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) =>
          typeof handleTableRowClick === 'function' ? (
            <StyledTbodytr
              role='row'
              key={row.id}
              $isLink={true}
              onClick={() => {
                handleTableRowClick(row.original);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <StyledTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </StyledTbodytr>
          ) : (
            <StyledTbodytr role='row' key={row.id} $isLink={false}>
              {row.getVisibleCells().map((cell) => (
                <StyledTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </StyledTbodytr>
          )
        )}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  table-layout: auto;
  width: 100%;
  box-sizing: content-box;
  line-height: 1.5;
`;

const StyledTheadtr = styled.tr`
  border-top: 1px solid #c8ced3;
`;

const StyledTh = styled.th`
  padding: 10px 18px;
  font-size: 0.875rem;
  font-weight: bold;
  box-sizing: content-box;
`;

const StyledTbodytr = styled.tr<{ $isLink: boolean | undefined }>`
  border-top: 1px solid #c8ced3;
  :first-of-type {
    border-top: 1px solid #111;
  }
  :last-of-type {
    border-bottom: 1px solid #111;
  }
  cursor: ${({ $isLink }) => $isLink && 'pointer'};
`;

const StyledTd = styled.td`
  padding: 10px 18px;
  font-size: 0.875rem;
  text-align: center;
  box-sizing: content-box;
`;

export default Table;
