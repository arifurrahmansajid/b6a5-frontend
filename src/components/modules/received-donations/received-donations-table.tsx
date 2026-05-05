"use client";

import { getReceivedDonations } from "@/actions/donate.action";
import { ErrorMessage } from "@/components/shared/error-message";
import { DataTable } from "@/components/shared/table/data-table";
import { TypographyP } from "@/components/shared/typography";
import { QUERY_KEY } from "@/constants/query.const";
import useDataTable from "@/hooks/use-data-table";
import { useFetch } from "@/hooks/use-fetch";
import { useEffect, useState } from "react";
import { donationTableColumns } from "./received-donations-table-columns";
import { ReceivedDonationsTableToolbar } from "./received-donations-table-toolbar";

type ReceivedDonationsTableProps = {
  queryString: string;
};

export default function ReceivedDonationsTable({
  queryString,
}: ReceivedDonationsTableProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data, isLoading, isError, error } = useFetch({
    queryKey: [QUERY_KEY.DONATION.RECEIVED_DONATIONS, queryString],
    queryFn: () => getReceivedDonations(queryString),
  });

  const donations = data?.data ?? [];

  const table = useDataTable({
    data: donations,
    columns: donationTableColumns,
  });

  if (!mounted || isLoading) {
    return <TypographyP className="text-center py-10 opacity-50">Loading received donations...</TypographyP>;
  }

  if (isError || !data?.success) {
    return <ErrorMessage message={data?.message ?? error?.message} />;
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <ReceivedDonationsTableToolbar table={table} />
      <DataTable data={data} table={table} columns={donationTableColumns} />
    </div>
  );
}
