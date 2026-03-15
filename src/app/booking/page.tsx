import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DateReserve from '@/components/DateReserve';

export default function BookingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      <h1 className="text-3xl font-semibold text-slate-800">Venue Booking</h1>

      <form>
        <TextField name="Name-Lastname" label="Name-Lastname" variant="standard" />
        <TextField name="Contact-Number" label="Contact-Number" variant="standard" />

        <FormControl variant="standard" sx={{ minWidth: 240 }}>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select id="venue" labelId="venue-label" defaultValue="">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve />

        <Button name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </form>
    </main>
  );
}
