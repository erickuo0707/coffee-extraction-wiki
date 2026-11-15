import { Step, Steps } from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';

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

const MethodPanel = ({ name, accent, first, second }: { name: string; accent: string; first: string; second: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 22, padding: 26, minHeight: 390, boxSizing: 'border-box' }}>
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg viewBox="0 0 520 520" width="440" height="440" role="img" aria-label="咖啡液滴與萃取漣漪圖示">
        <circle cx="260" cy="260" r="224" fill={C.card} stroke={C.line} strokeWidth="2" />
        <circle cx="260" cy="260" r="170" fill="none" stroke={C.caramel} strokeWidth="3" opacity="0.7" />
        <circle cx="260" cy="260" r="118" fill="none" stroke={C.coffee} strokeWidth="4" opacity="0.75" />
        <circle cx="260" cy="260" r="66" fill={C.coffee} />
        <path d="M260 176 C230 218 215 238 215 263 A45 45 0 0 0 305 263 C305 238 290 218 260 176Z" fill={C.white} opacity="0.96" />
        <path d="M180 337 C218 366 302 366 340 337" fill="none" stroke={C.sage} strokeWidth="8" strokeLinecap="round" />
        <circle cx="135" cy="167" r="10" fill={C.caramel} />
        <circle cx="374" cy="178" r="7" fill={C.sage} />
        <circle cx="376" cy="349" r="11" fill={C.caramel} />
      </svg>
    </div>
  </div>
);

const ExtractionProcess: Page = () => (
  <Frame page="02" section="萃取系統" title="萃取不是單一旋鈕" source="依據 S01 綜述">
    <p style={{ margin: '0 0 20px', color: C.muted, fontSize: 31, lineHeight: 1.4 }}>
      沖煮時，水接觸咖啡粉，粉中的部分物質進入飲品。
    </p>
    <Steps>
      <Step><StepLine number="01" label="接觸" text="研磨與粉床，決定水如何遇到咖啡。" /></Step>
      <Step><StepLine number="02" label="溶出" text="水溫、時間與流動，共同改變萃取過程。" /></Step>
      <Step><StepLine number="03" label="成杯" text="多種物質進入杯中，形成濃度與感官結果。" /></Step>
    </Steps>
    <div style={{ marginTop: 24, padding: '18px 24px', borderRadius: 18, background: '#E9DFD1', color: C.ink, fontSize: 27 }}>
      先問沖煮方法，再解讀任何數字或風味描述。
    </div>
  </Frame>
);

const GrindFlow: Page = () => (
  <Frame page="03" section="研磨與流動" title="磨細，不代表萃取一定升高" source="S02 義式濃縮模型與實驗；S06 義式萃取動態">
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 56, alignItems: 'center' }}>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 24, padding: 26 }}>
        <div style={{ color: C.muted, fontSize: 22, letterSpacing: 1.4 }}>S02 特定義式濃縮設定中的觀察趨勢</div>
        <svg viewBox="0 0 900 360" width="100%" height="330" role="img" aria-label="特定義式濃縮研究中間研磨設定萃取率較高的概念圖">
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 18 }}>
      <div style={{ background: C.card, borderRadius: 22, border: `1px solid ${C.line}`, padding: 25 }}>
        <div style={{ color: C.coffee, fontSize: 22, letterSpacing: 2 }}>01　比例</div>
        <div style={{ margin: '18px 0 10px', fontSize: 41, fontWeight: 720 }}>水 ÷ 粉</div>
        <Steps><Step><p style={{ margin: 0, color: C.muted, fontSize: 29, lineHeight: 1.35 }}>每份乾咖啡粉用了多少水？寫清分子與分母。</p></Step></Steps>
      </div>
      <div style={{ background: C.card, borderRadius: 22, border: `1px solid ${C.line}`, padding: 25 }}>
        <div style={{ color: C.coffee, fontSize: 22, letterSpacing: 2 }}>02　濃度</div>
        <div style={{ margin: '18px 0 10px', fontSize: 41, fontWeight: 720 }}>TDS</div>
        <Steps><Step><p style={{ margin: 0, color: C.muted, fontSize: 29, lineHeight: 1.35 }}>這杯飲品有多濃？描述液體中的溶解固體。</p></Step></Steps>
      </div>
      <div style={{ background: C.card, borderRadius: 22, border: `1px solid ${C.line}`, padding: 25 }}>
        <div style={{ color: C.coffee, fontSize: 22, letterSpacing: 2 }}>03　萃取率</div>
        <div style={{ margin: '18px 0 10px', fontSize: 41, fontWeight: 720 }}>EY</div>
        <Steps><Step><p style={{ margin: 0, color: C.muted, fontSize: 29, lineHeight: 1.35 }}>乾粉中約有多少可溶物進入了飲品？</p></Step></Steps>
      </div>
    </div>
    <div style={{ marginTop: 34, padding: '19px 24px', background: '#E9DFD1', borderRadius: 18, fontSize: 28, lineHeight: 1.4 }}>
      TDS 和 EY 相關，卻不是同一個量；數字也不能單獨決定好不好喝。
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
      />
      <MethodPanel
        name="滴濾"
        accent={C.sage}
        first="TDS、萃取百分比與烘焙程度，會一起影響感官描述。"
        second="單一咖啡與品評組的結果，不是普遍喜好規則。"
      />
      <MethodPanel
        name="義式濃縮"
        accent={C.coffee}
        first="流速、研磨與水溫在特定實驗中互相影響。"
        second="研究量測成分，不代表哪個設定最好喝。"
      />
    </div>
    <p style={{ margin: '22px 0 0', color: C.muted, fontSize: 24 }}>
      約 21% 只來自 S03 的浸泡式平衡研究，不是所有沖煮法的固定值。
    </p>
  </Frame>
);

const WaterTemperature: Page = () => (
  <Frame page="06" section="水溫與實驗設計" title="水溫，要連同研究設計一起看" source="S05 滴濾感官研究與 2021 作者更正">
    <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 64, alignItems: 'center' }}>
      <div style={{ padding: 34, background: C.card, borderRadius: 24, border: `1px solid ${C.line}`, textAlign: 'center' }}>
        <div style={{ color: C.muted, fontSize: 23, letterSpacing: 1 }}>滴濾測試溫度</div>
        <div style={{ margin: '30px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 36, fontWeight: 700, color: C.coffee }}>87°</span>
          <span style={{ color: C.caramel, fontSize: 28 }}>→</span>
          <span style={{ fontSize: 36, fontWeight: 700, color: C.coffee }}>90°</span>
          <span style={{ color: C.caramel, fontSize: 28 }}>→</span>
          <span style={{ fontSize: 36, fontWeight: 700, color: C.coffee }}>93°C</span>
        </div>
        <div style={{ height: 10, borderRadius: 99, background: `linear-gradient(90deg, ${C.caramel}, ${C.coffee})` }} />
      </div>
      <div>
        <Steps>
          <Step><StepLine number="01" label="控制結果" text="研究調整研磨與時間，讓 TDS／萃取率達到目標。" /></Step>
          <Step><StepLine number="02" label="比較感官" text="在這個設計下，溫度沒有顯著的獨立感官影響。" /></Step>
          <Step><StepLine number="03" label="保留範圍" text="只適用該滴濾測試與 87–93°C，不表示溫度永遠不重要。" /></Step>
        </Steps>
      </div>
    </div>
    <div style={{ marginTop: 22, color: C.muted, fontSize: 23 }}>
      S05 的作者更正修正配水方法單位；更正沒有推翻感官結果。
    </div>
  </Frame>
);

const BrewLoop: Page = () => (
  <Frame page="07" section="實作方法" title="把下一杯，變成可比較的試驗" source="操作流程綜合 Wiki；感官依據 S04">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 42 }}>
      <div style={{ minHeight: 350, padding: 28, background: C.card, border: `1px solid ${C.line}`, borderRadius: 22 }}>
        <div style={{ color: C.caramel, fontSize: 24, letterSpacing: 1 }}>先建立基準</div>
        <div style={{ margin: '22px 0', fontSize: 37, fontWeight: 700 }}>記下沖煮條件</div>
        <Steps><Step><div style={{ color: C.muted, fontSize: 29, lineHeight: 1.45 }}>方法、粉量、水量、溫度、時間；比例標清方向。</div></Step></Steps>
      </div>
      <div style={{ minHeight: 350, padding: 28, background: C.card, border: `1px solid ${C.line}`, borderRadius: 22 }}>
        <div style={{ color: C.caramel, fontSize: 24, letterSpacing: 1 }}>先觀察，再解釋</div>
        <div style={{ margin: '22px 0', fontSize: 37, fontWeight: 700 }}>寫下感官描述</div>
        <Steps><Step><div style={{ color: C.muted, fontSize: 29, lineHeight: 1.45 }}>記錄香氣、酸甜、苦味、厚薄與餘韻，不先貼標籤。</div></Step></Steps>
      </div>
      <div style={{ minHeight: 350, padding: 28, background: C.card, border: `1px solid ${C.line}`, borderRadius: 22 }}>
        <div style={{ color: C.caramel, fontSize: 24, letterSpacing: 1 }}>下一杯只改一項</div>
        <div style={{ margin: '22px 0', fontSize: 37, fontWeight: 700 }}>比較前後差異</div>
        <Steps><Step><div style={{ color: C.muted, fontSize: 29, lineHeight: 1.45 }}>保留意外結果；重複幾次，再判斷是否對自己有用。</div></Step></Steps>
      </div>
    </div>
    <div style={{ marginTop: 30, color: C.coffee, fontSize: 28, fontWeight: 650 }}>
      TDS 或 EY 是量測線索，不是個人喜好分數。
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
