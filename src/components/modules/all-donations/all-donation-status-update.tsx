"use client";

import { updateDonationStatus } from "@/actions/donate.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DONATION_STATUS } from "@/constants/donation.const";
import { QUERY_KEY } from "@/constants/query.const";
import { useAsyncFormSubmit } from "@/hooks/use-async-form-submit";
import { useRefreshQuery } from "@/hooks/use-refresh-query";
import { createOptions } from "@/utils/form-utils";
import { Edit } from "lucide-react";
import { useState } from "react";

type AllDonationStatusUpdateProps = {
  donationId: string;
  currentStatus: string;
};

const statusOptions = createOptions(DONATION_STATUS);

export function AllDonationStatusUpdate({
  donationId,
  currentStatus,
}: AllDonationStatusUpdateProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>(currentStatus);

  const { refresh } = useRefreshQuery([QUERY_KEY.DONATION.DONATIONS]);

  const handleUpdateStatus = useAsyncFormSubmit<string, unknown>({
    mutateAsync: async (status: string) => {
      setIsPending(true);
      const response = await updateDonationStatus(donationId, status);
      setIsPending(false);
      return response;
    },
    loadingMessage: "Updating donation status...",
    successMessage: "Donation status updated successfully!",
    errorMessage: "Failed to update donation status.",
    onSuccess: async () => {
      setOpen(false);
      await refresh();
    },
    onError: () => {
      setOpen(false);
    },
  });

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
          Update Status
          <Edit className="size-4 ml-2" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Donation Status</AlertDialogTitle>
          <AlertDialogDescription>
            Select a new status for this donation. This will manually override the current state.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>New Status</Label>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger size="sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isPending}
            onClick={() => setOpen(false)}
          >
            Close
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending || selectedStatus === currentStatus}
            onClick={(e) => {
              e.preventDefault();
              handleUpdateStatus(selectedStatus);
            }}
          >
            {isPending ? "Updating..." : "Update"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
