import { ChevronRight } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-blue-600">壁打ちゴロー</h1>
          <a href="/" className="text-blue-600 hover:text-blue-800">
            ホームに戻る
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold">利用規約</h2>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-gray-600">最終更新日: 2024年4月1日</p>
          <p className="mb-4">
            以下の利用規約（以下、「本規約」）は、壁打ちゴロー（以下、「当社」）が提供するAIチャットサービス（以下、「本サービス」）の利用条件を定めるものです。本サービスをご利用いただく前に、本規約をよくお読みください。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. サービスの利用">
            <p>
              本サービスを利用することにより、ユーザーは本規約に同意したものとみなされます。本規約に同意しない場合は、本サービスを利用することはできません。
            </p>
          </Section>

          <Section title="2. ユーザーアカウント">
            <p>
              本サービスの利用にはアカウント登録が必要です。ユーザーは正確かつ最新の情報を提供し、セキュリティのためにアカウント情報を適切に管理する責任があります。
            </p>
          </Section>

          <Section title="3. プライバシーとデータの取り扱い">
            <p>
              当社は、ユーザーのプライバシーを尊重し、個人情報を適切に取り扱います。詳細については、当社のプライバシーポリシーをご参照ください。
            </p>
          </Section>

          <Section title="4. 禁止事項">
            <p>ユーザーは、以下の行為を行ってはいけません：</p>
            <ul className="mt-2 list-disc pl-5">
              <li>違法または有害なコンテンツの投稿</li>
              <li>他のユーザーへの嫌がらせや迷惑行為</li>
              <li>本サービスのシステムに対する不正アクセスや妨害</li>
              <li>当社または第三者の知的財産権の侵害</li>
            </ul>
          </Section>

          <Section title="5. サービスの変更および終了">
            <p>
              当社は、事前の通知なく本サービスの内容を変更、または終了する権利を有します。ユーザーは、本サービスの変更や終了によって生じた損害について、当社が責任を負わないことに同意するものとします。
            </p>
          </Section>

          <Section title="6. 免責事項">
            <p>
              当社は、本サービスの完全性、正確性、有用性について保証するものではありません。ユーザーは、自己の責任において本サービスを利用するものとします。
            </p>
          </Section>

          <Section title="7. 準拠法と管轄裁判所">
            <p>
              本規約の解釈および適用は日本法に準拠するものとし、本サービスに関連する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </Section>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            本規約に関してご不明な点がある場合は、以下の連絡先までお問い合わせください。
          </p>
          <a href="mailto:support@kabeuchi-goro.com" className="text-blue-600 hover:underline">
            support@kabeuchi-goro.com
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
          <p>© 2024 壁打ちゴロー. All rights reserved.</p>
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
        <ChevronRight className="mr-2 size-5 text-blue-600" />
        {title}
      </h3>
      <div className="pl-7">{children}</div>
    </section>
  );
}
