# 教學簡報

使用者指定以 [OpenSlide](https://github.com/open-slide/open-slide) 製作投影片，並匯出可瀏覽的 HTML。簡報內容依本專案五個 Wiki 知識頁與來源 ID 編排。OpenSlide scaffold 已建立於 `coffee-extraction-science/`，內含框架的五個 Agent Skills；另加入 [Apple Design skill](https://github.com/emilkowalski/skills/tree/main/skills/apple-design) 及其 MIT 授權資訊。

使用者選定 8 頁、輕量文字與分步揭示；投影片來源碼已完成於 `coffee-extraction-science/slides/coffee-extraction-science/index.tsx`，引用 S01–S06，並附研究方法範圍。下一步是在雲端 Codespaces 建置 HTML 並做視覺檢查。新建的私人 GitHub repository 是 `erickuo0707/coffee-extraction-wiki`；Wiki 與投影片完成檢查前不會上傳專案檔。

本機目前觀察到已存在的 `node_modules/` 約 221.5 MB 與 `package-lock.json`；不會再執行本機依賴安裝。自動清理依賴資料夾被系統安全檢查拒絕，故它仍留在本機；OpenSlide 專案的 `.gitignore` 已確認會排除此資料夾，不會隨 repo 上傳。
