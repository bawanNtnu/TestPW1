# 步幅日常維護：PR #45 Skills 實測

來源是 PR #45 預覽 ZIP，Head `8a7387c36f1db9bc1b8cd69c7144641f7a4d8c19`，ZIP SHA256 `5ec2cf171facf6ccd3b67ca44e900662c008c2467137f66778103e51f5e81e58`。只引用 Skills／Registry 設計指引，沒有重跑 Starter 或覆蓋網站。

## A：工具箱與導航

新路由 `/toolbox/`，加入 `site.config.json` 的唯一主導航資料；`SiteNavigation.astro` 由共用 SiteLayout 在所有頁面使用。手機使用同一個 nav DOM，以按鈕展開／關閉，支援 Escape 回到開關、Enter、Space 與觸控。沒有子選單，這個小站不需要額外層级。無 JavaScript 時保持完整導航可見。Footer 的工具箱入口和 Sitemap 均已加入。

## B：局部版面

「開始閱讀」原為左側安全提醒／右側步驟的 .8fr/1.2fr 雙欄；修改為安全提醒先行，再依序閱讀編號步驟。提醒在桌機保留雙欄文字，手機單欄；步驟內容最大寬700px。只改 `.start-flow-maintained`，沒有重做首頁與品牌。Before／After 及四尺寸截圖在本次外部 QA 證據包。

## C：元件

FieldLedger 原元件不修改，工具箱以 Props 重用，首頁一起回歸檢查。PracticeTemplate 從舊開始閱讀頁的筆記欄位抽出，fields/title/note Props 支援兩頁，保留原來 CSS 與內容。SiteNavigation 是原 Layout 導航抽出；參考 ZIP 的 MobileMenu 能力，但避免引入不需要的 modal、SocialLinks 依賴與另一份导航 DOM。沒有复制另一个工具卡元件。

## D：文章狀態

`observe-after-rain.md` 是本次原創公開 QA 素材，最終 `draft:true`。修訂保留 slug、publishedAt，不憑空擴充 schema 的 updatedAt。草稿不產生公開 HTML、不出現在首頁、主題、閱讀步驟、接續文章、文章列表、RSS、Sitemap 或當頁 metadata 篩選。

所有公開文章讀取都使用 `src/lib/articles.ts` 的 getPublicArticles。原本部分 getCollection 未過濾 draft，會洩漏草稿標題／產生失效連結；本次實測後修正。

## 發布準備與撤回

只在本地 QA 演練將新稿 draft 改 false → Build → 確認路由／列表／RSS／Sitemap出現，再改回 true → 清潔 Build → 全部撤回。這不是正式發布、沒有自動排程。`npm run build` 先清理生成目錄 dist，防止舊檔残留；不刪 Markdown 或 Git 歷史。CI 的 verify-maintenance 檢查真實輸出。

實際發布仍需使用者核准，經 PR、Preview、驗收才 Merge／Production。若正式文章需要撤回：先確認只隱藏列表還是取消 URL；draft + 重新部署可讓目前網址404，但舊的不可變 Preview、公開 Git 歷史、搜尋快取仍可能保有原文。真正機密內容不能放在此公開 Repo，也不能用 noindex 當權限控制；撤回舊部署／轉址／改網址應先另列範圍取得同意。

## 驗證與部署

`npm ci`、`npm run build`、`node scripts/verify-maintenance.mjs`。Preview Build 使用環境變數 SITE_URL 指向維護分支的 Cloudflare alias，保留 site.config.json 原網站設定。Cloudflare 沿用已存在的獨立 Pages **Direct Upload** 測試專案，不是 Git Integration。PR base 是原網站 feature branch，使審查 diff 只包含維護更動；原 PR 不修改、不合併。
