import LoadingSpinner from "./loadingSpinner";

export const LoadingPage = () => {
  return (
    <div
      className="flex-1 flex items-center justify-center"
      data-testid="loading-page"
    >
      <div className="text-center space-y-4">
        <LoadingSpinner />
        <p className="text-white">Loading quiz...</p>
      </div>
    </div>
  );
};
