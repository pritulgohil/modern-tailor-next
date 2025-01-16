import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppointments } from "@/context/AppointmentContext";
import { Skeleton } from "@/components/ui/skeleton";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function AppointmentTable() {
  const { appointments } = useAppointments();
  console.log("Check this out", appointments);

  return (
    <>
      {appointments.length === 0 ? (
        <div className="skeleton-container w-full">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full mt-4" />
          <Skeleton className="h-10 w-full mt-4" />
          <Skeleton className="h-8 w-full mt-4" />
        </div>
      ) : (
        <Table>
          <TableCaption>A list of your recent appointments.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Date</TableHead>
              <TableHead className="w-[200px] text-left">Time</TableHead>
              <TableHead>Service</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment._id}>
                <TableCell>
                  {appointment.date ? appointment.date : "No date available"}
                </TableCell>
                <TableCell>{appointment.time || "No time available"}</TableCell>
                <TableCell>
                  {appointment.service || "No service selected"}
                </TableCell>
                <TableCell className="text-right">
                  <Button>Select</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Appointments</TableCell>
              <TableCell className="text-right">
                {appointments.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </>
  );
}

export default AppointmentTable;
