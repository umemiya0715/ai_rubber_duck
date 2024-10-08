
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
      <a href="/" className="text-2xl font-bold text-blue-600">ai_rubber_duck</a>
      <div>
        <button type="button" className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white">
          ログイン
        </button>
        <button type="button" className="rounded-md bg-green-500 px-4 py-2 text-white">
          新規登録
        </button>
      </div>
    </nav>
  </header>
  );
}