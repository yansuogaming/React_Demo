import { Tabs, TabsContent } from '@ui/tabs'
import Header from '@components/admin/Header'
import Main from '@components/admin/Main'
import ProfileDropdown from '@components/admin/ProfileDropdown'
import Search from '@components/admin/Search'
import ThemeSwitch from '@components/admin/ThemeSwitch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'
import { Checkbox } from '@components/ui/checkbox'
import { useEffect, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@components/ui/dropdown-menu'
import { useNavigate } from 'react-router'
import HttpClient from '@services/HttpClient'
import toast from 'react-hot-toast'
import { IoIosWarning } from 'react-icons/io'
import { HiDotsHorizontal } from "react-icons/hi"
import { Plus } from 'lucide-react'

export default function Experience() {
    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})
    const [rowSelection, setRowSelection] = useState({})
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    const columns = [
        {
            id: "select",
            size: 30,
            header: ({ table }) => (
                <div className="w-[20px]">
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() ||
                            (table.getIsSomePageRowsSelected() && "indeterminate")
                        }
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Select all"
                    />
                </div>
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "title",
            header: "Tiêu đề",
            size: 300,
            cell: ({ row }) => (
                <p className="text-sm font-medium text-gray-900">
                    {row.getValue("title")}
                </p>
            ),
        },
        {
            accessorKey: "created_at",
            header: () => <div className="text-center">Ngày tạo</div>,
            size: 100,
            cell: ({ row }) => (
                <p className="text-center">{row.getValue("created_at")}</p>
            ),
        },
        {
            accessorKey: "status",
            header: () => <div className="text-center">Tình trạng</div>,
            size: 100,
            cell: ({ row }) => (
                row.getValue("status") === 1 ? (
                    <CiCircleCheck className="text-[green] text-[20px] mx-auto" />
                ) : (
                    <IoIosWarning className="text-[#a75615] text-[20px] mx-auto" />
                )
            ),
        },
        {
            accessorKey: 'id',
            header: '',
            size: 20,
            cell: ({ row }) => {
                return (
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant='ghost'
                                className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
                            >
                                <HiDotsHorizontal className='h-4 w-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className='w-[120px]'>
                            <DropdownMenuItem onClick={() => navigate(`/admin/experience/edit/${row.getValue('id')}`)}>
                                Sửa
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => deleteExperience(row.getValue('id'))}>
                                Xoá
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
        },
    ];

    const getExperience = async (params = {}) => {
        const res = await HttpClient.get('/experience', {
            params
        })

        if (res.status === 200) {
            const data = res.data;
            setData(data.data);
        } else {
            toast.error('Lấy danh sách trải nghiệm thất bại!')
        }
    };

    const deleteExperience = async (id) => {
        const res = await HttpClient.delete(`/experience/${id}`)

        if (res.status === 200) {
            toast.success('Xoá trải nghiệm thành công!')
            getExperience();
        } else {
            toast.error('Xoá trải nghiệm thất bại!')
        }
    };

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    useEffect(() => {
        getExperience();
    }, []);

    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <div className='flex items-center justify-between w-full'>
                    <Search />
                    <div className='flex gap-[20px]'>
                        <ThemeSwitch />
                        <ProfileDropdown />
                    </div>
                </div>
            </Header>

            {/* ===== Main ===== */}
            <Main>
                <div className='mb-2'>
                    <h1 className='text-2xl font-bold tracking-tight'>Trải nghiệm</h1>
                </div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                    className='space-y-4'
                >
                    <TabsContent value='overview' className='space-y-4'>
                        <DataTableToolbar table={table} />
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <TableRow key={headerGroup.id}>
                                            {headerGroup.headers.map((header) => {
                                                return (
                                                    <TableHead width={header.getSize()} key={header.id}>
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                    </TableHead>
                                                )
                                            })}
                                        </TableRow>
                                    ))}
                                </TableHeader>
                                <TableBody>
                                    {table.getRowModel().rows?.length ? (
                                        table.getRowModel().rows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                data-state={row.getIsSelected() && "selected"}
                                            >
                                                {row.getVisibleCells().map((cell) => (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell
                                                colSpan={columns.length}
                                                className="h-24 text-center"
                                            >
                                                No results.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="flex items-center justify-end space-x-2 py-4">
                            <div className="flex-1 text-sm text-muted-foreground">
                                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                                {table.getFilteredRowModel().rows.length} row(s) selected.
                            </div>
                            <div className="space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    )
}

function DataTableToolbar({ table }) {
    let navigate = useNavigate();
    return (
        <div className='flex items-center justify-between'>
            <Input
                placeholder='Filter tasks...'
                value={(table.getColumn('title')?.getFilterValue()) ?? ''}
                onChange={(event) =>
                    table.getColumn('title')?.setFilterValue(event.target.value)
                }
                className='h-8 w-[150px] lg:w-[250px]'
            />
            <Button
                className="gap-2 cursor-pointer"
                variant="default"
                onClick={() => navigate('/admin/experiences/add')}
            >
                <Plus className="w-4 h-4" />
                Thêm trải nghiệm
            </Button>
        </div>
    )
}


