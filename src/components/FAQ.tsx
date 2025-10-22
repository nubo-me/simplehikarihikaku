import { faqItems } from '../data/faq';
import './FAQ.css';

export const FAQ = () => {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading">よくある質問</h2>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary className="faq-question">{item.question}</summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};