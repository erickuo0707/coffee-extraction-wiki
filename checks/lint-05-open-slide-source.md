# Lint 紀錄 05 — OpenSlide 簡報來源碼

- **執行日期：** 2026-11-15
- **檢查對象：** `slides/coffee-extraction-science/slides/coffee-extraction-science/index.tsx`。
- **首次檢查器執行：** 以錯誤的相對路徑尋找來源碼（工作目錄已在 OpenSlide 專案根目錄），因此檢查器找不到檔案，沒有形成內容檢查結果。改用正確的專案相對路徑後重跑。
- **實際檢查結果：** 8 個預設頁面、11 個 `<Steps>` 區塊、17 個 `<Step>` 標籤、10 個來源超連結；出現的來源 ID S01–S06 均能在 `raw/` 找到對應記錄，全部通過靜態結構檢查。
- **忽略規則：** `git check-ignore -v slides/coffee-extraction-science/node_modules` 確認依賴資料夾由 `slides/coffee-extraction-science/.gitignore` 排除。
- **內容人工覆核：** S02 圖示標為特定義式濃縮的無刻度趨勢；S03 約 21% 限定於浸泡式平衡測試；S05 水溫結論連同 87–93°C、固定 TDS/EY 的設計和作者更正說明；S04、S06 未被推廣成普遍偏好。
- **尚未執行：** OpenSlide build 與瀏覽器視覺檢查會在雲端 Codespaces 完成；未在本機安裝額外依賴，也未在本機執行 build。
