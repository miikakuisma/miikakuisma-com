export const ErrorComponent = ({ error }: { error: Error }) => {
  return (
    <div className="text-red-500 p-4">
      <h2>Error loading page</h2>
      <p>{error.message}</p>
    </div>
  );
}; 