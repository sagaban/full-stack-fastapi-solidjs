import {
  type ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/solid-table';
import { Table } from 'components/ui/table';
import { For, Show, splitProps } from 'solid-js';
import type { TableVariantProps } from 'styled-system/recipes';

export const MyTable = <T,>(
  props: { data: T[]; columns: ColumnDef<T>[]; caption?: string } & TableVariantProps,
) => {
  const [local, tableProps] = splitProps(props, ['data', 'columns', 'caption']);

  const table = createSolidTable({
    get data() {
      return local.data;
    },
    get columns() {
      return local.columns;
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table.Root {...tableProps}>
      <Show when={local.caption}>
        <Table.Caption>{local.caption}</Table.Caption>
      </Show>
      <Table.Head>
        <For each={table.getHeaderGroups()}>
          {(headerGroup) => (
            <Table.Row>
              <For each={headerGroup.headers}>
                {(header) => (
                  <Table.Header>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </Table.Header>
                )}
              </For>
            </Table.Row>
          )}
        </For>
      </Table.Head>
      <Table.Body>
        <For each={table.getRowModel().rows}>
          {(row) => (
            <Table.Row>
              <For each={row.getVisibleCells()}>
                {(cell) => (
                  <Table.Cell>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                )}
              </For>
            </Table.Row>
          )}
        </For>
      </Table.Body>
      <Table.Foot>
        <For each={table.getFooterGroups()}>
          {(footerGroup) => (
            <Table.Row>
              <For each={footerGroup.headers}>
                {(header) => (
                  <Table.Cell>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.footer, header.getContext())}
                  </Table.Cell>
                )}
              </For>
            </Table.Row>
          )}
        </For>
      </Table.Foot>
    </Table.Root>
  );
};
