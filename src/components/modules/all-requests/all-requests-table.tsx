"use client";

import { getAllRequests } from "@/actions/request.action";
import { allRequestsTableColumns } from "@/components/modules/all-requests/all-requests-table-columns";
import { ErrorMessage } from "@/components/shared/error-message";
import { DataTable } from "@/components/shared/table/data-table";
import { TypographyP } from "@/components/shared/typography";
import { QUERY_KEY } from "@/constants/query.const";
import useDataTable from "@/hooks/use-data-table";
import { useFetch } from "@/hooks/use-fetch";
import { useEffect, useState } from "react";
import { AllRequestsTableToolbar } from "./all-requests-table-toolbar";

type AllRequestsTableProps = {
  queryString: string;
};

export default function AllRequestsTable({
  queryString,
}: AllRequestsTableProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data, isLoading, isError, error } = useFetch({
    queryKey: [QUERY_KEY.REQUEST.ALL_REQUEST, queryString],
    queryFn: () => getAllRequests(queryString),
  });

  const requests = data?.data ?? [];

  const table = useDataTable({
    data: requests,
    columns: allRequestsTableColumns,
  });

  if (!mounted || isLoading) {
    return <TypographyP className="text-center py-10 opacity-50">Loading request portfolio...</TypographyP>;
  }

  if (isError || !data?.success) {
    return <ErrorMessage message={data?.message ?? error?.message} />;
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <AllRequestsTableToolbar table={table} />
      <DataTable data={data} table={table} columns={allRequestsTableColumns} />
    </div>
  );
}
