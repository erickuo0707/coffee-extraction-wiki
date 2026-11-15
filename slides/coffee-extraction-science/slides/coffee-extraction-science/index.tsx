import { Step, Steps } from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';
import coverPour from './assets/temperature-kettle.jpg';
import extractionBloom from './assets/extraction-pourover.jpg';
import groundsCoarse from './assets/grounds-coarse.jpg';
import groundsFine from './assets/grounds-fine.jpg';
import brewScale from './assets/brew-scale.jpg';
import methodPour from './assets/method-pourover.jpg';
import methodPress from './assets/method-frenchpress.jpg';
import methodEspresso from './assets/method-espresso.jpg';
import temperatureSetup from './assets/cover-pourover.jpg';

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';
const HOLD: Keyframe[] = [{ opacity: 1 }, { opacity: 1 }];

export const transition: SlideTransition = {
  duration: 280,
  exit: { duration: 280, easing: EASE_IN, keyframes: HOLD },
  enter: {
    duration: 280,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(10px) scale(0.985)', filter: 'blur(4px)' },
      { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
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

type FrameProps = {
  page: string;
  section: string;
  title: string;
  source?: string;
  children: ReactNode;
};

const Frame = ({ page, section, title, source, children }: FrameProps) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: '104px 120px',
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-body)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: C.muted, fontSize: 22, letterSpacing: 2 }}>
      <span style={{ width: 12, height: 12, borderRadius: 999, background: 'var(--osd-accent)' }} />
      <span>咖啡萃取科學</span>
      <span style={{ color: C.line }}>／</span>
      <span>{section}</span>
    </div>
    <h1
      style={{
        margin: '30px 0 34px',
        fontSize: 76,
        lineHeight: 1.14,
        letterSpacing: -2,
        fontWeight: 720,
        color: 'var(--osd-text)',
      }}
    >
      {title}
    </h1>
    <div style={{ flex: '1 1 auto', minHeight: 0 }}>{children}</div>
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28, color: C.muted, fontSize: 22 }}>
      <span>{page} / 08</span>
      <span>{source ?? '初學者導讀'}</span>
    </footer>
  </div>
);

const StepLine = ({ number, label, text }: { number: string; label: string; text: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '76px 250px 1fr', alignItems: 'center', gap: 24, padding: '22px 0', borderBottom: `1px solid ${C.line}` }}>
    <span style={{ color: C.caramel, fontSize: 25, fontWeight: 700 }}>{number}</span>
    <strong style={{ fontSize: 36, lineHeight: 1.2 }}>{label}</strong>
    <span style={{ color: C.muted, fontSize: 31, lineHeight: 1.35 }}>{text}</span>
  </div>
);

const MethodPanel = ({ name, accent, first, second, photo, credit, href }: { name: string; accent: string; first: string; second: string; photo: string; credit: string; href: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 22, padding: 18, minHeight: 440, boxSizing: 'border-box' }}>
    <Photo src={photo} alt={`${name}沖煮實拍`} credit={credit} href={href} style={{ height: 170, marginBottom: 18 }} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <span style={{ width: 10, height: 34, borderRadius: 9, background: accent }} />
      <strong style={{ fontSize: 31 }}>{name}</strong>
    </div>
    <Steps>
      <Step>
        <p style={{ margin: '0 0 20px', color: C.muted, fontSize: 28, lineHeight: 1.4 }}>{first}</p>
      </Step>
    </Steps>
    <Steps>
      <Step>
        <p style={{ margin: 0, color: C.muted, fontSize: 28, lineHeight: 1.4 }}>{second}</p>
      </Step>
    </Steps>
  </div>
);

const ReferenceCard = ({ id, title, detail, links }: { id: string; title: string; detail: string; links: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 14, padding: '14px 0', borderBottom: `1px solid ${C.line}` }}>
    <span style={{ alignSelf: 'start', color: C.coffee, fontWeight: 700, fontSize: 22 }}>{id}</span>
    <div>
      <div style={{ fontSize: 23, fontWeight: 680, lineHeight: 1.25 }}>{title}</div>
      <div style={{ marginTop: 5, color: C.muted, fontSize: 21, lineHeight: 1.3 }}>{detail}</div>
      <div style={{ marginTop: 5, fontSize: 20 }}>{links}</div>
    </div>
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

const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: '120px 136px',
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-body)',
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.7fr',
      alignItems: 'center',
      gap: 80,
    }}
  >
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: C.coffee, fontSize: 24, letterSpacing: 3, fontWeight: 700 }}>
        <span style={{ width: 13, height: 13, borderRadius: 999, background: C.coffee }} />
        COFFEE · SCIENCE · TASTE
      </div>
      <h1 style={{ margin: '42px 0 24px', fontSize: 'var(--osd-size-hero)', lineHeight: 1.04, letterSpacing: -5, fontWeight: 760 }}>
        一杯咖啡，<br />
        如何被萃取？
      </h1>
      <p style={{ maxWidth: 770, margin: 0, color: C.muted, fontSize: 38, lineHeight: 1.5 }}>
        從水與咖啡粉的接觸，到濃度、萃取率與風味。
      </p>
      <div style={{ marginTop: 54, color: C.muted, fontSize: 24, letterSpacing: 1 }}>
        初學者導讀　·　滴濾與浸泡為主，義式濃縮作比較
      </div>
    </div>
    <Photo src={coverPour} alt="咖啡師以細口壺向濾杯注水" credit="Photo by Jakub Kapusnak · Unsplash" href="https://unsplash.com/photos/person-holding-gray-stainless-steel-kettle-Rt2t11IUizs" style={{ height: 650 }} />
  </div>
);

const ExtractionProcess: Page = () => (
  <Frame page="02" section="萃取系統" title="萃取不是單一旋鈕" source="依據 S01 綜述">
    <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 44, alignItems: 'center' }}>
      <div>
        <p style={{ margin: '0 0 18px', color: C.muted, fontSize: 30, lineHeight: 1.4 }}>
          沖煮時，水接觸咖啡粉，粉中的部分物質進入飲品。
        </p>
        <Steps>
          <Step><StepLine number="01" label="接觸" text="研磨與粉床，決定水如何遇到咖啡。" /></Step>
          <Step><StepLine number="02" label="溶出" text="水溫、時間與流動，共同改變萃取過程。" /></Step>
          <Step><StepLine number="03" label="成杯" text="多種物質進入飲品，形成濃度與感官結果。" /></Step>
        </Steps>
        <div style={{ marginTop: 20, padding: '16px 22px', borderRadius: 18, background: '#E9DFD1', color: C.ink, fontSize: 26 }}>
          先問沖煮方法，再解讀數字或風味描述。
        </div>
      </div>
      <Photo src={extractionBloom} alt="濾杯內咖啡粉浸潤、起泡的特寫" credit="Photo by William Figueroa · Unsplash" href="https://unsplash.com/photos/coffee-is-brewing-in-a-pour-over-coffee-maker-PIRNODAC1WA" style={{ height: 510 }} />
    </div>
  </Frame>
);

const GrindFlow: Page = () => (
  <Frame page="03" section="研磨與流動" title="磨細，不代表萃取一定升高" source="S02 義式濃縮模型與實驗；S06 義式萃取動態">
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 56, alignItems: 'center' }}>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 24, padding: 22 }}>
        <div style={{ color: C.muted, fontSize: 22, letterSpacing: 1.4 }}>S02 特定義式濃縮設定中的觀察趨勢</div>
        <svg viewBox="0 0 900 360" width="100%" height="250" role="img" aria-label="特定義式濃縮研究中間研磨設定萃取率較高的概念圖">
          <path d="M90 35 V290 H850" fill="none" stroke={C.line} strokeWidth="3" />
          <path d="M118 245 C240 238 275 190 365 150 C470 102 520 92 610 136 C705 182 756 232 830 249" fill="none" stroke={C.coffee} strokeWidth="10" strokeLinecap="round" />
          <circle cx="118" cy="245" r="10" fill={C.caramel} />
          <circle cx="480" cy="111" r="13" fill={C.coffee} />
          <circle cx="830" cy="249" r="10" fill={C.caramel} />
          <text x="102" y="330" fill={C.muted} fontSize="25">較粗</text>
          <text x="435" y="330" fill={C.muted} fontSize="25">中間設定</text>
          <text x="783" y="330" fill={C.muted} fontSize="25">較細</text>
          <text x="90" y="25" fill={C.muted} fontSize="22">觀察到的萃取率方向（無數值刻度）</text>
        </svg>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Photo src={groundsCoarse} alt="Wikimedia Commons 實拍的粗研磨濕咖啡粉" credit="Romwriter · CC BY-SA 3.0 · 粗" href="https://commons.wikimedia.org/wiki/File:Coffee_grounds_coarse.jpg" style={{ height: 132 }} />
          <Photo src={groundsFine} alt="Wikimedia Commons 實拍的細研磨濕咖啡粉" credit="Romwriter · CC BY-SA 3.0 · 細" href="https://commons.wikimedia.org/wiki/File:Coffee_grounds_fine.jpg" style={{ height: 132 }} />
        </div>
      </div>
      <div>
        <Steps>
          <Step><div style={{ marginBottom: 26, fontSize: 31, lineHeight: 1.45 }}><strong>中間研磨設定附近較高</strong><br /><span style={{ color: C.muted }}>兩端在該實驗中都較低。</span></div></Step>
          <Step><div style={{ marginBottom: 26, fontSize: 31, lineHeight: 1.45 }}><strong>粉床流動也會改變</strong><br /><span style={{ color: C.muted }}>作者認為細磨端的下降與不均勻流動有關。</span></div></Step>
          <Step><div style={{ fontSize: 27, lineHeight: 1.45, color: C.coffee }}>這是義式濃縮的結果，不能直接套到手沖或浸泡。</div></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

const Measurements: Page = () => (
  <Frame page="04" section="量測指標" title="三個數字，回答三種問題" source="S03 浸泡研究；S04 滴濾感官；S06 義式研究">
    <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 0.8fr', gap: 32, alignItems: 'stretch', marginTop: 18 }}>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <div style={{ background: C.card, borderRadius: 22, border: `1px solid ${C.line}`, padding: 22 }}>
            <div style={{ color: C.coffee, fontSize: 22, letterSpacing: 2 }}>01　比例</div>
            <div style={{ margin: '14px 0 8px', fontSize: 38, fontWeight: 720 }}>水 ÷ 粉</div>
            <Steps><Step><p style={{ margin: 0, color: C.muted, fontSize: 27, lineHeight: 1.35 }}>每份乾粉用了多少水？寫清分子與分母。</p></Step></Steps>
          </div>
          <div style={{ background: C.card, borderRadius: 22, border: `1px solid ${C.line}`, padding: 22 }}>
            <div style={{ color: C.coffee, fontSize: 22, letterSpacing: 2 }}>02　濃度</div>
            <div style={{ margin: '14px 0 8px', fontSize: 38, fontWeight: 720 }}>TDS</div>
            <Steps><Step><p style={{ margin: 0, color: C.muted, fontSize: 27, lineHeight: 1.35 }}>這杯飲品有多濃？描述溶解固體。</p></Step></Steps>
          </div>
          <div style={{ background: C.card, borderRadius: 22, border: `1px solid ${C.line}`, padding: 22 }}>
            <div style={{ color: C.coffee, fontSize: 22, letterSpacing: 2 }}>03　萃取率</div>
            <div style={{ margin: '14px 0 8px', fontSize: 38, fontWeight: 720 }}>EY</div>
            <Steps><Step><p style={{ margin: 0, color: C.muted, fontSize: 27, lineHeight: 1.35 }}>乾粉中約有多少可溶物進入飲品？</p></Step></Steps>
          </div>
        </div>
        <div style={{ marginTop: 20, padding: '17px 22px', background: '#E9DFD1', borderRadius: 18, fontSize: 26, lineHeight: 1.4 }}>
          TDS 和 EY 相關，卻不是同一個量；數字也不能單獨決定好不好喝。
        </div>
      </div>
      <Photo src={brewScale} alt="手沖咖啡與電子秤，顯示沖煮時的重量量測" credit="Photo by Ryan Spaulding · Unsplash" href="https://unsplash.com/photos/pour-over-coffee-brewing-on-a-digital-scale-lqb6W5RHgyU" style={{ height: 430 }} />
    </div>
  </Frame>
);

const MethodComparison: Page = () => (
  <Frame page="05" section="方法範圍" title="同一個問題，方法不同，答案也不同" source="浸泡 S03　·　滴濾 S04　·　義式 S06">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 12 }}>
      <MethodPanel
        name="浸泡"
        accent={C.caramel}
        first="接近平衡時，增加水／粉比會降低 TDS。"
        second="測試範圍內 EY 約 21%，相對穩定。"
        photo={methodPress}
        credit="Photo by Clay Banks · Unsplash"
        href="https://unsplash.com/photos/woman-pouring-coffee-from-french-press-into-cup-KCKksYf6-Y0"
      />
      <MethodPanel
        name="滴濾"
        accent={C.sage}
        first="TDS、萃取百分比與烘焙程度，會一起影響感官描述。"
        second="單一咖啡與品評組的結果，不是普遍喜好規則。"
        photo={methodPour}
        credit="Photo by syahmi syahir · Unsplash"
        href="https://unsplash.com/photos/barista-making-pour-over-coffee-with-a-gooseneck-kettle-AQTgvFfwOcg"
      />
      <MethodPanel
        name="義式濃縮"
        accent={C.coffee}
        first="流速、研磨與水溫在特定實驗中互相影響。"
        second="研究量測成分，不代表哪個設定最好喝。"
        photo={methodEspresso}
        credit="Photo by Scott K · Unsplash"
        href="https://unsplash.com/photos/fresh-espresso-pouring-from-a-coffee-machine-portafilter-O9AtwHvKkko"
      />
    </div>
    <p style={{ margin: '22px 0 0', color: C.muted, fontSize: 24 }}>
      約 21% 只來自 S03 的浸泡式平衡研究，不是所有沖煮法的固定值。
    </p>
  </Frame>
);

const WaterTemperature: Page = () => (
  <Frame page="06" section="水溫與實驗設計" title="水溫，要連同研究設計一起看" source="S05 滴濾感官研究與 2021 作者更正">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 44, alignItems: 'center' }}>
      <div>
        <div style={{ marginBottom: 20, padding: 28, background: C.card, borderRadius: 24, border: `1px solid ${C.line}`, textAlign: 'center' }}>
          <div style={{ color: C.muted, fontSize: 23, letterSpacing: 1 }}>滴濾測試溫度</div>
          <div style={{ margin: '24px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: C.coffee }}>87°</span>
            <span style={{ color: C.caramel, fontSize: 28 }}>→</span>
            <span style={{ fontSize: 36, fontWeight: 700, color: C.coffee }}>90°</span>
            <span style={{ color: C.caramel, fontSize: 28 }}>→</span>
            <span style={{ fontSize: 36, fontWeight: 700, color: C.coffee }}>93°C</span>
          </div>
          <div style={{ height: 10, borderRadius: 99, background: `linear-gradient(90deg, ${C.caramel}, ${C.coffee})` }} />
        </div>
        <Steps>
          <Step><StepLine number="01" label="控制結果" text="研究調整研磨與時間，讓 TDS／萃取率達到目標。" /></Step>
          <Step><StepLine number="02" label="比較感官" text="在這個設計下，溫度沒有顯著的獨立感官影響。" /></Step>
          <Step><StepLine number="03" label="保留範圍" text="只適用該滴濾測試與 87–93°C，不表示溫度永遠不重要。" /></Step>
        </Steps>
      </div>
      <Photo src={temperatureSetup} alt="滴濾器與分享壺放在電子秤上的手沖配置" credit="Photo by Matthias Oberholzer · Unsplash" href="https://unsplash.com/photos/coffee-is-brewing-in-a-pour-over-setup-SpiXdOg0VP0" style={{ height: 465 }} />
    </div>
    <div style={{ marginTop: 16, color: C.muted, fontSize: 22 }}>
      S05 的作者更正修正配水方法單位；更正沒有推翻感官結果。
    </div>
  </Frame>
);

const BrewLoop: Page = () => (
  <Frame page="07" section="實作方法" title="把下一杯，變成可比較的試驗" source="操作流程綜合 Wiki；感官依據 S04">
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: 46, alignItems: 'center', marginTop: 18 }}>
      <div>
        <Steps>
          <Step><StepLine number="01" label="記下條件" text="方法、粉量、水量、溫度、時間；比例標清方向。" /></Step>
          <Step><StepLine number="02" label="觀察風味" text="記錄香氣、酸甜、苦味、厚薄與餘韻，不先貼標籤。" /></Step>
          <Step><StepLine number="03" label="只改一項" text="比較前後差異，保留意外結果，再重複確認。" /></Step>
        </Steps>
        <div style={{ marginTop: 20, color: C.coffee, fontSize: 27, fontWeight: 650 }}>
          TDS 或 EY 是量測線索，不是個人喜好分數。
        </div>
      </div>
      <div style={{ minHeight: 430, borderRadius: 28, background: '#E9DFD1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 420 420" width="390" height="390" role="img" aria-label="Q版咖啡豆小助手示範向濾杯注水的循環動畫">
          <style>{`
            @keyframes brew-drop-fall { 0% { transform: translateY(0); opacity: 1; } 68% { opacity: 1; } 100% { transform: translateY(118px); opacity: 0; } }
            @keyframes brew-stream-flow { to { stroke-dashoffset: -38px; } }
            @keyframes brew-steam-rise { 0%, 100% { opacity: .25; transform: translateY(0); } 50% { opacity: .85; transform: translateY(-8px); } }
            .brew-drop { animation: brew-drop-fall 1.5s ease-in infinite; }
            .brew-drop-late { animation-delay: .75s; }
            .brew-stream { animation: brew-stream-flow .8s linear infinite; }
            .brew-steam { animation: brew-steam-rise 2.3s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) { .brew-drop, .brew-stream, .brew-steam { animation: none; } }
          `}</style>
          <ellipse cx="210" cy="367" rx="146" ry="24" fill="#C7AB8F" opacity="0.45" />
          <path d="M296 89 C306 76 341 76 355 90 C369 104 366 126 351 137 L304 137 C285 129 282 104 296 89Z" fill="#D5B897" stroke="#6F5848" strokeWidth="6" strokeLinejoin="round" />
          <path d="M335 86 C337 73 348 69 357 75 L364 89" fill="none" stroke="#6F5848" strokeWidth="7" strokeLinecap="round" />
          <path d="M346 99 C374 89 384 109 376 130 C371 143 360 145 349 136" fill="none" stroke="#6F5848" strokeWidth="7" strokeLinecap="round" />
          <path d="M300 111 C282 121 267 143 253 160 L241 175" fill="none" stroke="#6F5848" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M130 304 L290 304 L263 350 L158 350Z" fill="#FFFDF9" stroke="#6F5848" strokeWidth="6" strokeLinejoin="round" />
          <path d="M154 322 Q210 335 266 322 L255 344 L167 344Z" fill="#A65E3E" />
          <path d="M176 350 L244 350 L252 379 L168 379Z" fill="#FFFFFF" stroke="#6F5848" strokeWidth="6" strokeLinejoin="round" />
          <path d="M186 365 Q210 372 235 365" fill="none" stroke="#A65E3E" strokeWidth="5" strokeLinecap="round" />
          <path className="brew-stream" d="M241 179 C237 222 219 264 213 314" fill="none" stroke="#278A96" strokeWidth="9" strokeLinecap="round" strokeDasharray="10 9" />
          <ellipse className="brew-drop" cx="241" cy="179" rx="10" ry="14" fill="#278A96" />
          <ellipse className="brew-drop brew-drop-late" cx="241" cy="179" rx="10" ry="14" fill="#278A96" />
          <path className="brew-steam" d="M180 279 C163 263 195 253 180 236 M214 279 C197 263 229 253 214 236 M248 279 C231 263 263 253 248 236" fill="none" stroke="#C5935B" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="102" cy="233" rx="62" ry="80" fill="#A65E3E" stroke="#6F5848" strokeWidth="6" transform="rotate(-12 102 233)" />
          <path d="M104 158 C82 192 79 268 107 307" fill="none" stroke="#C5935B" strokeWidth="7" strokeLinecap="round" opacity="0.8" />
          <circle cx="81" cy="226" r="6" fill="#2B211B" />
          <circle cx="119" cy="218" r="6" fill="#2B211B" />
          <path d="M89 247 Q103 262 119 243" fill="none" stroke="#2B211B" strokeWidth="5" strokeLinecap="round" />
          <circle cx="67" cy="240" r="8" fill="#E8A28C" opacity="0.8" />
          <circle cx="132" cy="233" r="8" fill="#E8A28C" opacity="0.8" />
          <path d="M51 282 Q21 302 40 320 M146 275 Q171 289 160 307" fill="none" stroke="#6F5848" strokeWidth="8" strokeLinecap="round" />
          <path d="M66 309 L59 330 M125 307 L134 329" fill="none" stroke="#6F5848" strokeWidth="8" strokeLinecap="round" />
        </svg>
        <div style={{ position: 'absolute', bottom: 16, right: 20, color: C.muted, fontSize: 18 }}>逐滴沖煮 · Q版動畫</div>
      </div>
    </div>
  </Frame>
);

const Sources: Page = () => (
  <Frame page="08" section="參考來源" title="六篇研究，六種適用範圍" source="逐篇查核紀錄見本 Wiki 的 raw/ 與 checks/source-audit.md">
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
    <div style={{ marginTop: 18, padding: '13px 18px', background: '#E9DFD1', borderRadius: 15, color: C.muted, fontSize: 20, lineHeight: 1.35 }}>
      S01、S02、S04、S05 的本次查核未取得完整主文；各頁結論均依可查核範圍限定。S03、S06 已查讀開放全文。
    </div>
  </Frame>
);

export const meta: SlideMeta = {
  title: '咖啡萃取的科學',
  createdAt: '2026-11-15T11:32:30.380Z',
};

export default [
  Cover,
  ExtractionProcess,
  GrindFlow,
  Measurements,
  MethodComparison,
  WaterTemperature,
  BrewLoop,
  Sources,
] satisfies Page[];
