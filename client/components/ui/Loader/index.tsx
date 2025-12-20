import { Skeleton } from "./skeleton";
import { Spinner } from "./spinner";

export function CustomSkeleton() {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-3xl mb-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export const CustomSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <Spinner />
    </div>
  )
}
