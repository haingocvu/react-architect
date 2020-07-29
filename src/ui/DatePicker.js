import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { TextField } from '@material-ui/core';
import { subDays, addDays, setHours, setMinutes } from 'date-fns';

function MyDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  function handleDateChange(date) {
    setStartDate(date);
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      customInput={<TextField label="Start Date" />}
      showTimeSelect
      timeCaption="Giờ"
      timeIntervals={15}
      minTime={setHours(setMinutes(new Date(), 0), 12)}
      maxTime={setHours(setMinutes(new Date(), 0), 18)}
      timeFormat="p"
      locale="vi"
      dateFormat="Pp"
      minDate={subDays(new Date(), 5)}
      maxDate={addDays(new Date(), 5)}
      showYearDropdown
      yearDropdownItemNumber={15}
      scrollableYearDropdown
    />
  );
}

export default MyDatePicker;
