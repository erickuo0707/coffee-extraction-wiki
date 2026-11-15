# 簡報視覺改版檢查

日期：2026-11-15

## 範圍

- 手沖為主題，浸泡式方法作比較，義式作參照。
- 使用網路來源的真實咖啡照片，不使用 AI 生成圖片。
- 增加 Q 版沖煮動畫與投影片切換效果。

## 實際檢查

- OpenSlide v2.3.2 本機簡報：`npm run build` 成功，`built in 1.81s`。
- 獨立公開 Site：`npm run build -- --out-dir dist` 成功，`built in 2.22s`。
- 本機瀏覽器預覽檢視投影片第 2 至 7 頁；檢視畫面中各頁文字與照片可見，法式濾壓照片更換為較明亮實拍後再次檢視。
- 第 7 頁檢視時可見 Q 版咖啡豆助手、壺、濾杯與蒸氣。該次畫面檢視後才將水流改成較粗的青藍色虛線並加大水滴；此最後的樣式調整已通過兩個 build，但未再作瀏覽器截圖。
- 轉場已設定為 280ms 淡入、微幅上移縮放及模糊淡出；沒有逐頁量測實際轉場時間。
- Build 顯示 `node:path` browser externalization 與大型 bundle 警告，仍成功產生 `dist/`。

## 公開部署

- Site source commit：`dbfea18cefe9397f06ea80a5d840e4442372b6f9`。
- Sites Windows package helper 回報 `Unable to package the Site archive.`；改用 `tar.exe` 封裝 `dist/`，將靜態 hosting manifest 寫入封裝用暫存目錄，沒有把它當成新的 Wiki 內容。
- 實際驗證 archive 有 `dist/index.html`、`dist/.openai/hosting.json`、投影片 JavaScript bundle 與九張 JPG；Sites 收件紀錄為 30 個檔案、4,229,120 bytes。
- Sites saved version 2；部署 ID `appgdep_6af9a7499ba08191a1befc0474244680` 回報 `succeeded`。正式網址：[咖啡萃取科學教學簡報](https://coffee-extraction-science-class.erickuo0707.chatgpt.site)。Site 保持 public；Wiki repository 保持 private。

## 圖片來源

- Jakub Kapusnak — [手沖壺注水](https://unsplash.com/photos/person-holding-gray-stainless-steel-kettle-Rt2t11IUizs)
- William Figueroa — [手沖萃取特寫](https://unsplash.com/photos/coffee-is-brewing-in-a-pour-over-coffee-maker-PIRNODAC1WA)
- Romwriter — [粗研磨](https://commons.wikimedia.org/wiki/File:Coffee_grounds_coarse.jpg)、[細研磨](https://commons.wikimedia.org/wiki/File:Coffee_grounds_fine.jpg)，CC BY-SA 3.0
- Ryan Spaulding — [電子秤手沖](https://unsplash.com/photos/pour-over-coffee-brewing-on-a-digital-scale-lqb6W5RHgyU)
- Clay Banks — [法式濾壓倒咖啡](https://unsplash.com/photos/woman-pouring-coffee-from-french-press-into-cup-KCKksYf6-Y0)
- syahmi syahir — [手沖情境](https://unsplash.com/photos/barista-making-pour-over-coffee-with-a-gooseneck-kettle-AQTgvFfwOcg)
- Scott K — [義式濃縮](https://unsplash.com/photos/fresh-espresso-pouring-from-a-coffee-machine-portafilter-O9AtwHvKkko)
- Matthias Oberholzer — [濾杯與分享壺](https://unsplash.com/photos/coffee-is-brewing-in-a-pour-over-setup-SpiXdOg0VP0)

所有 Unsplash 圖片均在投影片中標註作者和來源頁連結；沒有把 AI 生成圖片放入簡報。
