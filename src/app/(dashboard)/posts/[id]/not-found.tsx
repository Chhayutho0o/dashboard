import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { EmptyPlaceholder } from "@/components/commons/empty-placeholder";

export default function PostNotFound() {
  return (
    <EmptyPlaceholder className="mx-auto max-w-[800px] mt-10">
      <EmptyPlaceholder.Icon name="warning" />
      <EmptyPlaceholder.Title>Post Not Found</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        This post cound not be found. Please try again.
      </EmptyPlaceholder.Description>
      <Link
        href="/posts"
        className={buttonVariants({
          variant: "ghost"
        })}
      >
        Go to post
      </Link>
    </EmptyPlaceholder>
  );
}
