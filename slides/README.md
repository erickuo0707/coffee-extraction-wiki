# 教學簡報

使用者指定以 [OpenSlide](https://github.com/open-slide/open-slide) 製作投影片，並匯出可瀏覽的 HTML。簡報內容依本專案五個 Wiki 知識頁與來源 ID 編排。OpenSlide scaffold 已建立於 `coffee-extraction-science/`，內含框架的五個 Agent Skills；另加入 [Apple Design skill](https://github.com/emilkowalski/skills/tree/main/skills/apple-design) 及其 MIT 授權資訊。

使用者選定 8 頁、輕量文字與分步揭示；投影片來源碼已完成於 `coffee-extraction-science/slides/coffee-extraction-science/index.tsx`，引用 S01–S06，並附研究方法範圍。已在 GitHub Codespaces 執行 `npm ci` 及 `npm run build`；建置成功，`dist/index.html` 與資源檔已生成。`npm run preview -- --host 0.0.0.0` 啟動 OpenSlide v2.3.2 預覽，連接埠 4173 已轉送；預覽清單列出「咖啡萃取的科學」及其封面。個別投影片逐頁視覺檢查尚未完成，不能據此宣稱整份簡報已完成瀏覽器 QA。

專案來源已上傳至私人 GitHub repository `erickuo0707/coffee-extraction-wiki`。目前預覽 URL 為 Codespaces 暫時連結，只在工作區和預覽伺服器仍執行、且訪客有權限時可用；尚無可供一般訪客使用的永久發布連結。GitHub Pages 在 GitHub Free 個人帳號要求 repository 為公開；公開 repository 或任何其他公開主機都會讓任何人透過連結瀏覽簡報，須先確認發布對象。OpenSlide 的 `dist/` 建置輸出尚未加入 repo。

本機目前觀察到已存在的 `node_modules/` 約 221.5 MB 與 `package-lock.json`；不會再執行本機依賴安裝。自動清理依賴資料夾被系統安全檢查以 `blocked by policy` 拒絕，故它仍留在本機；OpenSlide 專案的 `.gitignore` 已確認會排除此資料夾，不會隨 repo 上傳。若需釋放空間，可在檔案總管刪除此依賴資料夾。
