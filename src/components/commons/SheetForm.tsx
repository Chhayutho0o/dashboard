import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type SheetFormProps = {
  btnLabel: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const SheetForm = ({
  btnLabel,
  title,
  description,
  children
}: SheetFormProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          {btnLabel}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-[1000px] w-full">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && (
            <SheetDescription>
              {description}
            </SheetDescription>
          )}
        </SheetHeader>
        {children}
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right"
            >
              Name
            </Label>
            <Input
              id="name"
              value="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right"
            >
              Username
            </Label>
            <Input
              id="username"
              value="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetForm;
