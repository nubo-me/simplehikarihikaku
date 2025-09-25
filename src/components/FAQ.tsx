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

          <details className="faq-item">
            <summary className="faq-question">
              光回線とWiMAXの違いは何ですか？
            </summary>
            <div className="faq-answer">
              <p>光回線は固定回線で安定した高速通信が可能、WiMAXは持ち運び可能な無線回線です。安定性と速度重視なら光回線、外出先での利用重視ならWiMAXがおすすめです。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              工事不要の光回線はありますか？
            </summary>
            <div className="faq-answer">
              <p>マンションで既に光回線設備が導入済みの場合は、工事不要で利用開始できることがあります。詳細は各プロバイダーの提供エリア確認でご確認ください。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              契約期間なしの光回線はありますか？
            </summary>
            <div className="faq-answer">
              <p>契約期間なしのプランを提供しているプロバイダーもあります。ただし、月額料金が高めに設定されている場合が多いので、総合的にお得かどうか検討することをおすすめします。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              光回線の月額料金を安くする方法は？
            </summary>
            <div className="faq-answer">
              <p>スマホセット割の活用、キャッシュバックキャンペーンの利用、工事費無料キャンペーンの活用などで実質的な負担を軽減できます。当サイトの比較表をご活用ください。</p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">
              引越し時の光回線手続きはどうすれば良いですか？
            </summary>
            <div className="faq-answer">
              <p>引越し1〜2ヶ月前にプロバイダーに連絡して移転手続きを行います。引越し先のエリア確認、新居での工事日程調整が必要です。同じプロバイダーで継続すると手続きがスムーズです。</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};