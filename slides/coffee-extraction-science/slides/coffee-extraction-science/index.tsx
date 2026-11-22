import { Step, Steps } from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';
import coverPour from './assets/temperature-kettle.jpg';
import extractionBloom from './assets/extraction-pourover.jpg';
import methodPour from './assets/method-pourover.jpg';
import methodPress from './assets/method-frenchpress.jpg';
import methodEspresso from './assets/method-espresso.jpg';
import brewScale from './assets/brew-scale.jpg';
import temperatureSetup from './assets/cover-pourover.jpg';

const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';
const EASE_IN = 'cubic-bezier(0.7, 0, 0.84, 0)';

export const transition: SlideTransition = {
  duration: 560,
  exit: {
    duration: 360,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
      { opacity: 0, transform: 'translateY(-18px) scale(1.045)', filter: 'blur(8px)' },
    ],
  },
  enter: {
    duration: 560,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(32px) scale(0.93) rotate(-1deg)', filter: 'blur(12px)' },
      { opacity: 1, transform: 'translateY(-3px) scale(1.012) rotate(0.15deg)', filter: 'blur(0)' },
      { opacity: 1, transform: 'translateY(0) scale(1) rotate(0)', filter: 'blur(0)' },
    ],
  },
};

export const design: DesignSystem = {
  palette: { bg: '#F4EFE7', text: '#2B211B', accent: '#A65E3E' },
  fonts: {
    display: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft JhengHei", sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft JhengHei", sans-serif',
  },
  typeScale: { hero: 144, body: 36 },
  radius: 24,
};

const C = {
  paper: '#F4EFE7',
  card: '#FBF8F2',
  ink: '#2B211B',
  muted: '#74675C',
  coffee: '#A65E3E',
  caramel: '#C5935B',
  sage: '#65776B',
  line: '#DCCFC1',
  white: '#FFFDF9',
};

const TOTAL = '12';

type FrameProps = {
  page: string;
  section: string;
  title: ReactNode;
  scope?: string;
  wiki?: string;
  source?: string;
  children: ReactNode;
};

// 每頁標題直接寫「結論」；研究適用範圍收進右上角標籤，頁尾標出對應的 Wiki 頁與來源。
const Frame = ({ page, section, title, scope, wiki, source, children }: FrameProps) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: '96px 120px 84px',
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-body)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: C.muted, fontSize: 24, letterSpacing: 2 }}>
        <span style={{ width: 12, height: 12, borderRadius: 999, background: 'var(--osd-accent)' }} />
        <span>{section}</span>
      </div>
      {scope && (
        <span style={{ padding: '8px 18px', borderRadius: 999, border: `2px solid ${C.line}`, color: C.muted, fontSize: 22 }}>
          適用範圍：{scope}
        </span>
      )}
    </div>
    <h1 style={{ margin: '26px 0 38px', fontSize: 72, lineHeight: 1.16, letterSpacing: -2, fontWeight: 740 }}>{title}</h1>
    <div style={{ flex: '1 1 auto', minHeight: 0 }}>{children}</div>
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, color: C.muted, fontSize: 21 }}>
      <span>{page} / {TOTAL}</span>
      <span>
        {wiki && <>Wiki：{wiki}</>}
        {wiki && source && '　·　'}
        {source}
      </span>
    </footer>
  </div>
);

// 底部的「這頁帶走一句話」
const Takeaway = ({ children }: { children: ReactNode }) => (
  <div style={{ marginTop: 26, padding: '20px 28px', borderRadius: 18, background: C.ink, color: C.white, fontSize: 32, fontWeight: 650, lineHeight: 1.35, display: 'flex', gap: 18, alignItems: 'center' }}>
    <span style={{ color: C.caramel, fontSize: 24, letterSpacing: 2, whiteSpace: 'nowrap' }}>重點</span>
    <span>{children}</span>
  </div>
);

const StepLine = ({ number, label, text }: { number: string; label: string; text: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '64px 150px 1fr', alignItems: 'center', gap: 22, padding: '22px 0', borderBottom: `1px solid ${C.line}` }}>
    <span style={{ color: C.caramel, fontSize: 26, fontWeight: 700 }}>{number}</span>
    <strong style={{ fontSize: 36, lineHeight: 1.2 }}>{label}</strong>
    <span style={{ color: C.muted, fontSize: 30, lineHeight: 1.4, textWrap: 'pretty' } as CSSProperties}>{text}</span>
  </div>
);

const linkStyle = { color: C.coffee, textDecoration: 'underline', textUnderlineOffset: 4 } as const;

const Photo = ({ src, alt, credit, href, style }: { src: string; alt: string; credit: string; href: string; style?: CSSProperties }) => (
  <figure style={{ margin: 0, position: 'relative', overflow: 'hidden', borderRadius: 22, background: '#3B2B23', ...style }}>
    <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
    <figcaption style={{ position: 'absolute', inset: 'auto 0 0', padding: '30px 14px 11px', background: 'linear-gradient(transparent, rgba(26, 20, 16, 0.78))', color: C.white, fontSize: 17, lineHeight: 1.25 }}>
      <a href={href} target="_blank" rel="noreferrer" style={{ color: C.white, textDecoration: 'none' }}>{credit}</a>
    </figcaption>
  </figure>
);

const KEY_POINTS = [
  { n: '1', title: '濃淡 ≠ 萃取', text: 'TDS 看「杯子多濃」，EY 看「粉被帶出多少」。' },
  { n: '2', title: '旋鈕會互相牽動', text: '研磨、水溫、時間的效果，要連同沖煮方法一起看。' },
  { n: '3', title: '一次只改一項', text: '記錄條件與風味，用比較找出自己喜歡的一杯。' },
];

const KeyCard = ({ n, title, text, active }: { n: string; title: string; text: string; active?: boolean }) => (
  <div style={{ background: active ? C.ink : C.card, color: active ? C.white : C.ink, border: `1px solid ${active ? C.ink : C.line}`, borderRadius: 26, padding: '34px 34px 38px', boxSizing: 'border-box', height: '100%' }}>
    <div style={{ fontSize: 96, fontWeight: 760, lineHeight: 1, color: active ? C.caramel : C.coffee }}>{n}</div>
    <div style={{ marginTop: 26, fontSize: 46, fontWeight: 740 }}>{title}</div>
    <div style={{ marginTop: 16, fontSize: 30, lineHeight: 1.45, color: active ? '#E9DFD1' : C.muted }}>{text}</div>
  </div>
);

/* ---------- 01 封面 ---------- */
const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: '0 0 0 136px',
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-body)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      alignItems: 'center',
      gap: 72,
    }}
  >
    <div style={{ padding: '120px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: C.coffee, fontSize: 24, letterSpacing: 3, fontWeight: 700 }}>
        <span style={{ width: 13, height: 13, borderRadius: 999, background: C.coffee }} />
        咖啡萃取科學 · 初學者導讀
      </div>
      <h1 style={{ margin: '42px 0 28px', fontSize: 'var(--osd-size-hero)', lineHeight: 1.04, letterSpacing: -5, fontWeight: 760 }}>
        一杯咖啡，<br />
        如何被萃取？
      </h1>
      <p style={{ maxWidth: 820, margin: 0, color: C.muted, fontSize: 38, lineHeight: 1.5 }}>
        看懂兩個數字、三個旋鈕，<br />學會用「一次改一項」調整下一杯。
      </p>
      <div style={{ marginTop: 54, color: C.muted, fontSize: 24, letterSpacing: 1 }}>
        以手沖與浸泡為主例 · 義式濃縮作對照<br />依據 6 篇研究整理成的 LLM Wiki
      </div>
    </div>
    <Photo src={coverPour} alt="咖啡師以細口壺向濾杯注水" credit="Photo by Jakub Kapusnak · Unsplash" href="https://unsplash.com/photos/person-holding-gray-stainless-steel-kettle-Rt2t11IUizs" style={{ height: '100%', borderRadius: 0 }} />
  </div>
);

/* ---------- 02 學習目標 ---------- */
const Goals: Page = () => (
  <Frame page="02" section="學習目標" title="今天只要帶走三件事" wiki="萃取總覽（本 Wiki 的讀法）">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, height: 520 }}>
      {KEY_POINTS.map((k) => (
        <KeyCard key={k.n} {...k} />
      ))}
    </div>
    <p style={{ margin: '30px 0 0', color: C.muted, fontSize: 28 }}>
      順序：先學會「量」（重點 1）→ 再看「調」什麼（重點 2）→ 最後是「怎麼調」（重點 3）。
    </p>
  </Frame>
);

/* ---------- 03 萃取是什麼 ---------- */
const WhatIsExtraction: Page = () => (
  <Frame page="03" section="基本概念" title="萃取＝水把咖啡粉裡的物質帶進杯子" wiki="萃取總覽" source="S01">
    <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center' }}>
      <div>
        <Steps>
          <Step><StepLine number="01" label="接觸" text="研磨與粉床，決定水怎麼遇到咖啡粉。" /></Step>
          <Step><StepLine number="02" label="溶出" text="水溫、時間與水流，改變物質溶出的多寡。" /></Step>
          <Step><StepLine number="03" label="成杯" text="溶出的物質形成濃度、香氣與滋味。" /></Step>
        </Steps>
        <p style={{ margin: '28px 0 0', color: C.muted, fontSize: 28, lineHeight: 1.45 }}>
          不同物質溶出的速度不一樣，所以每個條件都會影響最後的味道。
        </p>
      </div>
      <Photo src={extractionBloom} alt="濾杯內咖啡粉浸潤、起泡的特寫" credit="Photo by William Figueroa · Unsplash" href="https://unsplash.com/photos/coffee-is-brewing-in-a-pour-over-coffee-maker-PIRNODAC1WA" style={{ height: 520 }} />
    </div>
    <Takeaway>研磨決定「怎麼接觸」，水溫和時間決定「溶出多少」，結果就是杯子裡的濃度和味道。</Takeaway>
  </Frame>
);

/* ---------- 04 重點 1：三個數字 ---------- */
const Formula = ({ tag, name, top, bottom, question, highlight }: { tag: string; name: string; top: string; bottom: string; question: string; highlight?: boolean }) => (
  <div style={{ background: highlight ? '#F1E4D6' : C.card, border: `2px solid ${highlight ? C.caramel : C.line}`, borderRadius: 24, padding: '30px 32px', boxSizing: 'border-box' }}>
    <div style={{ color: C.coffee, fontSize: 24, letterSpacing: 2, fontWeight: 700 }}>{tag}</div>
    <div style={{ margin: '10px 0 22px', fontSize: 52, fontWeight: 760 }}>{name}</div>
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', fontSize: 34, fontWeight: 650 }}>
      <span>{top}</span>
      <span style={{ alignSelf: 'stretch', height: 4, background: C.ink, margin: '8px 0', borderRadius: 4 }} />
      <span style={{ color: highlight ? C.coffee : C.ink }}>{bottom}</span>
    </div>
    <div style={{ marginTop: 26, color: C.muted, fontSize: 29, lineHeight: 1.4 }}>{question}</div>
  </div>
);

const ThreeNumbers: Page = () => (
  <Frame page="04" section="重點 1　濃淡 ≠ 萃取" title="TDS 和萃取率，差在「分母」" wiki="粉水比、濃度與萃取率" source="S03（萃取率定義 Eq. 13）">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      <Formula tag="配方" name="粉水比" top="水" bottom="咖啡粉" question="寫 1:16 時，要標清哪邊是粉。" />
      <Steps>
        <Step>
          <Formula tag="杯子" name="濃度 TDS" top="溶解固體" bottom="整杯飲品" question="這杯咖啡有多濃？" highlight />
        </Step>
      </Steps>
      <Steps>
        <Step>
          <Formula tag="咖啡粉" name="萃取率 EY" top="溶解固體" bottom="乾咖啡粉" question="粉裡的東西被帶出多少？" highlight />
        </Step>
      </Steps>
    </div>
    <Steps>
      <Step>
        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 22, padding: '16px 26px', border: `2px dashed ${C.caramel}`, borderRadius: 18, fontSize: 28, lineHeight: 1.35 }}>
          <span style={{ color: C.coffee, fontWeight: 700, whiteSpace: 'nowrap' }}>算算看</span>
          <span>15 g 粉，沖出 250 g 咖啡，TDS 1.3% → 溶解固體 250 × 1.3% ≈ 3.3 g → 萃取率 3.3 ÷ 15 ≈ <strong>22%</strong></span>
          <span style={{ marginLeft: 'auto', color: C.muted, fontSize: 20, whiteSpace: 'nowrap' }}>示範計算，非研究數據</span>
        </div>
      </Step>
    </Steps>
    <Takeaway>同一份溶解固體：除以「杯子」是濃度，除以「粉」是萃取率。</Takeaway>
  </Frame>
);

/* ---------- 05 重點 1：浸泡實驗 ---------- */
const ImmersionChart = () => (
  <svg viewBox="0 0 860 470" width="100%" height="470" role="img" aria-label="浸泡式研究概念圖：水粉比增加時 TDS 下降，萃取率約維持在 21%">
    <path d="M90 30 V400 H830" fill="none" stroke={C.line} strokeWidth="3" />
    <path d="M110 90 C260 210 420 290 810 345" fill="none" stroke={C.caramel} strokeWidth="9" strokeLinecap="round" />
    <path d="M110 170 H810" fill="none" stroke={C.coffee} strokeWidth="9" strokeLinecap="round" />
    <text x="420" y="150" fill={C.coffee} fontSize="30" fontWeight="700">萃取率 ≈ 21%（幾乎不變）</text>
    <text x="300" y="320" fill={C.caramel} fontSize="30" fontWeight="700">濃度 TDS ↓</text>
    <text x="90" y="448" fill={C.muted} fontSize="26">水／粉質量比 →（加更多水）</text>
  </svg>
);

const Immersion: Page = () => (
  <Frame page="05" section="重點 1　濃淡 ≠ 萃取" title="浸泡時多加水：咖啡變淡，萃取率卻幾乎不變" scope="浸泡式、接近平衡｜S03" wiki="粉水比、濃度與萃取率" source="S03">
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 44, alignItems: 'stretch' }}>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 24, padding: '20px 26px' }}>
        <ImmersionChart />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26 }}>
        <Steps>
          <Step><div style={{ fontSize: 30, lineHeight: 1.45 }}><strong>實驗怎麼做</strong><br /><span style={{ color: C.muted }}>粉和水泡到接近平衡，改變水粉比後量 TDS 和萃取率。</span></div></Step>
          <Step><div style={{ fontSize: 30, lineHeight: 1.45 }}><strong>看到什麼</strong><br /><span style={{ color: C.muted }}>水越多 TDS 越低，萃取率幾乎停在 21%。</span></div></Step>
        </Steps>
      </div>
    </div>
    <Takeaway>覺得太濃或太淡？先調粉水比——它主要改變的是「濃淡」。</Takeaway>
  </Frame>
);

/* ---------- 06 重點 2：研磨 ---------- */
// 粗／細研磨示意：同一面積內畫不同大小的顆粒（純示意，不代表實際粒徑分布）
const GrindSketch = ({ label, note, size }: { label: string; note: string; size: number }) => {
  const W = 400, H = 120, gap = size * 2.5;
  const dots: ReactNode[] = [];
  for (let y = size + 8; y <= H - size - 4; y += gap) {
    for (let x = size + 8; x <= W - size - 4; x += gap) {
      dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={size} fill={C.coffee} opacity={0.85} />);
    }
  }
  return (
    <div style={{ background: '#F1E4D6', border: `1px solid ${C.line}`, borderRadius: 16, padding: '12px 16px 14px' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="96" role="img" aria-label={`${label}示意圖`}>{dots}</svg>
      <div style={{ marginTop: 6, fontSize: 24, fontWeight: 700 }}>{label}</div>
      <div style={{ color: C.muted, fontSize: 20, lineHeight: 1.3 }}>{note}</div>
    </div>
  );
};
const Grind: Page = () => (
  <Frame page="06" section="重點 2　旋鈕會互相牽動" title="磨細，不一定萃得更多" scope="義式濃縮｜S02、S06" wiki="研磨與流動" source="S01、S02、S06">
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 52, alignItems: 'center' }}>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 24, padding: 22 }}>
        <svg viewBox="0 0 900 340" width="100%" height="250" role="img" aria-label="義式濃縮研究中，中間研磨設定萃取率較高的概念圖">
          <path d="M90 35 V280 H850" fill="none" stroke={C.line} strokeWidth="3" />
          <path d="M118 235 C240 228 275 180 365 140 C470 92 520 82 610 126 C705 172 756 222 830 239" fill="none" stroke={C.coffee} strokeWidth="10" strokeLinecap="round" />
          <circle cx="480" cy="101" r="14" fill={C.coffee} />
          <text x="102" y="322" fill={C.muted} fontSize="27">較粗</text>
          <text x="430" y="322" fill={C.muted} fontSize="27">中間設定</text>
          <text x="783" y="322" fill={C.muted} fontSize="27">較細</text>
          <text x="100" y="26" fill={C.muted} fontSize="24">萃取率（概念示意，無數值刻度）</text>
        </svg>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 8 }}>
          <GrindSketch label="粗研磨" note="顆粒大、縫隙多：水流快，接觸面積小" size={14} />
          <GrindSketch label="細研磨" note="顆粒小、粉床密：接觸面積大，水流慢且易不均" size={4.5} />
        </div>
      </div>
      <div>
      <Steps>
        <Step><div style={{ marginBottom: 20, fontSize: 30, lineHeight: 1.45 }}><strong>磨細 → 接觸面積變大</strong><br /><span style={{ color: C.muted }}>理論上可以溶出更多。</span></div></Step>
        <Step><div style={{ marginBottom: 20, fontSize: 30, lineHeight: 1.45 }}><strong>但粉床也變密</strong><br /><span style={{ color: C.muted }}>水流可能不均勻，部分粉沒被好好萃到。</span></div></Step>
        <Step><div style={{ fontSize: 30, lineHeight: 1.45 }}><strong>實驗結果：中間最高</strong><br /><span style={{ color: C.muted }}>太粗、太細都比較低。</span></div></Step>
      </Steps>
      </div>
    </div>
    <Takeaway>研磨同時改變「接觸面積」和「水流」，所以要邊調邊看流速。</Takeaway>
  </Frame>
);

/* ---------- 07 重點 2：水溫 ---------- */
const Temperature: Page = () => (
  <Frame page="07" section="重點 2　旋鈕會互相牽動" title="比較水溫之前，先看杯子結果" scope="滴濾、87–93°C｜S05" wiki="時間、水溫與風味" source="S05（含 2021 作者更正）">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 48, alignItems: 'center' }}>
      <div>
        <Steps>
          <Step><StepLine number="01" label="變因" text="用 87、90、93°C 三種水溫沖煮。" /></Step>
          <Step><StepLine number="02" label="控制" text="調研磨與時間，讓每杯 TDS／萃取率相同。" /></Step>
          <Step><StepLine number="03" label="結果" text="品評時，水溫本身沒有顯著的感官影響。" /></Step>
        </Steps>
      </div>
      <Photo src={temperatureSetup} alt="滴濾器與分享壺放在電子秤上的手沖配置" credit="Photo by Matthias Oberholzer · Unsplash" href="https://unsplash.com/photos/coffee-is-brewing-in-a-pour-over-setup-SpiXdOg0VP0" style={{ height: 470 }} />
    </div>
    <Takeaway>水溫會改變萃取；但濃度和萃取率相同時，87–93°C 的差別喝不太出來。</Takeaway>
  </Frame>
);

/* ---------- 08 重點 2：方法範圍 ---------- */
const MethodPanel = ({ name, accent, finding, photo, credit, href }: { name: string; accent: string; finding: string; photo: string; credit: string; href: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 22, padding: 18, boxSizing: 'border-box' }}>
    <Photo src={photo} alt={`${name}沖煮實拍`} credit={credit} href={href} style={{ height: 200, marginBottom: 20 }} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
      <span style={{ width: 10, height: 34, borderRadius: 9, background: accent }} />
      <strong style={{ fontSize: 34 }}>{name}</strong>
    </div>
    <p style={{ margin: 0, color: C.muted, fontSize: 28, lineHeight: 1.42 }}>{finding}</p>
  </div>
);

const Methods: Page = () => (
  <Frame page="08" section="重點 2　旋鈕會互相牽動" title="為什麼每個結論都要標「沖煮方法」？" wiki="萃取總覽、研磨與流動" source="浸泡 S03 · 滴濾 S04、S05 · 義式 S02、S06">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
      <MethodPanel name="浸泡" accent={C.caramel} finding="水和粉泡在一起到接近平衡；萃取率約 21% 是這裡測到的。" photo={methodPress} credit="Photo by Clay Banks · Unsplash" href="https://unsplash.com/photos/woman-pouring-coffee-from-french-press-into-cup-KCKksYf6-Y0" />
      <MethodPanel name="手沖滴濾" accent={C.sage} finding="水持續流過粉床；濃度、萃取率與烘焙度一起影響風味。" photo={methodPour} credit="Photo by syahmi syahir · Unsplash" href="https://unsplash.com/photos/barista-making-pour-over-coffee-with-a-gooseneck-kettle-AQTgvFfwOcg" />
      <MethodPanel name="義式濃縮" accent={C.coffee} finding="高壓、短時間通過緊密粉餅；研磨、流速與水溫互相影響。" photo={methodEspresso} credit="Photo by Scott K · Unsplash" href="https://unsplash.com/photos/fresh-espresso-pouring-from-a-coffee-machine-portafilter-O9AtwHvKkko" />
    </div>
    <Takeaway>水流方式不同，同一個旋鈕的效果就不同：研究結論＝結果＋方法範圍。</Takeaway>
  </Frame>
);

/* ---------- 09 重點 3：調整流程 ---------- */
const Decision = ({ when, then }: { when: string; then: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 44px 1.15fr', alignItems: 'center', gap: 12, padding: '26px 0', borderBottom: `1px solid ${C.line}` }}>
    <span style={{ fontSize: 34, fontWeight: 700 }}>{when}</span>
    <span style={{ color: C.caramel, fontSize: 30 }}>→</span>
    <span style={{ fontSize: 31, color: C.muted, lineHeight: 1.35 }}>{then}</span>
  </div>
);

const BrewLoop: Page = () => (
  <Frame page="09" section="重點 3　一次只改一項" title="把下一杯，變成一次小實驗" wiki="感官與調整方法、粉水比、研磨與流動" source="S03、S04">
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.75fr', gap: 46, alignItems: 'center' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 30, fontSize: 32, fontWeight: 700 }}>
          {['記錄條件', '描述味道', '只改一項'].map((t, i) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {i > 0 && <span style={{ color: C.caramel }}>→</span>}
              <span style={{ padding: '12px 22px', background: C.card, border: `1px solid ${C.line}`, borderRadius: 999 }}>{t}</span>
            </span>
          ))}
          <span style={{ color: C.caramel }}>↺</span>
        </div>
        <Steps>
          <Step><Decision when="太濃／太淡" then="先調粉水比，並寫清比例方向" /></Step>
          <Step><Decision when="想改萃取程度" then="調研磨，同時記錄流速／時間" /></Step>
          <Step><Decision when="結果跟預期相反" then="先記下來，再檢查方法與水流" /></Step>
        </Steps>
      </div>
      <Photo src={brewScale} alt="手沖咖啡與電子秤，顯示沖煮時的重量量測" credit="Photo by Ryan Spaulding · Unsplash" href="https://unsplash.com/photos/pour-over-coffee-brewing-on-a-digital-scale-lqb6W5RHgyU" style={{ height: 500 }} />
    </div>
    <Takeaway>數字是線索，不是分數：記錄是為了下一杯能比較。</Takeaway>
  </Frame>
);


const ReferenceCard = ({ id, title, detail, links }: { id: string; title: string; detail: string; links: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 14, padding: '24px 0', borderBottom: `1px solid ${C.line}` }}>
    <span style={{ alignSelf: 'start', color: C.coffee, fontWeight: 700, fontSize: 22 }}>{id}</span>
    <div>
      <div style={{ fontSize: 26, fontWeight: 680, lineHeight: 1.25 }}>{title}</div>
      <div style={{ marginTop: 8, color: C.muted, fontSize: 23, lineHeight: 1.3 }}>{detail}</div>
      <div style={{ marginTop: 8, fontSize: 22 }}>{links}</div>
    </div>
  </div>
);

/* ---------- 10 回顧 ---------- */
const Recap: Page = () => (
  <Frame page="10" section="重點回顧" title="回到一開始的三件事" wiki="萃取總覽">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, height: 400 }}>
      <KeyCard n="1" title="濃淡 ≠ 萃取" text="濃度看杯子、萃取率看粉；浸泡實驗中多加水只變淡。" active />
      <KeyCard n="2" title="旋鈕會互相牽動" text="磨細不一定萃更多；比較水溫前，先看杯子結果。" active />
      <KeyCard n="3" title="一次只改一項" text="記錄、描述、只改一項；數字是線索，不是好喝分數。" active />
    </div>
    <div style={{ marginTop: 34, textAlign: 'center', fontSize: 40, fontWeight: 720, color: C.coffee }}>
      一句話：先量清楚，再一次調一個旋鈕。
    </div>
  </Frame>
);

/* ---------- 11 參考來源 ---------- */
const Sources: Page = () => (
  <Frame page="11" section="參考來源" title="六篇研究，各有適用範圍" source="逐篇查核紀錄見 Wiki 的 raw/ 與 checks/source-audit.md">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 46, alignItems: 'start' }}>
      <div>
        <ReferenceCard id="S01" title="Coffee extraction: A review of parameters…" detail="Córdoba et al. · Trends in Food Science & Technology (2020)" links={<a style={linkStyle} href="https://doi.org/10.1016/j.tifs.2019.12.004" target="_blank" rel="noreferrer">DOI</a>} />
        <ReferenceCard id="S02" title="Systematically Improving Espresso" detail="Cameron et al. · Matter (2020)" links={<a style={linkStyle} href="https://doi.org/10.1016/j.matt.2019.12.019" target="_blank" rel="noreferrer">DOI</a>} />
        <ReferenceCard id="S03" title="An equilibrium desorption model for full immersion coffee" detail="Liang et al. · Scientific Reports (2021)" links={<><a style={linkStyle} href="https://doi.org/10.1038/s41598-021-85787-1" target="_blank" rel="noreferrer">DOI</a>　·　<a style={linkStyle} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7994670/" target="_blank" rel="noreferrer">PMC 全文</a></>} />
      </div>
      <div>
        <ReferenceCard id="S04" title="Effects of brew strength, brew yield, and roast…" detail="Frost et al. · Journal of Food Science (2020)" links={<><a style={linkStyle} href="https://doi.org/10.1111/1750-3841.15326" target="_blank" rel="noreferrer">DOI</a>　·　<a style={linkStyle} href="https://pubmed.ncbi.nlm.nih.gov/32652586/" target="_blank" rel="noreferrer">PubMed</a></>} />
        <ReferenceCard id="S05" title="Brew temperature at fixed strength and extraction…" detail="Batali et al. · Scientific Reports (2020); author correction (2021)" links={<><a style={linkStyle} href="https://doi.org/10.1038/s41598-020-73341-4" target="_blank" rel="noreferrer">論文 DOI</a>　·　<a style={linkStyle} href="https://doi.org/10.1038/s41598-021-82505-9" target="_blank" rel="noreferrer">更正 DOI</a></>} />
        <ReferenceCard id="S06" title="Influence of Flow Rate, Particle Size, and Temperature…" detail="Schmieder et al. · Foods (2023)" links={<><a style={linkStyle} href="https://doi.org/10.3390/foods12152871" target="_blank" rel="noreferrer">DOI</a>　·　<a style={linkStyle} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10418593/" target="_blank" rel="noreferrer">PMC 全文</a></>} />
      </div>
    </div>
    <div style={{ marginTop: 34, padding: '18px 24px', background: '#E9DFD1', borderRadius: 15, color: C.muted, fontSize: 24, lineHeight: 1.35 }}>
      S03、S06 已查讀開放全文；S01、S02、S04、S05 依摘要與出版頁查核，結論均限定在可查核範圍。
    </div>
  </Frame>
);

/* ---------- 12 附錄：簡報 ↔ Wiki ---------- */
const MAP: [string, string, string][] = [
  ['02–03　學習目標、萃取是什麼', '萃取總覽', 'S01'],
  ['04–05　重點 1：TDS 與萃取率', '粉水比、濃度與萃取率', 'S03'],
  ['06　重點 2：研磨', '研磨與流動', 'S01、S02、S06'],
  ['07　重點 2：水溫', '時間、水溫與風味', 'S05'],
  ['08　重點 2：方法範圍', '萃取總覽、研磨與流動', 'S02–S06'],
  ['09　重點 3：調整流程', '感官與調整方法', 'S03、S04'],
];

const Appendix: Page = () => (
  <Frame page="12" section="附錄" title="這份簡報如何由 LLM Wiki 產生" source="流程細節見 checks/workflow.md、log.md">
    <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 48 }}>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 0.55fr', gap: 12, padding: '0 0 12px', color: C.muted, fontSize: 22, letterSpacing: 1, borderBottom: `2px solid ${C.ink}` }}>
          <span>簡報頁</span><span>Wiki 知識頁</span><span>來源</span>
        </div>
        {MAP.map(([p, w, s]) => (
          <div key={p} style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 0.55fr', gap: 12, padding: '17px 0', borderBottom: `1px solid ${C.line}`, fontSize: 26, lineHeight: 1.3 }}>
            <span style={{ fontWeight: 650 }}>{p}</span><span>{w}</span><span style={{ color: C.coffee }}>{s}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          ['Ingest', '逐篇核對來源，寫入 raw/ 與 wiki/'],
          ['Query', '從 Wiki 回答「每頁要教什麼」'],
          ['Lint', '查引用、方向、適用範圍'],
          ['修正', '回到來源或 Wiki，再重跑'],
          ['簡報', '每頁只放 Wiki 有依據的內容'],
        ].map(([t, d], i, arr) => (
          <div key={t}>
            <div style={{ background: i === arr.length - 1 ? C.ink : C.card, color: i === arr.length - 1 ? C.white : C.ink, border: `1px solid ${C.line}`, borderRadius: 16, padding: '12px 20px' }}>
              <strong style={{ fontSize: 28 }}>{t}</strong>
              <div style={{ fontSize: 21, color: i === arr.length - 1 ? '#E9DFD1' : C.muted, marginTop: 2 }}>{d}</div>
            </div>
            {i < arr.length - 1 && <div style={{ textAlign: 'center', color: C.caramel, fontSize: 20, lineHeight: 1.1 }}>↓</div>}
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

export const notes = [
  '開場：今天不背數字，只學會看懂兩個數字、三個旋鈕，和一個調整方法。',
  '先講三件事，後面每一頁左上角都會標示它屬於哪個重點。',
  '萃取就是水把咖啡粉裡的物質帶進杯子。研磨管接觸，水溫和時間管溶出，最後變成杯子裡的濃度和味道。',
  '最重要的一頁：TDS 和萃取率分子一樣，都是溶解固體；差別只在分母，一個除以杯子，一個除以粉。用算算看那一列帶大家算一次：3.3 克溶解固體，除以 15 克粉，大約 22%。',
  'S03 的浸泡實驗：水加越多，咖啡越淡，但萃取率幾乎停在 21% 左右。所以想調濃淡，先動比例。注意這是浸泡式、接近平衡的結果。',
  '直覺會覺得磨越細萃越多，但義式研究發現中間設定最高，因為太細時水流不均勻。研磨同時影響接觸面積和水流。',
  'S05 先把每杯的濃度和萃取率控制成一樣，再比較 87 到 93 度，結果差別不顯著。水溫仍會改變萃取，所以比較兩杯時要先看杯子結果。',
  '前面每個結論都標了方法，因為浸泡、手沖、義式的水流方式完全不同，同一個旋鈕的效果不能直接搬。',
  '實作：記錄條件、描述味道、只改一項，然後循環。太濃太淡先調比例；想改萃取程度就調研磨並看流速；意外結果也要留下。',
  '回顧三件事。一句話：先量清楚，再一次調一個旋鈕。',
  '六篇研究與查核範圍。',
  '附錄：每一頁對應的 Wiki 頁與來源 ID，以及 Ingest、Query、Lint、修正到簡報的流程。',
];

export const meta: SlideMeta = {
  title: '咖啡萃取的科學',
  createdAt: '2026-11-15T11:32:30.380Z',
};

export default [
  Cover,
  Goals,
  WhatIsExtraction,
  ThreeNumbers,
  Immersion,
  Grind,
  Temperature,
  Methods,
  BrewLoop,
  Recap,
  Sources,
  Appendix,
] satisfies Page[];
