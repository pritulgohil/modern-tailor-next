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
import { Button } from "@/components/ui/button";
import { useAppointments } from "@/context/AppointmentContext";
import { Skeleton } from "@/components/ui/skeleton";

function AppointmentTable() {
  const { appointments, setCurrentAppointment, setLoaderForAppointmentCard } =
    useAppointments();

  const handleSelect = (id) => {
    setCurrentAppointment(id);
    setLoaderForAppointmentCard(true);
    // console.log("Selected Appointment ID:", id);
  };

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
                  <Button onClick={() => handleSelect(appointment._id)}>
                    Select
                  </Button>
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
