import { Tabs, TabsContent } from "@ui/tabs";
import Header from "@components/admin/Header";
import Main from "@components/admin/Main";
import ProfileDropdown from "@components/admin/ProfileDropdown";
import Search from "@components/admin/Search";
import ThemeSwitch from "@components/admin/ThemeSwitch";
import { Checkbox } from "@components/ui/checkbox";
import { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import HttpClient from "@services/HttpClient";
import toast from "react-hot-toast";
import { HiDotsHorizontal } from "react-icons/hi";
import { Plus } from "lucide-react";
import DataTable from "@components/admin/DataTable";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import RegionService from "@services/RegionService";

export default function Index() {
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
                            (table.getIsSomePageRowsSelected() &&
                                "indeterminate")
                        }
                        onCheckedChange={(value) =>
                            table.toggleAllPageRowsSelected(!!value)
                        }
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
            accessorKey: "is_active",
            header: () => <div className="text-center">Tình trạng</div>,
            size: 100,
            cell: ({ row }) =>
                row.getValue("is_active") === 1 ? (
                    <FaCheckCircle
                        className="cursor-pointer text-[green] text-[20px] mx-auto"
                        onClick={() => changeStatus(row.getValue('id'))}
                    />
                ) : (
                    <FaMinusCircle
                        className="cursor-pointer text-[red] text-[20px] mx-auto"
                        onClick={() => changeStatus(row.getValue('id'))}
                    />
                ),
        },
        {
            accessorKey: "id",
            header: "",
            size: 20,
            cell: ({ row }) => {
                return (
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
                            >
                                <HiDotsHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[120px]">
                            <DropdownMenuItem
                                onClick={() =>
                                    navigate(
                                        `/admin/regions/${row.getValue('id')}`
                                    )
                                }
                            >
                                Sửa
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => deleteExperience(row.getValue('id'))}
                            >
                                Xoá
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    const changeStatus = async (id) => {
        const success = await RegionService.changeStatus(id);
        if (success) {
            getRegion();
        }
    }

    const getRegion = async () => {
        const regions = await RegionService.getListRegion();
        setData(regions);
    };

    const deleteExperience = async (id) => {
        const res = await HttpClient.delete(`/region/${id}`);

        if (res.status === 200) {
            toast.success("Xoá trải nghiệm thành công!");
            getRegion();
        } else {
            toast.error("Xoá trải nghiệm thất bại!");
        }
    };

    useEffect(() => {
        getRegion();
    }, []);

    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <div className="flex items-center justify-between w-full">
                    <Search />
                    <div className="flex gap-[20px]">
                        <ThemeSwitch />
                        <ProfileDropdown />
                    </div>
                </div>
            </Header>

            {/* ===== Main ===== */}
            <Main>
                <div className="mb-2 flex justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Vùng miền
                    </h1>
                    <div className="flex gap-3">
                        <Button
                            className="gap-2 cursor-pointer"
                            variant="default"
                            onClick={() => navigate("/admin/regions/add")}
                        >
                            Thêm vùng miền
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <Tabs
                    orientation="vertical"
                    defaultValue="overview"
                    className="space-y-4"
                >
                    <TabsContent value="overview" className="space-y-4">
                        <DataTable columns={columns} data={data} />
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    );
}
