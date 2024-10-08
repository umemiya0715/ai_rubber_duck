import { FaChevronRight, FaShieldAlt } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-blue-600">ai_rubber_duck</h1>
          <a href="/" className="text-blue-600 hover:text-blue-800">
            ホームに戻る
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-center">
          <FaShieldAlt className="mr-4 size-12 text-blue-600" />
          <h2 className="text-3xl font-bold">プライバシーポリシー</h2>
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-gray-600">最終更新日: 2024年4月1日</p>
          <p className="mb-4">
            ai_rubber_duck（以下、「当社」）は、ユーザーの個人情報の保護を重要視し、以下のプライバシーポリシーに基づいて個人情報を取り扱います。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 収集する情報">
            <p>当社は、サービスの提供に必要な以下の情報を収集します：</p>
            <ul className="mt-2 list-disc pl-5">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>利用履歴</li>
              <li>チャット内容</li>
            </ul>
          </Section>

          <Section title="2. 情報の利用目的">
            <p>収集した情報は、以下の目的で利用します：</p>
            <ul className="mt-2 list-disc pl-5">
              <li>サービスの提供と改善</li>
              <li>ユーザーサポート</li>
              <li>新機能や更新情報の通知</li>
              <li>統計データの作成と分析</li>
            </ul>
          </Section>

          <Section title="3. 情報の共有と開示">
            <p>当社は、以下の場合を除き、ユーザーの個人情報を第三者と共有または開示しません：</p>
            <ul className="mt-2 list-disc pl-5">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>サービス提供に必要な外部委託先との共有（ただし、適切な管理を行います）</li>
            </ul>
          </Section>

          <Section title="4. データの保護">
            <p>
              当社は、ユーザーの個人情報を保護するために適切な技術的・組織的措置を講じます。これには、暗号化、アクセス制限、定期的なセキュリティ監査などが含まれます。
            </p>
          </Section>

          <Section title="5. ユーザーの権利">
            <p>ユーザーには以下の権利があります：</p>
            <ul className="mt-2 list-disc pl-5">
              <li>個人情報へのアクセス</li>
              <li>個人情報の訂正</li>
              <li>個人情報の削除（「忘れられる権利」）</li>
              <li>データポータビリティ</li>
            </ul>
          </Section>

          <Section title="6. クッキーとトラッキング">
            <p>
              当社のウェブサイトでは、サービス向上のためにクッキーを使用しています。ユーザーはブラウザの設定でクッキーの使用を制限することができます。
            </p>
          </Section>

          <Section title="7. 子供のプライバシー">
            <p>
              当社のサービスは13歳未満の子供を対象としていません。13歳未満の子供の個人情報を意図的に収集することはありません。
            </p>
          </Section>

          <Section title="8. プライバシーポリシーの変更">
            <p>
              当社は、必要に応じてプライバシーポリシーを更新することがあります。重要な変更がある場合は、ウェブサイト上で通知します。
            </p>
          </Section>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            プライバシーポリシーに関するお問い合わせは、以下の連絡先までご連絡ください。
          </p>
          <a href="mailto:privacy@kabeuchi-goro.com" className="text-blue-600 hover:underline">
            privacy@ai.com
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
          <p>© 2024 ai_rubber_duck. All rights reserved.</p>
          <div>
            <a href="#" className="mr-4">
              プライバシーポリシー
            </a>
            <a href="#" className="mr-4">
              利用規約
            </a>
            <a href="#">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-4 flex items-center text-xl font-semibold">
        <FaChevronRight className="mr-2 size-5 text-blue-600" />
        {title}
      </h3>
      <div className="pl-7">{children}</div>
    </section>
  );
}
