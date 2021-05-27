const ImpressionAfterMaking = (): JSX.Element => (
  <div className="">
    <h5 className="underline text-2xl font-thin">振り返り</h5>
    <ul>
      <li>
        React.memoとuseMemoの使い分けの理解がまとまらず苦しんだ。memoについては、公式ドキュメントは「これはパフォーマンス最適化のためだけの方法です。バグを引き起こす可能性があるため、レンダーを「抑止する」ために使用しないでください。」と言う一方、ユーザーはカジュアルに使っており、齟齬があるように見える。今でもこのドキュメントをどう理解すればよいか判然としない。
      </li>
      <li>
        コンポーネントの設計としてpresentational &amp; container
        componentを意識した。また、不要なレンダリングを承知の上で更新系をuseEffectにまとめてロジックを理解しやすくした。しかし結果としてこれがuseMemoを使うとバグが発生する原因となり、一部コンポーネントはメモ化しないことになった。今後、更新系はイベントハンドラにまとめるようにしたい。
      </li>
      <li>Reactの関数型のパラダイムを</li>
    </ul>
  </div>
);

export default ImpressionAfterMaking;
