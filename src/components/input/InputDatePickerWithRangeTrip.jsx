import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@components/ui/popover'
import InputSearchTrip from './InputSearchTrip'
// import { Button } from '@components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@components/ui/calendar'
import { useState } from 'react'
import { format } from 'date-fns'
// import { cn } from '@lib/utils'

const InputDatePickerWithRangeTrip = () => {
    const [date, setDate] = useState({
        from: null,
        to: null,
    })

    return (
        <InputSearchTrip
            label="How long is your trip?"
            iconSvg={<CalendarIcon className="text-[#D8DAE2] group-focus-within:text-[#007BFF]" />}
        >
            <Popover>
                <PopoverTrigger asChild className="text-[#C1C2C3] text-[20px]">
                    {date?.from ? (
                        date.to ? (
                            <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                            </>
                        ) : (
                            format(date.from, "LLL dd, y")
                        )
                    ) : (
                        <span>Add time</span>
                    )}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </InputSearchTrip>
    )
}

export default InputDatePickerWithRangeTrip