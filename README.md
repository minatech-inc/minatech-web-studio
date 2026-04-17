# MinaTech Web Studio — ポートフォリオサイト

MinaTech株式会社のホームページ制作事業（MinaTech Web Studio）の公式ポートフォリオサイト。

## 構成

- `index.html` — トップページ（サービス・料金・実績・フロー・CTA）
- `portfolio.html` — 実績詳細（Shonan Minato REAL ESTATE / SORA）
- `process.html` — 制作フロー詳細
- `contact.html` — 問い合わせフォーム（Web3Forms）
- `thanks.html` — 送信完了
- `privacy.html` — プライバシーポリシー
- `style.css` / `main.js` / `favicon.svg`
- `assets/images/` — ロゴ・実績サムネイル

## 技術スタック

- 静的HTML/CSS/JS（ビルド工程なし）
- GitHub Pages で配信
- Web3Forms でフォーム送信
- 独自ドメイン想定: `web.minatech1210.com`

## デプロイ手順

### 1. GitHub リポジトリ作成

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial commit: MinaTech Web Studio portfolio site"
git branch -M main
git remote add origin https://github.com/minatech-inc/minatech-web-studio.git
git push -u origin main
```

### 2. GitHub Pages 有効化

1. GitHub上のリポジトリ → Settings → Pages
2. Source: Deploy from a branch → main / (root)
3. Save → 数分で `https://minatech-inc.github.io/minatech-web-studio/` で公開

### 3. 独自ドメイン設定（推奨: `web.minatech1210.com`）

1. ドメイン管理画面（お名前.com等）で CNAMEレコード追加:
   - `web.minatech1210.com` → `minatech-inc.github.io`
2. リポジトリ直下に `CNAME` ファイル作成（内容: `web.minatech1210.com`）
3. GitHub Pages設定で Custom domain 指定・Enforce HTTPS ON

### 4. Web3Forms 設定

1. https://web3forms.com/ にアクセスし、`isoya.h@minatech1210.com` でアクセスキー取得
2. `contact.html` の `YOUR_WEB3FORMS_ACCESS_KEY_HERE` を取得したキーに置換
3. テスト送信で受信確認

### 5. Google Analytics / Search Console

1. GA4プロパティ作成 → 測定IDを `<head>` 内にタグ追加
2. Search Console でドメインプロパティ登録
3. `sitemap.xml` を後日追加・送信

## 要対応項目（公開前）

- [ ] Web3Forms アクセスキー設定
- [ ] Google Analytics 4 タグ埋め込み
- [ ] Google Search Console 登録
- [ ] 独自ドメイン `web.minatech1210.com` 取得・DNS設定
- [ ] ロゴ・画像の最終デザイン調整
- [ ] LINE公式アカウント URL を `contact.html` の contact-alt 部分に追加
- [ ] OGP画像作成（`assets/images/ogp.png` 1200x630px）
- [ ] sitemap.xml / robots.txt 作成

## 更新時の流れ

1. ローカルで編集
2. ブラウザで確認（`index.html` をそのまま開けばOK。ビルド不要）
3. `git commit` → `git push` でGitHub Pagesが自動反映（1〜2分）
