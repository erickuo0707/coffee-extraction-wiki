# 操作紀錄

## [2026-11-15] project-init | 建立獨立專案

- 建立本機 Git repository：`coffee-extraction-wiki`。
- 建立 `raw/`、`wiki/`、`checks/`、`slides/` 目錄與 Wiki 工作規則。
- 本次沒有 ingest 任何來源，也沒有執行 Query、Lint 或修正；後續只記錄實際執行結果。

## [2026-11-15] workspace-correction | 將作業成果放回獨立專案

- **背景：** 使用者澄清 `coffee-notes` 是另一份作業，要求本作業留在此獨立 repository。
- **操作：** 將本次已逐篇核對的六筆 `raw/` 來源記錄、五頁 Wiki 與六份 `checks/` 文件移入此 repository；更新此處的索引與目錄說明。來源核對與逐篇整理均在 2026-11-15 實際完成，沒有補造研究或執行結果。
- **結果：** 後續檔案以此 repository 根目錄為準；恢復 `coffee-notes` 中本次誤放的新增檔案。

## [2026-11-15] ingest | S01 — Córdoba et al. (2020)

- **查核：** 核對 ScienceDirect 的文章書目與摘要索引；以期刊論文紀錄確認為 *Trends in Food Science & Technology* 綜述，DOI `10.1016/j.tifs.2019.12.004`。本次無法取得出版者全文頁面，因此未保存全文，也未把摘要當作全文閱讀。
- **原始來源記錄：** 新增 `raw/S01-cordoba-extraction-review.md`，記錄可取得範圍、重點與限制。
- **Wiki 修改：** 新增 `wiki/萃取總覽.md`；以 S01 建立「變因會互相牽動」的概念框架，並明示尚不能從一篇綜述推出特定最佳沖煮參數。
- **索引修改：** 將萃取總覽標記為已 ingest S01。
- **結果：** 第一篇完成來源記錄與 Wiki 整合；全文存取限制保留在來源頁，待後續來源補充可查核的實驗證據。

## [2026-11-15] ingest | S02 — Cameron et al. (2020)

- **查核：** 核對 ScienceDirect 出版紀錄與摘要，並交叉查閱 PNNL 的期刊論文紀錄；確認 *Matter* 2(3), 631–648 與 DOI `10.1016/j.matt.2019.12.019`。另確認有大學典藏手稿連結，但本次未閱讀全文。
- **原始來源記錄：** 新增 `raw/S02-cameron-espresso-model.md`，註明本次依摘要／出版者重點 ingest。
- **Wiki 修改：** 新增 `wiki/研磨與流動.md`；在 `wiki/萃取總覽.md` 補上義式濃縮的非單調研磨結果，並保留作者的流動不均解讀及方法限制。
- **索引修改：** 更新萃取總覽與研磨頁的已 ingest 來源標記。
- **結果：** 第二篇完成逐篇整合。結論限定於研究的義式濃縮條件，沒有把結果推廣成手沖通則。

## [2026-11-15] ingest | S03 — Liang et al. (2021)

- **查核：** 核對 Nature 出版頁、PubMed 書目及 PMC 開放全文；確認 *Scientific Reports* 11:6904、DOI `10.1038/s41598-021-85787-1`，並核對全文標示 CC BY 4.0。
- **原始來源記錄：** 新增 `raw/S03-liang-immersion-model.md`，記下全文位置、授權、測試方法和適用界線。
- **Wiki 修改：** 新增 `wiki/粉水比-濃度-萃取率.md`，區分粉水比、TDS、EY，並把約 21% 的結果明確限定為該研究的浸泡式平衡條件。
- **索引修改：** 將粉水比／濃度／萃取率頁標記為已 ingest S03。
- **結果：** 第三篇完成逐篇整合；補上浸泡式研究全文支持的指標區分，未把結果概括到手沖或義式濃縮。

## [2026-11-15] ingest | S04 — Frost et al. (2020)

- **查核：** 核對 PubMed 書目、摘要與 DOI `10.1111/1750-3841.15326`；確認期刊、卷期頁碼與研究對象為滴濾咖啡感官研究。本次未讀期刊全文。
- **原始來源記錄：** 新增 `raw/S04-frost-sensory-tds-ey-roast.md`，區分摘要支持的結論與未覆蓋範圍。
- **Wiki 修改：** 新增 `wiki/感官與調整方法.md`，加入「測量指標不等於偏好」及單變因記錄步驟；於粉水比／TDS／EY 頁補充烘焙與感官關係依研究條件而變的證據。
- **索引修改：** 將感官與調整方法頁標記為已 ingest S04。
- **結果：** 第四篇完成逐篇整合；研究僅用於支持滴濾咖啡中 TDS、PE 與感官屬性有關，沒有把特定風味方向當成普遍規律。

## [2026-11-15] ingest | S05 — Batali et al. (2020) + author correction (2021)

- **查核：** 核對 PubMed 書目與摘要，確認 DOI `10.1038/s41598-020-73341-4`；讀取 PMC 作者更正 `10.1038/s41598-021-82505-9`，確認原方法章節的沖煮水配方單位由每公升修正為每 100 公升。本次主論文全文頁面遇到瀏覽器驗證，未讀全文。
- **原始來源記錄：** 新增 `raw/S05-batali-temp-sensory.md`，同時保留主論文與正式更正來源、查閱限制和適用範圍。
- **Wiki 修改：** 新增 `wiki/時間-水溫-風味.md`；說明研究在調整研磨／時間以匹配 TDS／萃取率後，溫度結果的解讀範圍，並記錄已查到的更正。
- **索引修改：** 將時間／水溫／風味頁標記為已 ingest S05。
- **結果：** 第五篇完成逐篇整合。正式更正只涉及方法配水單位；未將論文標題延伸成「水溫不影響咖啡」的通則。

## [2026-11-15] ingest | S06 — Schmieder et al. (2023)

- **查核：** 閱讀 PMC 全文的文章資訊、摘要、方法、結果、結論及授權；確認 *Foods* 12(15):2871、DOI `10.3390/foods12152871` 和 CC BY 4.0。使用研究實際測試的流速、研磨設定與水溫範圍。
- **原始來源記錄：** 新增 `raw/S06-schmieder-espresso-kinetics.md`，註明測量項目、研究範圍與未做感官測試的限制。
- **Wiki 修改：** 在 `wiki/研磨與流動.md` 加入流速與成分質量的研究結果；在 `wiki/時間-水溫-風味.md` 區分義式濃縮成分量測和滴濾感官研究；在比例頁說明浸泡與義式的比例定義不同。
- **索引修改：** 更新研磨頁與時間／水溫頁的來源標記。
- **結果：** 第六篇完成逐篇整合。主張未超出該研究的咖啡、器材、參數和成分測量範圍。

## [2026-11-15] query | 粉水比是否同時提高 TDS 與 EY？

- **初次實際查詢：**「粉水比變大會同時增加咖啡濃度與萃取率嗎？這個答案可以通用於手沖和浸泡嗎？」
- **讀取頁面：** `index.md`、粉水比／TDS／EY、感官與調整方法、研磨與流動。
- **產出：** 新增 `checks/query-01-tds-ey.md`，以 S03、S04、S06 作答；結論保留比例定義與沖煮方法差異，並明確登記滴濾 EY 關係尚未由目前來源回答。
- **索引修改：** 增加來源審查與 Query 紀錄連結。
- **結果：** 實際完成一輪 Wiki Query。後續 Lint 發現初始用語的比例方向歧義，見修正紀錄。

## [2026-11-15] lint | Wiki 連結、來源 ID、索引一致性

- **執行：** 掃描 Wiki Markdown 相對連結、來源 ID 對應 raw 檔案、每個知識頁的引用與索引收錄；執行 Git whitespace/diff 檢查。
- **實際結果：** 18 個 Markdown 檔案、5 個 Wiki 頁面；結構和引用檢查通過，whitespace/diff 檢查通過。詳細結果見 `checks/lint-01-wiki.md`。
- **初步修正：** 結構檢查無需修正；接續的人工語意檢查另發現 Query 的比例方向未定義。

## [2026-11-15] correction | 明確化水粉比例方向

- **問題：** Query 的「粉水比變大」沒有分子／分母方向，與 S03 使用的水／粉質量比可能反向解讀。
- **修改：** 將 Query 改為明確的「水質量 ÷ 咖啡粉質量」；補上 S03 範圍內 TDS 約反向變化與 EY 相對穩定的答案，並在比例知識頁要求標出比例順序。
- **重查：** 重讀修正後 Query 和比例頁，確認術語一致、TDS 方向對應 S03，相關來源連結仍有效。完整紀錄見 `checks/lint-02-semantic-correction.md`。

## [2026-11-15] lint | 獨立專案內容重跑

- **首次檢查器結果：** 將 `wiki/README.md` 誤列為知識頁並回報缺引用。確認它只是目錄說明後，將檢查範圍限定為非 README 的五個知識頁並重跑。
- **實際結果：** 25 個 Markdown 檔、5 個知識頁、6 個來源記錄；本地連結、來源 ID、摘要／相關頁面、索引與行尾空白全數通過。見 `checks/lint-03-standalone-wiki.md`。
- **內容重查：** 對照 Query 與 S03 原始來源記錄，確認水／粉質量比的方向一致且數值仍有限定條件。

## [2026-11-15] correction | 說明初次 whitespace check 的限制

- **發現：** `lint-01` 中 `git diff --check` 曾回傳成功，但當時文件尚未追蹤，該命令未檢查這些新文件。
- **修正紀錄：** 更新 `checks/lint-01-wiki.md` 的說明，不把此結果當成有效的 whitespace 通過證據；`lint-03` 已對正式專案的全部 Markdown 行尾空白重新檢查並通過。

## [2026-11-15] lint | 最終 Wiki 文件重查

- **實際執行：** 對獨立專案當前所有 Markdown 檢查相對連結、來源 ID、Wiki 頁摘要與相關頁面、索引收錄及行尾空白；目錄 README 不當作知識頁。
- **結果：** 26 個 Markdown 檔、5 個知識頁、6 個來源記錄；全部通過。見 `checks/lint-04-final-wiki.md`。
- **待完成：** OpenSlide 初始化與 HTML 簡報尚未執行，待使用者完成套件設置並回覆準備就緒。

## [2026-11-15] lint | 最終文件檢查器修正後重跑

- **第一次重跑的實際結果：** 檢查器用錯摘要格式條件，且把來源檔名萬用字元當成字面路徑，造成缺摘要與缺來源的誤報；逐頁核對確認 Wiki 內容本身符合規則。
- **檢查器修正：** 依實際使用的 `> **摘要：**` 格式判斷摘要，並以檔案名稱樣式列舉來源記錄。
- **重跑結果：** 27 個 Markdown 檔、5 個 Wiki 頁、6 個來源記錄；相對連結、來源 ID、摘要、相關頁面、索引與行尾空白全部通過。檢查期間沒有修改 Wiki 內容。詳見 `checks/lint-04-final-wiki.md`。

## [2026-11-15] slide setup | OpenSlide scaffold 與雲端路徑

- **實際建立：** 使用者執行 `npx @open-slide/cli init slides/coffee-extraction-science`，建立 OpenSlide 工作區；CLI 顯示初始化完成，選用 pnpm 的自動安裝則因該 PowerShell 找不到 `pnpm` 而失敗。
- **實際檢查：** 稍後檢視工作區時，發現 `package-lock.json` 與 `node_modules/` 已存在；依賴資料夾含 17,549 個檔案、221,548,660 bytes。未再執行依賴安裝。
- **本機清理結果：** 嘗試移除此工作區的 `node_modules/` 以回應節省本機空間的要求，但安全審核拒絕遞迴刪除；沒有刪除檔案，該資料夾仍由專案 `.gitignore` 排除。
- **技能：** 將 `emilkowalski/skills` 的 `apple-design/SKILL.md` 原樣加入 `.agents/skills/apple-design/`，並附上上游 MIT `LICENSE` 與 `SOURCE.md`。OpenSlide scaffold 原有的五個技能保留。
- **雲端準備：** 以使用者指定的私人可見度建立空 repo `erickuo0707/coffee-extraction-wiki`；目前尚未 commit 或上傳專案檔。檢查到可執行的 Codex Cloud Default environment 尚未連接任何 repository，故後續以 GitHub Codespaces 為建置路徑。
- **待完成：** 等使用者選定頁數、文字量及動態效果，再依 OpenSlide skill 撰寫投影片；完成內容和檢查後才首次 commit/push。

## [2026-11-15] slide authoring | 8 頁咖啡萃取教學

- **使用者設定：** 6–10 頁區間；採 8 頁。每頁輕量文字，使用較豐富的分步揭示。視覺採克制的 Apple-inspired 暖咖啡色系。
- **實際修改：** 新增 `slides/coffee-extraction-science/slides/coffee-extraction-science/index.tsx`，包含萃取系統、研磨／流動、TDS／EY／比例、沖煮方法差異、水溫實驗設計、可重複試沖流程與六篇來源頁。
- **首次檢查器執行：** 來源碼檢查使用了重複一層的相對路徑，未讀到檔案；修正為專案內路徑後重跑。
- **重跑結果：** 8 頁、11 個步驟區塊、17 個步驟標籤、10 個來源超連結；S01–S06 全數對應 `raw/`，靜態結構檢查通過。`node_modules/` 確認被忽略。細節見 `checks/lint-05-open-slide-source.md`。
- **待完成：** 在 Codespaces 執行 OpenSlide build、瀏覽器檢視分步揭示與版面，修正後才第一次上傳完整 Wiki 與簡報專案。

## [2026-11-15] lint | 最終專案文件與 Wiki 重查

- **首次檢查器執行：** 索引比對誤將檔名當成根目錄路徑，輸出找不到 Wiki 檔的錯誤；未將該次結果算作通過。
- **實際修正：** 改為讀取索引內容並比對知識頁檔名；相對連結按每個 Markdown 檔所在路徑檢查。
- **重跑結果：** 28 個專案文件 Markdown、5 個 Wiki 頁、6 個來源記錄；本地連結、來源 ID、摘要、相關頁面、索引收錄、行尾空白全部通過。詳見 `checks/lint-06-final-project-docs.md`。

## [2026-11-15] lint | 將檢查紀錄納入後的最後重跑

- **實際重跑：** 將新增的 `lint-06-final-project-docs.md` 及更新後的日誌一併納入，再跑相同的連結、Wiki 引用、摘要、相關頁面、索引與行尾空白檢查。
- **結果：** 29 個專案文件 Markdown、5 個 Wiki 頁、6 個來源記錄；全部通過，沒有 Wiki 內容修改。

## [2026-11-15] slide build | Codespaces 建置及預覽

- **環境：** 在 GitHub Codespaces 的 `/workspaces/coffee-extraction-wiki/slides/coffee-extraction-science` 執行；未在本機安裝套件。
- **實際命令：** `npm ci && npm run build`。OpenSlide build 成功，終端顯示 `built in 2.78s`；`dist/` 中有 `index.html` 和 hashed assets。Build 另顯示 `index` chunk 大於 500 kB 的效能提醒，沒有因此失敗。
- **預覽：** 執行 `npm run preview -- --host 0.0.0.0`；OpenSlide v2.3.2 回報 port 4173 ready，Codespaces 自動轉送該連接埠。預覽首頁載入，列出「咖啡萃取的科學」投影片並顯示封面文案「一杯咖啡，如何被萃取？」。
- **檢查界線：** 個別投影片的逐頁導覽和分步揭示未驗證；嘗試打開單頁時，電腦操作工作階段逾時，沒有收到單頁結果。因此不將此記為完整視覺 QA 通過。
- **發布狀態：** Codespaces port preview 是暫時連結，並受 Codespaces 訪問權限限制。`dist/` 尚未加入 GitHub repository；尚未建立任何一般訪客可用的公開部署連結。
- **本機清理：** 遞迴移除既有 `node_modules/` 的操作遭安全審核以 `blocked by policy` 拒絕，沒有檔案被刪除；如需空間，須由使用者在檔案總管自行移除。

## [2026-11-15] publish | 獨立公開咖啡簡報

- **使用者選擇：** 只公開 HTML 簡報，維持 Wiki repository 私人。為符合此範圍，公開 Site 的原始投影片目錄只複製 `coffee-extraction-science`，沒有包含範例 `getting-started` 投影片或 Wiki 的 `raw/`、`wiki/`、`checks/`。
- **獨立建置：** 在同層資料夾 `../coffee-extraction-presentation-site/` 建置，重用原專案既有 `node_modules/` junction，沒有重新安裝套件。執行 `npm run build -- --out-dir dist`，OpenSlide v2.3.2 成功，`dist/` 只有咖啡簡報 bundle 及 runtime assets；耗時 3.45 秒。建置有 `node:path` browser externalization 和 `index` chunk 大於 500 kB 的提醒，build 未失敗。
- **封裝：** Sites 的 `package-site.mjs` 未能在 Windows 完成；該封裝器呼叫的 Node 複製程序退出碼為 `-1073740791`，工具只輸出 `Unable to package the Site archive.`。改用 Windows `tar.exe` 將相同 `dist/` 與 `.openai/hosting.json` 封裝；列出 24 個 archive 項目，確認包含 `dist/index.html` 與 `dist/.openai/hosting.json`。Sites 收到並接受該 archive（21 個檔案）。
- **Site 與部署：** 建立獨立 Sites project `coffee-extraction-science-class`，source commit `3e282840e20857928f4c3550a0ad12c210f70330`，saved version 1；依使用者授權將該 Site 設為 `public`。deployment `appgdep_6af99f4af738819199d28448e99e32e1` 回報 `succeeded`，正式網址為 https://coffee-extraction-science-class.erickuo0707.chatgpt.site。既有 `erickuo0707/coffee-extraction-wiki` 私人 repo 未改變可見度。
- **檢查限制：** 個別頁面逐頁瀏覽器檢查仍未完成；不把部署成功等同動畫及所有頁面視覺 QA 通過。分享方式、實際命令及檢查結果已寫入 `slides/README.md`、`checks/reflection.md` 與 `checks/submission-checklist.md`。
- **發布文件最後重查：** 更新正式網址後重跑相同文件 lint；30 個 Markdown、5 個 Wiki 頁、6 個來源記錄。相對連結、來源 ID、摘要、索引收錄及行尾空白全部通過。

## [2026-11-15] lint | 更新簡報紀錄與反思後重查

- **範圍：** 根目錄與 `raw/`、`wiki/`、`checks/`、`slides/` 第一層 Markdown；5 個 Wiki 頁、6 個來源記錄。
- **實際結果：** 共 30 個 Markdown 文件；相對連結、來源 ID、摘要、Wiki 索引收錄與行尾空白全部通過。見 `checks/lint-06-final-project-docs.md`。
- **內容處理：** 沒有修改 Wiki 知識頁或來源內容；更新簡報建置狀態並新增以實際執行結果撰寫的 `checks/reflection.md`。

## [2026-11-15] slide refresh | 真實咖啡照片、Q 版沖煮動畫與轉場

- **使用者方向：** 教學主線採手沖；浸泡式（French press）用於方法比較，義式僅作萃取參照。使用者要求照片須為網路實拍，不使用假 AI 圖片，並加入可愛沖煮動畫。
- **實際素材：** 投影片新增九張實拍咖啡照片，分別由 Unsplash 的 Jakub Kapusnak、William Figueroa、Ryan Spaulding、Clay Banks、syahmi syahir、Scott K、Matthias Oberholzer 拍攝，及 Wikimedia Commons 的 Romwriter 拍攝的粗細研磨照片。每張投影片照片均顯示作者與原始頁面連結；Commons 兩張圖片標註 CC BY-SA 3.0。未將 AI 生成圖放入專案。
- **實際修改：** 封面與萃取、研磨、量測及方法比較頁加入照片；統一採 280ms 淡入、微幅上移縮放及輕模糊轉場；第 7 頁加入原生 SVG Q 版咖啡豆助手、壺嘴、水流、水滴與蒸氣動畫，並遵守 `prefers-reduced-motion`。為了讓水流更醒目，最後將水流與水滴改為青藍色並加粗。
- **本機 build：** 在 `slides/coffee-extraction-science` 實際執行 `npm run build`，OpenSlide v2.3.2 成功，`built in 1.81s`。另在獨立公開 Site 工作區執行 `npm run build -- --out-dir dist`，成功，`built in 2.22s`。兩次均有 `node:path` browser externalization 及大於 500 kB chunk 提醒，但沒有 build 失敗。
- **瀏覽器檢視：** 使用本機預覽檢視第 2 至 7 頁；照片與文字版面均可見，法式濾壓照片後來改為較明亮的 Clay Banks 實拍。檢視時第 7 頁可見 Q 版咖啡豆、手沖器具與蒸氣；之後才加強水流顏色與粗細，此最後一項改動有 build 驗證，沒有再擷取第二張瀏覽器畫面。逐頁轉場時間仍未做定量檢查。
- **公開封裝：** Site helper 完成 source commit/push 後，其 Windows archive 封裝步驟失敗，錯誤為 `Unable to package the Site archive.`。在 repo 外建立暫存包，以 `tar.exe` 封裝 build 後的 `dist/` 並寫入 `dist/.openai/hosting.json`；實際驗證 archive 含首頁、HTML bundle、九張照片與 hosting manifest。Sites 接受 30 個檔案，回報儲存大小 4,229,120 bytes。
- **新版部署：** Site project 保持 public；保存 version 2，來源 commit `dbfea18cefe9397f06ea80a5d840e4442372b6f9`，部署 ID `appgdep_6af9a7499ba08191a1befc0474244680`，Sites 回報 `succeeded`。公開網址仍為 https://coffee-extraction-science-class.erickuo0707.chatgpt.site。Wiki repo `erickuo0707/coffee-extraction-wiki` 維持 private。
- **檢查界線：** 第 2–7 頁曾經瀏覽器檢視；第 1、8 頁及最後的水流顏色加粗調整沒有再次截圖。Build 與部署均成功，但此記錄不宣稱八頁最後狀態全數完成瀏覽器 QA；詳見 `checks/slide-visual-refresh.md`。

