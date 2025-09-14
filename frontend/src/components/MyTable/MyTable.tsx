import {
  type ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
} from '@tanstack/solid-table';
import { Table } from 'components/ui/table';
import { Text } from 'components/ui/text';
import { ArrowDownAZIcon, ArrowUpAZIcon } from 'lucide-solid';
import { createSignal, For, Match, Show, splitProps, Switch } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Flex } from 'styled-system/jsx';
import type { TableVariantProps } from 'styled-system/recipes';

export const MyTable = <T,>(
  props: {
    data: T[];
    columns: ColumnDef<T>[];
    caption?: string;
    hiddenFooter?: boolean;
  } & TableVariantProps,
) => {
  const [local, tableProps] = splitProps(props, ['data', 'columns', 'caption', 'hiddenFooter']);
  const [sorting, setSorting] = createSignal<SortingState>([]);

  const table = createSolidTable({
    get data() {
      return local.data;
    },
    get columns() {
      return local.columns;
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      get sorting() {
        return sorting();
      },
    },
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
                  <Table.Header
                    onClick={header.column.getToggleSortingHandler()}
                    colSpan={header.colSpan}
                    cursor="var(--header-cursor)"
                    width="var(--header-width)"
                    style={{
                      '--header-cursor': header.column.getCanSort() ? 'pointer' : 'default',
                      '--header-width':
                        (header.column.columnDef.meta as { width?: string })?.width ??
                        `${header.getSize()}px`,
                    }}
                    title={
                      header.column.getCanSort()
                        ? header.column.getNextSortingOrder() === 'asc'
                          ? 'Sort ascending'
                          : header.column.getNextSortingOrder() === 'desc'
                            ? 'Sort descending'
                            : 'Clear sort'
                        : undefined
                    }
                  >
                    <Flex alignItems="center" gap="1" width="min-content">
                      <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </Text>
                      <Switch fallback={<Box w="24px" />}>
                        <Match when={header.column.getIsSorted() === 'desc'}>
                          <ArrowUpAZIcon class={css({ color: 'fg.subtle' })} />
                        </Match>
                        <Match when={header.column.getIsSorted() === 'asc'}>
                          <ArrowDownAZIcon class={css({ color: 'fg.subtle' })} />
                        </Match>
                      </Switch>
                    </Flex>
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
      <Show when={!local.hiddenFooter}>
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
      </Show>
    </Table.Root>
  );
};
