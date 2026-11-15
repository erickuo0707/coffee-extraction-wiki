# 教學簡報

使用者指定以 [OpenSlide](https://github.com/open-slide/open-slide) 製作投影片，並匯出可瀏覽的 HTML。簡報內容依本專案五個 Wiki 知識頁與來源 ID 編排。OpenSlide scaffold 已建立於 `coffee-extraction-science/`，內含框架的五個 Agent Skills；另加入 [Apple Design skill](https://github.com/emilkowalski/skills/tree/main/skills/apple-design) 及其 MIT 授權資訊。

初版為 8 頁、輕量文字與分步揭示，後依重點化修訂改為 12 頁（見 `../checks/slide-focus-revision.md`）；投影片來源碼位於 `coffee-extraction-science/slides/coffee-extraction-science/index.tsx`，引用 S01–S06，並附研究方法範圍。已在 GitHub Codespaces 執行 `npm ci` 及 `npm run build`；OpenSlide v2.3.2 build 成功，產生 `dist/index.html` 與資源檔。`npm run preview -- --host 0.0.0.0` 啟動預覽，連接埠 4173 已轉送；預覽清單列出「咖啡萃取的科學」及封面。

依使用者選擇，另建立只含咖啡投影片的獨立靜態建置並公開發布，沒有把 Wiki、來源紀錄或原始專案 repo 放入公開站台。正式網址：[https://coffee-extraction-science-class.erickuo0707.chatgpt.site](https://coffee-extraction-science-class.erickuo0707.chatgpt.site)。公開站台部署成功；個別投影片逐頁導覽與分步揭示尚未完成瀏覽器視覺檢查，因此不宣稱完整的逐頁 QA。

Wiki 專案來源已上傳至私人 GitHub repository `erickuo0707/coffee-extraction-wiki`。Codespaces 預覽 URL 是暫時連結，只在工作區和預覽伺服器仍執行、且訪客有權限時可用；交作業請使用上方正式站台連結。公開站台使用獨立 Site，版本 1；發布來源只包含咖啡投影片的 OpenSlide 程式與靜態 build，不包含 Wiki repo 的 `raw/`、`wiki/` 或 `checks/`。

本機原專案已有 `node_modules/` 約 221.5 MB 與 `package-lock.json`；公開簡報隔離建置重用此資料夾的 junction，沒有再安裝依賴。自動清理原專案依賴資料夾被系統安全檢查以 `blocked by policy` 拒絕，沒有檔案被刪除；原專案 `.gitignore` 會排除此資料夾。若要釋放空間，可在檔案總管刪除原專案的 `node_modules/`。
