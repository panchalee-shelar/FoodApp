const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 space-y-4"
          >
            {/* Image Placeholder */}
            <div className="h-40 w-full rounded-lg bg-gray-200 animate-pulse"></div>

            {/* Title Placeholder */}
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>

            {/* Subtitle Placeholder */}
            <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;