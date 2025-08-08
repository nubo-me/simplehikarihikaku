import './FAQ.css';

export const FAQ = () => {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading">よくある質問</h2>
        
        <div className="faq-list">
          <details className="faq-item">
            <summary className="faq-question">
              光回線の開通工事はどのくらい時間がかかりますか？
            </summary>
            <div className="faq-answer">
              <p>一般的に、戸建ての場合は1〜2時間、マンションの場合は30分〜1時間程度です。ただし、設置状況によって時間が前後する場合があります。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              引っ越し先でも同じプロバイダーを使えますか？
            </summary>
            <div className="faq-answer">
              <p>引っ越し先が対応エリア内であれば、多くの場合継続利用が可能です。引っ越し手続きについては各プロバイダーにお問い合わせください。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              キャッシュバックはいつもらえますか？
            </summary>
            <div className="faq-answer">
              <p>キャッシュバックの受け取り時期は各プロバイダーによって異なります。開通後2〜12ヶ月後が一般的です。詳細は各社の公式サイトでご確認ください。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              光回線の速度が遅い場合はどうすればいいですか？
            </summary>
            <div className="faq-answer">
              <p>LANケーブルの確認、ルーターの再起動、WiFi機器の位置変更などをお試しください。それでも改善しない場合は、プロバイダーにお問い合わせください。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              スマホセット割とは何ですか？
            </summary>
            <div className="faq-answer">
              <p>スマホと光回線を同じ会社で契約することで、スマホ料金が毎月割引されるサービスです。家族全員分が対象になる場合も多く、お得に利用できます。</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};