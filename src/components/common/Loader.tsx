export default function Loader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid gap-2">
        <div className="flex items-center justify-center space-x-2">
          <div className="h-3 w-3 animate-bounce1 rounded-full bg-main-3"></div>
          <div className="h-3 w-3 animate-bounce2 rounded-full bg-main-3"></div>
          <div className="h-3 w-3 animate-bounce3 rounded-full bg-main-3"></div>
        </div>
      </div>
    </div>
  );
}
