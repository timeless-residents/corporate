import "./app.css";
import satoMina from "/src/assets/sato-mina.jpg";


export function App() {
  return (
    <>
      <header>
        <div class="container">
          <nav>
            <div class="logo">
              <a href="#">
                <img src="logo.svg" id="logo" />
                Digital Wheel
              </a>
            </div>
            <ul class="nav-links">
              <li>
                <a href="#about">当社について</a>
              </li>
              <li>
                <a href="#business">事業内容</a>
              </li>
              <li>
                <a href="#representative">代表社員</a>
              </li>
              <li>
                <a href="#location">所在地</a>
              </li>
              <li>
                <a href="#contact">お問い合わせ</a>
              </li>
            </ul>
            <div class="burger">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero">
          <div class="container">
            <h1>Digital Wheel, llc.</h1>
            <p>Building the Future, Together</p>
          </div>
        </section>
        <section id="about">
          <div class="container">
            <h2>当社について</h2>
            <p>
              Digital
              Wheel合同会社は、代表社員である佐藤美那の「デジタルの力で、地域社会の絆を紡ぐ」というビジョンのもと、2024年4月に設立されました。私たちは、デジタルテクノロジーとイノベーションを通じて、地域課題の解決と持続可能な地域社会の実現を目指しています。
            </p>
            <p>
              当社の強みは、代表社員の佐藤美那がエンターテイメント業界とITの最前線で培ってきた経験とスキルにあります。クリエイティビティと技術力、そして何より人と人をつなぐ共感力を武器に、私たちは地域社会に革新的な変化をもたらすソリューションを提供します。
            </p>
            <p>
              私たちが特に注力しているのが、自治会DXの推進です。オンラインとオフラインの融合により、世代を超えた交流と協働を促進し、誰もが生き生きと活躍できる地域コミュニティの実現を目指しています。デジタル技術を活用した住民主体のまちづくりを通じて、地域の魅力を高め、持続的な発展を支援してまいります。
            </p>
          </div>
        </section>
        <section id="business">
          <div class="container">
            <h2>事業内容</h2>
            <ol>
              <li>
                自治会DXの推進および関連するデジタルソリューションの開発、提供
              </li>
              <li>
                地域課題解決に向けたITコンサルティング、システム設計・開発
              </li>
              <li>
                デジタル時代に対応した地域人材の育成、デジタルリテラシー向上支援
              </li>
              <li>官民連携によるスマートシティ、スマートタウンの企画、推進</li>
              <li>地域資源を活用した観光振興、文化交流事業のデジタル化支援</li>
              <li>
                エコシステム構築、オープンイノベーション促進による地域経済活性化
              </li>
              <li>環境・サステナビリティ分野におけるデジタル技術の活用推進</li>
              <li>
                次世代テクノロジー（AI、ブロックチェーン、IoT等）の地域実装コンサルティング
              </li>
            </ol>
            <p>
              私たちは、これらの事業を通じて、地域の皆様とともに歩み、地域の未来を切り拓いてまいります。デジタル技術を駆使し、地域ならではの強みを生かした課題解決と価値創造に取り組むことで、活力あふれる地域社会の実現を目指します。
            </p>
          </div>
        </section>
        <section id="representative">
          <div class="container">
            <h2>代表社員</h2>
            <div class="profile">
              {" "}
              <img src={satoMina} alt="佐藤美那" />
              <div class="profile-text">
                <h3>佐藤 美那</h3>
                <p>
                  Digital
                  Wheel合同会社の代表社員を務めます、佐藤美那と申します。
                </p>
                <p>
                  私は、エンターテイメント業界での経験を経て、大手通信キャリアのコールセンターでの就業を通じて培った社交性とコミュニケーション能力を軸に、オンラインコミュニティでの出会いをきっかけに、デジタル技術の世界に魅了されていきました。ITエンジニアとして活躍する夫の影響を受けながら、ブロックチェーンやAI、デジタルファブリケーションなど、次々と最先端技術へのチャレンジを重ねてまいりました。
                </p>
                <p>
                  そして、地域コミュニティとの交流を通じて、高齢化や人口減少といった地域課題の解決に、デジタル技術を活用したいという思いが芽生えました。エンタメ業界で培ったクリエイティビティと、最先端のIT技術を自在に操る力、そして何より、人と人をつなぐ共感力を武器に、地域社会に革新的な変化をもたらしたいと考えるようになりました。
                </p>
                <p>
                  こうした想いを胸に、私はDigital
                  Wheel合同会社を設立し、「デジタルの力で、地域社会の絆を紡ぐ」というビジョンを掲げ、自治会DXの推進に乗り出しました。オンラインとオフラインの融合により、世代を超えたつながりを取り戻し、誰もが活躍できる地域社会を実現することが私たちのミッションです。
                </p>
                <p>
                  一人一人の住民に寄り添い、信頼を積み重ねながら、地域の未来をデザインしていく。その挑戦には、私たちの想像を超えた可能性が潜んでいます。次代を切り拓く私たちの取り組みが、皆様に勇気を与えられれば幸いです。
                </p>
                <p>
                  Digital
                  Wheel合同会社は、デジタル技術を駆使して、地域社会により良い変化をもたらすことを使命としています。皆様のご支援、ご協力を賜りながら、地域の発展と幸せな未来の実現に向けて、全力で邁進してまいります。今後とも、どうぞよろしくお願い申し上げます。
                </p>
                <p>
                  Digital Wheel合同会社
                  <br />
                  代表社員　佐藤 美那
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="location">
          <div class="container">
            <h2>所在地</h2>
            <p>
              Digital
              Wheel合同会社の本社は、千葉県浦安市に位置しています。私たちが拠点を構える浦安市は、東京ディズニーリゾートを擁する国際的な観光都市であると同時に、生活の利便性と自然環境に恵まれた魅力的な街です。
            </p>
            <p>
              浦安市は近年、先進的なデジタル技術を活用したまちづくりにも力を入れています。私たちは、この地域特性を生かし、自治体や地域の企業、団体等と緊密に連携しながら、デジタル社会における新たなモデルケースの創出を目指してまいります。
            </p>
            <p>
              本社オフィスでは、クリエイティブでイノベーティブな発想を促すオープンな環境を整えています。地域の皆様や協業パートナーの方々をお迎えし、活発な議論と協働を通じて、地域の未来につながるプロジェクトを推進してまいります。
            </p>
          </div>
        </section>
        <section id="contact">
          <div class="container">
            <h2>お問い合わせ</h2>
            <p>
              Digital
              Wheel合同会社では、地域の皆様や企業・団体の方々との対話を何より大切にしております。私たちのビジョンや取り組みにご共感いただける方、また、地域課題解決やデジタル化促進において、ご相談やご提案がある方は、ぜひお気軽にお問い合わせください。
            </p>
            <p>
              お問い合わせは、下記のフォームよりお願いいたします。いただいたご連絡には、担当者が内容を拝見の上、できる限り迅速にご返信させていただきます。皆様からのメッセージを心よりお待ちしております。
            </p>
            <p>
              また、当社ウェブサイトやSNSでは、プロジェクトの最新情報や、地域の話題などを発信してまいります。ぜひフォローいただき、私たちの歩みにご注目ください。共に地域の未来を創っていく仲間として、皆様とつながれますことを楽しみにしております。
            </p>
            <form action="https://formspree.io/f/xzbnjoyq" method="post">
              {" "}
              <label for="name">お名前:</label>{" "}
              <input type="text" id="name" name="name" required />
              <label for="email">メールアドレス:</label>
              <input type="email" id="email" name="email" required />
              <label for="message">お問い合わせ内容:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">送信</button>
            </form>
            <div class="notice">
              <p>
                私たち Digital
                Wheel合同会社は、デジタル技術の力を信じ、地域の可能性を信じています。皆様との対話と協働を通じて、活力に満ちた地域社会の実現を目指してまいります。引き続き、皆様のご支援とご鞭撻を賜りますよう、心よりお願い申し上げます。
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container">
          <p>&copy; 2025 Digital Wheel, LLC. All rights reserved.</p>
        </div>
      </footer>
      <script src="app.js?v=2"></script>
    </>
  );
}
