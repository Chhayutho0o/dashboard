import { User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type RecentUsersProps = {
  data: User[];
};

const RecentUsers = ({ data }: RecentUsersProps) => {
  return (
    <div className="space-y-8">
      {data?.map((item: any) => (
        <div key={item.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.image} alt="Avatar" />
            <AvatarFallback>{item.firstName[0] + item.lastName[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.firstName + item.lastName}</p>
            <p className="text-sm text-muted-foreground">{item.email}</p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
      ))}
    </div>
  );
};

export default RecentUsers;
