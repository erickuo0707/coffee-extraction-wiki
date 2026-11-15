# 咖啡萃取科學｜LLM Wiki

本專案用 Karpathy 的 LLM Wiki 方法整理咖啡萃取科學：先逐篇 ingest 六篇研究建立知識庫，再以 Wiki 為唯一知識來源製作教學 HTML 簡報。

## 專案狀態

已逐篇 ingest 六篇學術來源，建立五個互相連結的 Wiki 知識頁，完成一輪 Query、比例方向修正及獨立專案重查。OpenSlide 投影片已在 GitHub Codespaces 建置並預覽，之後依「重點化」修訂由 8 頁改為 12 頁（見 `checks/slide-focus-revision.md`）；另以只含咖啡投影片的獨立靜態版本發布於 [教學簡報](https://coffee-extraction-science-class.erickuo0707.chatgpt.site)。公開網站只含簡報成品，LLM Wiki repository 仍為私人。逐頁視覺檢查尚未完成，限制見 `log.md` 與 `checks/submission-checklist.md`。

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

## 簡報預覽

已發布的免登入簡報連結：[coffee-extraction-science-class.erickuo0707.chatgpt.site](https://coffee-extraction-science-class.erickuo0707.chatgpt.site)。建置與預覽結果及逐頁檢查限制記錄於 `log.md`、`slides/README.md` 和 `checks/submission-checklist.md`。
