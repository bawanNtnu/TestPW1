# 步幅｜城市慢行筆記

公開 QA 測試作品，虛構編輯品牌。從工作坊實際下載 JSON 與 ZIP，使用其生成器建立獨立 Astro 專案，再依 field-notes 原型完成實質設計適配。未存取老師開發倉庫。

## 執行

Node 22+：`npm ci` → `npm run dev` 或 `npm run build`。

`src/content/articles/*.md` 是三篇原創文章。`src/pages` 有首頁、關於、主題、開始閱讀、文章列表與文章內頁。`public/images/walk-map.svg` 是原創示意圖，並非真實地圖。

## 證據

- `docs/site-brief.json`：規劃器實際下載結果。
- `docs/resource-evidence.json`：來源、ZIP hash、生成器與版型來源。
- `docs/DESIGN-CHANGES.md`：七項結構改造與程式位置。
- `docs/WORKSHOP-FINDINGS.md`：完整自主操作流程、資源能力與自行補做的能力。
- `docs/static-checks.json`：路由、錨點、RSS 與 sitemap 檢查。

## 發布界線

目前僅 Preview 測試用途，所有 HTML 皆 noindex，robots 禁止抓取。沒有表單、訂閱、預約、資料庫、金流或外部追蹤。部署與 PR 是否完成以實際 QA 報告為準，不以設定檔中的網站 URL 當成功證據。

更新必須使用 Feature Branch → PR → Build → Cloudflare Preview → 四視口驗收；不得未經核准合併或發布正式站。
