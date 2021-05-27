const Explainer = (): JSX.Element => (
  <div className="">
    <h2 className="underline text-2xl font-bold">リバーシ</h2>
    <div className="mx-2 pt-2 text-lg">
      <p>リバーシです。React/TypeScriptを学ぶため作成しました。</p>
      <p>手番パス・ゲーム終了条件の実装に時間を掛けています。</p>

      <div>
        <h3 className="pt-3 text-pink-800 font-bold">アルゴリズム</h3>
        <p>
          勝敗チェックはクリックごとに作動するため、高速に動作しなければプレイヤーに悪印象を与えます。
          <br />
          アルゴリズムを効率化 (O(N^3) →
          O(N^2))することでレスポンス性を高め、快適に操作できるようにしています。
        </p>
      </div>

      <div>
        <h3 className="pt-3 text-pink-800 font-bold">パフォーマンスと設計</h3>
        <p>
          Reactのパフォーマンスチューニング（メモ化）で再レンダリングを抑えています。。
        </p>
      </div>
    </div>
    <p className="pt-10 underline font-sans text-2xl font-bold">使用技術</p>
    <ul className="mx-2 pt-2 space-y-1">
      <li>React Hooks</li>
      <li>TypeScript</li>
      <li>tailwindcss</li>
    </ul>
  </div>
);

export default Explainer;
