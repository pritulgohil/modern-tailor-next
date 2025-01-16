"use client";
import { useState } from "react";
import { useAppointments } from "@/context/AppointmentContext"; // Import the context
import { Button } from "@/components/ui/button";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useUser } from "@/context/UserContext";

const AppointmentForm = () => {
  const { appointments, addAppointment } = useAppointments(); // Access the appointments context
  const { user } = useUser();
  const [date, setDate] = useState(null);
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false); // Manage dialog open/close state
  const { toast } = useToast();

  // let IDUser = "123456";

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    if (
      (inputValue === "" || /^[0-9]*$/.test(inputValue)) &&
      inputValue.length <= 10
    ) {
      setPhone(inputValue);
    }
  };
  const handleSubmit = async () => {
    console.log("Appointment Details:");
    console.log("Service Timezone:", service);
    console.log("Selected Date:", date ? format(date, "PPP") : "Not selected");
    console.log("Selected Time:", time || "Not selected");
    console.log("Phone Number:", phone);
    console.log("Name:", name);
    console.log("Email:", email);

    try {
      // Define the data object
      const appointmentData = {
        service,
        date: date ? format(date, "PPP") : "null",
        time: time || "null",
        phone,
        name,
        email,
        userId: user,
      };

      console.log(appointmentData);

      // Send POST request to your API route
      const response = await fetch("/api/auth/appointment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Server Response:", result);
        addAppointment(result.appointment); // Update global state with the new appointment
        setOpen(false);
        toast({
          title: "Appointment Created",
          description: "You can manage this appointment later on.",
          className: "bg-green-500 text-white p-4 rounded-md",
        });
      } else {
        throw new Error("Failed to create appointment");
      }
    } catch (err) {
      console.error("Error:", err);
      toast({
        title: "Error",
        description: "There was an issue creating your appointment.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Book Appointment</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              Appointments may change or cancel, check timings here before
              coming in-store.
            </DialogDescription>
          </DialogHeader>
          <div className="main-container flex flex-col items-center justify-center">
            <div className="appointment-form-container w-full">
              <div className="services-container">
                <div className="services-header text-l mb-2">
                  <h3>Select Service</h3>
                </div>
                <div className="services-dropdown">
                  <Select onValueChange={setService}>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder="Select Service"
                        value={service}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Alteration Services</SelectLabel>
                        <SelectItem value="Hemming (Pants, Suits)">
                          Hemming (Pants, Suits)
                        </SelectItem>
                        <SelectItem value="Taking in/Letting Out (Waist, Hips, Chest)">
                          Taking in/Letting Out (Waist, Hips, Chest)
                        </SelectItem>
                        <SelectItem value="Sleeve Length Adjustment (Shirts, Jackets)">
                          Sleeve Length Adjustment (Shirts, Jackets)
                        </SelectItem>
                        <SelectItem value="Trouser Cuffs Adjustment">
                          Trouser Cuffs Adjustment
                        </SelectItem>
                        <SelectItem value="Jacket Waist Adjustment">
                          Jacket Waist Adjustment
                        </SelectItem>
                        <SelectItem value="Zipper Replacement (Jackets, Pants)">
                          Zipper Replacement (Jackets, Pants)
                        </SelectItem>
                        <SelectItem value="Button Replacement (Shirts, Suits)">
                          Button Replacement (Shirts, Suits)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Custom Clothing</SelectLabel>
                        <SelectItem value="Bespoke Suits (Tailored to your measurements)">
                          Bespoke Suits (Tailored to your measurements)
                        </SelectItem>
                        <SelectItem
                          value="Custom Shirts (Design and fit based on individual
                          preferences)"
                        >
                          Custom Shirts (Design and fit based on individual
                          preferences)
                        </SelectItem>
                        <SelectItem value="Custom Trousers/Pants (Design, fit, and fabric choice)">
                          Custom Trousers/Pants (Design, fit, and fabric choice)
                        </SelectItem>
                        <SelectItem value="Custom Blazers (Tailored to your style)">
                          Custom Blazers (Tailored to your style)
                        </SelectItem>
                        <SelectItem value="Tailored Vests (For suits, formal attire)">
                          Tailored Vests (For suits, formal attire)
                        </SelectItem>
                        <SelectItem
                          value="Custom Sport Coats (Perfect fit for casual or
                          semi-formal looks)"
                        >
                          Custom Sport Coats (Perfect fit for casual or
                          semi-formal looks)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Repairs & Maintenance</SelectLabel>
                        <SelectItem value="Mending Tears (Pants, Shirts, Jackets)">
                          Mending Tears (Pants, Shirts, Jackets)
                        </SelectItem>
                        <SelectItem value="Patching Holes (On Denim, Wool, and Other Fabrics)">
                          Patching Holes (On Denim, Wool, and Other Fabrics)
                        </SelectItem>
                        <SelectItem value="Replacing Zippers (Jackets, Bags, Pants)">
                          Replacing Zippers (Jackets, Bags, Pants)
                        </SelectItem>
                        <SelectItem value="Seam Repair (Trousers, Shirts, Jackets)">
                          Seam Repair (Trousers, Shirts, Jackets)
                        </SelectItem>
                        <SelectItem value="Leather Jacket Repair (Including stitching, zippers)">
                          Leather Jacket Repair (Including stitching, zippers)
                        </SelectItem>
                        <SelectItem value="Fixing Torn or Worn Pockets (Pants, Jackets)">
                          Fixing Torn or Worn Pockets (Pants, Jackets)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Special Occasion Tailoring</SelectLabel>
                        <SelectItem value="Wedding Suit Alterations">
                          Wedding Suit Alterations
                        </SelectItem>
                        <SelectItem value="Tuxedo Fitting & Alterations">
                          Tuxedo Fitting & Alterations
                        </SelectItem>
                        <SelectItem value="Groomsmen Suit Alterations">
                          Groomsmen Suit Alterations
                        </SelectItem>
                        <SelectItem value="Prom Suit Tailoring">
                          Prom Suit Tailoring
                        </SelectItem>
                        <SelectItem value="Custom Fit for Formal Events (Galas, Black Tie Events)">
                          Custom Fit for Formal Events (Galas, Black Tie Events)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Leather & Outerwear</SelectLabel>
                        <SelectItem value="Leather Jacket Alterations">
                          Leather Jacket Alterations
                        </SelectItem>
                        <SelectItem value="Custom Leather Jackets">
                          Custom Leather Jackets
                        </SelectItem>
                        <SelectItem value="Coat and Overcoat Tailoring">
                          Coat and Overcoat Tailoring
                        </SelectItem>
                        <SelectItem value="Wool Coat Alterations">
                          Wool Coat Alterations
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="calendar-container mt-5">
                <div className="calendar-header text-l mb-2">
                  <h3>Select Date</h3>
                </div>
                <div className="date-select-container">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="time-container mt-5">
                <div className="calendar-header text-l mb-2">
                  <h3>Select Time</h3>
                </div>
                <div className="time-selector">
                  <Select onValueChange={setTime}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a time" value={time} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Time Options</SelectLabel>
                        <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                        <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                        <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                        <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                        <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                        <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="name-container mt-5">
                <div className="calendar-header text-l mb-2">
                  <h3>Enter Name</h3>
                </div>
                <div className="name-input">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="name-container mt-5">
                <div className="calendar-header text-l mb-2">
                  <h3>Enter Email</h3>
                </div>
                <div className="name-input">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="phone-container mt-5">
                <div className="phone-header text-l mb-2">
                  <h3>Enter Phone</h3>
                </div>
                <div className="phone-input">
                  <Input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Book Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppointmentForm;
