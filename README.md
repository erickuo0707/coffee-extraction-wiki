# 咖啡萃取科學｜LLM Wiki

這是獨立於「萃光咖啡筆記」的課堂作業專案，用 Karpathy 的 LLM Wiki 方法整理咖啡萃取科學，並以 Wiki 為基礎製作教學簡報。

## 專案狀態

已逐篇 ingest 六篇學術來源，建立五個互相連結的 Wiki 知識頁，完成一輪 Query、比例方向修正及獨立專案重查。另已完成 8 頁 OpenSlide 投影片來源碼，採輕量文字、分步揭示與 Apple Design 視覺方向；尚待雲端建置 HTML、視覺檢查與部署，完成後才上傳最終專案到私人 GitHub repo。

## 目錄

- `AGENTS.md`：Wiki 工作規則與 Ingest、Query、Lint、修正流程。
- `index.md`：知識頁索引。
- `log.md`：逐次記錄實際操作。
- `raw/`：保留來源記錄；不覆寫原始內容。
- `wiki/`：有來源依據的知識頁。
- `checks/`：檢查結果與修正證據。
- `slides/`：依 Wiki 製作的教學 HTML 簡報。

## 知識範圍與來源

面向初學者，聚焦萃取、研磨與流動、粉水比、TDS、萃取率、水溫／時間和感官結果。研究方法與可推論範圍記錄在各 `raw/` 來源頁，依據與缺口彙整於 `checks/source-audit.md`。

## 執行紀錄

`log.md` 按日期記錄逐篇 ingest、Query、Lint 與修正；僅記錄已實際完成的步驟。`checks/workflow.md` 描繪 Ingest → Query → Lint → 修正迴圈。
