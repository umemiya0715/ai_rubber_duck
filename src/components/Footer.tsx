export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
        <p>© 2024 ai_rubber_duck. All rights reserved.</p>
        <div>
          <a href="/privacy" className="mr-4">
            プライバシーポリシー
          </a>
          <a href="/terms" className="mr-4">
            利用規約
          </a>
          <a href="/contact">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
}
