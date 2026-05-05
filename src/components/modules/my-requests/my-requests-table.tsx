"use client";

import { getMyRequests } from "@/actions/request.action";
import { requestTableColumns } from "@/components/modules/my-requests/my-request-table-columns";
import { ErrorMessage } from "@/components/shared/error-message";
import { DataTable } from "@/components/shared/table/data-table";
import { TypographyP } from "@/components/shared/typography";
import { QUERY_KEY } from "@/constants/query.const";
import useDataTable from "@/hooks/use-data-table";
import { useFetch } from "@/hooks/use-fetch";
import { useEffect, useState } from "react";
import { MyRequestsTableToolbar } from "./my-requests-table-toolbar";

type MyRequestsTableProps = {
  queryString: string;
};

export default function MyRequestsTable({ queryString }: MyRequestsTableProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data, isLoading, isError, error } = useFetch({
    queryKey: [QUERY_KEY.REQUEST.MY_REQUEST, queryString],
    queryFn: () => getMyRequests(queryString),
  });

  const requests = data?.data ?? [];

  const table = useDataTable({
    data: requests,
    columns: requestTableColumns,
  });

  if (!mounted || isLoading) {
    return <TypographyP className="text-center py-10 opacity-50">Loading your requests...</TypographyP>;
  }

  if (isError || !data?.success) {
    return <ErrorMessage message={data?.message ?? error?.message} />;
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <MyRequestsTableToolbar table={table} />
      <DataTable data={data} table={table} columns={requestTableColumns} />
    </div>
  );
}
