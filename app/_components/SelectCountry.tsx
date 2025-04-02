"use server";
import { getCountries } from "../_lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }: any) {
  const countries = await getCountries();
  const flag =
    countries.find(
      (country: { name: string; flag: string }) =>
        country.name === defaultCountry
    )?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c: { name: string; flag: string }) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
