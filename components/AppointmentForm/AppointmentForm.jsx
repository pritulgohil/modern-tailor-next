"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";

const AppointmentForm = () => {
  const [date, setDate] = useState(null);
  const [timezone, setTimezone] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    if (
      (inputValue === "" || /^[0-9]*$/.test(inputValue)) &&
      inputValue.length <= 10
    ) {
      setPhone(inputValue);
    }
  };

  const handleSubmit = () => {
    console.log("Appointment Details:");
    console.log("Service Timezone:", timezone);
    console.log("Selected Date:", date ? format(date, "PPP") : "Not selected");
    console.log("Selected Time:", selectedTime || "Not selected");
    console.log("Phone Number:", phone);
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div className="main-container flex flex-col items-center justify-center">
      <div className="appointment-form-container px-12 py-12 border border-solid border-slate-100 rounded-2xl w-4/12 max-w-lg my-12 shadow-md">
        <div className="services-container">
          <div className="services-header text-xl mb-2">
            <h3>Select Service</h3>
          </div>
          <div className="services-dropdown">
            <Select onValueChange={setTimezone}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a timezone" value={timezone} />
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
                  <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="cet">
                    Central European Time (CET)
                  </SelectItem>
                  <SelectItem value="eet">
                    Eastern European Time (EET)
                  </SelectItem>
                  <SelectItem value="west">
                    Western European Summer Time (WEST)
                  </SelectItem>
                  <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                  <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                  <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                  <SelectItem value="cst_china">
                    China Standard Time (CST)
                  </SelectItem>
                  <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                  <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
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
                  <SelectItem value="art">Argentina Time (ART)</SelectItem>
                  <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                  <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                  <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="calendar-container mt-5">
          <div className="calendar-header text-xl mb-2">
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
          <div className="calendar-header text-xl mb-2">
            <h3>Select Time</h3>
          </div>
          <div className="time-selector">
            <Select onValueChange={setSelectedTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a time" value={selectedTime} />
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
          <div className="calendar-header text-xl mb-2">
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
          <div className="calendar-header text-xl mb-2">
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
          <div className="phone-header text-xl mb-2">
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

        <div className="submit-container mt-8 flex items-center justify-center w-full">
          <Button
            className="w-6/12 text-white bg-black hover:bg-zinc-700 shadow-xl"
            onClick={handleSubmit}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
