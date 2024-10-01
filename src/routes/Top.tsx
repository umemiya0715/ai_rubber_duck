import { MessageSquare, Users, Lock, Zap } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function TopPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-blue-600">壁打ちゴロー</h1>
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

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            AIと一緒に、あなたの悩みを解決
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            壁打ちゴローは、特徴的なキャラクターを持つAIと対話しながら、あなたの悩みや思考を整理するためのサービスです。
          </p>
          <div className="mt-8">
            <a href={"/chat"} className="rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white">
              今すぐ始める
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h3 className="mb-8 text-center text-3xl font-bold">サービスの特徴</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<MessageSquare className="size-12 text-blue-500" />}
            title="24時間対応"
            description="いつでもどこでも、あなたの都合の良いタイミングで相談できます。"
          />
          <FeatureCard
            icon={<Users className="size-12 text-green-500" />}
            title="個性豊かなAI"
            description="様々な個性を持つAIキャラクターがあなたの相談相手になります。"
          />
          <FeatureCard
            icon={<Lock className="size-12 text-red-500" />}
            title="プライバシー保護"
            description="あなたの相談内容は厳重に保護され、安心して利用できます。"
          />
          <FeatureCard
            icon={<Zap className="size-12 text-yellow-500" />}
            title="思考の整理"
            description="対話を通じて、自分の考えを整理し、新しい気づきを得られます。"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="mb-4 text-3xl font-bold">今すぐ始めましょう</h3>
          <p className="mb-8 text-xl">新しい自分との出会いがあなたを待っています。</p>
          <button type="button" className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-blue-600">
            無料で試す
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
          <p>© 2024 壁打ちゴロー. All rights reserved.</p>
          <div>
            <a href="/privacy" className="mr-4">
              プライバシーポリシー
            </a>
            <a href="/terms" className="mr-4">
              利用規約
            </a>
            <a href="#">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-md">
      <div className="mb-4 flex justify-center">{props.icon}</div>
      <h4 className="mb-2 text-xl font-semibold">{props.title}</h4>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
}
