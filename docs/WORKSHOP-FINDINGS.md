# 工作坊自主測試：觀察紀錄

## 真正走過的入口

首頁 → `/starter/` 實際填写品牌/描述/備註，勾選精選內容與簡約頁腳 → 下載 JSON → `/guide/` 點 ZIP 下載 → 解壓並讀 START-HERE、AGENTS、AGENT-HANDOFF → 閱讀相關 .ai 指引 → 實際看田野筆記展示與其源碼 → 執行 export-starter 生成獨立網站 → 適配與原創 → Build/驗證。

也已讀 `/guide/prepare/` 的 GitHub、授權與發布分流說明。未要求老師 Repository 或原始碼；未讀取任何老師開發倉庫。

## 網站清楚提供的能力

兩種網站用途、四套 Demo 風格、十二種構圖、規劃器 JSON、組合樣板與 footer 選項、建站 ZIP、訪談 ZIP（網站有提供，本次自主創作未下載）、登入與 Repo 授權說明、安全 Preview/核准發布的提示詞。ZIP 確實是程式資源，不只是指向原倉庫的說明。

## 已發現的問題與邊界

1. **空 Repo 導致第一個 PR 無法建立**：指南其實有寫「勾選 Add a README file」。本次使用者提供的 TestPW1 完全空白，GitHub refs API 回覆 409「Git Repository is empty」。這是環境沒有完成前置條件，不能指稱指南沒有教；但建站指南可增加「先讀 README/確認初始 Commit」的可見驗收，及忘勾 README 時的復原指引。
2. **生成器不是完整版型**：網站與 ZIP 已明確揭露是骨架，實際確認生成後只有輕量 layout treatment，需要 AI 讀源碼再實作。這個分工成立，但能完成多少取決於 AI 運算、寫入、瀏覽器與部署能力；一般對話不等於全套執行工具。
3. **Section Pattern 文件不一致**：onboarding/site-assembly 說 sectionPatterns 已納入 StarterPlan v1；section-pattern-craft 底部卻仍寫「目前不是 StarterPlan v1 正式欄位」。實際下載 JSON 確有此欄位，依生成器驗證與 Registry 採用。建議刪除過時敘述。
4. **原型包含授權未確定的外部媒體**：MEDIA-REPLACEMENT 明確要求替換，不是缺指引。本次以自繪示意解決。學員若期待下載後已有可商用圖片，仍可能誤解；建議在下載按鈕旁即提醒。
5. **設計庫原型有小字與窄螢幕問題**：資料包自身 analysis 已列出 field-notes 最小約8px與390px孤字；不能把這些細節當成必須保留的特色。本次依文件新建議修正，並列出變更證據。
6. **Build/Artifact 不是預覽**：ZIP 清楚警告，不算漏教。Cloudflare 授權可讀帳號不等於 Git integration 已授權 Repo；部署仍需實際配置與 API/CLI 能力。新手最容易把綠燈誤當交付，應將真實 URL＋SHA 核對做成 checklist。
7. **「無法上傳ZIP就上傳文件」略含糊**：程式來源有很多資料夾，單傳 README 不足以生成。可進一步告知需要 AI 能接收完整解壓目錄或保留路徑，而不只是幾份 Markdown。

## 尚未宣稱成功的項目

GitHub Branch/PR/Commit 與 PR head SHA 對應部署尚未完成，等待空 Repo 初始化核准。Cloudflare 獨立 Preview、四視口本地截圖與八頁遠端實測已完成，最終狀態以 QA-DELIVERY.md 與 JSON 證據為準。
