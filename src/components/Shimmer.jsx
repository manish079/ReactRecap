export const Shimmer = ({ len }) => {
  return (
    <div className="shimmer-container flex flex-wrap gap-4">
      {Array.from({ length: len }).map((_, index) => (
        <div
          key={index}
          className="shimmer-card w-40 h-40 bg-gray-200 animate-pulse rounded"
        ></div>
      ))}
    </div>
  );
};
