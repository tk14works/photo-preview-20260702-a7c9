# harika.photo website

静的HTML/CSS/JSで構成した写真サイトです。

## 運用メモ

- `customer`: お客様GitHubリポジトリ。正式なコード管理先。
- `origin`: 制作用GitHub Pagesリポジトリ。Cloudflare Pages接続前の一時的な表示確認用。

Cloudflare Pagesをお客様環境で接続するまでは、通常の更新はお客様GitHubへ反映し、表示確認が必要な場合だけ制作用GitHub Pagesにも反映します。

```bash
git push customer main
git push origin main
```

Cloudflare Pages接続後は、原則として `customer` だけを更新し、Cloudflare PagesのURLで表示確認します。

## Cloudflare Pages接続時の想定

- Framework preset: None
- Build command: `exit 0`
- Build output directory: `.`
- Production branch: `main`
