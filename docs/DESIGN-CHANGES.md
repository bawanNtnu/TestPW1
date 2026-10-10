# 步幅：設計適配證據

所有「原本」指下載 ZIP 的 `src/pages/layouts/field-notes/index.astro`，而非生成器的簡化骨架。

|原本安排|不適合的原因|實際修改|程式證據|閱讀改善|
|---|---|---|---|---|
|三欄 Hero：78px 直排索引、主標、180px 邊注；主標 9vw、行高 .93、字距 -.085em|主題有具體操作步驟，原來文字過大、狹窄視口容易孤字|主欄使用詞組 span，6.8vw 上限 6.1rem、行高 1.12；移除無意義座標，索引改成文章路線入口|`src/pages/index.astro`、`public/site.css` 的 `.field-layout`、`.field-hero h1`|保留編輯式大字、三欄與邊注，但第一屏就知道內容與下一步|
|Hero 之後直接進入按日期 ledger|三篇文章是連續方法，三篇同日上稿不適合只強調日期|加入兩欄「三次練習」，按觀察、記錄、回訪編排，之後才進完整記事 ledger；編號取代 ledger 日期|首頁 `.route-section`、`.route-list`；`src/components/FieldLedger.astro` 與首頁 items|新訪客可依序讀，不必自己猜哪篇先看；保留細線帳冊而非等寬卡片|
|圖片是遠端植物標本照片，76% 寬、拱形裁切|授權不明且與城市觀察無直接關係|自繪觀察路線 SVG，保留 4:3 拱形 figure、右推改成 86%，圖說明確標示自繪示意|`public/images/walk-map.svg`、首頁 figure、`.field-figure`|圖片可以解释三個停點，沒有外部破圖或真實地圖暗示|
|研究問題區只連回十二款展示比較|獨立讀者不需要老師的設計站入口|將問題區改成具體回訪提問，直接連到第三篇；另以分欄 About Note 說明測試界線|首頁 `.question-band`、`.about-note`|從提問接到方法，而非離開個人網站；測試作品身分不藏在頁尾|
|≤580px 仍保留 28px 直排索引，字縮至約 8px，邊注移到第二欄|觸控目標與小字不適合手機，長文需要完整可讀寬度|≤700px 索引橫排，44px 可點目標；Hero、figure、邊注自然單欄；只隱藏無用分類裝飾，正文17px|`public/site.css` 的 700px media query|390px 不犧牲內容字級，索引仍能操作|
|只有首頁展示錨點，沒有這個版型的長文構圖|原創文章不能連到假錨點，也不能塞回首頁|建立文章頁雙欄：230px sticky 段落索引＋700px 正文；手機索引改靜態段落清單；文章底部實作練習與下一篇|`src/pages/articles/[slug].astro`、`.article-layout`、`.prose`|長文有定位、行長限制與閱讀接續，八個主要頁面都有目的|
|近期紀錄僅三列標題，沒有可搜尋列表|讀者可能只記得觀察或動線等詞|文章列表改為編號＋摘要＋練習＋閱讀入口，新增瀏覽器本頁篩選與可存取的結果數；主題页實作關聯文章而非空白入口|`src/pages/articles/index.astro`、`src/pages/topics.astro`、`.archive-list`|可從任務或主題找到文章；零結果真實呈現，不假裝全文搜尋|

## 能力歸屬

- 資料包提供：生成器、Astro Content Collection 骨架、RSS/Sitemap/robots、所選 Layout 的 DOM/CSS、L01 帳冊元件、技能與驗證器，以及需真人核准的部署界線。
- 我自行完成：品牌與定位、三篇原創文章、資訊架構、閱讀路線、所有內頁適配、自繪 SVG、篩選互動、SEO noindex/OG、實際部署整合與 QA（後兩項完成程度另見 QA 報告）。
- 額外平台查詢：僅查 Cloudflare 官方部署 API/Direct Upload 文件；沒有搜尋或存取老師開發倉庫。
