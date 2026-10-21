# 入試ドリル（iPhoneアプリ版）

英語131問・日本史120問。ホーム画面に追加するとアプリとして起動し、オフラインでも動きます。

## 中身
- index.html … 科目メニュー
- english.html / nihonshi.html … 各ドリル
- manifest.webmanifest / sw.js / icons/ … アプリ化のためのファイル（消さないでください）

## 公開方法（どちらか1つ）

### A. Netlify Drop（いちばん簡単・約1分）
1. パソコンで https://app.netlify.com/drop を開く
2. このフォルダ（nyushi-drill）をまるごとドラッグ＆ドロップ
3. 表示されたURL（https://〜.netlify.app）をiPhoneのSafariで開く
※ 無料アカウントを作ってサイトを「Claim」しないと、一定時間で消えます。

### B. GitHub Pages（長く使うならこちら）
1. GitHubで新しいリポジトリ（例：nyushi-drill、Public）を作る
2. 「Add file」→「Upload files」で、このフォルダの中身をすべてアップロード
3. Settings → Pages → Branch を「main」「/(root)」にして Save
4. 数分後に https://ユーザー名.github.io/nyushi-drill/ で公開される

## iPhoneへのインストール
1. 公開したURLを **Safari** で開く
2. 下の共有ボタン（□に↑）→「ホーム画面に追加」→「追加」
3. ホーム画面の「入試ドリル」アイコンから起動（1回開けば以降はオフラインでも動作）

## 問題を更新したとき
- ファイルを差し替えて再アップロードし、sw.js の `VERSION = "v1"` を `"v2"` のように上げる
- ネットにつながった状態でアプリを開くと新しい版に切り替わる

## 注意
- 成績は端末（アプリ）ごとに保存されます。Safariとホーム画面アプリでも別々です。
- iOSでは長期間アプリを開かないと保存データが消える場合があります。
