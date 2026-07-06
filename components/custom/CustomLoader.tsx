type CustomLoaderProps = {
  minHeightClass?: string;
  className?: string;
};

export default function CustomLoader({
  minHeightClass = "min-h-[400px]",
  className = "",
}: CustomLoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${minHeightClass} ${className}`}
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
    </div>
  );
}