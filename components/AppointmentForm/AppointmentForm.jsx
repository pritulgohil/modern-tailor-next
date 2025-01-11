"use client";
import { useState } from "react";
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

const AppointmentForm = () => {
  const [date, setDate] = useState(null);
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false); // Manage dialog open/close state
  const { toast } = useToast();
  let IDUser = null;
  // if (userFromLocalStorage) {
  //   const user = JSON.parse(userFromLocalStorage);
  //   IDUser = user.id; // Access the id property
  // } else {
  //   console.log("No user found in localStorage.");
  // }

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
        userId: IDUser,
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
                        placeholder="Select a timezone"
                        value={service}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">
                          Eastern Standard Time (EST)
                        </SelectItem>
                        <SelectItem value="cst">
                          Central Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="mst">
                          Mountain Standard Time (MST)
                        </SelectItem>
                        <SelectItem value="pst">
                          Pacific Standard Time (PST)
                        </SelectItem>
                        <SelectItem value="akst">
                          Alaska Standard Time (AKST)
                        </SelectItem>
                        <SelectItem value="hst">
                          Hawaii Standard Time (HST)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Europe & Africa</SelectLabel>
                        <SelectItem value="gmt">
                          Greenwich Mean Time (GMT)
                        </SelectItem>
                        <SelectItem value="cet">
                          Central European Time (CET)
                        </SelectItem>
                        <SelectItem value="eet">
                          Eastern European Time (EET)
                        </SelectItem>
                        <SelectItem value="west">
                          Western European Summer Time (WEST)
                        </SelectItem>
                        <SelectItem value="cat">
                          Central Africa Time (CAT)
                        </SelectItem>
                        <SelectItem value="eat">
                          East Africa Time (EAT)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                        <SelectItem value="ist">
                          India Standard Time (IST)
                        </SelectItem>
                        <SelectItem value="cst_china">
                          China Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="jst">
                          Japan Standard Time (JST)
                        </SelectItem>
                        <SelectItem value="kst">
                          Korea Standard Time (KST)
                        </SelectItem>
                        <SelectItem value="ist_indonesia">
                          Indonesia Central Standard Time (WITA)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Australia & Pacific</SelectLabel>
                        <SelectItem value="awst">
                          Australian Western Standard Time (AWST)
                        </SelectItem>
                        <SelectItem value="acst">
                          Australian Central Standard Time (ACST)
                        </SelectItem>
                        <SelectItem value="aest">
                          Australian Eastern Standard Time (AEST)
                        </SelectItem>
                        <SelectItem value="nzst">
                          New Zealand Standard Time (NZST)
                        </SelectItem>
                        <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>South America</SelectLabel>
                        <SelectItem value="art">
                          Argentina Time (ART)
                        </SelectItem>
                        <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                        <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                        <SelectItem value="clt">
                          Chile Standard Time (CLT)
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
