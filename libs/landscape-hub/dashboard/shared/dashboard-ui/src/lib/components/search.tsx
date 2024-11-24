import { Input } from '@landscape/shadcn';


/**
 * @function Search
 * @description Renders a search input field with responsive width settings.
 * @return {JSX.Element} A div element containing a search input.
 */
export function Search(): JSX.Element {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
